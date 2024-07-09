// @mui
import Box from '@mui/material/Box'
import Stack, { type StackProps } from '@mui/material/Stack'
import { alpha } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

type EmptyContentProps = StackProps & {
  action?: React.ReactNode
  description?: string
  filled?: boolean
  imgUrl?: string
  title?: string
}

export function EmptyContent(props: EmptyContentProps) {
  const {
    title,
    imgUrl,
    action,
    filled,
    description,
    sx,
    ...other
  } = props

  return (
    <Stack
      alignItems="center"
      flexGrow={1}
      justifyContent="center"
      sx={{
        px: 3,
        height: 1,
        ...(filled && {
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${alpha(theme.palette.grey[500], 0.08)}`,
        }),
        ...sx,
      }}
      {...other}
    >
      <Box
        alt="empty content"
        component="img"
        src={imgUrl ?? '/assets/icons/empty/ic_content.svg'}
        sx={{ width: 1, maxWidth: 160 }}
      />

      {title && (
        <Typography
          component="span"
          sx={{ mt: 1, color: 'text.disabled', textAlign: 'center' }}
          variant="h6"
        >
          {title}
        </Typography>
      )}

      {description && (
        <Typography sx={{ mt: 1, color: 'text.disabled', textAlign: 'center' }} variant="caption">
          {description}
        </Typography>
      )}

      {action && action}
    </Stack>
  )
}
