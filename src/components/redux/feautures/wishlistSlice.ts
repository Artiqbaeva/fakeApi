// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { IAlbums, IPosts, IComments, IPhotos, ITodos, IUsers } from '../../../types'

// export type WishlistItem =
//   | { type: 'album'; data: IAlbums }
//   | { type: 'post'; data: IPosts }
//   | { type: 'comment'; data: IComments }
//   | { type: 'photo'; data: IPhotos }
//   | { type: 'todo'; data: ITodos }
//   | { type: 'user'; data: IUsers }

// interface WishlistState {
//   items: WishlistItem[]
// }

// const initialState: WishlistState = {
//   items: [],
// }

// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
//       const exists = state.items.find(
//         item => item.type === action.payload.type && item.data.id === action.payload.data.id
//       )
//       if (!exists) {
//         state.items.push(action.payload)
//       }
//     },
//     removeFromWishlist: (state, action: PayloadAction<{ type: string; id: number }>) => {
//       state.items = state.items.filter(
//         item => !(item.type === action.payload.type && item.data.id === action.payload.id)
//       )
//     },
//   },
// })

// export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
// export default wishlistSlice.reducer
