import { forwardRef, useCallback, useEffect, useReducer, useRef } from "react";
import { LoginForm } from "./LoginForm";
import { Slider } from "./Slider";

import { SwitchTheme } from "@components/SwitchTheme";

interface LoginPageReducerProps {
  theme: string
}

export const LoginPage = forwardRef((_, _ref) => {
  const buttonSwitchThemeRef = useRef<HTMLDivElement>({} as HTMLDivElement)

  const [state, dispatch] = useReducer((
    state: LoginPageReducerProps,
    action: LoginPageReducerProps
  ) => {
    localStorage.setItem('theme', action.theme)
    return { theme: action.theme }
  }, {
    theme: ''
  })

  const handleSwitchTheme = useCallback(() => {
    dispatch({
      theme: !state.theme.includes('dark-theme') ?'dark-theme' : ''
    })
  }, [state.theme])

  useEffect(() => {
    dispatch({
      theme: localStorage.getItem('theme') ?? ''
    })
  }, [])

  useEffect(() => {
    buttonSwitchThemeRef.current?.addEventListener('click', handleSwitchTheme)
    return () => buttonSwitchThemeRef?.current.removeEventListener('click', handleSwitchTheme)
  }, [state.theme])

  return (
    <div
      className={`container ${state.theme}`}
    >
      <SwitchTheme ref={buttonSwitchThemeRef} />

      <LoginForm />
      <Slider />
    </div>
  )
})
