import { useEffect, useRef, useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import mermaid from 'mermaid';

const DiagramVisualizer = ({ diagram, title }) => {
  const ref = useRef(null);
  const [svg, setSvg] = useState('');

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
    });
  }, []);

  useEffect(() => {
    const renderDiagram = async () => {
      if (diagram && ref.current) {
        try {
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          const { svg } = await mermaid.render(id, diagram);
          setSvg(svg);
        } catch (error) {
          console.error('Error rendering mermaid diagram:', error);
          ref.current.innerHTML = `<pre>${diagram}</pre>`;
        }
      }
    };

    renderDiagram();
  }, [diagram]);

  return (
    <Paper elevation={2} sx={{ p: 3, my: 2 }}>
      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '200px',
          '& svg': {
            maxWidth: '100%',
            height: 'auto',
          },
        }}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </Paper>
  );
};

export default DiagramVisualizer;
