import { IMenuItemProps } from '../components/Banner/MenuItem';
import { IOfferBoxProps } from '../components/Offers/OfferBox';

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

export const OFFERS: IOfferBoxProps[] = [
  {
    title: 'Korekta',
    description: 'Integer id facilisis magna. Vivamus sem dolor, tincidunt quis condimentum tincidunt, sagittis vel \
      libero. Etiam sed nunc quis nisl dignissim dignissim a non magna. Mauris interdum augue neque, vel consectetur \
      diam tempor sit amet. Nullam at sagittis ante. In eget libero ut mauris elementum gravida. Sed ipsum \
      nibh, fermentum tincidunt.',
  },
  {
    title: 'Redakcja',
    description: 'Nulla facilisi. Nulla bibendum elementum hendrerit. Aliquam et massa elementum, porttitor turpis \
      eu, scelerisque dolor. In tincidunt semper elit, vitae commodo orci dignissim eu. Mauris accumsan a lectus id \
      pellentesque. Quisque pretium orci id sagittis sagittis. Vivamus dapibus ullamcorper metus nec porttitor. \
      Vestibulum velit justo, mollis quis nisi ut, suscipit.',
  },
  {
    title: 'Copywriting',
    description: 'Vestibulum pulvinar consequat arcu. Pellentesque habitant morbi tristique senectus et netus et \
      malesuada fames ac turpis egestas. Maecenas nec molestie tortor, ac semper dui. Quisque eleifend, elit id \
      aliquam malesuada, orci dui tristique eros, eget dictum mi metus nec tortor. Donec in ex lorem. Aliquam blandit \
      felis eros, quis cursus.',
  },
];

export const EMAIL_VALIDATION = /[a-z\d]{1,}[@][a-z\d]{1,}[.].{2,}$/;

// colors
export const PRIMARY_COLOR = '#c7263b';