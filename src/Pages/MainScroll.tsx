import { motion, AnimatePresence } from 'framer-motion';
import { useRecoilState } from 'recoil';
import postAtom from '../Atoms/post';
import MainScrollHeader from '../Components/Headers/MainScrollHeader';
import { useFetchPost } from '../Query/post';
import { IPost } from 'src/Types/posts';

const MainScroll = () => {
  const [selectedId, setSelectedId] = useRecoilState(postAtom);
  const { data: posts } = useFetchPost();

  return (
    <>
      <MainScrollHeader />
      <div className="h-screen float-left w-5/6 mx-auto my-0">
        <AnimatePresence>
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {posts?.map((item: IPost) => (
              <motion.div
                className="lg:flex"
                key={item.id}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
                layoutId={item.id.toString()}
                onClick={() => setSelectedId(item.id.toString())}
              >
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                ></img>
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <div className="text-xl font-semibold text-gray-800 hover:underline">
                    {item.title}
                  </div>
                  {item.content}
                  <span className="text-sm text-gray-500">BY_{item.repo}</span>
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
                className="w-2/5 h-2/5 bg-sky-100 mx-auto my-0 z-20 absolute left-0 right-0 flex justify-center top-1/2"
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
