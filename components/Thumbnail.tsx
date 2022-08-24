import Image from 'next/image';
import React from 'react';
import { url } from '../constants/movie';
import { Movie } from '../typings';

interface Props {
    movie: Movie;
}

export const Thumbnail = ({ movie }: Props) => {
    return (
        <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
            <Image
                src={`${url}${movie.backdrop_path || movie.poster_path}`}
                layout={'fill'}
                className='rounded-sm object-cover md:rounded'
            />
        </div>
    );
};
