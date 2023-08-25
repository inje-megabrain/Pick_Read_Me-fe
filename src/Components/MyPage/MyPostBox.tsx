import { useState } from 'react';
import PostDetailModal from '../Modals/PostDetailModal';
import deletePost from '../../Api/deletePost';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { VscTrash } from 'react-icons/vsc';

export interface MyPostBoxProps {
  id: number;
  title: string;
  create_time: Date;
  owner: string;
  content: string;
  repo: string;
  //handleModal: () => void;
}

const MyPostBox = (props: MyPostBoxProps) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleEdit = () => {
    //editPost(props.id)
  };
  const handleDelete = () => {
    deletePost(props.id);
  };
  return (
    <>
      <div className="flex justify-between p-[10px] border border-gray-50 shadow-sm gap-2 text-center">
        <div
          onClick={handleModal}
          className="cursor-pointer flex flex-row justify-between w-3/4 text-center"
        >
          <p className="w-1/4">{props.title}</p>
          <p className="w-1/4"> {props.repo}</p>
          <p className="w-1/4">{props.create_time.toString().slice(0, 10)}</p>
        </div>
        <div className="flex flex-row gap-[15px] justify-center items-center w-1/4">
          <button onClick={handleEdit}>
            <MdOutlineModeEditOutline size={25} />
          </button>
          <button onClick={handleDelete}>
            <VscTrash size={25} />
          </button>
        </div>
      </div>
      {showModal && (
        <PostDetailModal
          showModal={handleModal}
          owner={props.owner}
          title={props.title}
          content={props.content}
          repo={props.repo}
        />
      )}
    </>
  );
};

export default MyPostBox;
