import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/movies/$movieId')({
  component: MovieDetail,
});

function MovieDetail() {
  const { movieId } = Route.useParams();
  return <div>Hello `/movies/${movieId}`!</div>;
}
