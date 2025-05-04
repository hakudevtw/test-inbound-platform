import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { getMovieById } from '@/services/omdb';

// TODO: still playing around with preloading
const movieQueryOptions = (movieId: string) =>
  queryOptions({
    queryKey: ['movie', movieId],
    queryFn: () => getMovieById(movieId),
  });

export const Route = createFileRoute('/movies/$movieId')({
  // @ts-expect-error declared in main.tsx
  loader: ({ context: { queryClient }, params: { movieId } }) => {
    return queryClient.ensureQueryData(movieQueryOptions(movieId));
  },
  component: MovieDetail,
});

function MovieDetail() {
  const { movieId } = Route.useParams();
  const { data: movie } = useSuspenseQuery(movieQueryOptions(movieId));
  return <div>{movie.Title}</div>;
}
