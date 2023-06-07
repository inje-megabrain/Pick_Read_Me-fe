import { useState } from 'react';
import { useIssuePost } from '../Query/post';

const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [repo, setRepo] = useState('');
  const { mutateAsync: create } = useIssuePost();
  const handlePost = () => {
    create({
      content: content,
      repo: repo,
      title: title,
    });
    console.log(content);
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
      <div className="text-center font-bold text-2xl m-5 text-gray-800">
        New Post
      </div>
      <div className="mx-auto w-10/12 flex flex-col text-gray-800 border-gray-300 p-4 shadow-lg max-w-2xl">
        <input
          className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Title"
          spellCheck="false"
          value={title}
          required
          onChange={onChangeTitle}
        ></input>
        <input
          className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="Repository"
          spellCheck="false"
          value={repo}
          required
          onChange={onChangeRepo}
        ></input>
        <textarea
          className="bg-gray-100 p-3 h-60 border border-gray-300 outline-none"
          placeholder="Contents"
          value={content}
          onChange={onChangeContent}
        ></textarea>
        <div className="flex mt-5">
          <button className="btn btn-outline btn-secondary p-1 px-4 font-semibold cursor-pointer ml-auto">
            Cancel
          </button>
          <button
            className="btn btn-outline btn-primary p-1 px-4 font-semibold cursor-pointer ml-2"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default Write;
