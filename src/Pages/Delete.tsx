const Delete = () => {
  return (
    <div className="border-violet-300 border-2 translate-y-full text-center w-2/3 p-5 flex-col h-52">
      <h2 className="text-2xl mb-5">회원 탈퇴</h2>

      <p>회원 탈퇴시, 등록했던 모든 글 및 계정과 관련된 내용이 삭제됩니다.</p>

      <div className="flex justify-end mt-10">
        <button className="btn btn-error btn-outline btn-sm">Delete</button>
      </div>
    </div>
  );
};

export default Delete;
