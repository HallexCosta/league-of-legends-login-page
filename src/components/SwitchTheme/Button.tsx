import { Sun, Moon } from 'react-feather'

import { useTheme } from '@contexts/Theme'

import './styles/button.css'

export const Button = () => {
  const themeContext = useTheme()

  return (
    <div 
      className={`button-container ${themeContext.theme}-theme`}
      onClick={themeContext.toggleTheme.bind(themeContext)}
    >
      <Sun className="sun" />      

      <Moon className="moon" />      
    </div>
  )
}
