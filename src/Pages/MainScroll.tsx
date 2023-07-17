import { motion, AnimatePresence } from 'framer-motion';
import { useRecoilState } from 'recoil';
import postAtom from '../Atoms/post';
import MainScrollHeader from '../Components/Headers/MainScrollHeader';
import { IPost } from 'src/Types/posts';
import { useInfiniteQuery } from 'react-query';
import fetchPost from '../Api/fetchPost';
import { useIntersectionObserver } from '../Hooks/useIntersectionObserver';

const MainScroll = () => {
  const [selectedId, setSelectedId] = useRecoilState(postAtom);

  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery<IPost[]>(
      ['posts'],
      ({ pageParam = 1 }) => fetchPost(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          return lastPage[0].pageNumber !== allPages[0][0].pageSize
            ? lastPage[0].pageNumber + 1
            : undefined;
        },
      }
    );

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });
  return (
    <>
      <MainScrollHeader />
      <div className="h-screen float-left w-full mx-auto my-0">
        <AnimatePresence>
          <div
            ref={setTarget}
            className="grid grid-cols-1 gap-8 mt-4 md:mt-4 md:grid-cols-2"
          >
            {data?.pages.map((pg: any) => (
              <motion.div
                className="lg:flex mb-5 h-56"
                key={pg.id}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
                layoutId={pg.id.toString()}
                onClick={() => setSelectedId(pg.id.toString())}
              >
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                ></img>
                <div className="flex flex-col justify-between py-6 lg:mx-6 w-80">
                  <div className="text-xl font-semibold text-gray-800 hover:underline">
                    {pg.title}
                  </div>
                  <p className="line-clamp-4">{pg.content}</p>
                  <span className="text-sm text-gray-500">
                    BY_{pg.memberName}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                layoutId={selectedId}
                className="w-4/5 h-4/5 bg-sky-100 mx-auto my-0 z-20 absolute left-0 right-0 flex justify-center top-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.h5>{}</motion.h5>
                <motion.h2>{}</motion.h2>
                <motion.button onClick={() => setSelectedId(null)} className="">
                  X
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
export default MainScroll;
