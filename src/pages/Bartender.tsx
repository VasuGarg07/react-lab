import AppBar from "@components/bartender/components/AppBar";
import { Outlet } from "react-router-dom";
import '@styles/Cookbook.scss';

export default function App() {

  return (
    <>
      <AppBar />
      <div className='outlet'>
        <Outlet />
      </div>
    </>
  )
}