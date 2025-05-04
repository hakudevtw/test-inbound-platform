import { createFileRoute } from '@tanstack/react-router';
import { Flex } from 'antd';
import Search from '@/components/search';
import SearchResult from '@/components/search-result';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <Flex vertical gap={16} style={{ height: '100%' }}>
      <Search />
      <Flex vertical style={{ flex: 1 }}>
        <SearchResult />
      </Flex>
    </Flex>
  );
}
