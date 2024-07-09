import { type CategoryOptions } from '~/types/categoriesOptions'

export const categoriesOptions: CategoryOptions[] = [
  {
    extract: false,
    tag: 'laboratorio',
    '01': 'LABORATORIO',
  },
  {
    extract: false,
    tag: 'droguerias',
    '02': 'DROGUERÍA',
  },
  {
    extract: true,
    tag: 'farmacias',
    '03': 'FARMACIA',
  },
  {
    extract: true,
    tag: 'boticas',
    '04': 'BOTICA',
  },
  {
    extract: false,
    tag: 'botiquines',
    '05': 'BOTIQUIN',
  },
  {
    extract: true,
    tag: 'establecimientosDeSalud',
    '06': 'FARMACIA DE LOS ESTABLECIMIENTOS DE SALUD',
  },
  {
    extract: false,
    tag: 'almacenEspecializado',
    '07': 'ALMACEN ESPECIALIZADO',
  },
]
