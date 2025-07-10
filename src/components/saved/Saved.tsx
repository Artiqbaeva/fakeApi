// import React from 'react'
// import { useSelector } from 'react-redux'
// import type { RootState } from '../../components/redux'

// const Saved = () => {
//   const items = useSelector((state: RootState) => state.wishlist.items)

//   const albums = items.filter(i => i.type === 'album')
//   const posts = items.filter(i => i.type === 'post')
//   const comments = items.filter(i => i.type === 'comment')

//   return (
//     <div>
//       <h1>Saved Items</h1>

//       <h2>Albums</h2>
//       {albums.map(item => (
//         <div key={(item.data as any).id}>{(item.data as any).title}</div>
//       ))}

//       <h2>Posts</h2>
//       {posts.map(item => (
//         <div key={(item.data as any).id}>{(item.data as any).title}</div>
//       ))}

//       <h2>Comments</h2>
//       {comments.map(item => (
//         <div key={(item.data as any).id}>{(item.data as any).body}</div>
//       ))}
//     </div>
//   )
// }

// export default React.memo(Saved)
