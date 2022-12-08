import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import './index.css';
import Root from './routes/root';
import ErrorPage from './error-page';
import ToddlerContainer from './routes/toddlercontainer';
import Viewport from './routes/viewport';

const router = createBrowserRouter([
  {
    path: '/otmolly',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/:toddlerId',
    element: <ToddlerContainer />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'viewport',
    element: <Viewport />,
  },
]);

const styles = {
  global: (props) => ({
    html: {
      fontSize: ['7px', '7px', '16px', '20px', '20px'],
    },
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),
};
const brand = {
  headerColor: '#fff',
  headerBackground: '#7283fe', //'#400000',
  hLinkColor: '#333333', //'#fffffff',
  hLinkColorHover: '#f29085',
  hlinkColorActive: '',
  hLinkBackground: '#fff', //'#964800',
  hLinkBackgroundActive: '#f29085', //'#E6B862'
  vLinkColor: '#333333', //'#3C1E00',
  vLinkColorHover: '#f29085',
  vLinkColorActive: '',
  vLinkBackground: '#fff', //'#e6deb9',
  vLinkBackgroundActive: '#f29085', //'#E6B862'
};
const theme = extendTheme({
  styles: styles,
  colors: brand,
  components: {
    Divider: {
      variants: {
        custom: {
          borderColor: '#7283fe',
          borderWidth: '.0625rem',
          borderStyle: 'none none solid none',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
