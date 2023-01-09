import { ReactNode, createContext, useState, useEffect, useContext } from "react"

type Theme = 'light' | 'dark' 

export interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

export interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {}
})

export function ThemeProvider({
  children
}: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>('light')

  function toggleTheme() {
    const chosenTheme = theme.includes('light') ? 'dark' : 'light'
    setTheme(chosenTheme)
    localStorage.setItem('theme', chosenTheme)
  }

  useEffect(() => {
    const alreadyThemeDefined = localStorage.getItem('theme') as ThemeContextValue['theme']
    setTheme(alreadyThemeDefined ?? theme)
  }, [])

  return (
    <ThemeContext.Provider
      value={{ 
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  ) 
}

export const useTheme = () => useContext(ThemeContext)
