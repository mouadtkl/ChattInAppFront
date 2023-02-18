import { useTranslation } from 'react-i18next';

type UseTranslateReturn = {
  translate: Function;
};

export default function useTranslate(prefix?: string): UseTranslateReturn {
  const { t } = useTranslation();

  return {
    translate: (msg: string) => t(`${prefix ? `${prefix}:` : ''}${msg}`),
  };
}
