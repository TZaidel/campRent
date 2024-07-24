import sprite from '/svg/sprite.svg';

import css from './Filter.module.css';

const options = [
  { value: 'airConditioner', label: 'AC', iconName: 'airConditioner' },
  { value: 'kitchen', label: 'Kitchen', iconName: 'kitchen' },
  { value: 'TV', label: 'TV', iconName: 'tv' },
  { value: 'bathroom', label: 'Shower', iconName: 'shower' },
];

export default function Filter({ filters, setFilters }) {
  const handleChange = e => {
    if (e.target.checked) {
      setFilters(prev => [...prev, e.target.value]);
    } else {
      setFilters(prev => prev.filter(filter => filter !== e.target.value));
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Vehicle equipment</h2>
      <div className={css.iconWrap}>
        {options.map(({ value, label, iconName }) => (
          <label key={value}>
            <input
              className={css.checkbox}
              type="checkbox"
              value={value}
              id={value}
              checked={filters.includes(value)}
              onChange={handleChange}
            />
            <div className={css.iconNameWrap}>
              <svg width="18" height="18" className={css.icon}>
                <use xlinkHref={`${sprite}#icon-${iconName}`}></use>
              </svg>
              <span className={css.filterName}> {label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
