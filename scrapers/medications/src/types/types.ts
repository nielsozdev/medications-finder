import { type Locator } from 'playwright'

export interface ElementsForSearch {
  buttonCleanElement: Locator
  buttonSearchElement: Locator
  inputSearchElement: Locator
}
