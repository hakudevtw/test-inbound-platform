import { createFileRoute } from '@tanstack/react-router';
import Markdown from 'react-markdown';
import { useQuery } from '@tanstack/react-query';
import PageLoading from '@/components/page-loading';

export const Route = createFileRoute('/readme')({
  component: Readme,
});

function Readme() {
  const { data, isLoading } = useQuery({
    queryKey: ['readme'],
    queryFn: () =>
      fetch('https://api.github.com/repos/hakudevtw/test-inbound-platform/contents/README.md').then(
        (res) => res.json().then((data) => atob(data.content))
      ),
  });

  if (isLoading) return <PageLoading />;

  return (
    <div style={{ padding: '24px', maxWidth: 1200, margin: '0 auto' }}>
      <Markdown>{data}</Markdown>
    </div>
  );
}
