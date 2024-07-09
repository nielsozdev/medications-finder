# Detalles

## Pasos para ejecutar el scraper

### locations-of-peru ✅ ***Funcionando***

- Extrer las localidades (departamentos y provincias), aunque por el momento solo se usaran los departamentos
- y guardarlos en la la carpeta data-sources/raw
- Pre-Procesar esos datos y generar un  json con los departamentos, obtener los values y labels de cada uno (estos labels y values corresponden a los labels y values de cada select de la pagina web del digemid)
- Guardarlos en la carpeta data-sources/pre-processed
  
### priority-locations ✅ ***Funcionando***

- procesar los datos de las localidades y generar un archivo con los datos de las localidades segun su importancia para las extracciones, y guardarlos en la carpeta processed
  estos datos por el momento no se usaran, se extraerá la data de todos los departamento por igual importancia

### generic-medications ✅ ***Funcionando***

- Extraer los medicamentos genéricos y guardarlos en la carpeta raw
- Procesar los medicamentos genericos y guardarlos en la carpeta processed

### medications catalog ✅ ***Funcionando***

- Etraer los datos de catalogo de medicamendtos del gigemid y guardarlos en la carpeta raw.
  esta extraccion es un excel que por elmomento es manual y esta guardado en la carpeta raw
- Procesar los datos del catalogo de medicamentos y guardarlos en la carpeta processed

#### Pasos para ejecucion de scripts ✅ ***Funcionando*** (Actualizado 3-05-23)

- npm run get:locations
- npm run get:genericMedications
- npm run get:medicationsList

1. npm run create:locationsToExtract
2. npm run gen:dataToExtract
3. npm start

```jsonc
{
  "codEstab": "0039924",
  "codProdE": 50161,
  "fecha": "14/05/2024 11:19:26 AM",
  "nombreProducto": "ERITROMICINA ESTEARATO",
  "precio1": 50,
  "precio2": 0.5,
  "precio3": null,
  "codGrupoFF": "3",
  "ubicodigo": "120201",
  "direccion": "CARRETERA CENTRAL  1773",
  "telefono": "959 515 184",
  "nomGrupoFF": "Tableta - Capsula",
  "setcodigo": "Privado",
  "nombreComercial": "FARMACIA DR. SECCE",
  "grupo": "1506",
  "totalPA": "1",
  "concent": "500 mg",
  "nombreFormaFarmaceutica": "Tableta Recubierta",
  "fracciones": 100,
  "totalRegistros": null,
  "nombreLaboratorio": "LABORATORIOS PORTUGAL S.R.L.",
  "nombreTitular": "LABORATORIOS PORTUGAL S.R.L.",
  "catCodigo": "03",
  "nombreSustancia": "ERITROMICINA ESTEARATO",
  "fabricante": null,
  "departamento": "JUNIN",
  "provincia": "CONCEPCION",
  "distrito": "CONCEPCION"
}

//Info medicamentos individuales
{
  "codEstab": "0039924",
  "precio1": 50,
  "precio2": 0.5,
  "nombreProducto": "ERITROMICINA ESTEARATO",
  "paisFabricacion": "Perú",
  "registroSanitario": "EN07781",
  "condicionVenta": "Con receta medica",
  "tipoProducto": "Marca",
  "nombreTitular": "LABORATORIOS PORTUGAL S.R.L.",
  "nombreFabricante": "LABORATORIOS PORTUGAL S.R.L.",
  "presentacion": "Caja Envase Blister Tabletas Recubierta",
  "laboratorio": "LABORATORIOS PORTUGAL S.R.L.",
  "directorTecnico": "SECCE PEDRAZA JOSUE ZACARIAS",
  "nombreComercial": "FARMACIA DR. SECCE",
  "telefono": "959 515 184",
  "direccion": "CARRETERA CENTRAL  1773",
  "departamento": "JUNIN",
  "provincia": "CONCEPCION",
  "distrito": "CONCEPCION",
  "horarioAtencion": "LUN a DOM 07:00-13:00 ",
  "ubigeo": "120201",
  "catCodigo": "03",
  "email": "jsp1305@hotmail.com",
  "ruc": "10419077173"
}
 ```
