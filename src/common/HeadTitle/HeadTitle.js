import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import "./HeadTitle.css"

const HeadTitle = () => {
    const location = useLocation()
  return (
    <>
        <HeadTitle />
        <section className='images-heading'>
            <div className='container'>
                <h1>{location.pathname.split("/")[1]}</h1>
                <button>
                    <Link to='/'>Home / </Link>
                    <span>{location.pathname.split("/")[1]}</span>
                </button>
            </div>
        </section>
    </>
  )
}

export default HeadTitle