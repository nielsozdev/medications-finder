import fs from 'node:fs/promises'
import path from 'node:path'

import { clog } from '@noz/utils'

export async function findMedication(searchTerm: string) {
  const filePath = path.join(process.cwd(), 'src/data/medications.json')
  const existFile = await checkIfFileExists(filePath)
  let file
  if (!existFile) {
    await fetch('http://localhost:3000/api/search').then(async (res) => await res.json())
    file = await fs.readFile('./src/data/medications.json', 'utf-8')
  } else {
    file = await fs.readFile('./src/data/medications.json', 'utf-8')
  }

  const medications = JSON.parse(file)

  const combinations = generateCombinations(searchTerm)

  for (const combination of combinations) {
    const medication = medications.find((med: Record<string, string>) => normalizeString(med.name.toUpperCase()) === combination)
    if (medication) {
      clog.info(`Medicación encontrada: ${medication.name}`)

      return medication.name
    }
  }

  return searchTerm
}

function generateCombinations(searchTerm: string) {
  const words: string[] = normalizeString(searchTerm.toUpperCase()).split(' ')
  const combinations: string[] = []

  function permute(arr: string[], m: string[] = []) {
    if (arr.length === 0) {
      combinations.push(m.join(' '))
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice()
        const next = curr.splice(i, 1)
        permute(curr.slice(), m.concat(next))
      }
    }
  }

  permute(words)

  return combinations
}

async function checkIfFileExists(filePath: string) {
  try {
    await fs.access(filePath)

    return true
  } catch (error) {
    return false
  }
}

function normalizeString(str: string) {
  return str.toUpperCase().replace(/\+/g, ' ').replace(/\s+/g, ' ').trim()
}
