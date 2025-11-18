import { Box, Container, Typography, Link, Divider, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Code, GitHub, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Code sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6" fontWeight={700}>
                Python Learning
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph>
              {t('footer.description', 'Master Python programming from basics to advanced with interactive tutorials, hands-on projects, and real-world applications.')}
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {t('footer.quickLinks', 'Quick Links')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" underline="hover" color="text.secondary">
                {t('nav.home')}
              </Link>
              <Link href="/path/beginner" underline="hover" color="text.secondary">
                {t('nav.learningPaths')}
              </Link>
              <Link href="/quiz-practice" underline="hover" color="text.secondary">
                {t('nav.quizPractice')}
              </Link>
              <Link href="/progress" underline="hover" color="text.secondary">
                {t('nav.progress')}
              </Link>
            </Box>
          </Grid>

          {/* Legal & Social */}
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {t('footer.legal', 'Legal')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
              <Link href="/terms" underline="hover" color="text.secondary">
                {t('footer.terms', 'Terms & Conditions')}
              </Link>
              <Link href="/privacy" underline="hover" color="text.secondary">
                {t('footer.privacy', 'Privacy Policy')}
              </Link>
              <Link href="/about" underline="hover" color="text.secondary">
                {t('footer.about', 'About Us')}
              </Link>
            </Box>
            
            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Link href="https://github.com" target="_blank" rel="noopener" color="text.secondary">
                <GitHub />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener" color="text.secondary">
                <Twitter />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener" color="text.secondary">
                <LinkedIn />
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Python Learning Platform. {t('footer.rights', 'All rights reserved.')}{' '}
            {t('footer.madeWith', 'Made with')} ❤️ {t('footer.forLearners', 'for Python learners')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
