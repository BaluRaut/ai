import { Container, Typography, Box, Paper, Divider, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Gavel, School, Code, SmartToy, Person, Storage, Security, Warning, Block, Edit, Public, Email } from '@mui/icons-material';

const Terms = () => {
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
          <Gavel sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="h3" fontWeight={700} gutterBottom>
            {t('terms.title', 'Terms & Conditions')}
          </Typography>
          <Chip 
            label={`${t('terms.lastUpdated', 'Last Updated')}: ${t('terms.effectiveDate', 'November 26, 2025')}`}
            variant="outlined"
            color="primary"
          />
        </Box>
        
        <Divider sx={{ my: 3 }} />

        {/* 1. Introduction */}
        <Section number={1} title={t('terms.introduction', 'Introduction')} icon={<Gavel color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('terms.introText')}
          </Typography>
        </Section>

        {/* 2. Definitions */}
        <Section number={2} title={t('terms.definitions', 'Definitions')} icon={<School color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('terms.definitionsText', 'In these Terms and Conditions:')}
          </Typography>
          <Box sx={{ pl: 2, borderLeft: 3, borderColor: 'primary.main' }}>
            <Typography variant="body2" paragraph>• <strong>Platform</strong> - refers to the AI Learner website, applications, and all related services.</Typography>
            <Typography variant="body2" paragraph>• <strong>Content</strong> - includes all educational materials, tutorials, code examples, quizzes, and projects.</Typography>
            <Typography variant="body2" paragraph>• <strong>User</strong> - refers to any individual accessing or using the Platform.</Typography>
            <Typography variant="body2" paragraph>• <strong>AI Tools</strong> - refers to any artificial intelligence features, including AI tutors and code assistants.</Typography>
          </Box>
        </Section>

        {/* 3. Educational Purpose */}
        <Section number={3} title={t('terms.educationalPurpose', 'Educational Purpose')} icon={<School color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('terms.educationalText')}
          </Typography>
          <BulletList items={[
            'Job placement or career advancement',
            'Certification or credentials recognition',
            'Specific learning outcomes or skill levels',
            'Accuracy of AI-generated responses or suggestions'
          ]} icon={<Warning color="warning" fontSize="small" />} />
        </Section>

        {/* 4. Content Usage */}
        <Section number={4} title={t('terms.contentUsage', 'Content Usage & License')} icon={<Code color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('terms.contentUsageText')}
          </Typography>
          <BulletList items={[
            'You may use, modify, and distribute code examples for personal and commercial projects',
            'You may not republish or redistribute the entire course content without written permission',
            'Code examples are provided "as is" without warranty of fitness for any particular purpose',
            'Attribution is appreciated but not required for code snippets'
          ]} />
        </Section>

        {/* 5. AI Tools */}
        <Section number={5} title={t('terms.aiUsage', 'AI Tools & Features')} icon={<SmartToy color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('terms.aiUsageText')}
          </Typography>
          <BulletList items={[
            'AI responses are generated automatically and may contain errors or inaccuracies',
            'AI suggestions should be verified before use in production environments',
            'AI tutors provide educational guidance, not professional advice',
            'We continuously improve AI features but cannot guarantee specific accuracy levels',
            'AI-generated code should be reviewed and tested before deployment'
          ]} icon={<SmartToy color="secondary" fontSize="small" />} />
        </Section>

        {/* 6. User Responsibilities */}
        <Section number={6} title={t('terms.userResponsibilities', 'User Responsibilities')} icon={<Person color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('terms.userResponsibilitiesText', 'By using our platform, you agree to:')}
          </Typography>
          <BulletList items={[
            'Use the platform in compliance with all applicable laws and regulations',
            'Not attempt to reverse engineer, hack, or disrupt platform services',
            'Not use the platform to generate harmful, illegal, or malicious content',
            'Take responsibility for verifying AI-generated content before use',
            'Respect intellectual property rights of all content',
            'Not share access credentials with unauthorized users'
          ]} />
        </Section>

        {/* 7. Code Execution */}
        <Section number={7} title={t('terms.codeExecution', 'Code Execution Environment')} icon={<Code color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('terms.codeExecutionText', 'Our platform provides browser-based code execution using Pyodide. You understand that:')}
          </Typography>
          <BulletList items={[
            'Code runs in a sandboxed environment with limited capabilities',
            'Some Python libraries may not be available or fully functional',
            'Execution performance may vary based on your device and browser',
            'We are not responsible for any issues arising from code you execute',
            'Long-running or resource-intensive code may be automatically terminated'
          ]} />
        </Section>

        {/* 8. Intellectual Property */}
        <Section number={8} title={t('terms.intellectualProperty', 'Intellectual Property')} icon={<Security color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('terms.intellectualPropertyText')}
          </Typography>
          <BulletList items={[
            'The "AI Learner" name and logo are trademarks',
            'Course structure and educational methodology are proprietary',
            'Original content created by our team is copyrighted',
            'Third-party content is used with permission or under fair use'
          ]} />
        </Section>

        {/* 9. Third-Party Content */}
        <Section number={9} title={t('terms.thirdPartyContent', 'Third-Party Content & Links')} icon={<Public color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('terms.thirdPartyText', 'Our platform may include links to third-party websites and resources. We are not responsible for:')}
          </Typography>
          <BulletList items={[
            'Content, accuracy, or availability of external websites',
            'Privacy practices of third-party services',
            'Any transactions or interactions with third-party providers',
            'Third-party AI models or APIs used in demonstrations'
          ]} icon={<Warning color="warning" fontSize="small" />} />
        </Section>

        {/* 10. Data & Privacy */}
        <Section number={10} title={t('terms.dataPrivacy', 'Data & Privacy')} icon={<Storage color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('terms.dataPrivacyText')}
          </Typography>
          <BulletList items={[
            'We store learning progress and preferences locally in your browser',
            'We use analytics to improve platform performance',
            'We do not sell your personal information to third parties',
            'You can request deletion of your data at any time'
          ]} />
        </Section>

        {/* 11. Disclaimer */}
        <Section number={11} title={t('terms.disclaimer', 'Disclaimer of Warranties')} icon={<Warning color="error" />}>
          <Paper sx={{ p: 2, bgcolor: 'error.light', color: 'error.contrastText', mb: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              THE PLATFORM AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
            </Typography>
          </Paper>
          <BulletList items={[
            'Merchantability or fitness for a particular purpose',
            'Accuracy, reliability, or completeness of content',
            'Uninterrupted, secure, or error-free operation',
            'Compatibility with your devices or software',
            'Results or outcomes from using the platform'
          ]} icon={<Block color="error" fontSize="small" />} />
        </Section>

        {/* 12. Limitation of Liability */}
        <Section number={12} title={t('terms.limitationOfLiability', 'Limitation of Liability')} icon={<Security color="primary" />}>
          <Typography variant="body1" paragraph sx={{ fontWeight: 500, color: 'text.secondary' }}>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, AI LEARNER SHALL NOT BE LIABLE FOR:
          </Typography>
          <BulletList items={[
            'Any indirect, incidental, special, or consequential damages',
            'Loss of profits, data, or business opportunities',
            'Damages arising from use of AI-generated content',
            'Issues arising from code examples used in production',
            'Any damages exceeding the amount paid for premium services (if applicable)'
          ]} icon={<Block color="error" fontSize="small" />} />
        </Section>

        {/* 13. Termination */}
        <Section number={13} title={t('terms.termination', 'Termination')} icon={<Block color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('terms.terminationText', 'We reserve the right to terminate or suspend access to the platform at any time, without notice, for conduct that we believe:')}
          </Typography>
          <BulletList items={[
            'Violates these Terms and Conditions',
            'Is harmful to other users or the platform',
            'Is fraudulent or illegal',
            'Otherwise warrants such action'
          ]} icon={<Block color="error" fontSize="small" />} />
        </Section>

        {/* 14. Changes to Terms */}
        <Section number={14} title={t('terms.changesToTerms', 'Changes to Terms')} icon={<Edit color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('terms.changesText')}
          </Typography>
          <BulletList items={[
            'Banner notification on the platform',
            'Email notification (if you\'ve provided an email)',
            'Updated "Last Updated" date on this page'
          ]} />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Your continued use of the platform after changes constitutes acceptance of the modified terms.
          </Typography>
        </Section>

        {/* 15. Governing Law */}
        <Section number={15} title={t('terms.governingLaw', 'Governing Law')} icon={<Gavel color="primary" />}>
          <Typography variant="body1" paragraph>
            {t('terms.governingLawText', 'These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.')}
          </Typography>
        </Section>

        <Divider sx={{ my: 3 }} />
        
        <Typography variant="body2" color="text.secondary" textAlign="center">
          © 2025 AI Learner. All rights reserved.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Terms;
