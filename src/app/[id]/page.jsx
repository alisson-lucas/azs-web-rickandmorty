"use client"
import Image from 'next/image'
import { useQuery } from '@/utils/graphql'
import { useEffect, useState, useContext } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { AppContext } from '@/context/data'

import { useParams } from 'next/navigation'

import Hero from '@/components/Hero';
import EpisodeDetails from '@/components/EpisodeDetails';

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
            <Hero title="Episodio" episodeNumber={id}/>
            <EpisodeDetails />
        </>
    )
}

