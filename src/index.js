import React from 'react';
import {render} from 'react-dom';
//librerias react y redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';

// importamos funciones que reciben
// a) estado anterior y b) accion 
// para que retornen c) un nuevo estado
import tareasApp from './reducers';//archivos tareas.js y visibilidad.js

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//crea un store para patron redux
let store = createStore(tareasApp);

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
