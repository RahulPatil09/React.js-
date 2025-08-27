import './app.css'
import { useState } from "react";
import Account from "./Account";

export default function App(){
  
const data=[
    {
        "name" :"Rahul",
        "post" :"SDE",
        "pic"  :"https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg"
    },
    {
        "name" :"Vishnu",
        "post" :"SDE",
        "pic"  :"https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg"
    },
    {
        "name" :"John Doe",
        "post" :"S.T",
        "pic"  :"https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg"
    }
]

  return(
    <>
    <div id='container'>
        {data.map((value,index,array)=>{
            return   <Account name={value.name} post={value.post} pic={value.pic}/>;
        })}
    
       

    </div>
    </>
  )
}