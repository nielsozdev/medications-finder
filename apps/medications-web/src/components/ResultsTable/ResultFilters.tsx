import { Divider, IconButton, List, ListItem, ListItemText } from '@mui/material'

import { useAppStore } from '~/context/AppStoreProvider/useAppStore'
import { Iconify } from '~/ui/Iconify'

export function Resultsfilters() {
  const {
    subFamilyFilterSelected,
    medicationFilterSelected,
    productFilterSelected,
    setSubFamilyFilterSelected,
    setMedicationFilterSelected,
    setProductFilterSelected,
  } = useAppStore((state) => state)

  const arrData = [
    {
      id: 'subFamily',
      value: subFamilyFilterSelected,
    },
    {
      id: 'medication',
      value: medicationFilterSelected,
    },
    {
      id: 'product',
      value: productFilterSelected,
    },
  ]

  const handleDeleteItem = (id: any) => {
    const filterSetters: any = {
      subFamily: setSubFamilyFilterSelected,
      medication: setMedicationFilterSelected,
      product: setProductFilterSelected,
    }

    if (filterSetters[id]) {
      filterSetters[id]('Todos')
    }
  }

  return (
    <List dense>
      {
        arrData.map((item: any, index: number) => {
          if (item.value !== 'Todos') {
            return (
              <>
                <ListItem
                  sx={{
                    ml: (index * 4) / 4,
                    display: 'inline-flex',
                    alignItems: 'center',
                    width: 'auto',
                  }}
                  key={`${item.id}-${index}`}
                  secondaryAction={(
                    <IconButton edge="end" aria-label="delete" onClick={() => { handleDeleteItem(item.id) }}>
                      <Iconify icon={'carbon:close'} width={18} />
                    </IconButton>
                  )}
                >
                  <Iconify icon={'tabler:caret-right'} />
                  <ListItemText
                    sx={{ alignItems: 'center' }}
                    primary={`${item.value}`}
                    primaryTypographyProps={{ fontWeight: 'bold' }}
                  />
                </ListItem>
                <Divider sx={{ border: 0, width: '100%' }} />
              </>
            )
          }

          return null
        })
      }
    </List>
  )
}
