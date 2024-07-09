import { type CategoryOptions } from '~/types/categoriesOptions'
import { type EstablishmentsOptions } from '~/types/establishmentsOptions'
import { type SituationOptions } from '~/types/situationsOptions'

interface MenuOptionsListSituations {
  key: 'situation'
  options: SituationOptions[]
  selector: '[name="param4"]'
}

interface MenuOptionsListCategories {
  key: 'category'
  options: CategoryOptions[]
  selector: '[name="param5"]'
}

interface MenuOptionsListEstablishments {
  key: 'establishment'
  options: EstablishmentsOptions[]
  selector: '[name="param3"]'
}

export type MenuOptions =
  | MenuOptionsListSituations
  | MenuOptionsListCategories
  | MenuOptionsListEstablishments

export type MenuListOptions = MenuOptions[]
