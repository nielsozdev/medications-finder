import { type MenuListOptions } from '~/types/menuListOptions'

import { categoriesOptions } from './catagoriesOptions'
import { establishmentsOptions } from './establishmentsOptions'
import { situationsOptions } from './situationsOptions'

export const menuOptionsList: MenuListOptions = [
  {
    selector: '[name="param4"]',
    key: 'situation',
    options: situationsOptions,
  },
  {
    selector: '[name="param5"]',
    key: 'category',
    options: categoriesOptions,
  },
  {
    selector: '[name="param3"]',
    key: 'establishment',
    options: establishmentsOptions,
  },
]
