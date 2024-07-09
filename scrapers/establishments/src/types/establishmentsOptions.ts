export type EstablishmentsOptions =
| Establishment0Option
| Establishment1Option
| Establishment2Option
| Establishment3Option
| Establishment4Option
| Establishment5Option
| Establishment6Option
| Establishment7Option
| Establishment8Option
| Establishment9Option
| Establishment10Option
| Establishment11Option
| Establishment12Option
| Establishment13Option
| Establishment14Option
| Establishment15Option
| Establishment16Option
| Establishment17Option
| Establishment18Option
| Establishment19Option
| Establishment22Option
| Establishment24Option
| Establishment25Option
| Establishment26Option
| Establishment27Option
| Establishment28Option
| Establishment29Option
| Establishment30Option
| Establishment31Option
| Establishment32Option
| Establishment33Option
| Establishment34Option
| Establishment35Option
| Establishment36Option
| Establishment37Option
| Establishment38Option
| Establishment39Option

type Tag = 'Digemid'
| 'Amazonas_Chachapoyas'
| 'Ancash'
| 'ApurimacI'
| 'Arequipa'
| 'Ayacucho'
| 'Bagua'
| 'CajamarcaI'
| 'Callao'
| 'ApurimacII_Chanka'
| 'CajamarcaII_chota'
| 'Cusco'
| 'CajamarcaIII_Cutervo'
| 'Huancavelica'
| 'Huanuco'
| 'Ica'
| 'CajamarcaIV_Jaen'
| 'Junin'
| 'laLibertad'
| 'Lambayeque'
| 'Lima'
| 'Loreto'
| 'MadredeDios'
| 'Moquegua'
| 'Pasco'
| 'PiuraI'
| 'Puno'
| 'SanMartin'
| 'PiuraII_LucianoCastillo'
| 'Tacna'
| 'Tumbes'
| 'Ucayali'
| 'RedIntegradadeSaludNorte'
| 'RedIntegradadeSaludCentro'
| 'RedIntegradadeSaludEste'
| 'IntegradadeSaludSur'
| 'MorroponHuancabamba'

type LocationOption = 'Ministerio de Salud - DIGEMID'
| 'Dirección Regional de Salud Amazonas - Chachapoyas'
| 'Dirección Regional de Salud Ancash'
| 'Dirección Regional de Salud Apurimac I'
| 'Dirección Regional de Salud Arequipa'
| 'Dirección Regional de Salud Ayacucho'
| 'Dirección de Salud Bagua'
| 'Dirección Regional de Salud Cajamarca I'
| 'Dirección Regional de Salud Callao'
| 'Dirección de Salud Apurimac II(Chanka)'
| 'Dirección de Salud Cajamarca II(chota)'
| 'Dirección Regional de Salud Cusco'
| 'Dirección de Salud Cajamarca III(Cutervo)'
| 'Dirección Regional de Salud Huancavelica'
| 'Dirección Regional de Salud Huanuco'
| 'Dirección Regional de Salud Ica'
| 'Dirección de Salud Cajamarca IV (Jaen)'
| 'Dirección Regional de Salud Junin'
| 'Dirección Regional de Salud la Libertad'
| 'Dirección Regional de Salud Lambayeque'
| 'Dirección Regional de Salud Lima'
| 'Dirección Regional de Salud Loreto'
| 'Dirección Regional de Salud Madre de Dios'
| 'Dirección Regional de Salud Moquegua'
| 'Dirección Regional de Salud Pasco'
| 'Dirección Regional de Salud Piura I'
| 'Dirección Regional de Salud Puno'
| 'Dirección Regional de Salud San Martín'
| 'Dirección de Salud Piura II - Luciano Castillo'
| 'Dirección Regional de Salud Tacna'
| 'Dirección Regional de Salud Tumbes'
| 'Dirección Regional de Salud Ucayali'
| 'Dirección de Red Integrada de Salud Norte'
| 'Dirección de Red Integrada de Salud Centro'
| 'Dirección de Red Integrada de Salud Este'
| 'Dirección de Red Integrada de Salud Sur'
| 'Dirección Sub Regional de Salud Morropon Huancabamba'
interface EstablishmentsOptionsBase {
  extract: boolean
  tag: Tag
}

interface Establishment0Option extends EstablishmentsOptionsBase { '000': LocationOption }
interface Establishment1Option extends EstablishmentsOptionsBase { '001': LocationOption }
interface Establishment2Option extends EstablishmentsOptionsBase { '002': LocationOption }
interface Establishment3Option extends EstablishmentsOptionsBase { '003': LocationOption }
interface Establishment4Option extends EstablishmentsOptionsBase { '004': LocationOption }
interface Establishment5Option extends EstablishmentsOptionsBase { '005': LocationOption }
interface Establishment6Option extends EstablishmentsOptionsBase { '006': LocationOption }
interface Establishment7Option extends EstablishmentsOptionsBase { '007': LocationOption }
interface Establishment8Option extends EstablishmentsOptionsBase { '008': LocationOption }
interface Establishment9Option extends EstablishmentsOptionsBase { '009': LocationOption }
interface Establishment10Option extends EstablishmentsOptionsBase { '010': LocationOption }
interface Establishment11Option extends EstablishmentsOptionsBase { '011': LocationOption }
interface Establishment12Option extends EstablishmentsOptionsBase { '012': LocationOption }
interface Establishment13Option extends EstablishmentsOptionsBase { '013': LocationOption }
interface Establishment14Option extends EstablishmentsOptionsBase { '014': LocationOption }
interface Establishment15Option extends EstablishmentsOptionsBase { '015': LocationOption }
interface Establishment16Option extends EstablishmentsOptionsBase { '016': LocationOption }
interface Establishment17Option extends EstablishmentsOptionsBase { '017': LocationOption }
interface Establishment18Option extends EstablishmentsOptionsBase { '018': LocationOption }
interface Establishment19Option extends EstablishmentsOptionsBase { '019': LocationOption }
interface Establishment22Option extends EstablishmentsOptionsBase { '022': LocationOption }
interface Establishment24Option extends EstablishmentsOptionsBase { '024': LocationOption }
interface Establishment25Option extends EstablishmentsOptionsBase { '025': LocationOption }
interface Establishment26Option extends EstablishmentsOptionsBase { '026': LocationOption }
interface Establishment27Option extends EstablishmentsOptionsBase { '027': LocationOption }
interface Establishment28Option extends EstablishmentsOptionsBase { '028': LocationOption }
interface Establishment29Option extends EstablishmentsOptionsBase { '029': LocationOption }
interface Establishment30Option extends EstablishmentsOptionsBase { '030': LocationOption }
interface Establishment31Option extends EstablishmentsOptionsBase { '031': LocationOption }
interface Establishment32Option extends EstablishmentsOptionsBase { '032': LocationOption }
interface Establishment33Option extends EstablishmentsOptionsBase { '033': LocationOption }
interface Establishment34Option extends EstablishmentsOptionsBase { '034': LocationOption }
interface Establishment35Option extends EstablishmentsOptionsBase { '035': LocationOption }
interface Establishment36Option extends EstablishmentsOptionsBase { '036': LocationOption }
interface Establishment37Option extends EstablishmentsOptionsBase { '037': LocationOption }
interface Establishment38Option extends EstablishmentsOptionsBase { '038': LocationOption }
interface Establishment39Option extends EstablishmentsOptionsBase { '039': LocationOption }
