import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router";
import Home from './components/home/Home.jsx';
import Root from './components/root/Root.jsx';
import Users from './components/users/Users.jsx';
import Users2 from './components/users2/Users2.jsx';
import UserDetails from './components/userDetails/UserDetails.jsx';
import Posts from './components/posts/Posts.jsx';
import PostDetails from './components/postDetails/PostDetails.jsx';
const users2dataPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      // { path: 'mobiles', Component: Mobiles },
      // { path: 'laptops', Component: Laptop},
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback="Data is loading">
          <Users2 users2dataPromise={users2dataPromise}></Users2>
        </Suspense>,
      },
      {
        path: `users/:userId`,
        Component: UserDetails
      },
      {
        path: 'posts',
        loader : ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: `posts/:postId`,
        loader : ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
