'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { fetchAnimes } from '@/actions'
import AnimeCard, { AnimeObject } from './AnimeCard'

let page = 4

const LoadMore = () => {
  const { ref, inView } = useInView()
  const [data, setData] = useState<AnimeObject[]>([])

  useEffect(() => {
    const fetchMoreData = async () => {
      const moreData = await fetchAnimes(page)
      setData((prev) => {
        return [...prev, ...moreData]
      })

      page++
    }

    if (inView) {
      fetchMoreData()
    }
  }, [inView])

  return (
    <>
      <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {data.map((item: AnimeObject, index: number) => (
          <AnimeCard
            key={item.id}
            anime={item}
            index={index}
          />
        ))}
      </section>

      <section className='flex justify-center items-center w-full'>
        <div ref={ref}>
          <Image
            src='./spinner.svg'
            alt='spinner'
            width={56}
            height={56}
            className='object-contain'
          />
        </div>
      </section>
    </>
  )
}

export default LoadMore
