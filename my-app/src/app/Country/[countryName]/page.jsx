import { notFound } from 'next/navigation'
import React from 'react'

export default function CountryName({params}) {
    const {countryName} = params;
    if(countryName === 'israel') {
        notFound()
    }
  return (
    <div>Country is : {params.countryName}</div>
  )
}
