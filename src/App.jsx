import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [things,setThings] =useState([])
  useEffect(() => {
    const fetchThings = async() => {
      const {data} = await axios.get('http://localhost:3010/api/things')
      console.log(data)
      setThings(data)
    }
    fetchThings()
  })

  return (
    
    <div>
      <h1>Here are my pets {things.length}</h1>
      {
        things.map((thing) => {
          return(
            <div key={thing.id} className={thing.is_favorite? 'favorite' : ''}>{thing.name}</div>
          )
        })
      }
    </div>
  )
}

export default App
