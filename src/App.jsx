import React, { useState } from 'react'
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material'
import ChapterList from './components/ChapterList'
import ChapterContent from './components/ChapterContent'
import { chapters } from './data/chapters'

function App() {
  const [selectedChapter, setSelectedChapter] = useState(0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            🐍 Python Skills for Girls
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
          }}
        >
          {/* Chapter Navigation */}
          <Box sx={{ width: { xs: '100%', md: '300px' } }}>
            <ChapterList
              chapters={chapters}
              selectedChapter={selectedChapter}
              onSelectChapter={setSelectedChapter}
            />
          </Box>

          {/* Chapter Content */}
          <Box sx={{ flexGrow: 1 }}>
            <ChapterContent chapter={chapters[selectedChapter]} />
          </Box>
        </Box>
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            Learn Python with confidence! 💜
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default App