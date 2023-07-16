"use client"
import Hero from '@/components/Hero';
import EpisodeList from '@/components/EpisodeList';

export default function Home() {
  return (
    <>
      <Hero title='Lista de episódios' />
      <EpisodeList />
    </>
  )
}
