import React from 'react'
import { useAlbums } from '../../api/hooks/useAlbums'
import type { IAlbums } from "../../types";


const Albums = () => {
  const { data, isLoading, error } = useAlbums()
 

  if (isLoading) {
    return <p className='min-h-[90vh] flex items-center justify-center'>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <>
      <h1>Albums</h1>
      <div className='grid grid-cols-4 '>
        {data?.map((album: IAlbums) => (
          <div className='w-[300px] h-20 mt-2' key={album.id}>
            <h2><span>{album.userId}</span>  {album.title}</h2>
            
          </div>
        ))}
      </div>
    </>
  )
}

export default React.memo(Albums)
