'use client'
import Image from 'next/image'
import { useState, useContext, useEffect } from 'react'
import { AiOutlineHeart, AiFillHeart, AiOutlineArrowLeft } from 'react-icons/ai';

import { AppContext } from '@/context/data'

export default function EpisodeList() {
    const { content, search, setSearch, favorites, setFavorites } = useContext(AppContext)
    const [favoriteButtom, setFavoriteButton] = useState(false)


    const toggleFavorite = (item) => {
        if (favorites.includes(item)) {
            setFavorites(favorites.filter(fav => fav !== item));
            // localStorage.setItem("favorites", item)

        } else {
            setFavorites([...favorites, item]);
            localStorage.setItem("favorites", JSON.stringify(favorites))
            console.log('favoritos:', item);
        }
    };
    useEffect(() => {
        let favoriteStoragedData = localStorage.getItem("favorites") || [];
        // console.log('storage data:', JSON.parse(favoriteStoragedData) );
        // localStorage.setItem("favorites", JSON.stringify(favorites))
        // console.log(`storage data: ${JSON.stringify(favoriteStoragedData)}`);
        setFavorites(JSON.parse(favoriteStoragedData));
        }, [])

    const episodeFiltered = content?.filter(episode => {
        return episode?.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-4 w-full max-w-7xl p-8'>
                {favoriteButtom ? <span className='flex flex-row items-center justify-center gap-2 p-2 border border-zinc-500/60 hover:border-[#97ce4c] hover:text-[#97ce4c] rounded-lg cursor-pointer text-base lg:text-base' onClick={() => setFavoriteButton(false)}><AiOutlineArrowLeft size={20} /></span> : ''}

                <div class="w-80 h-8 flex justify-end items-center relative">
                    <input
                        placeholder="Pesquisar episódios"
                        class="border border-gray-400 rounded-lg p-2 w-full border-zinc-500/60 focus:outline-[#97ce4c] bg-black text-white"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <img src="/icons/search.svg" class="absolute mr-2 w-8" alt="Search Icon" />
                </div>
                <span className='flex flex-row items-center justify-center gap-2 p-2 border border-zinc-500/60 hover:border-[#97ce4c] hover:text-[#97ce4c] rounded-lg cursor-pointer text-sm lg:text-base' onClick={() => setFavoriteButton(true)}><AiOutlineHeart /> Favoritos {favorites.length}</span>
            </div>
            <div className='w-full h-auto flex items-center justify-center'>
                <div className='w-full max-w-7xl h-auto flex flex-wrap items-center justify-center p-12 gap-6'>
                    {favoriteButtom ?
                        favorites.map((fav) => (
                            <div key={fav?.id} className='relative px-4 pt-0'>
                                <a href={`/${fav?.id}`} className='flex flex-col items-center h-[400px] justify-start relative p-4 bg-zinc-500/60 hover:bg-[#97ce4c] hover:-translate-y-1 hover:scale-105 hover:duration-500 rounded-md gap-2'>
                                    <div className='w-full relative'>
                                        <Image src='/images/rm.jpeg' width={300} height={300} alt='image' />
                                        {/* <button className='flex flex-row items-center justify-center absolute right-2 top-2 gap-2 p-2 px-4 border rounded-xl hover:bg-[#f0e14a] z-30' onClick={(e) => { e.preventDefault, toggleFavorite(i) }} ><AiOutlineHeart /></button> */}
                                    </div>
                                    <span>{fav?.name}</span>
                                    <span>data:{fav?.air_date}</span>
                                    <span>Episódio:{fav?.episode}</span>
                                    <span>Qtd de personagens:{fav?.characters.length}</span>
                                </a>
                                <button className='flex flex-row items-center justify-center absolute bottom-6 left-16 gap-2 p-2 px-4 border rounded-xl hover:bg-[#f0e14a] z-30' onClick={(e) => { e.preventDefault, toggleFavorite(fav) }}>
                                    {favorites.includes(fav) ? <AiFillHeart /> : <AiOutlineHeart />} {favorites.includes(fav) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
                                </button>
                            </div>
                        ))
                        :
                        search.length === 0 ?
                            content?.map((item, i) => (
                                <div key={item.id} className='w-full max-w-[332px] relative px-4 pt-0'>
                                    <a href={`/${item.id}`} className='flex flex-col items-center w-full h-[400px] justify-start relative p-4 bg-zinc-500/60 hover:bg-[#97ce4c] hover:-translate-y-1 hover:scale-105 hover:duration-500 rounded-md gap-2'>
                                        <div className='w-full relative'>
                                            <Image src='/images/rm.jpeg' width={300} height={300} alt='image' />
                                        </div>
                                        <span>{item.name}</span>
                                        <span>data:{item.air_date}</span>
                                        <span>Episódio:{item.episode}</span>
                                        <span>Qtd de personagens:{item.characters.length}</span>
                                    </a>
                                    <button className='flex flex-row items-center justify-center absolute bottom-6 left-14 lg:left-16 gap-2 p-2 px-4 border text-sm rounded-xl hover:bg-[#f0e14a] z-30' onClick={(e) => { e.preventDefault, toggleFavorite(item) }}>
                                        {favorites.includes(item) ? <AiFillHeart /> : <AiOutlineHeart />} {favorites.includes(item) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
                                    </button>
                                </div>
                            ))
                            :
                            episodeFiltered?.map((item, i) => (
                                <article key={item.id} className='flex flex-col items-center justify-center p-4 bg-zinc-500/60 hover:bg-[#97ce4c] hover:-translate-y-1 hover:scale-105 hover:duration-500 rounded-md gap-2'>
                                    <Image src='/images/rm.jpeg' width={300} height={300} alt='image' />
                                    <span>{item.name}</span>
                                    <span>data:{item.air_date}</span>
                                    <span>Episódio:{item.episode}</span>
                                </article>
                            ))
                    }
                </div>
            </div>
        </>
    )
}