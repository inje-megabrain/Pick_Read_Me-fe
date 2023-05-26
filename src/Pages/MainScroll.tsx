import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import postAtom from '../Atoms/post';

const MainScroll = () => {
  const [selectedId, setSelectedId] = useRecoilState(postAtom);
  //const [selectedId, setSelectedId] = useState(null);

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
      <div className="bg-zinc-300 h-screen float-left w-4/5">
        {items.map((item: any) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            className="w-72 h-72 bg-slate-400 float-left mb-3 mr-5 z-10"
          >
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}
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
