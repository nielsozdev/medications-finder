/* Types for data extracted from web */

export interface ExtractedDataResult {
  medication: string // familia
  results: DigemidWebData[]
}

export interface DigemidWebData {
  cantidad: number
  codigo: string
  codigoEntidad: null
  codigosValidos: null
  data: Entidad[]
  entidad: Entidad
  mensaje: string
  paginas: null
  resultadoProceso: null
  suggestion: string // SubFamilia
  totalData: null
}

export interface Entidad {
  catCodigo: string
  codEstab: string
  codGrupoFF: string
  codProdE: number
  concent: string
  departamento: string
  direccion: string
  distrito: string
  fabricante: string | null
  fecha: string
  fracciones: number
  grupo: string
  nomGrupoFF: string
  nombreComercial: string
  nombreFormaFarmaceutica: string
  nombreLaboratorio: string
  nombreProducto: string // product
  nombreSustancia: string // medication
  nombreTitular: string
  precio1: number
  precio2: number
  precio3: number | null
  provincia: string
  setcodigo: string
  telefono: string | null
  totalPA: string
  totalRegistros: string | null
  ubicodigo: string
}

/*  */

export interface DepartmetData {
  department: string
  departmentIndex: number
  departmentsLength: number
}

export interface MedicationData {
  medicationIndex: number
  medicationName: string
  medicationsLength: number
}
export type MedicationsList = string[]
export type LocationsList = string[]

export interface ExtractMedicationsUrl {
  fetchModalResources: string
  fetchResources: string
  webPage: string
}

export interface DepartmentValues {
  label: string
  value: string
}
export interface DataNotExtracted {
  department: string
  medication: string
  reason: string | null | never[]
  suggestion: string | null | never[]
  suggestionIndex: number | null
}

export type ResultMostSearchedData = {
  [level in Level]?: DataLevelToExtract
}

export interface DataLevelToExtract {
  count: number
  data: Array<{
    department: DepartmentValues
    medications: string[]

  }>
  level: Level
}

export type Departments =
| 'amazonas'
| 'ancash'
| 'apurimac'
| 'arequipa'
| 'ayacucho'
| 'cajamarca'
| 'callao'
| 'cusco'
| 'huancavelica'
| 'huanuco'
| 'ica'
| 'junin'
| 'la-libertad'
| 'lambayeque'
| 'lima'
| 'loreto'
| 'madre-de-dios'
| 'moquegua'
| 'pasco'
| 'piura'
| 'puno'
| 'san-martin'
| 'tacna'
| 'tumbes'
| 'ucayali'

export type Level =
| 'highest'
| 'high'
| 'medium'
| 'low'
| 'lowest'
