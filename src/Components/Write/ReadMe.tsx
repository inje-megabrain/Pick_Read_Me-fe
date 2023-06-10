import { useFetchReadme } from '../../Query/post';
import MDEditor from '@uiw/react-md-editor';

interface ReadMe {
  repo: string;
  clicked: boolean;
}
const ReadMe = ({ repo, clicked }: ReadMe) => {
  const { data: readme } = useFetchReadme(repo, clicked);
  return (
    <>
      <div className="mx-auto mt-10 w-10/12 flex flex-col text-gray-800 border-gray-300 p-4 shadow-lg max-w-2xl">
        <div>
          {readme ? (
            <MDEditor.Markdown source={readme} />
          ) : (
            <>가져올 Repository명을 입력해주시고, 버튼을 눌러주세요!</>
          )}
        </div>
      </div>
    </>
  );
};

export default ReadMe;
