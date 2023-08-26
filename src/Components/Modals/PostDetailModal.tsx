import { motion, AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import postAtom from '../../Atoms/post';
import { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import fetchReadme from '../../Api/fetchReadme';
import { VscClose, VscHeart, VscHeartFilled } from 'react-icons/vsc';
import createLike from '../../Api/createLike';

interface PostModalProps {
  showModal: () => void;
  id: number;
  owner: string;
  title: string;
  content: string;
  repo: string;
  post_like: number;
  like: boolean;
}

const PostDetailModal = ({
  showModal,
  id,
  owner,
  title,
  content,
  repo,
  post_like,
  like,
}: PostModalProps) => {
  const selectedId = useRecoilValue(postAtom);
  const [readme, setReadme] = useState<string>();
  const [heartFilled, setHeartFilled] = useState(like);

  const handleHeart = () => {
    createLike(id).then(() => {
      setHeartFilled(!heartFilled);
    });
  };

  useEffect(() => {
    fetchReadme(repo).then((res) => {
      setReadme(res);
    });
  }, []);
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="fixed bg-gray-700 top-0 left-0 w-full h-full bg-opacity-70 flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex flex-col h-4/5 w-4/5 bg-white rounded-[20px] p-[30px] items-center"
            layoutId={selectedId?.toString()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="flex justify-end w-full" onClick={showModal}>
              <VscClose size={35} />
            </button>
            <div className="mb-[40px] w-4/5 flex flex-col">
              <p>글쓴이 : {owner}</p>
              {/* <p>작성 날짜: {create_time.toString()}</p> */}
              <p>제목 : {title}</p>
              <p>내용 : {content}</p>
              <p>깃허브 : {repo}</p>
              <p>좋아요 : {post_like}</p>
              <button onClick={handleHeart}>
                {heartFilled ? (
                  <VscHeartFilled size={25} />
                ) : (
                  <VscHeart size={25} />
                )}
              </button>
            </div>
            <MDEditor.Markdown
              source={readme}
              className="w-4/5 h-3/5 overflow-y-scroll"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PostDetailModal;
