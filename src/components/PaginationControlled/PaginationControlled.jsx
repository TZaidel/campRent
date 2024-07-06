import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

import css from './PaginationControlled.module.css';

export default function PaginationControlled({ pages, onChange }) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    onChange(value);
  };

  return (
    <div className={css.wrap}>
      <Stack spacing={2}>
        <Pagination count={pages} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
}
