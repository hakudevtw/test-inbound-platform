import { create } from 'zustand';
import createSelectors from '@/lib/selectors';
import { KEY_FAVORITES } from '@/constants/local-storage';

interface StoreState {
  favorites: string[];
  addFavorite: (movieId: string) => void;
  removeFavorite: (movieId: string) => void;
}

const useFavoriteStoreBase = create<StoreState>((set, get) => ({
  favorites: JSON.parse(localStorage.getItem(KEY_FAVORITES) || '[]'),

  addFavorite: (movie) => {
    const updated = [...get().favorites, movie];
    localStorage.setItem(KEY_FAVORITES, JSON.stringify(updated));
    set({ favorites: updated });
  },

  removeFavorite: (movieId) => {
    const updated = get().favorites.filter((id) => id !== movieId);
    localStorage.setItem(KEY_FAVORITES, JSON.stringify(updated));
    set({ favorites: updated });
  },
}));

export const useFavoriteStore = createSelectors(useFavoriteStoreBase);
