import { Form } from "./Form"
import { Slider } from "./Slider"

import { SwitchTheme } from "@components/SwitchTheme"
import { useTheme } from "@contexts/Theme"

export const LoginPage = () => {
  const themeContext = useTheme()

  return (
    <div
      className={`container ${themeContext.theme}-theme`}
    >
      <SwitchTheme />

      <Form />

      <Slider />
    </div>
  )
}
