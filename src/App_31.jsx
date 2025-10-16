import { createBrowserRouter, RouterProvider } from 'react-router';

import { HomeLayoutPage_31, HomePage_31, BlogStaticPage_31, BlogLocalJsonPage_31, BlogNodePage_31 } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_31 />,
    children: [
      {
        index: true,
        element: <HomePage_31 />,
      },
      {
        path: 'static_31',
        element: <BlogStaticPage_31 />,
      },
      {
        path: 'localjson_31',
        element: <BlogLocalJsonPage_31 />,
      },
      {
        path: 'node_31',
        element: <BlogNodePage_31 />,
      },
    ],
  },
]);

const App_31 = () => {
  return <RouterProvider router={router} />;
};

export default App_31;
