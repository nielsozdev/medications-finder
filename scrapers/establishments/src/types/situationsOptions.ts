type Tag = 'activo' | 'cierreTemporal' | 'cierreDefinitivo'
type SituationOption = 'Cierre Definitivo' | 'Cierre Temporal' | 'Activo'

interface SituationOptionBase {
  extract: boolean
  tag: Tag
}

interface Situation01Option extends SituationOptionBase {
  '01': SituationOption
}
interface Situation02Option extends SituationOptionBase {
  '02': SituationOption
}

interface Situation03Option extends SituationOptionBase {
  '03': SituationOption
}

export type SituationOptions = Situation01Option | Situation02Option | Situation03Option
