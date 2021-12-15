import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles, theme } from 'theme';
import ThemeContextProvider from 'context/themeContext';
import { ThemeProvider } from 'styled-components';
import Landing from 'pages/Landing';

export default function Index() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ThemeContextProvider>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </ThemeContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
