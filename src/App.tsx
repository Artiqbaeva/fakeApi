import React from 'react'
import { useRoutes } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Comments from './pages/comments/Comments';
import Albums from './pages/albums/Albums';
import Photos from './pages/photos/Photos';
import Todos from './pages/todos/Todos';
import Users from './pages/users/Users';
import Posts from './pages/posts/Posts';

const App = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/posts",
          element: <Posts/>,
        },
        {
          path: "/comments",
          element: <Comments />,
        },
        {
          path: "/albums",
          element: <Albums />,
        },
        {
          path: "/photos",
          element: <Photos />,
        },
        {
          path: "/todos",
          element: <Todos/>,
        },
        {
          path: "/users",
          element: <Users />,
        },
       
      ],
    },
  ]);
}

export default React.memo(App)