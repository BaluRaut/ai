import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          {t('terms.title', 'Terms & Conditions')}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {t('terms.lastUpdated', 'Last Updated')}: November 18, 2025
        </Typography>
        
        <Divider sx={{ my: 3 }} />

        <Box sx={{ '& > *': { mb: 3 } }}>
          {/* Introduction */}
          <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              1. {t('terms.introduction', 'Introduction')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('terms.introText', 'Welcome to Python Learning Platform. By accessing and using this platform, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our platform.')}
            </Typography>
          </Box>

          {/* Educational Purpose */}
          <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              2. {t('terms.educationalPurpose', 'Educational Purpose')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('terms.educationalText', 'This platform is provided for educational purposes only. All content, including tutorials, code examples, and projects, is intended to help you learn Python programming. We make no guarantees about job placement, certification, or specific outcomes.')}
            </Typography>
          </Box>

          {/* Content Usage */}
          <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              3. {t('terms.contentUsage', 'Content Usage')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('terms.contentUsageText', 'All code examples and projects provided on this platform are for learning purposes. You are free to use, modify, and distribute the code for personal and commercial projects. However, you may not republish or redistribute the entire course content without permission.')}
            </Typography>
          </Box>

          {/* User Responsibilities */}
          <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              4. {t('terms.userResponsibilities', 'User Responsibilities')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('terms.userResponsibilitiesText', 'You agree to use the platform in compliance with all applicable laws and regulations. You are responsible for your own learning progress and the use of any code examples provided.')}
            </Typography>
          </Box>

          {/* Intellectual Property */}
          <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              5. {t('terms.intellectualProperty', 'Intellectual Property')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('terms.intellectualPropertyText', 'The platform content, design, and materials are protected by copyright and other intellectual property laws. The Python Learning Platform name and logo are trademarks. You may not use them without prior written permission.')}
            </Typography>
          </Box>

          {/* Disclaimer */}
          <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              6. {t('terms.disclaimer', 'Disclaimer')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('terms.disclaimerText', 'The platform and its content are provided "as is" without warranties of any kind. We do not guarantee that the platform will be uninterrupted, secure, or error-free. Use of code examples in production environments is at your own risk.')}
            </Typography>
          </Box>

          {/* Limitation of Liability */}
          <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              7. {t('terms.limitationOfLiability', 'Limitation of Liability')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('terms.limitationText', 'In no event shall Python Learning Platform be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the platform.')}
            </Typography>
          </Box>

          {/* Changes to Terms */}
          <Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              8. {t('terms.changesToTerms', 'Changes to Terms')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('terms.changesText', 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the platform. Your continued use of the platform after changes constitutes acceptance of the modified terms.')}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Terms;
