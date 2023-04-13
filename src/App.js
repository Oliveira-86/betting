
import { routers } from './routers/browserRouter';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './global/styles';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';
import { Provider } from 'react-redux'
import { store } from './features/store';



function App() {

  return ( 
    <>     
    <Provider store={store}>
      <ThemeProvider theme={theme}>   
        <RouterProvider router={routers} /> 
        <GlobalStyle />
      </ThemeProvider> 
    </Provider>
    </>  
  );
}

export default App;
