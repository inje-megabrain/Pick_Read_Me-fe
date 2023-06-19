import { useFetchReadme } from '../../Query/post';
import MDEditor from '@uiw/react-md-editor';
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import FileInput from './FileInput';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

interface ReadMe {
  repo: string;
  clicked: boolean;
}

const ReadMe = ({ repo, clicked }: ReadMe) => {
  const { data: readme } = useFetchReadme(repo, clicked);
  const [URLThumbnail, setURLThumbnail] = useState<any>();
  const divRef = useRef<HTMLDivElement>(null);

  const createImageURL = (fileBlob: Blob) => {
    if (URLThumbnail) {
      URL.revokeObjectURL(URLThumbnail);
    }
    const url = URL.createObjectURL(fileBlob);
    setURLThumbnail(url);
    console.log(url);
  };

  const onImageChange = (e: Blob) => {
    const files = e;

    if (!files) return;

    const uploadimage = files;

    createImageURL(uploadimage);
  };

  const capImage = () => {
    try {
      const div = divRef.current as HTMLDivElement;
      // if (div) {
      //   setTimeout(async () => {
      //     const canvas = await html2canvas(div, {
      //       allowTaint: true,
      //       useCORS: true,
      //       logging: false,
      //       scale: 4,
      //     });
      //     console.log(canvas.toDataURL());
      //     canvas.toBlob((blob) => {
      //       if (blob !== null) {
      //         console.log(blob);
      //         onImageChange(blob);
      //       }
      //     });
      //   });
      // }
      if (div) {
        const svgString = new XMLSerializer().serializeToString(div);
        const blob = new Blob([svgString], { type: 'image/svg+xml' });
        console.log(blob);
        onImageChange(blob);
        saveAs(blob, 'image.svg');
        //domtoimage.toSvg(div, { bgcolor: 'white' });
        //saveAs(image, 'images.png');
        //console.log(image);
        //onImageChange(image);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mx-auto mt-10 w-10/12 flex flex-col text-gray-800 border-gray-300 p-4 shadow-lg max-w-2xl">
        <div>
          {readme ? (
            <>
              <div ref={divRef}>
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
        <div className="w-80 h-80">
          {URLThumbnail ? (
            <img
              src={URLThumbnail}
              alt="thumbnail"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
          ) : (
            'urlThumbnail 미리보기'
          )}
        </div>
        <FileInput label="create Object URL Upload" onChange={onImageChange} />
      </div>
    </>
  );
};

export default ReadMe;
