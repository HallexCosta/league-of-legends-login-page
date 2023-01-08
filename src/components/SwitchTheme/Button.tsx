import { forwardRef, useEffect, useState } from 'react'
import { Sun, Moon } from 'react-feather'

import './styles/button.css'

export const Button = forwardRef<HTMLDivElement>((_, _ref) => {
    const [theme, setTheme] = useState('');

    function handleSwitchTheme() {
      setTheme(localStorage.getItem('theme') ?? '')
    }
      
    useEffect(() => setTheme(localStorage.getItem('theme') ?? ''))

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
