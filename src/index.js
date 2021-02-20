

import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux';

//import store from './js/store/index'
// import  App  from './js/components/App'


import MyApp from './App';
import store from './Toolkit/index'

render(
  <Provider store={ store} >
     <MyApp />
  </Provider>,
      document.getElementById('root')
)


