import { motion, AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import postAtom from '../../Atoms/post';
import { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import fetchReadme from '../../Api/fetchReadme';

interface PostModalProps {
  showModal: () => void;
  visible: boolean;
  owner: string;
  title: string;
  content: string;
  repo: string;
}

const PostDetailModal = ({
  showModal,
  visible,
  owner,
  title,
  content,
  repo,
}: PostModalProps) => {
  const selectedId = useRecoilValue(postAtom);
  const [readme, setReadme] = useState<string>();

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
            className="flex flex-col justify-center items-center h-4/5 w-4/5 bg-white rounded-[20px]"
            layoutId={selectedId?.toString()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button onClick={showModal}>X</motion.button>
            <p>글쓴이 : {owner}</p>
            {/* <p>작성 날짜: {create_time.toString()}</p> */}
            <p>제목 : {title}</p>
            <p>내용 : {content}</p>
            <p>깃허브 : {repo}</p>
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
