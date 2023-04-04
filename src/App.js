
import BottomBar from "./atomic-components/molecules/BottomBar";
import { routers } from './routers/browserRouter';
import { RouterProvider } from 'react-router-dom';
import Footer from './atomic-components/molecules/Footer';
import { GlobalStyle } from './global/styles';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';
import useDeviceDetect from "./hook/useDeviceDetect";


function App() {
  const { isMobile } = useDeviceDetect()
  return ( 
    <>     
    <ThemeProvider theme={theme}>   
      <RouterProvider router={routers} /> 
      <GlobalStyle />
      {isMobile && <BottomBar /> }
      <Footer />
    </ThemeProvider> 
    </>  
  );
}

export default App;
