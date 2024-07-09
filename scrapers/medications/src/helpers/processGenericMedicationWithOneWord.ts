export function processGenericMedicationWithOneWord(list: string[]): string[] {
  const words = list.map((item) => item.split(' ')[0]).filter((firstWord) => firstWord.length >= 5)

  return Array.from(new Set(words))
}
