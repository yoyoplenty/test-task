import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
  px: 6,
  rounded: '6px',
  color: '#2D303D',
  bgColor: 'transparent',
  borderColor: '#CBD5E1',
  fontWeight: '400',
});

const solid = defineStyle({
  rounded: '6px',
  color: 'white',
  bgColor: 'brand.100',
  fontWeight: '500',
  fontSize: 'sm',
  _disabled: {
    opacity: 0.8,
    bgColor: 'brand.100',
  },
  _hover: {
    opacity: 0.8,
    bgColor: 'brand.100',
  },
});

const dark = defineStyle({
  px: 5,
  rounded: '5px',
  color: 'white',
  bgColor: '#575964',
  fontWeight: '500',
  fontSize: '14px',
  _disabled: {
    opacity: 0.4,
  },
  _hover: {
    opacity: 0.8,
  },
});

const ghost = defineStyle({
  px: 2,
  mr: 1,
  color: '#676F86',
  fontWeight: '500',
  fontSize: '14px',
  _disabled: {
    opacity: 0.6,
  },
});

const danger = defineStyle({
  px: 10,
  bgColor: '#F36767',
  color: '#ffffff',
  fontSize: '14px',
  _hover: {
    bgColor: '#ffffff',
    border: '1px solid #F36767',
    color: '#F36767',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { outline, solid, dark, ghost, danger },
});
