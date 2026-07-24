import React, { Fragment } from 'react'
import myimg from "../images/20.jpg";

function Service() {
    const abc = "https://cdn.magicdecor.in/com/2023/10/20174720/Anime-Scenery-Wallpaper-for-Walls-710x488.jpg";

    const status="success";


  return (
   <Fragment>
        <img src='https://cdn.magicdecor.in/com/2023/10/20174720/Anime-Scenery-Wallpaper-for-Walls-710x488.jpg' alt="sdjfh40" width="200"/>
        <img src={abc} alt='sdkfhsjdfh' width="200"/>
        <img src={myimg} alt='sjdfhsjdf' width="200"/>
        <h1 style={{'background-color':"red",'color':'green'}}>this is inline css  link</h1>
        <h1 style={{backgroundColor:'red',color:'green',padding:10}}>this is inline css  link</h1>
        <h3 className='first'>this is external css</h3>
        <div className='first'>
            <h2 style={{backgroundColor:`${status==="stop"? 'red' : 'green'}`}}>this is my status {status}</h2>
        </div>
   </Fragment>
  )
}

export default Service