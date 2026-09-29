import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import globalReducer from './core/reducers'
import App from './App.jsx'
import './index.css'

const store = createStore(globalReducer)

// Render a `<Provider>` around the entire `<App>`,
// and pass the Redux store to it as a prop
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)