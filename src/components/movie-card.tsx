import { Link } from '@tanstack/react-router';
import { Card, Tag } from 'antd';
import ImageWithFallback from './image-with-fallback';
import type { MovieBase } from '@/services/omdb';

function MovieCard({ Title, Year, imdbID, Type, Poster }: MovieBase) {
  return (
    <Link to={`/movies/$movieId`} params={{ movieId: imdbID }} style={{ textDecoration: 'none' }}>
      <Card
        hoverable
        cover={
          <ImageWithFallback alt={Title} src={Poster} style={{ height: 250, objectFit: 'cover' }} />
        }
      >
        <Card.Meta
          title={Title}
          description={
            <div>
              <div>{Year}</div>
              <Tag color="blue" style={{ textTransform: 'capitalize' }}>
                {Type}
              </Tag>
            </div>
          }
        />
      </Card>
    </Link>
  );
}

export default MovieCard;
