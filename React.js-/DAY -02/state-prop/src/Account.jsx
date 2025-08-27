import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
const Account = ({name,post,pic}) => {
  return (
    <>
       <div id='profile'>
              <div id='person'>
                <img src={pic} alt=""/>
              </div>
              <h1>{name}</h1>
              <h5>{post}</h5>
              <div id="icon">
                    <CiLinkedin />
             <IoLogoGithub />
              </div>
            </div>
    </>
  )
}

export default Account
