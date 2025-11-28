import { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import { Box, IconButton, Tooltip, useTheme } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

SyntaxHighlighter.registerLanguage('sql', sql);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('bash', bash);

const CodeBlock = ({ code, language = 'sql', title }) => {
  const [copied, setCopied] = useState(false);
  const theme = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box sx={{ position: 'relative', mb: 2 }}>
      {title && (
        <Box
          sx={{
            bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.200',
            px: 2,
            py: 1,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            fontWeight: 500,
          }}
        >
          {title}
        </Box>
      )}
      <Box sx={{ position: 'relative' }}>
        <Tooltip title={copied ? 'Copied!' : 'Copy code'}>
          <IconButton
            onClick={handleCopy}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              bgcolor: 'rgba(0,0,0,0.3)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
            }}
          >
            {copied ? <CheckIcon /> : <ContentCopyIcon />}
          </IconButton>
        </Tooltip>
        <SyntaxHighlighter
          language={language}
          style={theme.palette.mode === 'dark' ? dark : docco}
          customStyle={{
            margin: 0,
            borderRadius: title ? '0 0 8px 8px' : '8px',
            fontSize: '14px',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};

export default CodeBlock;
