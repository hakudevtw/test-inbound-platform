import { create } from 'zustand';
import createSelectors from '@/lib/selectors';
import { updateSearchParams } from '@/lib/utils';
import type { GetMoviesQuery } from '@/services/omdb';

export const getDefaultSearch = (): GetMoviesQuery => {
  const searchParams = new URLSearchParams(window.location.search);
  const s = searchParams.get('s') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);

  return { s, page };
};

interface StoreState {
  search: GetMoviesQuery;
  updateSearch: (criteria: Partial<GetMoviesQuery>) => void;
}

const useSearchStoreBase = create<StoreState>((set) => ({
  search: getDefaultSearch(),
  updateSearch: (criteria) => {
    updateSearchParams(criteria);
    set((state) => ({ search: { ...state.search, ...criteria } }));
  },
}));

export const useSearchStore = createSelectors(useSearchStoreBase);
