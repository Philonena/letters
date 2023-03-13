import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Footer.sass';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const onButtonClick = () => {
    document.location = 'mailto:philonena7@gmail.com';
  };

  return (
    <Container component="footer">
      <Typography color="primary">© 2023</Typography>
      <Button variant="contained" onClick={onButtonClick}>
        {t('Make a suggestion')}
      </Button>
      <Link href="https://github.com/philonena" className="footer__git-link" underline="none">
        <GitHubIcon color="primary" />
        Philonena
      </Link>
    </Container>
  );
};
