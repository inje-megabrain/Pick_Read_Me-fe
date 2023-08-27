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
                    src={
                      item.id === 2 || item.id === 3
                        ? 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F03NmA%2FbtssgHFQ65D%2FSuNDlljSnTJTNV83DyfLKk%2Fimg.png'
                        : 'data:image/png;base64,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'
                    }
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
