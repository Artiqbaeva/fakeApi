import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container mx-auto flex gap-4'>
         <NavLink
          to="/posts"
        > 
          <span className="text-xl">Posts</span>
        </NavLink>
        <NavLink
          to="/comments"
        > 
          <span className="text-xl">Comments</span>
        </NavLink>
        <NavLink
          to="/albums"
        > 
          <span className="text-xl">Albums</span>
        </NavLink>
        <NavLink
          to="/photos"
        > 
          <span className="text-xl">Photos</span>
        </NavLink>
        <NavLink
          to="/todos"
          
        > 
          <span className="text-xl">Todos</span>
        </NavLink>
        <NavLink
          to="/users"
        > 
          <span className="text-xl">Users</span>
        </NavLink>
        <NavLink
          to="/saved"
        > 
          <span className="text-xl">Saved</span>
        </NavLink>
    </div>
  )
}

export default React.memo(Header)