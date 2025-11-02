import React from 'react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

export default function Home() {
  const sampleCard = {
  title: 'Cozy Apartment in Nairobi',
  description: '2-bedroom apartment close to the city center.',
  image: 'https://picsum.photos/400/300', // <- replace local file with placeholder
}


  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>
      <Card {...sampleCard} />
      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert('Booking started!')} />
      </div>
    </div>
  )
}
