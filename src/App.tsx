import { Provider } from 'react-redux'
import { store } from '@/store'

import Trading from '@/scenes/Trading'

import s from './App.module.css'

const App = () => (
  <div className={s.app}>
    <Provider store={store}>
      <Trading />
    </Provider>
  </div>
)

export default App
