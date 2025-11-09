import React from 'react'
import { Paper, Box, IconButton, Snackbar } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

function CodeSnippet({ code }) {
  const [open, setOpen] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setOpen(true)
  }

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: '#2d2d2d',
          color: '#f8f8f2',
          p: 2,
          borderRadius: 1,
          position: 'relative',
          overflow: 'auto',
        }}
      >
        <IconButton
          size="small"
          onClick={handleCopy}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: '#f8f8f2',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          }}
        >
          <ContentCopyIcon fontSize="small" />
        </IconButton>
        <Box
          component="pre"
          sx={{
            m: 0,
            fontFamily: '"Fira Code", "Courier New", monospace',
            fontSize: '0.9rem',
            lineHeight: 1.5,
          }}
        >
          <code>{code}</code>
        </Box>
      </Paper>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message="Code copied!"
      />
    </>
  )
}

export default CodeSnippet