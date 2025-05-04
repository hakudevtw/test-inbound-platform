import { useState } from 'react';
import { Space, Input } from 'antd';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchStore } from '@/stores/search';

function Search() {
  const updateSearch = useSearchStore.use.updateSearch();
  const [query, setQuery] = useState('');

  const handleSearch = useDebouncedCallback(async (value: string) => {
    updateSearch({ s: value, page: 1 });
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Input
        placeholder="Search for a movie..."
        value={query}
        onChange={handleChange}
        size="large"
        style={{
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '8px 20px',
        }}
      />
    </Space>
  );
}

export default Search;
