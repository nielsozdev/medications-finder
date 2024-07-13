import Link from 'next/link'

import { Search as SearchIcon } from '@mui/icons-material'
import { Box, ListItemButton, alpha, ListItemText } from '@mui/material'

import { sanitize } from './sanitize'

export function SuggestionItem(props: any) {
  const { item, itemIndex, index, autocompleteState, ...restOfprops } = props

  return (
    <ListItemButton
      selected={itemIndex === autocompleteState.activeItemId}
      sx={{
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'transparent',
        // borderBottomColor: (theme) => theme.palette.divider,
        ...(itemIndex === autocompleteState.activeItemId && {
          borderRadius: 1,
          borderColor: (theme) => theme.palette.primary.main,
          backgroundColor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        }),
        '&:hover': {
          borderRadius: 1,
          borderColor: (theme) => theme.palette.primary.main,
          backgroundColor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        },
      }}
      {...restOfprops}
    >
      <Link href={`/results?query=${item.name}`}>
        <ListItemText
          primary={(
            <>
              <SearchIcon />
              <Box
                key={index}
                component="span"
                dangerouslySetInnerHTML={{ __html: sanitize(item._highlightResult.name.value) }}
                sx={{ ml: 1, fontWeight: 'bold', color: 'text.secondary' }}
              />
            </>
          )}
          sx={{
            '& mark': {
              fontWeight: 'normal',
              backgroundColor: 'transparent',
              color: 'text.primary',
            },
          }}
        /></Link>
    </ListItemButton>
  )
}
