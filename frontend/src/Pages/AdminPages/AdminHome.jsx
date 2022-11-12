import React from 'react'
import MyVideo from "../assets/welcome.mp4";
import AdminNavbar from './AdminNavbar';

export const AdminHome = () => {
  return (
    <>
    <AdminNavbar/>
    <div className='player-wrapper' style={{height:"800px"}} >
        <video width="100%" height="100%" preload="auto">
        <source src={MyVideo} type="video/mp4" />
            Your browser does not support HTML5 video.
        </video> 
    </div>
    </>
    
  )
}
