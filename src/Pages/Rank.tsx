import { useInfiniteRank } from 'src/Query/post';
import MainScrollHeader from '../Components/Headers/MainScrollHeader';

const Rank = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteRank();
  return (
    <>
      <MainScrollHeader />

      <div>RankPage</div>
    </>
  );
};

export default Rank;
