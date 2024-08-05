import Auth from './pages/Auth'
import Layout from './pages/Layout'
import Home from './pages/Layout/Home'
import Search from './pages/Layout/Search'
import Library from './pages/Layout/Library'
import Playlist from './pages/Layout/Playlist'

const router = [
    {
        path: '/auth',
        element: <Auth/>
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'search',
                element: <Search/>
            },
            {
                path: 'library',
                element: <Library/>
            },
            {
                path: 'playlist',
                element: <Playlist/>
            }
        ]
    }
]

export default router