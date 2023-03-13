export type SendLetterType = {
  lang: string;
  letter: string;
  style: number;
};

export type GetLetterType = {
  code: number;
  message: string;
  success: boolean;
};

export type NotificationType = {
  isShow: boolean;
  text: string;
  severity: 'error' | 'success' | undefined;
};
