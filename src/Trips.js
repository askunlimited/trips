import React from 'react'

import Trip from './Trip'

const Trips = ({ trips }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Trips</h2>
        <div className='underline'></div>
      </div>
      {trips.map((trip) => {
        return <Trip key={trip.id} {...trip} />
      })}
    </section>
  )
}

export default Trips
