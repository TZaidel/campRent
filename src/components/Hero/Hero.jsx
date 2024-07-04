import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect } from 'react';
import { images } from './images.js';
import css from './Hero.module.css';
import {Link} from 'react-router-dom'

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <section className={css.embla}>
      <div className={css.embla__viewport} ref={emblaRef}>
        <div className={css.embla__container}>
          {images.map(image => (
            <div className={css.embla__slide} key={image.id}>
              <img src={image.imgUrl} className={css.img} />
            </div>
          ))}
        </div>
      </div>
      <div className={css.descriptionWrap}>
        <p className={css.description}>Open your eyes to a new view every morning. </p>
        {/* <p>Every journey has its secret destinations. Discover yours – rent a camp.</p> */}
        {/* <p>Live the adventure of a lifetime. Wake up to endless possibilities – rent a camp.</p> */}

        <h1 className={css.title}>
          Make your adventure seamless –
          <Link to="/catalog" className={css.rent__link}>
            rent a camp
          </Link>
        </h1>
      </div>
    </section>
  );
}
