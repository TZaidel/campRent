import Select from 'react-select';

import css from './Location.module.css';

const locationOptions = [
  { value: 'Lviv', label: 'Lviv' },
  { value: 'Kyiv', label: 'Kyiv' },
  { value: 'Odesa', label: 'Odesa' },
  { value: 'Poltava', label: 'Poltava' },
  { value: 'Dnipro', label: 'Dnipro' },
  { value: 'Sumy', label: 'Sumy' },
  { value: 'kharkiv', label: 'Kharkiv' },
];

export default function Location({ setLocations }) {
  const handleChange = selectedOptions => {
    setLocations(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Location</h2>
      <Select
        onChange={handleChange}
        placeholder="Select location"
        isMulti
        name="locations"
        options={locationOptions}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  );
}
