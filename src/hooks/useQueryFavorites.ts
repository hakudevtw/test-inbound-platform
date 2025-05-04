import { useQuery } from '@tanstack/react-query';
import { getFavoriteMovies } from '@/services/omdb/omdb.api';
import { keepPreviousData } from '@tanstack/react-query';
import { useFavoriteStore } from '@/stores/favorite';

export function useQueryFavorites() {
  const ids = useFavoriteStore.use.favorites();

  return useQuery({
    queryKey: ['favorites', ids],
    queryFn: () => getFavoriteMovies(ids),
    placeholderData: keepPreviousData,
  });
}
