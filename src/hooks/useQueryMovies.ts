import { useQuery } from '@tanstack/react-query';
import { getMoviesSearch } from '@/services/omdb/omdb.api';
import { useSearchStore } from '@/stores/search';
import { keepPreviousData } from '@tanstack/react-query';

export function useQueryMovies() {
  const search = useSearchStore.use.search();

  return useQuery({
    queryKey: ['movies', search.s, search.page, search.type, search.y],
    queryFn: () => getMoviesSearch(search),
    placeholderData: keepPreviousData,
  });
}
