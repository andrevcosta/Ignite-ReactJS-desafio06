import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      black: '#000',
      white: '#fff',
      highlight: '#FFBA08',
      'gray-400': '#47585B',
      'gray-300': '#999',
      'gray-200': '#DADADA',
      'gray-100': '#F5F8FA',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'brand.gray-100',
        color: 'brand.gray-400',
      },
    },
  },
});
