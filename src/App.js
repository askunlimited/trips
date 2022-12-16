import { useState, useEffect, createContext } from 'react'
import Loading from './Loading'
import Trips from './Trips'

const url = 'https://course-api.com/react-tours-project'

export const TripContext = createContext()

function App() {
  const [loading, setLoading] = useState(true)
  const [trips, setTrips] = useState([])

  const fetchTrip = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const trips = await response.json()
      console.log(trips)
      setLoading(false)
      setTrips(trips)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTrip()
  }, [])

  const removeTrip = (id) => {
    const newTrip = trips.filter((trip)=> trip.id !== id)
    setTrips(newTrip)

  }

  if (loading === true) {
    return (
      <main className='container'>
        <Loading />
      </main>
    )
  }
  if (trips.length === 0) {
    return (
      <main className='container'>
        <h3>No more trips</h3>
        <button>Refresh</button>
      </main>
    )
  } else {
    return (
      <TripContext.Provider value={removeTrip}>
        <main className='container'>
          <Trips trips={trips} />
        </main>
      </TripContext.Provider>
    )
  }
}

export default App
