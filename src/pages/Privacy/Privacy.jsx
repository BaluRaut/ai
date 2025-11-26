import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Security, Storage, Cookie, Public, Shield, Person, ChildCare, Edit, Email, CheckCircle } from '@mui/icons-material';

const Privacy = () => {
  const { t } = useTranslation();

  const Section = ({ number, title, icon, children }) => (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        {icon}
        <Typography variant="h5" fontWeight={600}>
          {number}. {title}
        </Typography>
      </Box>
      {children}
    </Box>
  );

  const BulletList = ({ items, icon = <CheckCircle color="primary" fontSize="small" /> }) => (
    <List dense>
      {items.map((item, index) => (
        <ListItem key={index} sx={{ py: 0.5 }}>
          <ListItemIcon sx={{ minWidth: 36 }}>{icon}</ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Container maxWidth="md" sx={{ py: 4, minHeight: '100vh', bgcolor: 'background.default' }}>
      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Security sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="h3" fontWeight={700} gutterBottom>
            {t('privacy.title', 'Privacy Policy')}
          </Typography>
          <Chip 
            label={`${t('privacy.lastUpdated', 'Last Updated')}: ${t('privacy.effectiveDate', 'November 26, 2025')}`}
            variant="outlined"
            color="primary"
          />
        </Box>
        
        <Divider sx={{ my: 3 }} />

        {/* 1. Introduction */}
        <Section number={1} title={t('privacy.introduction', 'Introduction')} icon={<Security color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('privacy.introText', 'AI Learner (\'we\', \'our\', \'us\') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.')}
          </Typography>
        </Section>

        {/* 2. Information We Collect */}
        <Section number={2} title={t('privacy.dataCollection', 'Information We Collect')} icon={<Storage color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('privacy.dataCollectionText', 'We collect the following types of information:')}
          </Typography>
          <Box sx={{ pl: 2, borderLeft: 3, borderColor: 'primary.main' }}>
            <Typography variant="body2" paragraph>
              • <strong>{t('privacy.localStorage', 'Local Storage')}</strong> - Learning progress, bookmarks, and preferences stored locally in your browser
            </Typography>
            <Typography variant="body2" paragraph>
              • <strong>{t('privacy.analytics', 'Analytics')}</strong> - Anonymous usage data including page views, feature usage, and performance metrics
            </Typography>
            <Typography variant="body2" paragraph>
              • <strong>{t('privacy.device', 'Device Info')}</strong> - Browser type, device information, and operating system for optimization
            </Typography>
            <Typography variant="body2" paragraph>
              • <strong>{t('privacy.voluntary', 'Voluntary Info')}</strong> - Any information you voluntarily provide through contact forms or feedback
            </Typography>
          </Box>
        </Section>

        {/* 3. How We Use Your Information */}
        <Section number={3} title={t('privacy.dataUsage', 'How We Use Your Information')} icon={<Storage color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('privacy.dataUsageText', 'We use collected information to:')}
          </Typography>
          <BulletList items={[
            'Save and restore your learning progress',
            'Personalize your learning experience',
            'Improve platform performance and features',
            'Analyze usage patterns to enhance content',
            'Respond to your inquiries and support requests'
          ]} />
        </Section>

        {/* 4. Cookies & Local Storage */}
        <Section number={4} title={t('privacy.cookies', 'Cookies & Local Storage')} icon={<Cookie color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('privacy.cookiesText', 'We use cookies and local storage to:')}
          </Typography>
          <BulletList items={[
            'Remember your preferences and settings',
            'Store your learning progress locally',
            'Maintain your language preference',
            'Enable dark/light theme persistence'
          ]} />
        </Section>

        {/* 5. Third-Party Services */}
        <Section number={5} title={t('privacy.thirdParty', 'Third-Party Services')} icon={<Public color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('privacy.thirdPartyText', 'We may use third-party services that have their own privacy policies:')}
          </Typography>
          <BulletList items={[
            'Google Analytics for anonymous usage tracking',
            'Pyodide for in-browser Python execution',
            'Content delivery networks (CDNs) for performance'
          ]} />
        </Section>

        {/* 6. Data Security */}
        <Section number={6} title={t('privacy.dataSecurity', 'Data Security')} icon={<Shield color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('privacy.dataSecurityText', 'We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure.')}
          </Typography>
          <Box sx={{ p: 2, bgcolor: 'info.light', borderRadius: 1, mt: 2 }}>
            <Typography variant="body2" color="info.contrastText">
              💡 <strong>Pro Tip:</strong> Most of your data is stored locally in your browser. You can clear this data anytime through your browser settings.
            </Typography>
          </Box>
        </Section>

        {/* 7. Your Rights */}
        <Section number={7} title={t('privacy.yourRights', 'Your Rights')} icon={<Person color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('privacy.yourRightsText', 'You have the right to:')}
          </Typography>
          <BulletList items={[
            'Access the personal information we hold about you',
            'Request correction of inaccurate information',
            'Request deletion of your data',
            'Opt-out of analytics tracking',
            'Clear local storage data at any time through your browser settings'
          ]} />
        </Section>

        {/* 8. Children's Privacy */}
        <Section number={8} title={t('privacy.children', "Children's Privacy")} icon={<ChildCare color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('privacy.childrenText', 'Our platform is designed for learners of all ages. We do not knowingly collect personal information from children under 13 without parental consent.')}
          </Typography>
        </Section>

        {/* 9. Changes to Privacy Policy */}
        <Section number={9} title={t('privacy.changes', 'Changes to Privacy Policy')} icon={<Edit color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('privacy.changesText', 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.')}
          </Typography>
        </Section>



        <Divider sx={{ my: 3 }} />
        
        <Typography variant="body2" color="text.secondary" textAlign="center">
          © 2025 balubhau.com. All rights reserved.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Privacy;
