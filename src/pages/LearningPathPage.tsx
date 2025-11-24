import { useEffect } from 'react'
import { Typography, Box, Paper, Chip } from '@mui/material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab'
import { useLocation, useNavigate } from 'react-router-dom'
import { learningPath } from '../data/learningPath'
import { allTopics } from '../data/topics'

export default function LearningPathPage() {
  const location = useLocation()
  const navigate = useNavigate()
  
  const groupedByPhase = learningPath.reduce((acc, day) => {
    if (!acc[day.phase]) {
      acc[day.phase] = []
    }
    acc[day.phase].push(day)
    return acc
  }, {} as Record<string, typeof learningPath>)

  // Map numeric phases from sidebar to string phases in data
  const phaseMap: Record<string, string> = {
    '1': 'Foundation',
    '2': 'Foundation', // Mapping multiple to Foundation as data is limited
    '3': 'DevOps',
    '4': 'Web Services',
    '5': 'FinOps',
    '6': 'Web Services' // Mapping to existing data
  }

  useEffect(() => {
    // Handle both query params and state
    const params = new URLSearchParams(location.search)
    const phaseParam = params.get('phase')
    const statePhase = (location.state as any)?.phase
    
    const targetPhase = phaseParam || statePhase
    
    if (targetPhase) {
      const phaseName = phaseMap[targetPhase.toString()]
      if (phaseName) {
        const element = document.getElementById(`phase-${phaseName}`)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 100)
        }
      }
    }
  }, [location])

  const handleTopicClick = (topicName: string) => {
    // Try to find matching topic in our database
    // We use loose matching because learning path names might differ slightly from topic titles
    const topic = allTopics.find(t => 
      t.title.toLowerCase().includes(topicName.toLowerCase()) || 
      topicName.toLowerCase().includes(t.title.toLowerCase())
    )

    if (topic) {
      navigate(`/topic/${topic.id}`)
    }
  }

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        📅 365-Day Learning Path
      </Typography>
      <Typography variant="body1" paragraph color="text.secondary">
        Follow this structured path to master cloud computing. Each day builds on previous knowledge.
      </Typography>

      {Object.entries(groupedByPhase).map(([phase, days]) => (
        <Box key={phase} id={`phase-${phase}`} sx={{ mb: 6, scrollMarginTop: '80px' }}>
          <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 3, color: 'primary.main', borderBottom: 2, borderColor: 'primary.light', display: 'inline-block', pb: 1 }}>
            {phase} Phase
          </Typography>
          <Timeline position="alternate">
            {days.map((day, index) => (
              <TimelineItem key={day.day}>
                <TimelineOppositeContent color="text.secondary">
                  Day {day.day}
                  <br />
                  {day.estimatedHours}h
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {index < days.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6" component="span" display="block" gutterBottom>
                      {day.module}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {day.topics.map((topic, i) => {
                        const isClickable = allTopics.some(t => 
                          t.title.toLowerCase().includes(topic.toLowerCase()) || 
                          topic.toLowerCase().includes(t.title.toLowerCase())
                        )
                        return (
                          <Chip 
                            key={i} 
                            label={topic} 
                            size="small" 
                            onClick={() => handleTopicClick(topic)}
                            sx={{ 
                              mr: 1, 
                              mb: 1,
                              cursor: isClickable ? 'pointer' : 'default',
                              bgcolor: isClickable ? 'primary.light' : 'action.hover',
                              color: isClickable ? 'primary.contrastText' : 'text.primary',
                              '&:hover': isClickable ? { bgcolor: 'primary.main' } : {}
                            }} 
                          />
                        )
                      })}
                    </Box>
                    <Chip label={day.practicalExercise} size="small" color="secondary" variant="outlined" />
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      ))}

      <Box sx={{ mt: 6, p: 4, backgroundColor: '#e3f2fd', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          📊 Program Statistics
        </Typography>
        <Typography variant="body1">
          • Total Days: 365<br />
          • Learning Modules: 14<br />
          • Practical Exercises: 365+<br />
          • Estimated Total Hours: 730-1095<br />
          • Career-Ready in: 1 Year
        </Typography>
      </Box>
    </Box>
  )
}

