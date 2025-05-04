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
