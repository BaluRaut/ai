import React, { useMemo, useState } from 'react'
import { AppBar, Toolbar, Typography, Container, Box, IconButton, TextField, Chip,
  Stack, Tooltip, Divider, useMediaQuery } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import ChapterAccordion from './components/ChapterAccordion.jsx'
import chapters from './data/weeks.js'

export default function App() {
  const [dark, setDark] = useState(true)
  const [query, setQuery] = useState('')
  const [activeTags, setActiveTags] = useState([])
  const theme = useMemo(() => createTheme({ palette: { mode: dark ? 'dark' : 'light' }, shape: { borderRadius: 16 } }), [dark])

  const allTags = useMemo(() => {
    const set = new Set()
    chapters.forEach(c => (c.tags || []).forEach(t => set.add(t)))
    return Array.from(set).sort()
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return chapters.filter(c => {
      const inTitle = c.title.toLowerCase().includes(q)
      const inWhat = (c.what || []).join(' ').toLowerCase().includes(q)
      const inWhy = (c.why || []).join(' ').toLowerCase().includes(q)
      const inHow = (c.how || []).join(' ').toLowerCase().includes(q)
      const tagMatch = activeTags.length === 0 || activeTags.every(t => c.tags.includes(t))
      return tagMatch && (q ? (inTitle || inWhat || inWhy || inHow) : true)
    })
  }, [query, activeTags])

  const toggleTag = (t) => setActiveTags(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])
  const clearFilters = () => { setQuery(''); setActiveTags([]) }
  const prefersSmall = useMediaQuery('(max-width:900px)')

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" elevation={1}>
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>AI Plan: 3-Day Weeks</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1, maxWidth: 720, ml: prefersSmall ? 0 : 4 }}>
            <SearchIcon fontSize="small" />
            <TextField size="small" placeholder="Search weeks, topics, skills…" fullWidth value={query} onChange={(e)=>setQuery(e.target.value)} />
          </Box>
          <Tooltip title={dark ? 'Switch to light' : 'Switch to dark'}>
            <IconButton color="inherit" onClick={()=>setDark(d=>!d)}>{dark ? <LightModeIcon/> : <DarkModeIcon/>}</IconButton>
          </Tooltip>
          <Tooltip title="Reset filters">
            <IconButton color="inherit" onClick={clearFilters}><RestartAltIcon/></IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, opacity: 0.9 }}>
          Structure: 4 weeks AI (concepts only) → 6 weeks ML → 6 weeks LLM → 8 weeks Deep Learning → 4 weeks Python → 4 weeks JavaScript/TF.js. Each week has a 3-day work plan, references, exercises, and a quiz.
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
          {allTags.map(t => (
            <Chip key={t} label={t} onClick={()=>toggleTag(t)} variant={activeTags.includes(t)?'filled':'outlined'} color={activeTags.includes(t)?'primary':'default'} sx={{ cursor:'pointer' }} />
          ))}
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Stack spacing={2}>
          {filtered.map((chapter, idx) => (<ChapterAccordion key={chapter.id} chapter={chapter} index={idx} />))}
        </Stack>
        <Box sx={{ mt: 4, textAlign: 'center', opacity: 0.8 }}>
          <Typography variant="body2">Tip: First 4 weeks include Mermaid diagrams and Plotly charts (no code).</Typography>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
