import Image from 'next/image'
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PlayIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import { Movie } from '../movie-typing';
import { getImageUrl } from '../constants/endpoints';

import 'swiper/css';

const HeroSlider = ({ movies }: Props) => {
    SwiperCore.use([Autoplay]);
    return (
        <div>
            <Swiper className=''
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
            >
                {
                    movies.map(
                        (item, i) => (
                            <SwiperSlide key={i}>
                                {({ isActive }) => (
                                    <div className='relative flex flex-col space-y-2 md:space-y-4 py-16 h-[60vh] lg:h-[85vh] justify-center'>
                                        <div className='absolute top-0 left-0 -z-10 h-[85vh] w-full opacity-40'>
                                            <Image
                                                src={getImageUrl + item.backdrop_path}
                                                fill className='object-cover' alt={''} />
                                        </div>
                                        <div
                                            className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t pt-32 pb-4 lg:pb-8 pointer-events-none from-black absolute">
                                        </div>
                                        <div className='flex flex-row justify-between items-center'>
                                            <div className='pl-4 md:pl-6 lg:pl-12 pr-2'>
                                                <h1 className='text-2xl  md:max-w-lg lg:max-w-xl md:text-4xl lg:text-5xl font-bold'>{item?.title || item?.name || item?.original_name}</h1>
                                                <p className='max-w-sm md:max-w-lg lg:max-w-xl text-sx md:text-md text-shadow-md'>{item.overview}</p>
                                                <div className='flex flex-row space-x-2 mt-2'>
                                                    <button type="button" className="text-black bg-white transition hover:opacity-75 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mb-2 gap-2">
                                                        <PlayIcon className='h-6 w-6 text-black' />
                                                        Play
                                                    </button>
                                                    <button type="button" className="text-white bg-gray-400/40 bg-opacity-5 transition hover:bg-opacity-70 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center mb-2 gap-2">
                                                        <InformationCircleIcon className='h-6 w-6 text-white' />
                                                        More Info
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='hidden pr-4 md:pr-6 lg:pr-12 lg:inline'>
                                                <img src={getImageUrl + item.poster_path}
                                                    className='h-[60vh] rounded-xl shadow-2xl pointer-events-none'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        )
                    )
                }
            </Swiper>
        </div>
    );
}

export default HeroSlider;

interface Props {
    movies: Movie[]
}