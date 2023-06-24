import { useFetchReadme } from '../../Query/post';
import MDEditor from '@uiw/react-md-editor';
import { useEffect, useRef, useState } from 'react';
// import html2canvas from 'html2canvas';
// import FileInput from './FileInput';
// import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useSetRecoilState } from 'recoil';
import readmeAtom from '../../Atoms/readme';

interface ReadMe {
  repo: string;
  clicked: boolean;
}

const ReadMe = ({ repo, clicked }: ReadMe) => {
  const { data: readme } = useFetchReadme(repo, clicked);
  const setReadme = useSetRecoilState(readmeAtom);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    capImage();
  }, []);

  const onImageChange = (blob: Blob) => {
    if (!blob) return;
    setReadme(blob);
    //console.log(blob);
  };

  const capImage = () => {
    try {
      const div = divRef.current as HTMLDivElement;
      if (div) {
        const svgString = new XMLSerializer().serializeToString(div);
        const blob = new Blob([svgString], { type: 'image/svg+xml' });
        console.log(blob);
        onImageChange(blob);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto mt-10 w-10/12 flex flex-col text-gray-800 border-gray-300 p-4 shadow-lg max-w-2xl">
      {readme ? (
        <>
          <div ref={divRef}>
            <MDEditor.Markdown source={readme} />
          </div>
          <button className="btn btn-outline btn-secondary" onClick={capImage}>
            이얍
          </button>
        </>
      ) : (
        <>가져올 Repository명을 입력해주시고, Readme 버튼을 눌러주세요!</>
      )}

      {/* <div className="w-80 h-80">
          {URLThumbnail ? (
            <img
              src={URLThumbnail}
              alt="thumbnail"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
          ) : (
            ''
          )}
        </div> */}
      {/* <FileInput label="create Object URL Upload" onChange={onImageChange} /> */}
    </div>
  );
};

export default ReadMe;
