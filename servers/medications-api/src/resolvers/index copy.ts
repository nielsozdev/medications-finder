// import { MedicationModel } from '@noz/scraper-medications'

// import { type NormalizeData, type Resolvers } from '~/generated/graphql'
// import { DatabaseError } from '~/helpers.errors'

// export const resolvers: Resolvers = {
//   Query: {

//     allMedications: async (_, { department, province, district }, context) => {
//       try {
//         // const medications = await MedicationModel.find(filtro)
//         let medications
//         if (department ?? province ?? district) {
//           medications = await MedicationModel.find({
//             'establishment.department': department,
//             'establishment.province': province,
//             'establishment.district': district,
//           }).populate('establishment manufacturer').sort({ 'details.price.0': 1 })
//         } else {
//           medications = await MedicationModel.find().sort({ 'details.price.0': -1 })
//         }
//         // const medications = await MedicationModel.find()

//         return medications
//       } catch (error) {
//         console.error('Error obtaining medications:', error)
//         if (error instanceof DatabaseError) {
//           // Handle database-related errors
//           throw new DatabaseError(error.message)
//         } else {
//           // Handle other types of errors
//           throw error
//         }
//       }
//     },
//     medication: async (_, { id }, context): Promise<NormalizeData> => {
//       try {
//         const medication = await MedicationModel.findOne({ medicationId: id }) ?? {}

//         return medication
//       } catch (error) {
//         console.error('Error obtaining medications:', error)
//         if (error instanceof DatabaseError) {
//           // Handle database-related errors
//           throw new DatabaseError(error.message)
//         } else {
//           // Handle other types of errors
//           throw error
//         }
//       }
//     },
//   },
// }
