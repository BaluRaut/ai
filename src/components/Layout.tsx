import { ReactNode, useState, useEffect } from 'react'
import {
  Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  AppBar, Toolbar, Typography, IconButton, Divider, Chip, Menu, MenuItem,
  useTheme, useMediaQuery, LinearProgress, Avatar, Tooltip, TextField, InputAdornment, Paper
} from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import HomeIcon from '@mui/icons-material/Home'
import QuizIcon from '@mui/icons-material/Quiz'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import FeedbackIcon from '@mui/icons-material/Feedback'
import WorkIcon from '@mui/icons-material/Work'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import TerminalIcon from '@mui/icons-material/Terminal'
import SearchIcon from '@mui/icons-material/Search'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import LanguageIcon from '@mui/icons-material/Language'
import CloudIcon from '@mui/icons-material/Cloud'
import SchoolIcon from '@mui/icons-material/School'
import CloseIcon from '@mui/icons-material/Close'
import { useAppContext } from '../context/AppContext'
import { useTranslation } from '../i18n/useTranslation'
import { allTopics } from '../data/topics'
import { quizzes } from '../data/quizzes'
import { modules } from '../data/modules'

const DRAWER_WIDTH = 260
const COLLAPSED_DRAWER_WIDTH = 65

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [langMenuAnchor, setLangMenuAnchor] = useState<null | HTMLElement>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<{
    topics: typeof allTopics
    quizzes: typeof quizzes
  }>({ topics: [], quizzes: [] })
  const [showResults, setShowResults] = useState(false)

  const { settings, updateSettings, getProgressPercentage, progress } = useAppContext()
  const { t, language } = useTranslation()
  const progressPercentage = getProgressPercentage()

  // Search functionality
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults({ topics: [], quizzes: [] })
      setShowResults(false)
      return
    }

    const query = searchQuery.toLowerCase()
    
    const topicResults = allTopics.filter(topic => {
      const title = (language === 'mr' ? topic.titleMr : topic.title)?.toLowerCase() || ''
      const content = (language === 'mr' ? topic.contentMr : topic.content)?.toLowerCase() || ''
      return title.includes(query) || content.includes(query)
    }).slice(0, 5)

    const quizResults = quizzes.filter(quiz => 
      quiz.title.toLowerCase().includes(query)
    ).slice(0, 3)

    setSearchResults({ topics: topicResults, quizzes: quizResults })
    setShowResults(true)
  }, [searchQuery, language])

  const handleSearchResultClick = (path: string) => {
    navigate(path)
    setSearchQuery('')
    setShowResults(false)
  }

  const toggleTheme = () => {
    updateSettings({ theme: settings.theme === 'light' ? 'dark' : 'light' })
  }

  const toggleLanguage = (lang: 'en' | 'mr') => {
    updateSettings({ language: lang })
    setLangMenuAnchor(null)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const menuItems = [
    { text: t('navigation.home'), icon: <HomeIcon />, path: '/' },
    { text: t('navigation.quizPractice'), icon: <QuizIcon />, path: '/quiz-practice' },
    { text: t('navigation.bookmarks'), icon: <BookmarkIcon />, path: '/bookmarks' },
    { text: t('navigation.progress'), icon: <TrendingUpIcon />, path: '/progress' },
    { text: t('navigation.achievements'), icon: <EmojiEventsIcon />, path: '/achievements' },
    { text: t('navigation.giveFeedback'), icon: <FeedbackIcon />, path: '/feedback' },
  ]

  const resourceMenuItems = [
    { text: 'Interview Prep', icon: <WorkIcon />, path: '/interview-prep' },
    { text: 'Certifications', icon: <SchoolIcon />, path: '/certifications' },
    { text: 'Cost Management', icon: <AttachMoneyIcon />, path: '/cost-management' },
    { text: 'Shell Scripting', icon: <TerminalIcon />, path: '/shell-scripting' },
  ]

  const learningPaths = [
    {
      name: language === 'mr' ? 'क्लाउड पाया' : 'Cloud Foundations',
      level: t('learningPath.beginner'),
      icon: '🌱',
      color: '#4caf50',
      phase: 1
    },
    {
      name: language === 'mr' ? 'क्लाउड आवश्यक' : 'Cloud Essentials',
      level: t('learningPath.intermediate'),
      icon: '🚀',
      color: '#2196f3',
      phase: 2
    },
    {
      name: language === 'mr' ? 'क्लाउड प्रभुत्व' : 'Cloud Mastery',
      level: t('learningPath.advanced'),
      icon: '⚡',
      color: '#ff9800',
      phase: 3
    },
    {
      name: language === 'mr' ? 'क्लाउड तज्ञ' : 'Cloud Expert',
      level: t('learningPath.professional'),
      icon: '👑',
      color: '#9c27b0',
      phase: 4
    },
    {
      name: language === 'mr' ? 'FinOps गुरू' : 'FinOps Leadership',
      level: language === 'mr' ? 'खर्च गव्हर्नन्स' : 'Cost Governance',
      icon: '💸',
      color: '#00bcd4',
      phase: 5
    },
  ]

  const showResources = false

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', overflowX: 'hidden' }}>
      {/* Logo Section */}
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1, 
        borderBottom: 1, 
        borderColor: 'divider',
        justifyContent: isCollapsed ? 'center' : 'flex-start',
        minHeight: 64
      }}>
        <CloudIcon sx={{ fontSize: 32, color: 'primary.main' }} />
        {!isCollapsed && (
          <Typography variant="h6" noWrap sx={{ fontWeight: 'bold' }}>
            {language === 'mr' ? 'क्लाउड शिका' : 'Cloud Learning'}
          </Typography>
        )}
      </Box>

      <Divider />

      {/* Learning Paths Section */}
      <Box sx={{ px: isCollapsed ? 1 : 2, flex: 1, overflow: 'auto' }}>
        {!isCollapsed && (
          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, mb: 1, mt: 2, display: 'block' }}>
            {language === 'mr' ? 'शिकण्याचे मार्ग' : 'Learning Paths'}
          </Typography>
        )}
        <List sx={{ px: 0 }}>
          {learningPaths.map((path, index) => (
            <ListItem key={index} disablePadding sx={{ mb: 1, display: 'block' }}>
              <Tooltip title={isCollapsed ? path.name : ''} placement="right">
                <ListItemButton
                  onClick={() => {
                    navigate('/learning-path', { state: { phase: path.phase } })
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: isCollapsed ? 'center' : 'initial',
                    px: 2.5,
                    borderRadius: 2,
                    border: isCollapsed ? 0 : 1,
                    borderColor: 'divider',
                    '&:hover': {
                      borderColor: path.color,
                      bgcolor: `${path.color}10`,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: isCollapsed ? 'center' : 'flex-start' }}>
                    <Typography sx={{ fontSize: 24, mr: isCollapsed ? 0 : 1.5 }}>{path.icon}</Typography>
                    {!isCollapsed && (
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.875rem' }} noWrap>
                          {path.name}
                        </Typography>
                        <Chip
                          label={path.level}
                          size="small"
                          sx={{
                            height: 18,
                            fontSize: '0.65rem',
                            bgcolor: path.color,
                            color: 'white',
                            mt: 0.5
                          }}
                        />
                      </Box>
                    )}
                  </Box>
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Box>

      {showResources && (
        <Box sx={{ borderTop: 1, borderColor: 'divider', mt: 'auto' }}>
          {!isCollapsed && (
            <Box sx={{ p: 2, pb: 1 }}>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                📚 RESOURCES
              </Typography>
            </Box>
          )}
          <List sx={{ py: 0 }}>
            {resourceMenuItems.map((item) => (
              <Tooltip key={item.path} title={isCollapsed ? item.text : ''} placement="right">
                <ListItem disablePadding>
                  <ListItemButton 
                    onClick={() => navigate(item.path)}
                    selected={location.pathname === item.path}
                    sx={{ 
                      py: 1,
                      justifyContent: isCollapsed ? 'center' : 'flex-start',
                      '&.Mui-selected': { bgcolor: 'action.selected' }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: isCollapsed ? 'auto' : 40, color: 'primary.main' }}>
                      {item.icon}
                    </ListItemIcon>
                    {!isCollapsed && (
                      <ListItemText 
                        primary={item.text}
                        primaryTypographyProps={{ fontSize: '0.875rem' }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </Box>
      )}

      {/* Progress Section */}
      {!isCollapsed && (
        <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            {t('progress.yourProgress')}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <EmojiEventsIcon sx={{ fontSize: 20, color: 'warning.main' }} />
            <Chip
              label={`${progress.completedTopics.length} ${t('hero.topicsCompleted')}`}
              size="small"
              color="success"
              sx={{ fontSize: '0.75rem' }}
            />
          </Box>
          <LinearProgress
            variant="determinate"
            value={progressPercentage}
            sx={{ height: 6, borderRadius: 3 }}
          />
          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
            {progressPercentage}% {t('common.complete')}
          </Typography>
        </Box>
      )}
      
      {/* Collapse Button (Desktop Only) */}
      {!isMobile && (
        <Box sx={{ p: 1, borderTop: 1, borderColor: 'divider', display: 'flex', justifyContent: isCollapsed ? 'center' : 'flex-end' }}>
          <IconButton onClick={toggleCollapse}>
            {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
      )}
    </Box>
  )

  const currentDrawerWidth = isMobile ? DRAWER_WIDTH : (isCollapsed ? COLLAPSED_DRAWER_WIDTH : DRAWER_WIDTH)

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Top AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${currentDrawerWidth}px)` },
          ml: { md: `${currentDrawerWidth}px` },
          bgcolor: 'background.paper',
          color: 'text.primary',
          boxShadow: 1,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <CloudIcon sx={{ fontSize: 28, color: 'primary.main', mr: 1, display: { xs: 'none', md: 'block' } }} />
          <Typography variant="h6" noWrap component="div" sx={{ mr: 3, display: { xs: 'none', md: 'block' } }}>
            {language === 'mr' ? 'क्लाउड शिका' : 'Cloud Learning'}
          </Typography>

          {/* Search Bar */}
          <Box sx={{ flexGrow: 1, position: 'relative', maxWidth: 600, display: { xs: 'none', md: 'block' } }}>
            <TextField
              fullWidth
              size="small"
              placeholder={language === 'mr' ? 'विषय, प्रश्नमंजुषा शोधा...' : 'Search topics, quizzes...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: searchQuery && (
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={() => {
                      setSearchQuery('')
                      setShowResults(false)
                    }}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                  '&:hover': {
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                  },
                },
              }}
            />
            
            {/* Search Results Dropdown */}
            {showResults && (searchResults.topics.length > 0 || searchResults.quizzes.length > 0) && (
              <Paper
                elevation={8}
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  mt: 1,
                  maxHeight: 400,
                  overflow: 'auto',
                  zIndex: 1300,
                }}
              >
                {searchResults.topics.length > 0 && (
                  <Box>
                    <Box sx={{ px: 2, py: 1, bgcolor: 'primary.main', color: 'white', display: 'flex', alignItems: 'center', gap: 1 }}>
                      <SchoolIcon fontSize="small" />
                      <Typography variant="subtitle2">
                        {language === 'mr' ? 'विषय' : 'Topics'}
                      </Typography>
                    </Box>
                    <List dense>
                      {searchResults.topics.map((topic) => {
                        const module = modules.find(m => m.id === topic.moduleId)
                        return (
                          <ListItemButton
                            key={topic.id}
                            onClick={() => handleSearchResultClick(`/topic/${topic.id}`)}
                          >
                            <ListItemText
                              primary={language === 'mr' ? topic.titleMr : topic.title}
                              secondary={
                                <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <Chip
                                    label={language === 'mr' ? module?.titleMr : module?.title}
                                    size="small"
                                    variant="outlined"
                                    sx={{ height: 20, fontSize: '0.7rem' }}
                                  />
                                  <Typography variant="caption" component="span">
                                    {language === 'mr' ? 'दिवस' : 'Day'} {topic.day}
                                  </Typography>
                                </Box>
                              }
                            />
                          </ListItemButton>
                        )
                      })}
                    </List>
                  </Box>
                )}

                {searchResults.quizzes.length > 0 && (
                  <Box>
                    <Box sx={{ px: 2, py: 1, bgcolor: 'secondary.main', color: 'white', display: 'flex', alignItems: 'center', gap: 1 }}>
                      <QuizIcon fontSize="small" />
                      <Typography variant="subtitle2">
                        {language === 'mr' ? 'प्रश्नमंजुषा' : 'Quizzes'}
                      </Typography>
                    </Box>
                    <List dense>
                      {searchResults.quizzes.map((quiz) => (
                        <ListItemButton
                          key={quiz.id}
                          onClick={() => handleSearchResultClick(`/quiz/${quiz.id}`)}
                        >
                          <ListItemText
                            primary={quiz.title}
                            secondary={`${quiz.questions.length} ${language === 'mr' ? 'प्रश्न' : 'questions'}`}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Box>
                )}
              </Paper>
            )}
          </Box>

          {/* Navigation Menu Icons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, ml: 2 }}>
            {menuItems.map((item) => (
              <Tooltip key={item.path} title={item.text}>
                <IconButton
                  color={location.pathname === item.path ? 'primary' : 'inherit'}
                  onClick={() => navigate(item.path)}
                  sx={{
                    borderRadius: 2,
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { md: 'none' } }}>
            {language === 'mr' ? 'क्लाउड शिका' : 'Cloud Learning'}
          </Typography>

          {/* Language Switcher */}
          <IconButton
            onClick={(e) => setLangMenuAnchor(e.currentTarget)}
            sx={{ mr: 1 }}
          >
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={langMenuAnchor}
            open={Boolean(langMenuAnchor)}
            onClose={() => setLangMenuAnchor(null)}
          >
            <MenuItem onClick={() => toggleLanguage('en')} selected={language === 'en'}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography>🇬🇧</Typography>
                <Typography>English</Typography>
              </Box>
            </MenuItem>
            <MenuItem onClick={() => toggleLanguage('mr')} selected={language === 'mr'}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography>🇮🇳</Typography>
                <Typography>मराठी (Marathi)</Typography>
              </Box>
            </MenuItem>
          </Menu>

          {/* Theme Toggle */}
          <IconButton onClick={toggleTheme} color="inherit">
            {settings.theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/* User Avatar */}
          <IconButton sx={{ ml: 1 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
              N
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Box
        component="nav"
        sx={{ 
          width: { md: currentDrawerWidth }, 
          flexShrink: { md: 0 },
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: currentDrawerWidth,
              overflowX: 'hidden',
              transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${currentDrawerWidth}px)` },
          mt: '64px',
          minHeight: 'calc(100vh - 64px)',
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        {children}

        {/* Footer */}
        <Box sx={{ mt: 8, pt: 4, borderTop: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                {language === 'mr' ? '⚡ क्लाउड शिकणे' : '⚡ Cloud Learning'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {language === 'mr'
                  ? 'मूलभूत गोष्टींपासून प्रगत विकासापर्यंत क्लाउड प्रोग्रामिंग मास्टर करा'
                  : 'Master Cloud programming from basics to advanced development'}
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" gutterBottom>
                {t('footer.quickLinks')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                {t('navigation.home')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                {t('navigation.learningPath')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                {t('navigation.quizPractice')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                {t('navigation.progress')}
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" gutterBottom>
                {t('footer.legal')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                {t('footer.termsConditions')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                {t('footer.privacyPolicy')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                {t('footer.aboutUs')}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body2" color="text.secondary" align="center">
            © 2025 {language === 'mr' ? 'क्लाउड लर्निंग प्लॅटफॉर्म' : 'Cloud Learning Platform'}. {t('footer.allRightsReserved')}. {t('footer.madeWith')} ❤️ {t('footer.forLearners')}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

