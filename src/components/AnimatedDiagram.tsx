import { useEffect, useRef } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import mermaid from 'mermaid'
import { motion } from 'framer-motion'

interface DiagramProps {
  code: string
  title: string
}

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
})

export default function AnimatedDiagram({ code, title }: DiagramProps) {
  const mermaidRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const renderDiagram = async () => {
      if (mermaidRef.current && code) {
        try {
          // Generate a unique ID for this render
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
          
          // mermaid.render returns an object with svg property in v10+
          const { svg } = await mermaid.render(id, code)
          
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svg
          }
        } catch (error) {
          console.error('Mermaid rendering failed:', error)
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = `<div style="color: red; padding: 10px;">Failed to render diagram. Please check the syntax.</div>`
          }
        }
      }
    }

    renderDiagram()
  }, [code])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper elevation={3} sx={{ p: 3, my: 3, bgcolor: 'background.paper' }}>
        <Typography variant="h6" gutterBottom align="center" color="primary">
          📊 {title}
        </Typography>
        <Box
          ref={mermaidRef}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '100px',
            '& svg': {
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '400px'
            }
          }}
        />
      </Paper>
    </motion.div>
  )
}

