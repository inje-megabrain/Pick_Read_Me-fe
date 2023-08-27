import { useEffect, useState } from 'react';
import { useIssuePost } from '../../Query/post';
import { useNavigate, useLocation } from 'react-router-dom';
import ReadMe from './ReadMe';
import { useRecoilValue } from 'recoil';
import readmeAtom from '../../Atoms/readme';
import fetchPostById from '../../Api/fetchPostById';
import updatePostById from '../../Api/updatePostById';

const WriteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentsCount, setContentsCount] = useState(0);
  const [repo, setRepo] = useState('');
  const [postId, setPostId] = useState<number>();
  const readme = useRecoilValue<Blob>(readmeAtom);

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const { mutateAsync: createPost } = useIssuePost();

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const postId = queryParams.get('postId');
    if (postId) {
      fetchPostById(parseInt(postId)).then((res) => {
        setPostId(parseInt(postId));
        setTitle(res.title);
        setContent(res.content);
        setRepo(res.repo);
      });
    }
  }, []);

  const handleReadme = () => {
    setClicked(true);
    console.log('리드미 가져옴니당');
  };
  const handlePost = () => {
    if (postId) {
      updatePostById({
        postId: postId,
        title: title,
        content: content,
        repo: repo,
      }).then(() => {
        navigate('/');
      });
    } else {
      createPost({
        content: content,
        repo: repo,
        title: title,
        file: readme,
      }).then(() => {
        //console.log('전송 성공');
        navigate('/');
      });
    }
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
    setContentsCount(
      event.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, '$&$1$2').length
    );
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
          maxLength={500}
        ></textarea>
        <div className="flex justify-end" style={{ color: '#9CA3AF' }}>
          <span>{contentsCount}</span>
          <span>/500자</span>
        </div>
        <div className="flex mt-5">
          <button
            className="btn btn-outline btn-accent p-1 px-4 font-semibold cursor-pointer ml-auto"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="btn btn-outline btn-secondary p-1 px-4 font-semibold cursor-pointer ml-2"
            disabled={clicked ? false : true}
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
