import React from 'react'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'

function ChapterList({ chapters, selectedChapter, onSelectChapter }) {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ px: 2, py: 1 }}>
        Chapters
      </Typography>
      <List>
        {chapters.map((chapter, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              selected={selectedChapter === index}
              onClick={() => onSelectChapter(index)}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                '&.Mui-selected': {
                  backgroundColor: 'primary.light',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                  },
                },
              }}
            >
              <ListItemText
                primary={`${index + 1}. ${chapter.title}`}
                secondary={chapter.level}
                secondaryTypographyProps={{
                  sx: {
                    color: selectedChapter === index ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default ChapterList