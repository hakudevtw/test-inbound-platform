import { Link } from '@tanstack/react-router';
import { Card, Tag } from 'antd';
import ImageWithFallback from './image-with-fallback';
import FavoriteButton from './favorite-button';
import type { MovieBase } from '@/services/omdb';

function MovieCard({ Title, Year, imdbID, Type, Poster }: MovieBase) {
  return (
    <Link to={`/movies/$movieId`} params={{ movieId: imdbID }} style={{ textDecoration: 'none' }}>
      <Card
        hoverable
        cover={
          <div style={{ position: 'relative' }}>
            <ImageWithFallback
              alt={Title}
              src={Poster}
              style={{ height: 250, width: '100%', objectFit: 'cover' }}
            />
            <FavoriteButton
              movieId={imdbID}
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 1,
              }}
            />
          </div>
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
