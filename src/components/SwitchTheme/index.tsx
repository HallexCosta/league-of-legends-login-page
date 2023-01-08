import { FC, forwardRef, useRef } from 'react';
import { Button, SwitchThemeRef } from './Button'

export interface SwitchThemeProps {
  buttonSwitchThemeRef: any
}

export const SwitchTheme = forwardRef<SwitchThemeRef>((_, _ref) => {
  return <Button ref={_ref} />
})
