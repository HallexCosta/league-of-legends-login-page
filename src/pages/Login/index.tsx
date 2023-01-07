import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { LoginForm } from "./LoginForm";
import { Slider } from "./Slider";

export const LoginPage = forwardRef((props, _ref) => {
  const buttonSwitchThemeRef = useRef<HTMLDivElement>({} as HTMLDivElement)

  const [theme, setTheme] = useState<string>('')

  useImperativeHandle(_ref, () => {
    return {
      getTheme() {
        const classes = [...buttonSwitchThemeRef.current.classList]
        console.log(classes)

        setTheme(classes.find((item) => item === 'dark-theme') || '')

        return 
      }
    }
  })
  useEffect(() => {
    if (buttonSwitchThemeRef.current) {
      console.log('principal', theme)
    }
  }, [theme])

  return (
    <div
      className={`container ${theme}`}
    >
      <LoginForm ref={buttonSwitchThemeRef} />
      <Slider />
    </div>
  )
})
