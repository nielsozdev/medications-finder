import { Paper, List } from '@mui/material'

import { SuggestionItem } from './SuggestionItem'

export function Panel(props: any) {
  const { autoCompleteState, panelRef, autocomplete } = props

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

        { (autoCompleteState.isOpen &&
          autoCompleteState.collections.map((collection: any, index: number) => {
            const { source, items } = collection

            return (
              <div key={`source-${index}`} className="aa-Source w-full">
                {items.length > 0 && (
                  <List
                    key={autoCompleteState.collections.length}
                    disablePadding
                  >
                    <ul
                      className="aa-List"
                      {...autocomplete?.getListProps()}
                    >
                      {items.map((item: any, itemIndex: number) => (
                        <SuggestionItem
                          key={item.objectID}
                          autoCompleteState={autoCompleteState}
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
