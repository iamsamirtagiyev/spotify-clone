import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../../context";
import Auth from "../Auth";
import Bottombar from '../../components/Bottombar'
import Sidebar from "../../components/Sidebar";

const Layout = () => {
  const { token, setToken } = useContext(Context);
  
  useEffect(() => {
    const hash = window.location.hash;
    const _token = localStorage.getItem('token')
    window.location.hash = ''

    if(!token && hash){
      localStorage.setItem('token', hash.split('&')[0].split('=')[1])
      setToken(hash.split('&')[0].split('=')[1])
    }
    else{
      setToken(_token)
    }

  }, [token])
  

  return (
    <>
      {
        token ? 
        <div className="w-full h-screen bg-black text-white flex flex-col sm:gap-2 sm:p-2">
          <div className="flex gap-2 h-full sm:flex-row flex-col">
            <Sidebar/>
            <div className="sm:h-calc h-full overflow-auto w-full bg-black">
              <Outlet/>
            </div>
          </div>
          <Bottombar/>
        </div> : <Auth/>
      }
    </>
  );
};

export default Layout;
