import { type SituationOptions } from '~/types/situationsOptions'

export const situationsOptions: SituationOptions[] = [
  {
    extract: true,
    tag: 'activo',
    '01': 'Activo',
  },
  {
    extract: false,
    tag: 'cierreTemporal',
    '02': 'Cierre Temporal',
  },
  {
    extract: false,
    tag: 'cierreDefinitivo',
    '03': 'Cierre Definitivo',
  },
]
