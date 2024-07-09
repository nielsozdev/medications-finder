import { useCallback, useRef, useState } from 'react'

import { medicationAction } from '~/actions/medicationAction'
import { useAppStore } from '~/context/AppStoreProvider/useAppStore'

export function useSearchData() {
  const { setMedicationStatus, departmentSelected, medicationStatus, provinceSelected, districtSelected } = useAppStore((state) => state)
  const [openSnackBar, setOpenSnackBar] = useState({ open: false, message: '' })

  const searchTermRef = useRef<string | null>(null)

  const onSearchData = useCallback((query: string) => {
    const formData = new FormData()

    if (query.length < 4 && medicationStatus !== 'pending') {
      setOpenSnackBar({ open: true, message: 'Ingrese un término de búsqueda válido' })
    } else {
      if (searchTermRef.current !== `${query}-${departmentSelected}-${provinceSelected}-${districtSelected}`) {
        formData.append('query', query)
        departmentSelected && formData.append('department', departmentSelected)
        provinceSelected && formData.append('province', provinceSelected)
        districtSelected && formData.append('district', districtSelected)
        setMedicationStatus('pending')
        medicationAction(formData)

        localStorage.setItem('departmentSelected', departmentSelected)
        localStorage.setItem('provinceSelected', provinceSelected)
        localStorage.setItem('districtSelected', districtSelected)

        searchTermRef.current = `${query}-${departmentSelected}-${provinceSelected}-${districtSelected}`
      }
    }
  }, [departmentSelected, districtSelected, medicationStatus, provinceSelected, setMedicationStatus])

  return {
    onSearchData,
    openSnackBar,
    setOpenSnackBar,
    medicationStatus,
    setMedicationStatus,
  }
}
