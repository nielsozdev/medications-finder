import { useCallback, useState } from 'react'

// ----------------------------------------------------------------------

interface ReturnType {
  onClose: VoidFunction
  onOpen: (event: React.MouseEvent<HTMLElement>) => void
  open: HTMLElement | null
  setOpen: React.Dispatch<React.SetStateAction<HTMLElement | null>>
}

export default function usePopover(): ReturnType {
  const [open, setOpen] = useState<HTMLElement | null>(null)

  const onOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget)
  }, [])

  const onClose = useCallback(() => {
    setOpen(null)
  }, [])

  return {
    open,
    onOpen,
    onClose,
    setOpen,
  }
}
