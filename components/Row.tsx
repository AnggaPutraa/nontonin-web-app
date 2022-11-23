import Image from 'next/image'
import { Movie } from "../movie-typing";
import { Swiper, SwiperSlide } from 'swiper/react';
import { getImageUrl } from "../constants/endpoints";

import 'swiper/css';

const Row = ({ genre, movies }: Props) => {
    return (
        <div className='px-4 md:px-6 lg:px-12 pb-3'>
            <div className="flex flex-row justify-between mb-4">
                <h2 className='text-xl font-semibold'>{genre}</h2>
                <h2 className="text-base text-blue-500">View all</h2>
            </div>
            <div className='movie-row'>
                <Swiper
                    grabCursor={true}
                    spaceBetween={12}
                    slidesPerView={'auto'}
                >
                    {
                        movies.map(
                            (item, i) => (
                                <SwiperSlide key={i} className='swipper-slide' >
                                    <img src={getImageUrl + item.poster_path} alt="" className='w-[20vh] h-[30vh] object-cover rounded-md' />
                                    <h2 className='text-sm mt-2'>{item?.title || item?.name || item?.original_name}</h2>
                                </SwiperSlide>
                            )
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default Row;

interface Props {
    genre: String
    movies: Movie[]
}