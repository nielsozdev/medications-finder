import merge from 'lodash/merge'

import { type Theme } from '@mui/material/styles'

import { AppBar } from '~/theme/overrides/components/AppBar'
import { List } from '~/theme/overrides/components/list'

export function componentsOverrides(theme: Theme) {
  const components = merge(
    AppBar(theme),
    List(theme)
  )

  return components
}
