import { createBrowserRouter, RouterProvider } from 'react-router';

import { HomeLayoutPage_31, HomePage_31, BlogStaticPage_31, BlogLocalJsonPage_31, BlogLocalJsonPage2_31, BlogNodePage_31, BookListPage_31, BlogSupaPage_31, } from './pages';

import {T11_ErrorExamplePage_31, T12_UseStateBasicsPage_31} from './pages/tutorials';

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
        path: 'localjson2_31',
        element: <BlogLocalJsonPage2_31 />,
      },
      {
        path: 'node_31',
        element: <BlogNodePage_31 />,
      },
      {
        path: 'supa_31',
        element: <BlogSupaPage_31 />,
      },
      {
        path: 'booklist_31',
        element: <BookListPage_31 />,
      },
    ],
  },
  {
    path: '/tutorials',
    element: <HomeLayoutPage_31 />,
    children: [
      {
        index: true,
        element: <HomePage_31 />,
      },
      {
        path: 't11_31',
        element: <T11_ErrorExamplePage_31 />,
      },
      {
        path: 't12_31',
        element: <T12_UseStateBasicsPage_31 />,
      },
    ]
  },
]);

const App_31 = () => {
  return <RouterProvider router={router} />;
};

export default App_31;
