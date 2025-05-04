import { Pagination, Flex, Empty, Typography, Row, Col } from 'antd';
import { useQueryMovies } from '@/hooks/useQueryMovies';
import { useSearchStore } from '@/stores/search';
import MovieCard from '@/components/movie-card';

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
    <Flex vertical style={{ flex: 1, gap: 24 }}>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        Search Result
      </Typography.Title>
      <Row gutter={[16, 16]} justify="start">
        {data.Search.map((movie) => (
          <Col key={movie.imdbID} xs={24} sm={12} md={8} lg={6}>
            <MovieCard key={movie.imdbID} {...movie} />
          </Col>
        ))}
      </Row>

      <Pagination
        defaultCurrent={1}
        current={page}
        total={Number(data.totalResults)}
        onChange={(page) => updateSearch({ page })}
        align="center"
        style={{ marginTop: 'auto' }}
      />
    </Flex>
  );
}

export default SearchResult;
