import { useFetchReadme } from '../../Query/post';
import MDEditor from '@uiw/react-md-editor';
import domtoimage from 'dom-to-image';
import { useRef } from 'react';

interface ReadMe {
  repo: string;
  clicked: boolean;
}
const ReadMe = ({ repo, clicked }: ReadMe) => {
  const { data: readme } = useFetchReadme(repo, clicked);
  const read = useRef();
  const capImage = () => {
    if (document.getElementById('read')) {
      domtoimage
        .toBlob(document.getElementById('read') as HTMLElement)
        .then((png) => {
          console.log(png);
        });
    }
  };
  return (
    <>
      <div className="mx-auto mt-10 w-10/12 flex flex-col text-gray-800 border-gray-300 p-4 shadow-lg max-w-2xl">
        <div>
          {readme ? (
            <>
              <div id="read">
                <MDEditor.Markdown source={readme} />
              </div>
              <button
                className="btn btn-outline btn-secondary"
                onClick={capImage}
              >
                이얍
              </button>
            </>
          ) : (
            <>가져올 Repository명을 입력해주시고, 버튼을 눌러주세요!</>
          )}
        </div>
      </div>
    </>
  );
};

export default ReadMe;
