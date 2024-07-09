interface MedicationPageParams {
  params: {
    name: string
  }
}

export default function medicationPage(params: MedicationPageParams) {
  const { name } = params.params
  // console.log(params)

  return <div>{name}</div>
}

/* <Card sx={{ display: 'flex', width: '100%' }} onClick={handleCard}>
<CardActionArea href={`/medication/${productName}`}>
  <CardHeader
    avatar={(
      <Avatar sx={{ bgcolor: blue[500], fontWeight: 'bold', fontSize: '15px' }} aria-label="recipe">
        {getFirstLetter(establishmentName)}
      </Avatar>
    )}
    action={(
      <a className='flex items-center hover:underline' href={buildGoogleMapsUrl(`${address}, ${location.replace('-', ', ')}`)} rel="noreferrer" target="_blank">
        <Iconify icon="logos:google-maps" width={35} sx={{ color: 'text.primary' }} />
      </a>

    )}
    title={(
      <div className='font-bold flex items-center gap-2'>
        {establishmentName}
        <Box component="div" sx={{ typography: 'body2', color: 'text.disabled', display: 'flex', gap: 1 }}>

          <Label color={(establishmentType === 'Público' && 'info') || 'secondary'} variant="soft">
            {establishmentType}
          </Label>
          <Label color={(establishmentTypeId === '03' ? 'success' : establishmentTypeId === '04' ? 'primary' : 'success')} variant="soft">
            {establishmentTypeId === '03' ? 'Farmacia' : establishmentTypeId === '04' ? 'Botica' : 'Farmacia Estab. Salud'}
          </Label>
        </Box>
      </div>
    )}
    subheader={(
      <Box sx={{ color: 'text.primary' }}>

        <div className='flex items-center gap-2'>
          <span className='flex'>
            <Iconify icon="solar:streets-map-point-bold-duotone" sx={{ mr: 1, color: 'text.primary' }} />
            {province}
          </span>
          <span className='flex'>

            <Iconify icon="fluent:my-location-20-regular" sx={{ mr: 1, color: 'text.primary' }} />
            {district}
          </span>
        </div>
        <a className='flex  items-center hover:underline' href={buildGoogleMapsUrl(`${address}, ${location.replace('-', ', ')}`)} rel="noreferrer" target="_blank">
          {address}
          <Iconify icon="fluent:open-12-regular" sx={{ ml: '5px', color: 'text.primary' }} />
        </a>
      </Box>
    )}
  />
  <CardContent>

    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Typography component="div" variant="h6">

        <div className='flex items-center gap-2 font-bold'>
          <Iconify icon='mdi:drugs' />
          <span className="text-yellow-500">{fcurrency(price2)}</span>
        </div>

      </Typography>
      <Typography component="div" variant="h6">

        <div className='flex items-center gap-2'>
          <Iconify icon='solar:box-bold' />
          {fcurrency(price)}
        </div>
      </Typography>
    </Box>
    <Typography sx={{ fontSize: 18, mt: 1, fontWeight: 'bold' }} color="text.primary" gutterBottom>
      {productName}
      <Box component="div" sx={{ typography: 'body2', color: 'text.primary', my: 1, display: 'flex', gap: 1 }}>
        {medication}
      </Box>
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>

      <Box component="div" sx={{ typography: 'body2', color: 'text', my: '4px', display: 'flex', alignItems: 'center' }}>
        <Box
          component='div' sx={{
            color: 'text.secondary',
            fontWeight: 'semibold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Iconify icon="fluent:my-location-20-regular" sx={{ mr: 1, color: 'text.primary' }} />

          <Box sx={{ mr: 1 }}>  Concentración:</Box>
        </Box>
        {concentration}
      </Box>

      <Box component="div" sx={{ typography: 'body2', color: 'text', my: '4px', display: 'flex', alignItems: 'center' }}>
        <Box
          component='div' sx={{
            color: 'text.secondary',
            fontWeight: 'semibold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Iconify icon="fluent:my-location-20-regular" sx={{ mr: 1, color: 'text.primary' }} />

          <Box sx={{ mr: 1 }}>  Unidades:</Box>
        </Box>
        {fractions}
      </Box>

      <Box component="div" sx={{ typography: 'body2', color: 'text', my: '4px', display: 'flex', alignItems: 'center' }}>
        <Box
          component='div' sx={{
            color: 'text.secondary',
            fontWeight: 'semibold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Iconify icon="fluent:my-location-20-regular" sx={{ mr: 1, color: 'text.primary' }} />

          <Box sx={{ mr: 1 }}>  Forma Farmaceútica:</Box>
        </Box>
        {pharmaceuticalForm}
      </Box>

      {updateAt && (
        <Box component="div" sx={{ typography: 'body2', color: 'text', my: '7px', display: 'flex', alignItems: 'center' }}>
          <Iconify icon="solar:clock-circle-bold" sx={{ mr: 1, color: 'text.secondary' }} />
          <Box
            component='span' sx={{
              color: 'text.secondary',
              fontWeight: 'semibold',
            }}
          >
            Actualizado:&nbsp;
          </Box>
          <ListItemText
            primary={new Intl.DateTimeFormat('es-PE', {
              dateStyle: 'medium',
              timeZone: 'America/Lima',
            }).format(updateAt)}
            primaryTypographyProps={{ typography: 'body2', noWrap: true }}
          />
        </Box>
      )}

    </Box>

  </CardContent>
</CardActionArea>

</Card> */
