// import { useInfiniteQuery } from "react-query";

// const useInfinite = () => {
//     const getPageBoard = async ({pageParam = 0}) => {
//         const res = await api.get(``);

//     return {
//         // 실제 데이터

//         // 반환 값에 현재 페이지 넘겨주기

//         // 페이지가 마지막인지 알려주는 서버에서 넘겨준 true/false 값

//     }
//     }

// const {
//     data:getBoard,
//     fetchNextPage: getNextPage,
//     isSuccess: getBoardIsSuccess,
//     hasNextPage: getNextPageIsPossible,
// } = useInfiniteQuery(['page_board_list'], /*api호출*/, {
//     getNextPageParam: (lastPage, pages) => {
//         //lastPage와 pages는 콜백 함수에서 리턴한 값
//         //lastPage : 직전에 반환된 리턴 값, pages : 여태 받아온 전체 페이지
//         if(!lastPage.isLast) return lastPage.current_page + 1;
//         //마지막 페이지면 undefined가 리턴되어 hasNextPage가 false가 됨
//         return undefined;
//     },
// });
//     return {getBoard, getNextPage, getBoardIsSuccess, getNextPageIsPossible};

// }
