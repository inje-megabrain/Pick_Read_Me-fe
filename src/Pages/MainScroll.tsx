import { motion, AnimatePresence } from 'framer-motion';
import { useRecoilState } from 'recoil';
import postAtom from '../Atoms/post';
import MainScrollHeader from '../Components/Headers/MainScrollHeader';

const MainScroll = () => {
  const [selectedId, setSelectedId] = useRecoilState(postAtom);

  const items = [
    { id: 1, subtitle: 'sub01', title: 'title01' },
    { id: 2, subtitle: 'sub02', title: 'title02' },
    { id: 3, subtitle: 'sub03', title: 'title03' },
    { id: 4, subtitle: 'sub04', title: 'title04' },
  ];

  const item = {
    subtitle: 'sub01',
    title: 'title01',
  };

  return (
    <>
      <MainScrollHeader />
      <div className="h-screen float-left w-5/6 mx-auto my-0">
        <AnimatePresence>
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {items.map((item: any) => (
              <motion.div
                className="lg:flex"
                key={item.id}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
                layoutId={item.id}
                onClick={() => setSelectedId(item.id)}
              >
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                ></img>
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="/"
                    className="text-xl font-semibold text-gray-800 hover:underline"
                  >
                    {item.title}
                  </a>
                  {item.subtitle}
                  <span className="text-sm text-gray-500">{item.id}</span>
                </div>
              </motion.div>
            ))}
          </div>
          {/* <div className="w-full mx-auto my-0 h-full grid grid-cols-4">
            {items.map((item: any) => (
              <motion.div
                className="w-72 h-72 bg-slate-400 mb-3 mr-5 z-10 float-left"
                key={item.id}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
                layoutId={item.id}
                onClick={() => setSelectedId(item.id)}
              >
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
              </motion.div>
            ))}
          </div> */}
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
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
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
