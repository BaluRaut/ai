import { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Note as NoteIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Download as DownloadIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const PersonalNotes = ({ topicId, topicTitle }) => {
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // Load notes from localStorage
  useEffect(() => {
    const savedNotes = localStorage.getItem(`notes_${topicId}`);
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, [topicId]);

  // Save notes to localStorage
  const saveNotes = (updatedNotes) => {
    localStorage.setItem(`notes_${topicId}`, JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  const handleAddNote = () => {
    if (!currentNote.trim()) return;

    const newNote = {
      id: Date.now(),
      content: currentNote,
      timestamp: new Date().toISOString(),
    };

    if (editingIndex !== null) {
      const updated = [...notes];
      updated[editingIndex] = { ...updated[editingIndex], content: currentNote };
      saveNotes(updated);
      setEditingIndex(null);
    } else {
      saveNotes([...notes, newNote]);
    }

    setCurrentNote('');
    setOpen(false);
  };

  const handleEditNote = (index) => {
    setCurrentNote(notes[index].content);
    setEditingIndex(index);
    setOpen(true);
  };

  const handleDeleteNote = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    saveNotes(updated);
  };

  const handleExportNotes = () => {
    const text = notes
      .map((note, i) => {
        const date = new Date(note.timestamp).toLocaleString();
        return `Note ${i + 1} (${date}):\n${note.content}\n\n`;
      })
      .join('---\n\n');

    const blob = new Blob([`${topicTitle} - Personal Notes\n\n${text}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${topicTitle.replace(/[^a-z0-9]/gi, '_')}_notes.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <NoteIcon color="primary" />
            Personal Notes
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {notes.length > 0 && (
              <Button
                size="small"
                startIcon={<DownloadIcon />}
                onClick={handleExportNotes}
              >
                Export
              </Button>
            )}
            <Button
              variant="contained"
              size="small"
              startIcon={<AddIcon />}
              onClick={() => {
                setCurrentNote('');
                setEditingIndex(null);
                setOpen(true);
              }}
            >
              Add Note
            </Button>
          </Box>
        </Box>

        {notes.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
            <NoteIcon sx={{ fontSize: 48, mb: 1, opacity: 0.3 }} />
            <Typography>No notes yet. Add your first note to remember key points!</Typography>
          </Box>
        ) : (
          <List sx={{ p: 0 }}>
            {notes.map((note, index) => (
              <Box key={note.id}>
                {index > 0 && <Divider sx={{ my: 2 }} />}
                <ListItem
                  sx={{ px: 0 }}
                  secondaryAction={
                    <Box>
                      <IconButton edge="end" onClick={() => handleEditNote(index)} sx={{ mr: 1 }}>
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" onClick={() => handleDeleteNote(index)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  }
                >
                  <ListItemText
                    primary={note.content}
                    secondary={new Date(note.timestamp).toLocaleString()}
                    primaryTypographyProps={{
                      sx: { whiteSpace: 'pre-wrap', pr: 10 }
                    }}
                  />
                </ListItem>
              </Box>
            ))}
          </List>
        )}
      </Paper>

      {/* Add/Edit Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {editingIndex !== null ? 'Edit Note' : 'Add New Note'}
            <IconButton onClick={() => setOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            multiline
            rows={8}
            placeholder="Write your notes here... Include key concepts, questions, or personal insights."
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
            sx={{ mt: 1 }}
          />
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            💡 Tip: Your notes are saved locally and synced across your browser sessions
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddNote} disabled={!currentNote.trim()}>
            {editingIndex !== null ? 'Update' : 'Add Note'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PersonalNotes;
