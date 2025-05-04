import { create } from 'zustand';
import createSelectors from '@/lib/selectors';
import type { GetMoviesQuery } from '@/services/omdb';

const DEFAULT_SEARCH: GetMoviesQuery = {
  s: '',
  page: 1,
};

interface StoreState {
  search: GetMoviesQuery;
  updateSearch: (criteria: Partial<GetMoviesQuery>) => void;
}

const useSearchStoreBase = create<StoreState>((set) => ({
  search: DEFAULT_SEARCH,
  updateSearch: (criteria) => {
    set((state) => ({ search: { ...state.search, ...criteria } }));
  },
}));

export const useSearchStore = createSelectors(useSearchStoreBase);
