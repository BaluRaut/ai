import React, { useMemo } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Chip, Stack, Box, List, ListItem, ListItemText, Divider, Card, CardContent, Grid } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import QuizIcon from '@mui/icons-material/Quiz'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import MermaidBlock from './MermaidBlock.jsx'
import PlotlyBlock from './PlotlyBlock.jsx'

function generate3DaySchedule(chapter, index) {
  const baseDay = index * 3 + 1
  return [
    { day: baseDay, title: 'Learn & diagram', task: 'Study the core concepts. If diagrams are provided, review them.' },
    { day: baseDay + 1, title: 'Practice & small build', task: 'Hands-on practice. Implement a tiny demo or replicate an example.' },
    { day: baseDay + 2, title: 'Mini project & reflection', task: 'Create a small end-to-end demo or summary. Note open questions.' }
  ]
}

export default function ChapterAccordion({ chapter, index }) {
  const schedule = useMemo(() => generate3DaySchedule(chapter, index), [chapter, index])
  const showCodeTracks = !(chapter.flags && chapter.flags.noCode)
  return (
    <Accordion disableGutters elevation={2} sx={{ borderRadius: 2, overflow: 'hidden' }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>{chapter.title}</Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {chapter.tags.map((t) => (<Chip key={t} label={t} size="small" />))}
            <Chip icon={<CheckCircleIcon />} color="success" size="small" label="3-day plan" />
          </Stack>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card variant="outlined"><CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>What</Typography>
              <List dense>{chapter.what.map((w,i)=>(<ListItem key={i} disablePadding><ListItemText primary={w}/></ListItem>))}</List>
            </CardContent></Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined"><CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Why</Typography>
              <List dense>{chapter.why.map((w,i)=>(<ListItem key={i} disablePadding><ListItemText primary={w}/></ListItem>))}</List>
            </CardContent></Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined"><CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>How</Typography>
              <List dense>{chapter.how.map((w,i)=>(<ListItem key={i} disablePadding><ListItemText primary={w}/></ListItem>))}</List>
            </CardContent></Card>
          </Grid>
        </Grid>

        {chapter.mermaid && (<Box sx={{ mt: 2 }}><Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Concept Diagram (Mermaid)</Typography><MermaidBlock chart={chapter.mermaid} id={chapter.id} /></Box>)}
        {chapter.plotly && (<Box sx={{ mt: 2 }}><Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Illustrative Chart (Plotly)</Typography><PlotlyBlock data={chapter.plotly.data} layout={chapter.plotly.layout} /></Box>)}

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Key resources</Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
          {chapter.resources.map((r, idx) => (
            <Chip key={idx} icon={<MenuBookIcon />} label={r.label} component="a" href={r.url} target="_blank" clickable variant="outlined" />
          ))}
        </Stack>

        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>3-Day Schedule</Typography>
        <Grid container spacing={2}>
          {schedule.map((d) => (
            <Grid key={d.day} item xs={12} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    <Chip size="small" color="primary" label={`Day ${d.day}`} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{d.title}</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ mb: 1 }}>{d.task}</Typography>
                  <Divider sx={{ my: 1 }} />
                  {showCodeTracks ? (
                    <>
                      <Typography variant="caption" sx={{ fontWeight: 700, opacity: 0.8 }}>Python</Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>{chapter.tracks?.python || 'Implement week concept in Python.'}</Typography>
                      <Typography variant="caption" sx={{ fontWeight: 700, opacity: 0.8 }}>JavaScript / TF.js</Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>{chapter.tracks?.js || 'Replicate in JS/TF.js.'}</Typography>
                    </>
                  ) : (
                    <Typography variant="caption" sx={{ fontStyle: 'italic', opacity: 0.8 }}>This week focuses on concepts only (no Python/JS tasks).</Typography>
                  )}

                  {chapter.topicReferences && chapter.topicReferences.length > 0 && (
                    <>
                      <Divider sx={{ my: 1 }} />
                      <Typography variant="caption" sx={{ fontWeight: 700, opacity: 0.8 }}>Topic References</Typography>
                      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
                        {chapter.topicReferences.map((r, idx) => (
                          <Chip key={idx} label={r.label} component="a" href={r.url} target="_blank" clickable size="small" variant="outlined" />
                        ))}
                      </Stack>
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {(chapter.exercises || chapter.quiz) && (
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Card variant="outlined"><CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}><TaskAltIcon fontSize="small" /><Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Quick Exercises</Typography></Stack>
                <List dense>{(chapter.exercises || []).map((e,i)=>(<ListItem key={i} disablePadding><ListItemText primary={e}/></ListItem>))}</List>
              </CardContent></Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined"><CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}><QuizIcon fontSize="small" /><Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Quiz (self-check)</Typography></Stack>
                <List dense>{(chapter.quiz || []).map((q,i)=>(<ListItem key={i} disablePadding><ListItemText primary={q}/></ListItem>))}</List>
              </CardContent></Card>
            </Grid>
          </Grid>
        )}
      </AccordionDetails>
    </Accordion>
  )
}
