import { Theme } from '@emotion/react';

export const media: Theme['media'] = {
  lg: 1440,
  md: 1200,
  sm: 768,
  xs: 475,
};

export const colors: Theme['colors'] = {
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

export const gradient: Theme['gradient'] = {
  purple: 'linear-gradient(to right, #6a3093, #a044ff)',
};

export const shadow: Theme['shadow'] = {
  base: '-5px 5px 16px -4px rgba(0,0,0,0.25)',
};

export const theme: Theme = {
  colors,
  gradient,
  media,
  shadow,
};
