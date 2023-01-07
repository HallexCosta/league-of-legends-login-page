import { forwardRef, useEffect, useState } from 'react'
import { Sun, Moon } from 'react-feather'

import './styles/button.css'

export const Button = forwardRef<HTMLDivElement>((_, _ref) => {
    const [theme, setTheme] = useState('');

    function handleSwitchTheme() {
      if (theme.includes('dark-theme')) {
        setTheme('')
      } else {
        setTheme('dark-theme') 
      }
    }

    useEffect(() => {
      console.log('theme foi alterado')
    }, [theme])

    return (
      <div 
        ref={_ref}
        className={`button-container ${theme}`}
        onClick={handleSwitchTheme}
      >
        <Sun />      

        <Moon />      
      </div>
    )
  }
)
