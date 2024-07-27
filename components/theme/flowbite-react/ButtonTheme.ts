import type { CustomFlowbiteTheme } from 'flowbite-react'

export const secondaryButtonTheme: CustomFlowbiteTheme['button'] = {
  base: 'inline-flex rlx-fixed14',
  inner: {
    base: 'flex',
  },
  color: {
    primary: 'text-rlx-green',
  },
  pill: {
    off: 'rounded-0',
  },
  size: {
    none: undefined,
  },
}
