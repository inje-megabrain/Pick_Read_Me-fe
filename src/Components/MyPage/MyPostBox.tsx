export interface MyPostBoxProps {
  title: string;
  create_time: Date;
  repo: string;
}

const MyPostBox = (props: MyPostBoxProps) => {
  return (
    <>
      <button className="flex justify-between p-[10px] border border-gray-50 shadow-sm gap-2 text-center">
        <p className="w-1/3">{props.title}</p>
        <p className="w-1/3"> {props.repo}</p>
        <p className="w-1/3">{props.create_time.toString().slice(0, 10)}</p>
      </button>
    </>
  );
};

export default MyPostBox;
