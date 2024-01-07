import Navbar from '@components/moviegrove/components/Navbar'
import Sidebar from '@components/moviegrove/components/Sidebar'
import { Outlet } from 'react-router-dom';
import '@styles/moviedb/Homepage.scss'

const MovieGrove = () => {

  return (
    <div className='moviegrove-container'>
      <Navbar />
      <div className='display-flex'>
        <Sidebar />
        <div className='main-content'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MovieGrove