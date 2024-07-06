import { Link } from 'react-router-dom';

import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <>
      <div className={css.descriptionWrap}>
        <p className={css.description}>
          The page you are looking for doesn't exist or an error occured.
        </p>
        <h2 className={css.title}>
          Live the adventure of a lifetime. Wake up to endless possibilities
        </h2>

        <Link to="/catalog" className={css.rentLink}>
          Go back and discover
        </Link>
      </div>
    </>
  );
}
