import React from 'react'
import Navigation from '../components/navbar'
import Footer from '../components/footer'

export default function layoutAbout({children}) {
  return (
    <div>
        <h1>About Page layout  </h1>
        {children}
    </div>
  )
}


