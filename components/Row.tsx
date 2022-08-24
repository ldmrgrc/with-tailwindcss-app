import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React, { useRef, useState } from 'react';
import { Movie } from '../typings';
import { Thumbnail } from './Thumbnail';

interface Props {
    title: string;
    movies: Movie[];
}

export const Row = ({ title, movies }: Props) => {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isMoved, setIsMoved] = useState(false);

    const handelClick = (dir: string) => {
        const row = rowRef.current;
        setIsMoved(true);

        if (row) {
            const { scrollLeft, clientWidth } = row;
            const scrollTo =
                dir === 'left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;

            row.scrollTo({ left: scrollTo, behavior: 'smooth' });

            setTimeout(() => {
                setIsMoved(false);
            }
            , 500);

        }
    };

    return (
        <div className="h-50 space-y-0.5 md:space-y-2">
            <h2 className="w-56 cursor-pointer text-sm font-bold text-[#e5e5e5] transition dura-200 hover:text-white md:text-2xl">
                {title}
            </h2>
            <div className="group relative md:-ml-2">
                <ChevronLeftIcon
                    className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
                        isMoved && 'hidden'
                    }`}
                    onClick={() => handelClick('left')}
                />
                <div
                    ref={rowRef}
                    className="flex scrollbar-hide items-center space-x-0.5 overflow-scroll md:space-x-2.5 md:p-2"
                >
                    {movies.map((movie) => (
                        <Thumbnail key={movie.id} movie={movie} />
                    ))}
                </div>
                <ChevronRightIcon
                    className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
                        isMoved && 'hidden'
                    }`}
                    onClick={() => handelClick('right')}
                />
            </div>
        </div>
    );
};
