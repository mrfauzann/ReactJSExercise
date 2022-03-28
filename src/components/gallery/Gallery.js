import React from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import Card from './Card'
import GalleryData from './GalleryData'

const Gallery = () => {
  return (
    <>
        <HeadTitle />

        <section className='gallery top'>
            <div className='container grid'>
              {GalleryData.map((value) => {
                return <Card img={value.img} title={value.title} />
              })

              }
                <Card />
            </div>
        </section>
    </>
  )
}

export default Gallery