import { forwardRef, useEffect, useState } from 'react'
import { Sun, Moon } from 'react-feather'

import './styles/button.css'

export const Button = forwardRef<HTMLDivElement>((_, _ref) => {
    const [theme, setTheme] = useState('');

    function handleSwitchTheme() {
      setTheme(!theme.includes('dark-theme') ?'dark-theme' : '')
    }

    useEffect(() => {
      console.log('theme foi alterado para', theme === '' ? 'light' : theme)
    }, [theme])

    return (
      <div 
        ref={_ref}
        className={`button-container ${theme}`}
        onClick={handleSwitchTheme}
      >
        <Sun className="sun" />      

        <Moon className="moon" />      
      </div>
    )
  }
)
