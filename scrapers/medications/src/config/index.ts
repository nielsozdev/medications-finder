import { type ExtractMedicationsUrl } from '@noz/medications-core/src/types/scraper'

const url: ExtractMedicationsUrl = {
  webPage: 'https://opm-digemid.minsa.gob.pe/#/consulta-producto',
  fetchResources: 'https://ms-opm.minsa.gob.pe/msopmcovid/preciovista/ciudadano',
  fetchModalResources: 'https://ms-opm.minsa.gob.pe/msopmcovid/precioproducto/obtener',
}

const NUM_MAX_OF_EXISTENCES = 100
export const config = {
  url,
  maxNumOfExistences: NUM_MAX_OF_EXISTENCES,
}
