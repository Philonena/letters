import React from 'react';
import { Button, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import './Header.sass';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  const onButtonClick = () => {
    window.open('https://www.buymeacoffee.com/MaNaCo', '_blank');
  };

  return (
    <Container component={'header'}>
      <img src={`img/logo.png`} className="header__logo" alt="logo" />
      <Button variant="contained" onClick={onButtonClick}>
        {t('Buy me coffee')}
      </Button>
    </Container>
  );
};
