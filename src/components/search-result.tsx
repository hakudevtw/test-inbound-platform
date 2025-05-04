import { Pagination } from 'antd';
import { useQueryMovies } from '@/hooks/useQueryMovies';
import { useSearchStore } from '@/stores/search';
import { Empty } from 'antd';

const emptyStyle = {
  paddingTop: 80,
};

function SearchResult() {
  const { data, isError, isPending } = useQueryMovies();
  const { s, page } = useSearchStore.use.search();
  const updateSearch = useSearchStore.use.updateSearch();

  if (!s || isPending) {
    return <Empty description="No search term provided..." style={emptyStyle} />;
  }

  if (isError) {
    return <Empty description="Error fetching data..." style={emptyStyle} />;
  }

  if (data.Response === 'False') {
    return <Empty description={data.Error} style={emptyStyle} />;
  }

  return (
    <div>
      <h2>Search Result</h2>
      {data.Search.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>Year: {movie.Year}</p>
        </div>
      ))}
      <Pagination
        defaultCurrent={1}
        current={page}
        total={Number(data.totalResults)}
        onChange={(page) => updateSearch({ page })}
      />
    </div>
  );
}

export default SearchResult;
