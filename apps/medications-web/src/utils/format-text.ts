export function formatText(text: string): string {
  const words = text.toLowerCase().split(' ')

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)

    const specialWords = ['Av.', 'Esq.', 'Nº']
    if (specialWords.includes(words[i])) {
      words[i] = words[i].toUpperCase()
    }
  }

  return words.join(' ')
}
