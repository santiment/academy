import { bootIntercom } from 'san-webkit-next/analytics/intercom';

const INTERCOM_APP_ID = 'cyjjko9u';

export const initIntercom = () => {
  if (typeof window === 'undefined') return;

  bootIntercom(INTERCOM_APP_ID);
};
