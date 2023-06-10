import { useFetchReadme } from '../../Query/post';

interface ReadMe {
  repo: string;
  clicked: boolean;
}
const ReadMe = ({ repo, clicked }: ReadMe) => {
  const { data: readme } = useFetchReadme(repo, clicked);
  return (
    <>
      <div className="mx-auto mt-10 w-10/12 flex flex-col text-gray-800 border-gray-300 p-4 shadow-lg max-w-2xl">
        <div>{readme}</div>
      </div>
    </>
  );
};

export default ReadMe;
