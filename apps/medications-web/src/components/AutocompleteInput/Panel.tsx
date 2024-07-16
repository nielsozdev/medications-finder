import { Paper, List } from '@mui/material'

import { SuggestionItem } from './SuggestionItem'

export function Panel(props: any) {
  const { autocompleteState, panelRef, autocomplete } = props

  return (
    <div ref={panelRef} className="aa-Panel w-full z-10 absolute top-14 left-0 " {...autocomplete.getPanelProps()}>
      <Paper
        aria-labelledby="autocomplete"
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
        }}
      >

        { (autocompleteState.isOpen &&
          autocompleteState.collections.map((collection: any, index: number) => {
            const { source, items } = collection

            return (
              <div key={`source-${index}`} className="w-full">
                {items.length > 0 && (
                  <List
                    key={autocompleteState.collections.length}
                    disablePadding
                  >
                    <ul
                      className="last:mb-0"
                      {...autocomplete?.getListProps()}
                    >
                      {items.map((item: any, itemIndex: number) => (
                        <SuggestionItem
                          key={item.objectID}
                          autocompleteState={autocompleteState}
                          index={index}
                          item={item}
                          itemIndex={itemIndex}
                          {...autocomplete?.getItemProps({
                            item,
                            source,
                          })}
                        />
                      ))}
                    </ul>
                  </List>
                )}
              </div>
            )
          })
        )}
        {/* {noResults && (<SearchNotFound query={q} />) } */}

      </Paper>
    </div>
  )
}
