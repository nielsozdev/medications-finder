'use server'

import { redirect } from 'next/navigation'

export async function medicationAction(formData: FormData) {
  const query = formData.get('query') as string ?? false
  const departmentValue = formData.get('department') as string ?? false
  const provinceValue = formData.get('province') as string ?? false
  const districtValue = formData.get('district') as string ?? false

  const department = departmentValue ? `&department=${departmentValue.toLowerCase()}` : ''
  const province = provinceValue ? `&province=${provinceValue.toLowerCase()}` : ''
  const district = districtValue ? `&district=${districtValue.toLowerCase()}` : ''

  const path = `/results?query=${query}${department}${province}${district}`
  redirect(path)

  return await Promise.resolve()
}
