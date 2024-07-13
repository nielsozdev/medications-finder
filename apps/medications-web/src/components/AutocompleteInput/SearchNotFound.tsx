import Paper, { type PaperProps } from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

interface Props extends PaperProps {
  query?: string
}

export default function SearchNotFound({ query, sx, ...other }: Props) {
  return (
    <Paper
      sx={{
        bgcolor: 'unset',
        textAlign: 'center',
        width: '100%',
        px: 2,
        py: 4,
        ...sx,
      }}
      {...other}
    >
      <Typography
        gutterBottom sx={{
          fontWeight: '600',

        }} variant="h6"
      >
        No se encontraron resultados
      </Typography>

      {/* <Typography variant="body2">
        No se encontraron resultados para
        <span className="underline font-bold flex items-center justify-center">

          <strong>&quot;{query}&quot;</strong>.
        </span>
        <br /> Intente comprobar si hay errores tipográficos o utilice palabras completas...
      </Typography> */}
    </Paper>
  )
}
