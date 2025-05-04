import { useState, useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import Markdown from 'react-markdown';

export const Route = createFileRoute('/readme')({
  component: Readme,
});

function Readme() {
  const [readme, setReadme] = useState('');

  useEffect(() => {
    fetch('../../README.md')
      .then((response) => response.text())
      .then((text) => setReadme(text));
  }, []);

  return (
    <div style={{ padding: '24px', maxWidth: 1200, margin: '0 auto' }}>
      <Markdown>{readme}</Markdown>
    </div>
  );
}
