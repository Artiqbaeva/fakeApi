import React from 'react'
import { usePosts } from '../../api/hooks/usePosts'
import type { IPosts } from '../../types'
const Posts = () => {
  const { data, isLoading, error } = usePosts()
  
  if (isLoading) {
    return <p className='min-h-[90vh] flex items-center justify-center'>Loading...</p>
  }
  
  if (error) {
    return <p>Error: {error.message}</p>
  }


  return (
    <div className='container mx-auto min-h-[90vh]'>
      <h1>Posts page</h1>
      {
        data?.map((post: IPosts) => (
          <div key={post.id}>
            <span>{post.id}</span>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <hr />
          </div>
        ))
      }
    </div>
  )
}

export default React.memo(Posts)