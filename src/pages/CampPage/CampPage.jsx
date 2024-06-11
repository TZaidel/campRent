import Header from '../../components/Header/Header';
import CampList from '../../components/CampList/CampList'

import style from '../Base.module.css'

export default function CampPage() {
  return (
    <div className={style.container}>
      <Header />
      <CampList/>
    </div>
  );
}
