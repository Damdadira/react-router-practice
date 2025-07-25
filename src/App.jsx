import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Root from './pages/Root';
import VideoDetail from './pages/VideoDetail';
import Posts from './pages/Posts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/videos',
        element: <Videos />
      },
      {
        path: '/videos/:videoId',
        element: <VideoDetail />
      },
      {
        path: '/posts',
        element: <Posts />
      },
    ]
  },
  
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
