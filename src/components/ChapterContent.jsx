import React from 'react'
import {
  Paper,
  Typography,
  Box,
  Chip,
  Divider,
} from '@mui/material'
import CodeSnippet from './CodeSnippet'
import InfoIcon from '@mui/icons-material/Info'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import BuildIcon from '@mui/icons-material/Build'

function ChapterContent({ chapter }) {
  return (
    <Paper elevation={2} sx={{ p: { xs: 2, md: 4 } }}>
      {/* Chapter Header */}
      <Box sx={{ mb: 3 }}>
        <Chip label={chapter.level} color="secondary" size="small" sx={{ mb: 2 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          {chapter.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {chapter.description}
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* What Section */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <InfoIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h5" component="h2">
            What is it?
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          {chapter.what}
        </Typography>
      </Box>

      {/* Why Section */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <EmojiObjectsIcon sx={{ mr: 1, color: 'secondary.main' }} />
          <Typography variant="h5" component="h2">
            Why should you learn this?
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          {chapter.why}
        </Typography>
      </Box>

      {/* How Section */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <BuildIcon sx={{ mr: 1, color: 'success.main' }} />
          <Typography variant="h5" component="h2">
            How to use it?
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          {chapter.how}
        </Typography>

        {/* Code Examples */}
        {chapter.codeExamples.map((example, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Example {index + 1}: {example.title}
            </Typography>
            <CodeSnippet code={example.code} />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {example.explanation}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  )
}

export default ChapterContent