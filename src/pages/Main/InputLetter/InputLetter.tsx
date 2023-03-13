import React from 'react';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LETTER_LENGTH_LIMIT } from 'constants/constants';

import './InputLetter.sass';

type InputLetterType = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputError: string;
  setInputError: React.Dispatch<React.SetStateAction<string>>;
};

export const InputLetter: React.FC<InputLetterType> = ({ inputValue, setInputValue, inputError, setInputError }) => {
  const { t } = useTranslation();

  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (inputError.length > 0) setInputError('');
    if (ev.target.value.length <= LETTER_LENGTH_LIMIT) setInputValue(ev.target.value);
  };

  return (
    <TextField
      error={!!inputError}
      helperText={!inputError ? ' ' : t(inputError)}
      className="letter-form__input"
      label={t('Enter your letter')}
      multiline
      value={inputValue}
      onInput={onInputChange}
      rows={7}
      InputProps={{
        endAdornment: (
          <span className="letter-form__input__counter">
            {inputValue.length}/{LETTER_LENGTH_LIMIT}
          </span>
        ),
      }}
    />
  );
};
