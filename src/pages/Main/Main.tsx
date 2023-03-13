import React, { useState } from 'react';
import { Container } from '@mui/material';
import { letterApi } from 'api/letterApi';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { useTranslation } from 'react-i18next';
import { main } from 'store/slices/mainSlice';
import { showNotification } from 'store/slices/notificationSlice';
import { LETTER_LENGTH_MIN } from 'constants/constants';

import { LangBtn } from './LangBtn/LangBtn';
import { InputLetter } from './InputLetter/InputLetter';
import { StyleBtns } from './StyleBtns/StyleBtns';
import { Slider } from './Slider/Slider';
import { ResultLetter } from './ResultLetter/ResultLetter';
import { BackdropLoader } from 'components/BackdropLoader/BackdropLoader';

import './Main.sass';

export const Main: React.FC = () => {
  const { lang } = useAppSelector(main);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [getLetter, { isLoading, data: receivedLetter }] = letterApi.useGetLetterMutation();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onSendLetter = async (styleId: number) => {
    if (inputValue.length < LETTER_LENGTH_MIN) {
      console.log(9)
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setInputError(`Letter is too short. Minimum ${LETTER_LENGTH_MIN} characters`);
      return;
    }
    const letter = await getLetter({ lang, letter: inputValue, style: styleId });
    console.log(letter);
    if ('data' in letter)
      window.scrollBy({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    else
      dispatch(
        showNotification({
          isShow: true,
          text: t('Something went wrong. Plese repeat the request letter'),
          severity: 'error',
        })
      );
  };

  return (
    <Container component={'main'}>
      <section className="input-container">
        <LangBtn />
        <InputLetter
          inputValue={inputValue}
          setInputValue={setInputValue}
          inputError={inputError}
          setInputError={setInputError}
        />
      </section>
      <StyleBtns onSendLetter={onSendLetter} />
      <section className="result">
        {receivedLetter?.message ? <ResultLetter message={receivedLetter.message} /> : <Slider />}
      </section>
      <BackdropLoader open={isLoading} />
    </Container>
  );
};
