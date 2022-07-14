import { Theme } from '@emotion/react';

import { ThemeTypes } from './types';

export const media: ThemeTypes['media'] = {
  lg: 1440,
  md: 1200,
  sm: 768,
  xs: 475,
};

export const colors: ThemeTypes['colors'] = {
  black: '#141517',
  white: '#fff',
  white_darken_1: '#dfe0e1',
  black_lighten_1: '#17181a',
  black_lighten_2: '#212127',
  black_lighten_3: '#36383f',
  black_lighten_4: '#494d57',
  green: '#7dd751',
  purple: '#6a3093',
};

export const gradient: ThemeTypes['gradient'] = {
  purple: 'linear-gradient(to right, #6a3093, #a044ff)',
};

export const theme: Theme = {
  colors,
  gradient,
  media,
};
