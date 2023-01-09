import { LoginPage } from './pages/Login'

import { ThemeProvider } from './contexts/Theme'

import './assets/styles/global.css'

function App() {
  return (
    <ThemeProvider>
      <LoginPage />
    </ThemeProvider>
  )
}

export default App
