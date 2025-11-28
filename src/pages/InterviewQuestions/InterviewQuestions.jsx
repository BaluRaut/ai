import { useState, useMemo } from 'react';
import {
  Box, Typography, Accordion, AccordionSummary, AccordionDetails, Chip,
  Stack, Paper, Tabs, Tab, TextField, InputAdornment, Card, CardContent,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { interviewQuestions } from '../../data/interviewQuestionsData';

const levelColors = { beginner: 'success', intermediate: 'warning', advanced: 'error' };

const InterviewQuestions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);

  const databases = Object.keys(interviewQuestions);
  const current = interviewQuestions[databases[activeTab]];

  const filtered = useMemo(() => {
    if (!search) return current.categories;
    const q = search.toLowerCase();
    return current.categories.map(cat => ({
      ...cat,
      questions: cat.questions.filter(item =>
        item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
      )
    })).filter(cat => cat.questions.length > 0);
  }, [current, search]);

  const totalQ = filtered.reduce((acc, cat) => acc + cat.questions.length, 0);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Database Interview Questions</Typography>
      <Typography color="text.secondary" paragraph>
        Prepare for interviews with comprehensive Q&A covering SQL, MongoDB, Redis, and PostgreSQL.
      </Typography>

      <Paper sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={(e, v) => { setActiveTab(v); setSearch(''); setExpanded(null); }} variant="scrollable">
          {databases.map((db, i) => (
            <Tab key={db} label={`${interviewQuestions[db].icon} ${interviewQuestions[db].title}`} />
          ))}
        </Tabs>
      </Paper>

      <TextField
        fullWidth placeholder="Search questions..." value={search}
        onChange={e => setSearch(e.target.value)} sx={{ mb: 3 }}
        InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment> }}
      />

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Showing {totalQ} questions in {filtered.length} categories
      </Typography>

      {filtered.map((cat, catIdx) => (
        <Card key={catIdx} sx={{ mb: 3 }}>
          <CardContent sx={{ pb: 1 }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <Typography variant="h6">{cat.name}</Typography>
              <Chip label={cat.level} size="small" color={levelColors[cat.level]} />
              <Chip label={`${cat.questions.length} Q`} size="small" variant="outlined" />
            </Stack>

            {cat.questions.map((item, qIdx) => {
              const id = `${catIdx}-${qIdx}`;
              return (
                <Accordion key={qIdx} expanded={expanded === id} onChange={() => setExpanded(expanded === id ? null : id)} sx={{ '&:before': { display: 'none' } }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ fontWeight: 500 }}>{item.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Paper sx={{ bgcolor: 'grey.900', p: 2 }}>
                      <Typography component="pre" sx={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: '0.9rem', color: 'grey.100', m: 0 }}>
                        {item.a}
                      </Typography>
                    </Paper>
                    {item.code && (
                      <Paper sx={{ bgcolor: 'grey.800', p: 2, mt: 2 }}>
                        <pre style={{ margin: 0, fontSize: '12px', color: '#4fc3f7', overflow: 'auto' }}>{item.code}</pre>
                      </Paper>
                    )}
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </CardContent>
        </Card>
      ))}

      {!filtered.length && (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography color="text.secondary">No questions match "{search}"</Typography>
        </Paper>
      )}
    </Box>
  );
};

export default InterviewQuestions;
