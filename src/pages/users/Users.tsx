import React, { useEffect, useState } from 'react'
import type { IUsers } from '../../types'
import { api } from '../../api'
const Users = () => {
  const [data, setData] = useState<null | IUsers[]>(null)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    api.get("/users")
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
  }, []) 

  if (!data) {
    return <p className='min-h-[90vh] flex items-center justify-center'>Loading...</p>
  }
  return (
    <div className='container mx-auto min-h-[90vh]'>
      <h1>Users Page</h1>
    {error && <p>Error: {error.message}</p>}

    {data?.map((item: IUsers) => (
      <div className='grid grid-cols-4 gap-4  border-r-2' key={item.id}>
        <h2>Name: {item.name}</h2>
        <p>Username: {item.username}</p>
        <span className='text-nowrap'>Telephone number: {item.phone}</span>
      </div>
    ))}
  </div>
  )
}

export default  React.memo(Users)