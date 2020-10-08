import { CURRENCY, LOCALE } from '../config';

export const priceFormatter = new Intl.NumberFormat(LOCALE, {
  style: 'currency',
  currency: CURRENCY,
});
