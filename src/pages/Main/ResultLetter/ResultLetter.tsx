import React, { useState } from 'react';
import { ButtonGroup, IconButton, TextField } from '@mui/material';
import { useAppDispatch } from 'hooks/hooks';
import { useTranslation } from 'react-i18next';
import { showNotification } from 'store/slices/notificationSlice';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

import './ResultLetter.sass';

export const ResultLetter: React.FC<{ message: string }> = ({ message }) => {
  const [letter, setLetter] = useState(message.trim());
  const [editLetter, setEditLetter] = useState(false);
  const [inputClass, setInputClass] = useState('result-letter__input');
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onLetterCopy = () => {
    navigator.clipboard.writeText(letter as string);
    setInputClass('result-letter__input result-letter__input-copied');
    setTimeout(() => setInputClass('result-letter__input'), 200);
    dispatch(showNotification({ isShow: true, text: t(`Copied`), severity: 'success' }));
  };

  const onLetterEdit = () => {
    setInputClass('result-letter__input result-letter__input-edit');
    setTimeout(() => setInputClass('result-letter__input'), 200);
    if (editLetter)
      dispatch(showNotification({ isShow: true, text: t(`Saved`), severity: 'success' }));
    setEditLetter(!editLetter);
  };

  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setLetter(ev.target.value);
  };

  return (
    <div className="result-letter">
      {message && (
        <>
          <ButtonGroup className="result-letter__icons">
            <IconButton onClick={onLetterCopy} color="primary">
              <ContentCopyIcon />
            </IconButton>
            <IconButton onClick={onLetterEdit} color="primary">
              {editLetter ? <CheckIcon /> : <EditIcon />}
            </IconButton>
          </ButtonGroup>
          <TextField
            className={inputClass}
            disabled={!editLetter}
            multiline
            rows={10}
            onInput={onInputChange}
            value={letter.trim()}
            InputProps={{
              endAdornment: <span className="letter-form__input__counter">{letter.length}</span>,
            }}
          />
        </>
      )}
    </div>
  );
};
