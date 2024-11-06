import { Provider } from 'react-redux'
import { store } from '@/store'

import Trading from '@/scenes/Trading'

const App = () => (
  <Provider store={store}>
    <Trading />
  </Provider>
)

export default App
