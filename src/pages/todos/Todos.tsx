import React, { useEffect, useState } from 'react'
import type { ITodos } from '../../types'
import { api } from '../../api'
const Todos = () => {
    const [data, setData] = useState<null | ITodos[]>(null)
    const [error, setError] = useState<any>(null)

    useEffect(()=> {
        api.get("/todos")
        .then((res)=> setData(res.data))
        .catch((err) => setError(err))
    }, [])

    if (!data) {
      return <p className='min-h-[90vh] flex items-center justify-center'>Loading...</p>
    }
  return ( 
    <div className='container mx-auto min-h-[90vh]'>
      <h1>Todos page</h1>
    {error && <p>Error: {error.message}</p>}

    {
        data?.map((item: ITodos) => (
            <div className='grid grid-cols-4 gap-2  border-r-2' key={item.id}>
        <h2>Title: {item.title}</h2>
        <p>UserId: {item.userId}</p>
        <p>Id: {item.id}</p>
        <span>Completed: {String(item.completed)}</span>
      </div>
        ))
    }
    
    </div>
  )
}

export default  React.memo(Todos)