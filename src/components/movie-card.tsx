import { Link } from '@tanstack/react-router';
import { Card, Tag } from 'antd';
import type { MovieBase } from '@/services/omdb';

function MovieCard({ Title, Year, imdbID, Type, Poster }: MovieBase) {
  return (
    <Link to={`/movies/${imdbID}`} style={{ textDecoration: 'none' }}>
      <Card
        hoverable
        cover={
          <img
            alt={Title}
            src={Poster !== 'N/A' ? Poster : '/fallback.jpg'}
            style={{ height: 250, objectFit: 'cover' }}
          />
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
