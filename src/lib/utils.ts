import { NOT_AVAILABLE } from '@/services/omdb';

export const updateSearchParams = (criteria: Partial<Record<string, string | number>>) => {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(criteria).forEach(([key, value]) => {
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, String(value));
    }
  });
  const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
  window.history.replaceState({}, '', newUrl);
};

export const isAvailable = (value?: string) => {
  if (value === undefined) return false;
  if (value === null) return false;
  if (value === '') return false;
  if (value === NOT_AVAILABLE) return false;
  return true;
};
