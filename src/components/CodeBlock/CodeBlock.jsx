import { Box, IconButton, Tooltip, useTheme } from '@mui/material';
import { ContentCopy, Check } from '@mui/icons-material';
import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const CodeBlock = ({ code, language = 'python' }) => {
  const [copied, setCopied] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        my: 2,
        boxShadow: 2,
        maxWidth: '100%',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 1,
        }}
      >
        <Tooltip title={copied ? 'Copied!' : 'Copy code'}>
          <IconButton
            size="small"
            onClick={handleCopy}
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            {copied ? <Check fontSize="small" /> : <ContentCopy fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>

      <Highlight
        theme={isDark ? themes.vsDark : themes.vsLight}
        code={code.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              padding: '1.5rem',
              margin: 0,
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: '1.6',
              maxWidth: '100%',
            }}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line });
              return (
                <div key={i} {...lineProps}>
                  {line.map((token, tokenIndex) => {
                    const tokenProps = getTokenProps({ token });
                    return <span key={tokenIndex} {...tokenProps} />;
                  })}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export default CodeBlock;
