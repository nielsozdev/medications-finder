export function sortByPrice(array: any[], orden: 'asc' | 'desc') {
  return array.sort((a: any, b: any) => {
    const priceA = parseFloat(a.unitPrice)
    const priceB = parseFloat(b.unitPrice)

    if (orden === 'asc') {
      return priceA - priceB
    } else if (orden === 'desc') {
      return priceB - priceA
    } else {
      return 0
    }
  })
}
