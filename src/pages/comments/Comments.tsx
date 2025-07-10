import React from 'react'
import { useComments } from '../../api/hooks/useComments'
import type { IComments } from '../../types'
const Comments = () => {
  const { data, isLoading, error} = useComments()

  if (isLoading) {
    return <p className='min-h-[90vh] flex items-center justify-center'>Loading...</p>
  }
  

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div className='container mx-auto min-h-[90vh]'>
      <h1>Comments page</h1>
      {
        data?.map((comment: IComments) =>(
          <div key={comment.id}>
             <p>{comment.id}</p>
             <h2>{comment.name}</h2>
             <span>Email: {comment.email}</span>
             <p>{comment.body}</p>
             <hr />
          </div>
        ))
      }
    </div>
  )
}

export default  React.memo(Comments)