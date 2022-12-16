import { useContext, useState } from 'react'
import { TripContext } from './App'

const Trip = ({ id, info, image, name, price }) => {
  const [readmore, setReadmore] = useState(false)
  const removeTrip = useContext(TripContext)

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name || 'No name'}</h4>
          <h4 className='tour-price'>$ {price || 1200}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 150)}...`}
          <button onClick={() => setReadmore(!readmore)}>
            {readmore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTrip(id)}>
          Not interested
        </button>
      </footer>
    </article>
  )
}

export default Trip
