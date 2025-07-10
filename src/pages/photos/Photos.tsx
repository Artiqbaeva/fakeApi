import React, { useEffect, useState } from 'react'
import type { IPhotos } from '../../types'
import { api } from '../../api'

const Photos = () => {
  const [photos, setPhotos] = useState<IPhotos[] | null>(null)
  const [error, setError] = useState<any >(null)

  useEffect(() => {
      api.get("/photos")
        .then((res) => setPhotos(res.data))
        .catch((err) => setError(err))
    }, []) 

  if (!photos) {
    return <p className='min-h-[90vh] flex items-center justify-center'>Loading...</p>
  }

  return (
    <div className='container mx-auto min-h-[90vh]'>
     {error && <p>Error: {error.message}</p>}
      <h1>Photos page</h1>
      {photos.map((photo) => (
        <div className='grid grid-cols-3 gap-2' key={photo.id}>
          <h2>{photo.albumId}</h2>
          <h3>{photo.title}</h3>
          <span>{photo.thumbnailUrl}</span>
          <span>{photo.url}</span>
        </div>
      ))}
    </div>
  )
}

export default React.memo(Photos)
