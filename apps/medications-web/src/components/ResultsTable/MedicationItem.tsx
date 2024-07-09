import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Avatar, Box, Card, CardActionArea, CardContent, CardHeader } from '@mui/material'

import { blue, yellow } from '@mui/material/colors'

import { type ProductPrices } from './types'

import { Iconify } from '~/ui/Iconify'
import { Label } from '~/ui/Label'
import { fcurrency } from '~/utils/format-number'
import { formatText } from '~/utils/format-text'

interface Props {
  item: ProductPrices
}

function getFirstLetter(str: string) {
  return str.split(' ').map((s) => s.charAt(0)).join('')
}

export function MedicationItem({ item }: Props) {
  const {
    id,
    productName,
    unitPrice,
    // packPrice,
    concentration,
    establishmentName,
    address,
    location,
    province,
    district,
    establishmentType,
    establishmentTypeId,
    // updateAt,
    // completeProductName,
    // medication,
    pharmaceuticalForm,
    fractions,
  } = item

  const handleCard = () => {
    redirect(`/medication/${id}`)
  }

  return (
    <>

      <Card sx={{ display: 'flex', width: '100%' }} onClick={handleCard}>
        <CardActionArea>
          <CardHeader
            avatar={(
              <Avatar sx={{ bgcolor: blue[500], fontWeight: 'bold', fontSize: '15px' }} aria-label="recipe">
                {getFirstLetter(establishmentName)}
              </Avatar>
            )}
            action={(
              <Box component="div" sx={{ typography: 'body', color: 'text.disabled', display: 'flex', gap: 1, flexDirection: 'column' }}>
                <Label color={(establishmentTypeId === '03' ? 'success' : establishmentTypeId === '04' ? 'primary' : 'success')} variant="soft">
                  {establishmentTypeId === '03' ? 'Farmacia' : establishmentTypeId === '04' ? 'Botica' : 'Farmacia Estab. Salud'}
                </Label>
                <Label color={(establishmentType === 'Público' && 'info') || 'secondary'} variant="soft">
                  {establishmentType}
                </Label>
              </Box>
            )}
            title={(
              <Box component="div" sx={{ typography: 'h6', color: 'text.primary', display: 'flex', fontWeight: 'bold' }}>
                {establishmentName}
              </Box>

            )}
            subheader={(
              <Box sx={{ color: 'text.primary' }}>
                <Link className='flex  items-center hover:underline' href={buildGoogleMapsUrl(`${address}, ${location.replace('-', ', ')}`)} rel="noreferrer" target="_blank">
                  {/* <span className='flex  items-center hover:underline' onClick={() => navigateToExternalLink()}> */}
                  {/* <a className='flex  items-center hover:underline' href={buildGoogleMapsUrl(`${address}, ${location.replace('-', ', ')}`)} rel="noreferrer" target="_blank"> */}
                  <Iconify icon="ri:map-pin-2-fill" width={15} sx={{ mr: '5px', color: 'text.primary' }} />
                  {address}
                  <Iconify icon="fluent:open-12-regular" sx={{ mx: '5px', color: 'text.primary' }} />
                </Link>
                {/* </span> */}
                {/* </a> */}
              </Box>
            )}
            // )}
          />
          <CardContent content='center'>

            <Box sx={{ typography: 'h5', display: 'flex', alignItems: 'center', fontWeight: 'bold', color: yellow[700] }}>
              {fcurrency(unitPrice)}
            </Box>

            <Box component="div" sx={{ typography: 'h6', color: 'text.primary', display: 'flex', my: 1, fontWeight: 'bold' }}>
              <Link href={`/medication/${productName}`} className='flex  items-center hover:underline'>
                {formatText(productName)}
              </Link>
            </Box>

            <Box component="div" sx={{ typography: 'body2', color: 'text.primary', display: 'flex', gap: 1 }}>
              {concentration}  {formatText(pharmaceuticalForm)} x {fractions} unidades
            </Box>

            <Box component="div" sx={{ typography: 'body2', color: 'text.primary', display: 'flex', gap: 2, alignItems: 'center', mt: 2 }}>
              <Box component='span' sx={{ display: 'flex', alignItems: 'center' }}>
                <Iconify width={20} icon="mingcute:map-pin-fill" sx={{ mr: 1, color: 'text.primary' }} />
                {district}
              </Box>
              <Box component='span' sx={{ display: 'flex', alignItems: 'center' }}>
                <Iconify width={20} icon="solar:streets-map-point-bold-duotone" sx={{ mr: 1, color: 'text.primary' }} />
                {province}
              </Box>
            </Box>

          </CardContent>
        </CardActionArea>

      </Card>

    </>
  )
}

function buildGoogleMapsUrl(address: string) {
  const baseUrl = 'https://www.google.com/maps/search/?api=1'
  const query = encodeURIComponent(address)

  return `${baseUrl}&query=${query}`
}
