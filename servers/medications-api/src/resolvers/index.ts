// import { MedicationModel } from '@noz/scraper-medications'

import { DatabaseError } from '~/helpers.errors'
import { getAllMedications } from '~/services/getAllMedications'
import { getFamily } from '~/services/getFamily'
import { getMedicationsPrices } from '~/services/getMedicationPrices'
import { getMedicationPricesFromFamily } from '~/services/getMedicationPricesFromFamily'
import { getMedications } from '~/services/getMedications'
import { getResultsOfSearch } from '~/services/getResultsOfSearch'
import { type Resolvers } from '~/types/graphql'

export const resolvers: Resolvers = {
  Query: {
    allMedicationPrices: async (_, params, context) => {
      try {
        const data = await getAllMedications()

        return data
      } catch (error) {
        console.error('Error obtaining medications:', error)

        if (error instanceof DatabaseError) {
          throw new DatabaseError(error.message)
        } else {
          throw error
        }
      }
    },
    medicationPrices: async (_, params, context) => {
      const data = await getMedications(params)

      return data
    },
    getSearchResults: async (_, { medication }, context) => {
      const data = await getResultsOfSearch({ medication })

      return data
    },
    getMedicationsFromFamily: async (_, { family }, context) => {
      const data = await getMedicationPricesFromFamily({ family })

      return data
    },
    // getSubFamily: async (_, { medication }, context) => {

    //   const data = await getSubFamilies({ medication })

    //   return data
    // },
    // getMedicationPrices: async (_, { medication, department, province, district }, context) => {
    //   const data = await getMedicationsPrices({ medication, department, province, district })

    //   return data
    // },
  },
}
