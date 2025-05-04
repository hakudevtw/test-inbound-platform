import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, notFound } from '@tanstack/react-router';
import { Row, Col, Typography, Descriptions, Empty } from 'antd';
import { getMovieById } from '@/services/omdb';
import { isAvailable } from '@/lib/utils';
import ImageWithFallback from '@/components/image-with-fallback';
import FavoriteButton from '@/components/favorite-button';

const movieQueryOptions = (movieId: string) =>
  queryOptions({
    queryKey: ['movie', movieId],
    queryFn: async () => {
      const result = await getMovieById(movieId);
      if (result.Response === 'False') throw notFound();
      return result;
    },
    staleTime: Infinity,
  });

export const Route = createFileRoute('/movies/$movieId')({
  loader: ({ context: { queryClient }, params: { movieId } }) => {
    return queryClient.ensureQueryData(movieQueryOptions(movieId));
  },
  notFoundComponent: () => {
    return <Empty description="Movie not found" image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  },
  component: MovieDetail,
});

const NOT_AVAILABLE_TEXT = '-';

function MovieDetail() {
  const { movieId } = Route.useParams();
  const { data: movie } = useSuspenseQuery(movieQueryOptions(movieId));

  return (
    <div style={{ padding: '24px', maxWidth: 1200, margin: '0 auto' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <ImageWithFallback
            src={movie.Poster}
            alt={movie.Title}
            width="100%"
            style={{ borderRadius: 8 }}
          />
        </Col>

        <Col xs={24} md={16}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Typography.Title level={2} style={{ margin: 0 }}>
              {movie.Title} ({movie.Year})
            </Typography.Title>

            <FavoriteButton movieId={movie.imdbID} />
          </div>
          <Typography.Paragraph type="secondary">{movie.Genre}</Typography.Paragraph>
          <Typography.Paragraph>{movie.Plot}</Typography.Paragraph>

          <Descriptions
            column={1}
            bordered
            size="small"
            styles={{
              label: { width: '150px' },
            }}
          >
            <Descriptions.Item label="Rated">
              {isAvailable(movie.Rated) ? movie.Rated : NOT_AVAILABLE_TEXT}
            </Descriptions.Item>
            <Descriptions.Item label="Released">
              {isAvailable(movie.Released) ? movie.Released : NOT_AVAILABLE_TEXT}
            </Descriptions.Item>
            <Descriptions.Item label="Runtime">
              {isAvailable(movie.Runtime) ? movie.Runtime : NOT_AVAILABLE_TEXT}
            </Descriptions.Item>
            <Descriptions.Item label="Director">
              {isAvailable(movie.Director) ? movie.Director : NOT_AVAILABLE_TEXT}
            </Descriptions.Item>
            <Descriptions.Item label="Writer">
              {isAvailable(movie.Writer) ? movie.Writer : NOT_AVAILABLE_TEXT}
            </Descriptions.Item>
            <Descriptions.Item label="Actors">
              {isAvailable(movie.Actors) ? movie.Actors : NOT_AVAILABLE_TEXT}
            </Descriptions.Item>
            <Descriptions.Item label="Language">{movie.Language}</Descriptions.Item>
            <Descriptions.Item label="Country">{movie.Country}</Descriptions.Item>
            <Descriptions.Item label="Awards">
              {isAvailable(movie.Awards) ? movie.Awards : NOT_AVAILABLE_TEXT}
            </Descriptions.Item>
            <Descriptions.Item label="imdb Rating">
              {isAvailable(movie.imdbRating) ? movie.imdbRating : NOT_AVAILABLE_TEXT}
            </Descriptions.Item>
            <Descriptions.Item label="Metascore">
              {isAvailable(movie.Metascore) ? movie.Metascore : NOT_AVAILABLE_TEXT}
            </Descriptions.Item>
            <Descriptions.Item label="Box Office">
              {isAvailable(movie.BoxOffice) ? movie.BoxOffice : NOT_AVAILABLE_TEXT}
            </Descriptions.Item>
            <Descriptions.Item label="Production">
              {isAvailable(movie.Production) ? movie.Production : NOT_AVAILABLE_TEXT}
            </Descriptions.Item>
            <Descriptions.Item label="Website">
              {isAvailable(movie.Website) ? (
                <a href={movie.Website} target="_blank" rel="noreferrer">
                  {movie.Website}
                </a>
              ) : (
                NOT_AVAILABLE_TEXT
              )}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
}
