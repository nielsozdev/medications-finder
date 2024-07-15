'use client'
import { Box, Card, CardActionArea, CardContent, CardHeader, Container } from '@mui/material'

import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import { type TableRowProps } from '@mui/material/TableRow'

import { useResponsive } from '~/hooks/useResponsive'

const array = Array.from({ length: 6 })
export default function TableSkeleton({ ...other }: TableRowProps) {
  const mdUp = useResponsive('up', 'md')

  return (
    <Container maxWidth={'lg'}>

      <Box component='div' sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'space-between' }}>
        {mdUp && (
          <>
            <Stack alignItems="start" direction="row" spacing={2}>
              <Skeleton sx={{ borderRadius: 1.25, width: 150, height: 50, flexShrink: 0 }} />
              <Skeleton sx={{ borderRadius: 1.25, width: 150, height: 50, flexShrink: 0 }} />
              <Skeleton sx={{ borderRadius: 1.25, width: 150, height: 50, flexShrink: 0 }} />
            </Stack>
          </>
        )}
        {!mdUp && (
          <Skeleton sx={{ borderRadius: 1.1, width: 40, height: 50, flexShrink: 0 }} />
        )}
        <Box>
          <Skeleton sx={{ borderRadius: 1.1, width: 100, height: 50, flexShrink: 0 }} />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: mdUp ? 'repeat(auto-fit, minmax(400px, 1fr))' : '1fr',
          gap: 2,
          mt: 3,
        }}
      >
        {array.map((item, index) => (
          <Card sx={{ display: 'flex', width: '100%' }} key={index}>
            <CardActionArea>
              <CardHeader
                avatar={(<Skeleton variant="circular" width={45} height={45} />)}
                action={(
                  <Box component="div">
                    <Stack alignItems="center" direction="column" spacing={0}>
                      <Skeleton sx={{ borderRadius: 1.1, width: 40, height: 20, flexShrink: 0 }} />
                      <Skeleton sx={{ borderRadius: 1.1, width: 40, height: 20, flexShrink: 0 }} />
                    </Stack>
                  </Box>
                )}
                title={(
                  <Box component="div" sx={{ typography: 'h6', color: 'text.primary', display: 'flex', fontWeight: 'bold' }}>
                    <Skeleton sx={{ width: '70%', height: 25 }} />
                  </Box>
                )}
                subheader={(
                  <Box sx={{ color: 'text.primary' }}>
                    <Stack alignItems="start" direction="row" spacing={1}>
                      <Skeleton sx={{ borderRadius: 1.25, width: 10, height: 20, flexShrink: 0 }} />
                      <Skeleton sx={{ width: '60%', height: 20 }} />
                      <Skeleton sx={{ borderRadius: 1.25, width: 10, height: 20, flexShrink: 0 }} />
                    </Stack>
                  </Box>
                )}
              />
              <CardContent content='center'>

                <Box>
                  <Skeleton sx={{ width: 100, height: 70 }} />

                </Box>

                <Box component="div">
                  <Skeleton sx={{ width: '80%', height: 25 }} />

                </Box>

                <Box component="div">
                  <Skeleton sx={{ width: '50%', height: 20 }} />
                </Box>

                <Box component="div" sx={{ typography: 'body2', color: 'text.primary', display: 'flex', gap: 2, alignItems: 'center', mt: 2 }}>
                  <Box component='span' sx={{ display: 'flex', alignItems: 'center' }}>
                    <Stack alignItems="start" direction="row" spacing={1}>
                      <Skeleton sx={{ borderRadius: 1.25, width: 15, height: 25, flexShrink: 0 }} />
                      <Skeleton sx={{ width: 100, height: 25 }} />
                    </Stack>
                  </Box>
                  <Box component='span' sx={{ display: 'flex', alignItems: 'center' }}>
                    <Stack alignItems="start" direction="row" spacing={1}>
                      <Skeleton sx={{ borderRadius: 1.25, width: 15, height: 25, flexShrink: 0 }} />
                      <Skeleton sx={{ width: 100, height: 25 }} />
                    </Stack>
                  </Box>
                </Box>

              </CardContent>
            </CardActionArea>

          </Card>
        ))}

      </Box>

    </Container>
  )
}
