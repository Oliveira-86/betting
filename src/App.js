
import { routers } from './routers/browserRouter';
import { RouterProvider } from 'react-router-dom';
import Footer from './atomic-components/molecules/Footer';
import { GlobalStyle } from './global/styles';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';


function App() {

  return ( 
    <>     
    <ThemeProvider theme={theme}>   
      <RouterProvider router={routers} /> 
      <GlobalStyle />
      <Footer />
    </ThemeProvider> 
    </>  
  );
}

export default App;
