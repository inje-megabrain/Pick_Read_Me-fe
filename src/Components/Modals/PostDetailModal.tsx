import { motion, AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import fetchReadme from '../../Api/fetchReadme';
import { VscClose, VscHeart, VscHeartFilled } from 'react-icons/vsc';
import createLike from '../../Api/createLike';
import fetchPostById from '../../Api/fetchPostById';
import { IPost } from 'src/Types/posts';
import { useFetchPostById, useLikePost } from '../../Query/post';

interface PostModalProps {
  showModal: () => void;
  id: number;
}

const PostDetailModal = ({ showModal, id }: PostModalProps) => {
  const [readme, setReadme] = useState<string>();
  const [heartFilled, setHeartFilled] = useState<boolean>();
  const { mutateAsync: createLike } = useLikePost();
  //const { data: post } = useFetchPostById(id);
  const [post, setPost] = useState<IPost>();

  const handleHeart = () => {
    createLike(id).then(() => setHeartFilled(!heartFilled));
  };

  useEffect(() => {
    fetchPostById(id).then((v) => {
      setPost(v);
      fetchReadme(v.repo).then((v) => {
        setReadme(v);
      });
    });
  }, [id]);
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
            layoutId={id?.toString()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {post && (
              <>
                <button className="flex justify-end w-full" onClick={showModal}>
                  <VscClose size={35} />
                </button>

                <div className="mb-[40px] w-4/5 flex flex-col gap-2">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-2xl font-bold">{post.title}</p>
                    <p className="flex flex-row items-center text-lg">
                      {post.post_like}
                      <button onClick={handleHeart}>
                        {post.like ? (
                          <VscHeartFilled size={25} />
                        ) : (
                          <VscHeart size={25} />
                        )}
                      </button>
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <p>작성자 : {post.owner}</p>
                    <p>Repo : {post.repo}</p>
                  </div>
                  <hr />

                  <p className="text-lg mt-[20px]">{post.content}</p>
                </div>
                <MDEditor.Markdown
                  source={readme}
                  className="w-4/5 h-3/5 overflow-y-scroll"
                />
              </>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PostDetailModal;
