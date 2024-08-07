import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect } from 'react';
import { images } from './images.js';
import css from './Hero.module.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  // useEffect(() => {
  //   if (emblaApi) {
  //     console.log(emblaApi.slideNodes());
  //   }
  // }, [emblaApi]);

  return (
    <section className={css.embla}>
      <div className={css.embla__viewport} ref={emblaRef}>
        <div className={css.embla__container}>
          {images.map(image => (
            <div className={css.embla__slide} key={image.id}>
              <img src={image.imgUrl} className={css.img} alt="view of landscape" />
            </div>
          ))}
        </div>
      </div>
      <div className={css.descriptionWrap}>
        <p className={css.description}>Open your eyes to a new view every morning. </p>
        <h1 className={css.title}>
          Make your adventure seamless
        <br/>
          <Link to="/catalog" className={css.rent__link}>
            rent a camp
          </Link>
        </h1>
      </div>
    </section>
  );
}
