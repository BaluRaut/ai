import { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  Collapse,
  Divider,
  Chip,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import NoteIcon from '@mui/icons-material/Note';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SaveIcon from '@mui/icons-material/Save';

const NotesSection = ({ topicId, topicTitle }) => {
  const [notes, setNotes] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [noteText, setNoteText] = useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  // Load notes from localStorage
  useEffect(() => {
    const savedNotes = localStorage.getItem(`notes_${topicId}`);
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, [topicId]);

  // Save notes to localStorage
  const saveNotes = (newNotes) => {
    setNotes(newNotes);
    localStorage.setItem(`notes_${topicId}`, JSON.stringify(newNotes));
  };

  const addNote = () => {
    if (noteText.trim()) {
      const newNote = {
        id: Date.now(),
        text: noteText.trim(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      saveNotes([...notes, newNote]);
      setNoteText('');
      setIsAdding(false);
    }
  };

  const updateNote = (id) => {
    if (noteText.trim()) {
      const updatedNotes = notes.map(note =>
        note.id === id
          ? { ...note, text: noteText.trim(), updatedAt: new Date().toISOString() }
          : note
      );
      saveNotes(updatedNotes);
      setNoteText('');
      setEditingId(null);
    }
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    saveNotes(updatedNotes);
    setDeleteDialogOpen(false);
    setNoteToDelete(null);
  };

  const startEditing = (note) => {
    setEditingId(note.id);
    setNoteText(note.text);
    setIsAdding(false);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setNoteText('');
    setIsAdding(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Paper elevation={2} sx={{ mt: 4 }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          cursor: 'pointer',
          '&:hover': { bgcolor: 'action.hover' },
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <NoteIcon color="primary" />
          <Typography variant="h6">My Notes</Typography>
          {notes.length > 0 && (
            <Chip size="small" label={notes.length} color="primary" />
          )}
        </Box>
        <IconButton size="small">
          {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      <Collapse in={isExpanded}>
        <Divider />
        <Box sx={{ p: 2 }}>
          {/* Add Note Button */}
          {!isAdding && !editingId && (
            <Button
              startIcon={<AddIcon />}
              variant="outlined"
              onClick={() => {
                setIsAdding(true);
                setNoteText('');
              }}
              sx={{ mb: 2 }}
            >
              Add Note
            </Button>
          )}

          {/* Add/Edit Form */}
          {(isAdding || editingId) && (
            <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Write your note here... (Markdown supported)"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                autoFocus
                sx={{ mb: 2 }}
              />
              <Stack direction="row" spacing={1}>
                <Button
                  variant="contained"
                  startIcon={<SaveIcon />}
                  onClick={() => (editingId ? updateNote(editingId) : addNote())}
                  disabled={!noteText.trim()}
                >
                  {editingId ? 'Update' : 'Save'}
                </Button>
                <Button variant="outlined" onClick={cancelEditing}>
                  Cancel
                </Button>
              </Stack>
            </Paper>
          )}

          {/* Notes List */}
          {notes.length === 0 ? (
            <Typography variant="body2" color="text.secondary" textAlign="center" py={4}>
              No notes yet. Add your first note to remember key concepts!
            </Typography>
          ) : (
            <List>
              {notes
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((note) => (
                  <ListItem
                    key={note.id}
                    sx={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      bgcolor: 'background.default',
                      borderRadius: 1,
                      mb: 1,
                      border: 1,
                      borderColor: 'divider',
                    }}
                  >
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Typography
                        variant="body1"
                        sx={{
                          whiteSpace: 'pre-wrap',
                          flex: 1,
                          pr: 1,
                        }}
                      >
                        {note.text}
                      </Typography>
                      <Stack direction="row" spacing={0.5}>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            startEditing(note);
                          }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={(e) => {
                            e.stopPropagation();
                            setNoteToDelete(note);
                            setDeleteDialogOpen(true);
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Stack>
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                      {note.updatedAt !== note.createdAt
                        ? `Updated ${formatDate(note.updatedAt)}`
                        : `Created ${formatDate(note.createdAt)}`}
                    </Typography>
                  </ListItem>
                ))}
            </List>
          )}
        </Box>
      </Collapse>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Note?</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this note? This action cannot be undone.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => noteToDelete && deleteNote(noteToDelete.id)}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default NotesSection;
