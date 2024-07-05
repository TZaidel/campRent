import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import css from './Pagination.module.css'

export default function PaginationControlled() {
  const [page, setPage] = useState(1)
  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={4} page={page} onChange={handleChange}/>
    </Stack>
  )
}