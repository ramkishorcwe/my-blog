import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.js'
import './index.css'
import AllRoutesComponent from './components/router-config/route.jsx'
import { ThemeProvider } from './context/theme.jsx'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>
      <AllRoutesComponent />
      <Analytics />
    </ThemeProvider>
  </Provider>)