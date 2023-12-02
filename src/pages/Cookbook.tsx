import AppBar from '@components/cookbook/components/AppBar';
import { Outlet } from 'react-router-dom';
import '@styles/Cookbook.scss';

export default function CookBook() {

  return (
    <>
      <AppBar />
      <div className='outlet'>
        <Outlet />
      </div>
    </>
  )
}