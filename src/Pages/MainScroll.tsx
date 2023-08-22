import { motion, AnimatePresence } from 'framer-motion';
import { useRecoilState } from 'recoil';
import postAtom from '../Atoms/post';
import MainScrollHeader from '../Components/Headers/MainScrollHeader';
import { IPost, PageInfo } from 'src/Types/posts';
import { useIntersectionObserver } from '../Hooks/useIntersectionObserver';
import { useInfinite } from '../Query/post';
import { useEffect, useState } from 'react';
import fetchPostById from '../Api/fetchPostById';

const MainScroll = () => {
  const [selectedId, setSelectedId] = useRecoilState(postAtom);
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfinite();
  // if (isLoading) return <h3> 로딩중</h3>;
  // if (isError) return <h3>잘못된 데이터</h3>;
  const [postDetails, setPostDetails] = useState<IPost>();

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  useEffect(() => {
    async function getModalPost() {
      if (selectedId) {
        fetchPostById(selectedId).then((v) => {
          if (v !== null) {
            setPostDetails(v);
            console.log('냥');
          }
          console.log(v);
          console.log(selectedId);
        });
      }
    }
    getModalPost();
  }, [selectedId]);

  return (
    <>
      <MainScrollHeader />

      <AnimatePresence>
        <div className="grid grid-cols-1 gap-8 mt-4 md:mt-4 md:grid-cols-2">
          {data?.pages.map((page: PageInfo) => {
            return page.content.map((item: IPost) => {
              return (
                <motion.div
                  className="lg:flex mb-5 h-56"
                  ref={setTarget}
                  key={item.id}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  layoutId={item.id?.toString()}
                  onClick={() => setSelectedId(item.id)}
                >
                  <img
                    className="object-cover w-full h-56 rounded-lg lg:w-64"
                    src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  ></img>
                  <div className="flex flex-col justify-between py-6 lg:mx-6 w-80">
                    <div className="text-xl font-semibold text-gray-800 hover:underline">
                      {item.title}
                    </div>
                    <p className="line-clamp-4">{item.content}</p>
                    <span className="text-sm text-gray-500">
                      BY_{item.owner}
                    </span>
                  </div>
                </motion.div>
              );
            });
          })}
        </div>
      </AnimatePresence>
      {selectedId && (
        <AnimatePresence>
          <div className="w-full h-full">
            <motion.div
              layoutId={selectedId.toString()}
              className="w-4/5 h-4/5 bg-sky-100 z-20 absolute flex top-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.h5>?{postDetails?.owner}</motion.h5>
              <motion.h2>{}</motion.h2>
              <motion.button
                onClick={() => setSelectedId(null)}
                className="flex justify-end w-full"
              >
                X
              </motion.button>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
};
export default MainScroll;
