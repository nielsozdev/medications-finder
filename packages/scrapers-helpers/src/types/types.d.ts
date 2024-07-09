export interface DataToPushObject {
  [x: string]: string
  label: string
  selector: string
  value: string
}
export interface ValidMenuOptionsList {
  key: string
  options: ValidMenuOptions[]
  selector: string
}

export interface ValidMenuOptions {
  [x: string]: string
  extract: boolean
  tag: string
}
