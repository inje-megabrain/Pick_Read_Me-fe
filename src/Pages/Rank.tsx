import { motion, AnimatePresence } from 'framer-motion';
import { useRecoilState } from 'recoil';
import MainScrollHeader from '../Components/Headers/MainScrollHeader';
import { IPost, PageInfo } from 'src/Types/posts';
import { useIntersectionObserver } from '../Hooks/useIntersectionObserver';
import { useInfiniteRank } from '../Query/post';
import { useEffect, useState } from 'react';
import fetchPostById from '../Api/fetchPostById';
import { VscHeartFilled, VscHeart } from 'react-icons/vsc';
import PostDetailModal from '../Components/Modals/PostDetailModal';

const MainScroll = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteRank();
  const [postDetails, setPostDetails] = useState<IPost>();
  const [showModal, setShowModal] = useState(false);

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleModalPost = (id: number) => {
    if (id) {
      fetchPostById(id).then((v) => {
        setPostDetails(v);
        console.log(id);
      });
    }
  };

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
                    handleModalPost(item.id);
                    handleModal();
                  }}
                >
                  <img
                    // src={item.svgUrl}
                    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F03NmA%2FbtssgHFQ65D%2FSuNDlljSnTJTNV83DyfLKk%2Fimg.png"
                    //src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FwUMee%2FbtsgMbYx5C6%2FMpVt9vbPPKGpqWYB876Tp1%2Fimg.png"
                    alt="Image"
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
      {showModal && postDetails && (
        <PostDetailModal id={postDetails.id} showModal={handleModal} />
      )}
    </>
  );
};
export default MainScroll;
