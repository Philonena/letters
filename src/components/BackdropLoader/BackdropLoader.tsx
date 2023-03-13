import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import EmailIcon from '@mui/icons-material/Email';

import './BackdropLoader.sass';

export const BackdropLoader: React.FC<{ open: boolean }> = ({ open }) => {
  const [icons, setIcons] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (open) {
      const interval = setInterval(() => {
        setIcons([...icons, <EmailIcon key={icons.length} className="particle" />]);
      }, 300);
      return () => {
        clearInterval(interval);
      };
    }
  }, [icons, open]);

  useEffect(() => {
    if (open) {
      const iconStartArr = [
        <EmailIcon key={0} className="particle" />,
        <EmailIcon key={1} className="particle" />,
        <EmailIcon key={2} className="particle" />,
        <EmailIcon key={3} className="particle" />,
        <EmailIcon key={4} className="particle" />,
      ];
      setIcons(iconStartArr);
    } else setIcons([]);
  }, [open]);

  return (
    <Backdrop
      sx={{ zIndex: 3, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      open={open}
      className="loader"
    >
      <div id="particle-container">{icons}</div>
    </Backdrop>
  );
};
