import { motion, AnimatePresence } from 'framer-motion';
import { useRecoilState } from 'recoil';
import postAtom from '../Atoms/post';
import MainScrollHeader from '../Components/Headers/MainScrollHeader';
import { IPost, PageInfo } from 'src/Types/posts';
import { useIntersectionObserver } from '../Hooks/useIntersectionObserver';
import { useInfinite } from '../Query/post';
import { useEffect, useState } from 'react';
import fetchPostById from '../Api/fetchPostById';
import { VscHeartFilled, VscHeart } from 'react-icons/vsc';
import PostDetailModal from '../Components/Modals/PostDetailModal';

const MainScroll = () => {
  const [selectedId, setSelectedId] = useRecoilState(postAtom);
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfinite();
  // if (isLoading) return <h3> 로딩중</h3>;
  // if (isError) return <h3>잘못된 데이터</h3>;
  const [postDetails, setPostDetails] = useState<IPost>();
  const [showModal, setShowModal] = useState(false);

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  const handleModal = () => {
    setShowModal(!showModal);
  };

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
        <div className="grid grid-cols-1 gap-8 mt-4 md:mt-4 md:grid-cols-2 cursor-pointer">
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
                  onClick={() => {
                    setSelectedId(item.id);
                    handleModal();
                  }}
                >
                  <img
                    className="object-cover w-full h-56 rounded-lg lg:w-64"
                    src={item.svgUrl}
                    alt="Image"
                    //src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  ></img>
                  <div className="flex flex-col justify-between py-6 lg:mx-6 w-80">
                    <div className="flex flex-row justify-between text-xl font-semibold text-gray-800 hover:underline">
                      <div>{item.title}</div>
                      <div className="flex flex-row text-sm items-center gap-1">
                        {item.post_like} <VscHeartFilled color="violet" />
                      </div>
                    </div>
                    <p className="line-clamp-4">{item.content}</p>
                    <span className="text-sm text-gray-500">
                      Writer_{item.owner}
                    </span>
                  </div>
                </motion.div>
              );
            });
          })}
        </div>
      </AnimatePresence>
      {
        selectedId && showModal && postDetails && (
          <PostDetailModal
            id={postDetails.id}
            showModal={handleModal}
            title={postDetails.title}
            content={postDetails.content}
            owner={postDetails.owner}
            repo={postDetails.repo}
            post_like={postDetails.post_like}
          />
        )
        // <div className="w-full h-full">
        //   <div className="w-4/5 h-4/5 bg-sky-100 z-20 absolute flex top-20">
        //     <h5>?{postDetails?.owner}</h5>
        //     <h2>{}</h2>
        //     <button
        //       onClick={() => setSelectedId(null)}
        //       className="flex justify-end w-full"
        //     >
        //       X
        //     </button>
        //   </div>
        // </div>
      }
    </>
  );
};
export default MainScroll;
