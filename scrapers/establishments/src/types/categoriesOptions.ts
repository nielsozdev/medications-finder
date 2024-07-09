type Tag =
| 'laboratorio'
| 'droguerias'
| 'farmacias'
| 'boticas'
| 'botiquines'
| 'establecimientosDeSalud'
| 'almacenEspecializado'

type CategoryOption =
| 'LABORATORIO'
| 'DROGUERÍA'
| 'FARMACIA'
| 'BOTICA'
| 'BOTIQUIN'
| 'FARMACIA DE LOS ESTABLECIMIENTOS DE SALUD'
| 'ALMACEN ESPECIALIZADO'

interface categoryOptionBase {
  extract: boolean
  tag: Tag
}

interface Category01Option extends categoryOptionBase {
  '01': CategoryOption
}

interface Category02Option extends categoryOptionBase {
  '02': CategoryOption
}

interface Category03Option extends categoryOptionBase {
  '03': CategoryOption
}

interface Category04Option extends categoryOptionBase {
  '04': CategoryOption
}

interface Category05Option extends categoryOptionBase {
  '05': CategoryOption
}

interface Category06Option extends categoryOptionBase {
  '06': CategoryOption
}

interface Category07Option extends categoryOptionBase {
  '07': CategoryOption
}

export type CategoryOptions =
| Category01Option
| Category02Option
| Category03Option
| Category04Option
| Category05Option
| Category06Option
| Category07Option
