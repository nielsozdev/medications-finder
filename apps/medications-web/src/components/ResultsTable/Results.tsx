'use client'
import { useEffect } from 'react'

import { DataTable } from './DataTable'
import { Filters } from './Filters'
import { Resultsfilters } from './ResultFilters'

import { useAppStore } from '~/context/AppStoreProvider/useAppStore'

export function Results({ dataFilters, productPrices }: any) {
  const {
    setFamilyData,
    setSubFamilyData,
    setMedicationData,
    setProductData,
    setFamilyFilterSelected,
  } = useAppStore((state) => state)

  useEffect(() => {
    setFamilyData(dataFilters.uniqueFamilyNames)
    setSubFamilyData(dataFilters.uniqueSubfamilyNames)
    setMedicationData(dataFilters.uniqueMedications)
    setProductData(dataFilters.uniqueProductNames)
    dataFilters.uniqueFamilyNames.length > 0 && setFamilyFilterSelected(dataFilters.uniqueFamilyNames[0].name)
  }, [
    dataFilters,
    setFamilyData,
    setMedicationData,
    setProductData,
    setSubFamilyData,
    setFamilyFilterSelected,
  ])

  return (
    <>
      <Filters />
      <Resultsfilters />
      <DataTable data={productPrices} />
    </>
  )
}
