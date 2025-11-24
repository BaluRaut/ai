import { useState, useEffect } from 'react'
import {
  Dialog, DialogTitle, DialogContent, TextField, List, ListItem,
  ListItemButton, ListItemText, Box, Typography, Chip, InputAdornment,
  IconButton, Divider
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import SchoolIcon from '@mui/icons-material/School'
import QuizIcon from '@mui/icons-material/Quiz'
import { allTopics } from '../data/topics'
import { quizzes } from '../data/quizzes'
import { modules } from '../data/modules'
import { useTranslation } from '../i18n/useTranslation'

interface SearchDialogProps {
  open: boolean
  onClose: () => void
}

export default function SearchDialog({ open, onClose }: SearchDialogProps) {
  const navigate = useNavigate()
  const { language } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<{
    topics: typeof allTopics
    quizzes: typeof quizzes
  }>({ topics: [], quizzes: [] })

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults({ topics: [], quizzes: [] })
      return
    }

    const query = searchQuery.toLowerCase()

    // Search topics
    const topicResults = allTopics.filter(topic => {
      const title = (language === 'mr' ? topic.titleMr : topic.title)?.toLowerCase() || ''
      const content = (language === 'mr' ? topic.contentMr : topic.content)?.toLowerCase() || ''
      return title.includes(query) || content.includes(query)
    }).slice(0, 10)

    // Search quizzes
    const quizResults = quizzes.filter(quiz => 
      quiz.title.toLowerCase().includes(query)
    ).slice(0, 5)

    setResults({ topics: topicResults, quizzes: quizResults })
  }, [searchQuery, language])

  const handleTopicClick = (topicId: string) => {
    navigate(`/topic/${topicId}`)
    onClose()
    setSearchQuery('')
  }

  const handleQuizClick = (quizId: string) => {
    navigate(`/quiz/${quizId}`)
    onClose()
    setSearchQuery('')
  }

  const totalResults = results.topics.length + results.quizzes.length

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          position: 'fixed',
          top: 80,
          m: 0
        }
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
        <Typography variant="h6">
          {language === 'mr' ? 'शोध' : 'Search'}
        </Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ pt: 1 }}>
        <TextField
          fullWidth
          autoFocus
          placeholder={language === 'mr' ? 'विषय, प्रश्नमंजुषा शोधा...' : 'Search topics, quizzes...'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />

        {searchQuery && totalResults === 0 && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography color="text.secondary">
              {language === 'mr' ? 'कोणतेही परिणाम आढळले नाहीत' : 'No results found'}
            </Typography>
          </Box>
        )}

        {/* Topics Results */}
        {results.topics.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <SchoolIcon fontSize="small" color="primary" />
              <Typography variant="subtitle2" color="primary">
                {language === 'mr' ? 'विषय' : 'Topics'} ({results.topics.length})
              </Typography>
            </Box>
            <List disablePadding>
              {results.topics.map((topic) => {
                const module = modules.find(m => m.id === topic.moduleId)
                return (
                  <ListItem key={topic.id} disablePadding>
                    <ListItemButton onClick={() => handleTopicClick(topic.id)}>
                      <ListItemText
                        primary={language === 'mr' ? topic.titleMr : topic.title}
                        secondary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                            <Chip
                              label={language === 'mr' ? module?.titleMr : module?.title}
                              size="small"
                              variant="outlined"
                            />
                            <Typography variant="caption" color="text.secondary">
                              {language === 'mr' ? 'दिवस' : 'Day'} {topic.day}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        )}

        {results.topics.length > 0 && results.quizzes.length > 0 && <Divider sx={{ my: 2 }} />}

        {/* Quizzes Results */}
        {results.quizzes.length > 0 && (
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <QuizIcon fontSize="small" color="secondary" />
              <Typography variant="subtitle2" color="secondary">
                {language === 'mr' ? 'प्रश्नमंजुषा' : 'Quizzes'} ({results.quizzes.length})
              </Typography>
            </Box>
            <List disablePadding>
              {results.quizzes.map((quiz) => {
                const module = modules.find(m => m.id === quiz.moduleId)
                return (
                  <ListItem key={quiz.id} disablePadding>
                    <ListItemButton onClick={() => handleQuizClick(quiz.id)}>
                      <ListItemText
                        primary={quiz.title}
                        secondary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                            <Chip
                              label={language === 'mr' ? module?.titleMr : module?.title}
                              size="small"
                              variant="outlined"
                            />
                            <Typography variant="caption" color="text.secondary">
                              {quiz.questions.length} {language === 'mr' ? 'प्रश्न' : 'questions'}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        )}

        {searchQuery && totalResults > 0 && (
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2, textAlign: 'center' }}>
            {language === 'mr' 
              ? `${totalResults} परिणाम आढळले`
              : `${totalResults} results found`
            }
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  )
}
