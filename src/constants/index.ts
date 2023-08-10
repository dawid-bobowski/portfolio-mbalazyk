import { IMenuItemProps } from '../components/Banner/MenuItem';

export const MENU_OPTIONS: IMenuItemProps[] = [
  {
    text: 'Strona główna',
    destination: '/',
  },
  {
    text: 'O mnie',
    destination: '/o-mnie',
  },
  {
    text: 'Oferta',
    destination: '/oferta',
  },
  {
    text: 'Kontakt',
    destination: '/kontakt',
  },
];

export const EMAIL_VALIDATION = /[a-z\d]{1,}[@][a-z\d]{1,}[.].{2,}$/;

// colors
export const PRIMARY_COLOR = '#c7263b';