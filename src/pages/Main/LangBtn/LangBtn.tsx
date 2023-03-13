import React from 'react';
import { IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { main, updateLang } from 'store/slices/mainSlice';
import { FLAGS } from 'constants/constants';

import './LangBtn.sass';

export const LangBtn: React.FC = () => {
  const { lang } = useAppSelector(main);
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const onLangBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const btn = ev.currentTarget as HTMLElement;
    i18n.changeLanguage(btn.id);
    dispatch(updateLang({ lang: btn.id }));
  };

  return (
    <div className="lang-btns">
      {FLAGS.map((flag) => (
        <IconButton
          key={flag}
          id={flag}
          color="primary"
          disabled={flag == lang}
          onClick={onLangBtnClick}
          className="lang-btn"
        >
          <img src={`img/flags/${flag}.png`} alt={flag} />
        </IconButton>
      ))}
    </div>
  );
};
