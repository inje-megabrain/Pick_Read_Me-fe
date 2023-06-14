import { useFetchReadme } from '../../Query/post';
import MDEditor from '@uiw/react-md-editor';
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import FileInput from './FileInput';
//import domtoimage from 'dom-to-image';

interface ReadMe {
  repo: string;
  clicked: boolean;
}

const ReadMe = ({ repo, clicked }: ReadMe) => {
  const { data: readme } = useFetchReadme(repo, clicked);
  const [fileReaderThumbnail, setFileReaderThubnail] = useState<any>();
  const [URLThumbnail, setURLThumbnail] = useState<any>();
  const divRef = useRef<HTMLDivElement>(null);

  const encodeFile = (fileBlob: Blob) => {
    const reader = new FileReader();
    if (!fileBlob) return;

    reader.readAsDataURL(fileBlob);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        const result = reader.result;
        setFileReaderThubnail(result);
        resolve();
      };
    });
  };

  const onFileReaderChange = (e: any) => {
    const { files } = e.target;

    if (!files || !files[0]) return;

    const uploadimage = files[0];

    encodeFile(uploadimage);
  };

  const createImageURL = (fileBlob: Blob) => {
    if (URLThumbnail) {
      URL.revokeObjectURL(URLThumbnail);
    }
    const url = URL.createObjectURL(fileBlob);
    setURLThumbnail(url);
  };

  const onImageChange = (e: Blob) => {
    const files = e;

    if (!files) return;

    const uploadimage = files;

    createImageURL(uploadimage);
  };

  const capImage = async () => {
    try {
      const div = divRef.current as HTMLDivElement;
      if (div) {
        // Add a delay of 1 second before capturing the image
        setTimeout(async () => {
          const canvas = await html2canvas(div, {
            allowTaint: true,
            useCORS: true,
            logging: false,
            scale: 4,
          });
          canvas.toBlob((blob) => {
            if (blob !== null) {
              console.log(blob);
              onImageChange(blob);
            }
          });
        }, 1000);
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
        <div className="w-40 h-40">
          {fileReaderThumbnail ? (
            <img src={fileReaderThumbnail} alt="thumbnail" />
          ) : (
            'fileReaderThumbnail 미리보기'
          )}
        </div>
        <FileInput label="File Reader Upload" onChange={onFileReaderChange} />
        <div className="w-80 h-80">
          {URLThumbnail ? (
            <img src={URLThumbnail} alt="thumbnail" crossOrigin="anonymous" />
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
