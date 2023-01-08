import { forwardRef } from 'react';
import { Button } from './Button'

export interface SwitchThemeProps {
  buttonSwitchThemeRef: any
}

export const SwitchTheme = forwardRef<HTMLDivElement>((_, _ref) => {
  return <Button ref={_ref} />
})
