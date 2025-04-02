import { useEffect, useState } from 'react';
import Button from '../Button';

const Carousel = () => {
  const [carousel, setCarousel] = useState(1);

  const handleIncrementCarousel = () => {
    setCarousel((prev) => (prev >= 3 ? 1 : prev + 1));
  };

  const handleDecrementCarousel = () => {
    setCarousel((prev) => (prev <= 1 ? 3 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(handleIncrementCarousel, 2000);
    return () => clearInterval(interval);
  }, [carousel]);
  return (
    <div className='relative w-full flex justify-center px-10 items-center'>
      <Button
        className={'w-10 h-10 rounded-full absolute left-12 font-extrabold'}
        type={'button'}
        onClick={handleDecrementCarousel}
      >
        &lt;
      </Button>
      <img
        src={`/assets/img/banner-${carousel.toString()}.png`}
        alt=''
        className='w-full h-full'
      />
      <Button
        onClick={handleIncrementCarousel}
        type={'button'}
        className={'w-10 h-10 rounded-full absolute right-12 font-extrabold'}
      >
        &gt;
      </Button>
    </div>
  );
};

export default Carousel;
