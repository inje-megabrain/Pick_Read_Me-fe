import { useState } from 'react';
import { useIssuePost } from '../../Query/post';
import { useNavigate } from 'react-router-dom';
import ReadMe from './ReadMe';

const WriteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [repo, setRepo] = useState('');
  const navigate = useNavigate();
  const { mutateAsync: create } = useIssuePost();

  const [clicked, setClicked] = useState(false);

  const handleReadme = () => {
    setClicked(true);
    console.log('리드미 가져옴니당');
  };
  const handlePost = () => {
    create({
      content: content,
      repo: repo,
      title: title,
    });
    console.log(content);
  };
  const handleCancel = () => {
    navigate('/');
  };
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeRepo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepo(event.target.value);
  };
  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  return (
    <>
      <div className="text-center font-bold text-2xl m-5 text-gray-800 mt-10">
        New Post
      </div>
      <div className="mx-auto w-10/12 flex flex-col text-gray-800 border-gray-300 p-4 shadow-lg max-w-2xl">
        <input
          className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded-xl"
          placeholder="Title"
          spellCheck="false"
          value={title}
          required
          onChange={onChangeTitle}
        ></input>
        <div className="w-full">
          <input
            className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded-xl w-4/5 mr-1"
            placeholder="Repository"
            spellCheck="false"
            value={repo}
            required
            onChange={onChangeRepo}
          ></input>
          <button
            className="btn btn-outline btn-secondary h-11 min-h-fit w-1/6 float-right"
            onClick={handleReadme}
          >
            ReadMe!
          </button>
        </div>
        <textarea
          className="bg-gray-100 p-3 h-60 border border-gray-300 outline-none rounded-xl"
          placeholder="Contents"
          value={content}
          onChange={onChangeContent}
        ></textarea>
        <div className="flex mt-5">
          <button
            className="btn btn-outline btn-accent p-1 px-4 font-semibold cursor-pointer ml-auto"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="btn btn-outline btn-secondary p-1 px-4 font-semibold cursor-pointer ml-2"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
      <ReadMe repo={repo} clicked={clicked} />
    </>
  );
};

export default WriteForm;
