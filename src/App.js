import React from 'react';
import Formulario from './components/Formulario'
import { Provider } from 'react-redux';

function App( {store} ) {
  return (
    <Provider store={store}>
      <Formulario/>
    </Provider>

  );
}

export default App;
