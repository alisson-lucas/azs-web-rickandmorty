"use client"
import Image from 'next/image'
import { useQuery } from '@/utils/graphql'
import { useEffect, useState, useContext } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { AppContext } from '@/context/data'

import { useParams } from 'next/navigation'


export default function Episode() {
    const { items, setItems, data, content } = useContext(AppContext)
    const params = useParams()
    const id = params.id

    const episode = content?.filter(ep => {
        return ep?.id === id
    })

    const char = data?.episodes.results[id].characters

    return (
        <>
            <div style={{
                '--image-url': `url('/images/banner.jpg')`, '--image-url-mobile': `url('/backgrounds/bg-moura-mobile.png')`,
            }} className='flex items-center justify-center w-full h-[105px] bg-black py-  bg-cover bg-center'>
                <div className='flex flex-row items-center justify-center p-4 gap-8'>
                    <Image src='/images/tt.png' width={300} height={300} alt='image' />
                </div>
            </div>
            <div style={{
                '--image-url': `url('/images/banner-new.jpg')`, '--image-url-mobile': `url('/backgrounds/bg-moura-mobile.png')`,
            }} className='flex items-center justify-center relative w-full h-[400px] bg-[image:var(--image-url)] bg-cover bg-top bg-no-repeat after:content[""] after:absolute after:bg-gradient-to-t after:from-black/95 after:to-black/5 after:h-48 after:bottom-0 after:right-0 after:left-0 after:z-40'>
                <div className='flex items-end justify-start w-full h-full px-20 py-10 max-w-7xl'>
                    <span className='text-5xl font-bold z-50'>Episódio {id}</span>
                </div>
            </div>
            <div className='w-full h-auto flex items-center justify-center'>
                <div className='w-full max-w-7xl h-auto flex flex-wrap items-center justify-center p-0 lg:p-16 gap-6'>
                    <div className='flex flex-col lg:flex-row w-full h-auto'>
                        <div className='flex flex-col border-r border-[#97ce4c] gap-8 p-10'>
                            {episode?.map(((ep, i) => (
                                <>
                                    <div key={i} className='flex flex-col gap-8'>
                                        <div className='flex flex-col'>
                                            <span className='text-white text-2xl'>{ep?.name}</span>
                                            <span className='text-white text-lg'>{ep?.episode}</span>
                                            <span className='text-white text-base'>{ep?.air_date}</span>
                                        </div>
                                        <a href='/' className='flex flex-row items-center justify-center gap-2 p-2 border border-zinc-500/60 hover:border-[#97ce4c] hover:text-[#97ce4c] rounded-full cursor-pointer text-base lg:text-base'><AiOutlineArrowLeft size={20}/></a >
                                    </div>
                                </>
                            )))}
                        </div>
                        <div className='flex flex-col px-10 w-full h-auto'>
                            <span className='text-white text-4xl font-semibold'>Personagens</span>
                            <div className='flex flex-row flex-wrap p-10 gap-4 w-full h-[400px]'>
                                {char?.map((character, i) => (
                                    <article key={i} className='flex flex-col items-center justify-center w-52 p-4 bg-zinc-500/60 hover:bg-[#97ce4c] hover:duration-500 rounded-md gap-4'>
                                        <Image src={character?.image} width={200} height={400} alt='personagem' />
                                        <div className='flex flex-col p-4 text-center'>
                                            <span className='text-center text-base text-white'>{character.name}</span>
                                            <span className='text-base text-white'>{character.species}</span>
                                            <span className='text-center text-base text-white'>{character.status}</span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

