import { useState, useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import Markdown from 'react-markdown';

export const Route = createFileRoute('/readme')({
  component: Readme,
});

function Readme() {
  const [readme, setReadme] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/repos/hakudevtw/test-inbound-platform/contents/README.md')
      .then((response) => response.json())
      .then((data) => {
        const content = atob(data.content);
        setReadme(content);
      });
  }, []);

  return (
    <div style={{ padding: '24px', maxWidth: 1200, margin: '0 auto' }}>
      <Markdown>{readme}</Markdown>
    </div>
  );
}
