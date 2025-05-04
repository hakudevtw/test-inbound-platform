import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useQueryFavorites } from '@/hooks/useQueryFavorites';
import { Pagination, Flex, Empty, Typography, Row, Col } from 'antd';
import MovieCard from '@/components/movie-card';
import PageLoading from '@/components/page-loading';
import { useFavoriteStore } from '@/stores/favorite';

export const Route = createFileRoute('/favorites')({
  component: Favorites,
});

function Favorites() {
  const favorites = useFavoriteStore.use.favorites();
  const { data: movies, isLoading } = useQueryFavorites();
  const [page, setPage] = useState(1);

  if (isLoading) return <PageLoading />;

  if (favorites.length === 0) {
    return <Empty description="No favorites..." style={{ paddingTop: 80 }} />;
  }

  return (
    <Flex vertical style={{ flex: 1, gap: 24 }}>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        Favorites
      </Typography.Title>
      <Row gutter={[16, 16]} justify="start">
        {movies?.map((movie) => (
          <Col key={movie.imdbID} xs={24} sm={12} md={8} lg={6}>
            <MovieCard key={movie.imdbID} {...movie} />
          </Col>
        ))}
      </Row>

      <Pagination
        defaultCurrent={1}
        current={page}
        total={movies?.length}
        onChange={setPage}
        align="center"
        style={{ marginTop: 'auto' }}
      />
    </Flex>
  );
}
