import React from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LETTER_STYLES } from 'constants/constants';

import './StyleBtns.sass';

type StyleBtnsType = {
  onSendLetter: (styleId: number) => Promise<void>;
};

export const StyleBtns: React.FC<StyleBtnsType> = ({ onSendLetter }) => {
  const { t } = useTranslation();

  const onBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const btn = ev.target as HTMLElement;
    onSendLetter(+btn.id);
  };

  return (
    <section className="style">
      <h3 className="style__title">{t('Select letter style')}</h3>
      <div className="style__btns">
        {LETTER_STYLES.map((style) => (
          <div key={style.id} className="style__btn">
            <img src={`img/styles/${style.id}.jpg`} className="style__btn-img" alt={style.style} />
            <p className="style__btn-text">{t(style.style)}</p>
            <Button
              id={`${style.id}`}
              className="style__btn-send"
              variant="contained"
              onClick={onBtnClick}
            >
              {t('Send')}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
