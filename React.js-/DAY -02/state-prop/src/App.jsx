import './app.css'
import { useState } from "react";
import Account from "./Account";

export default function App(){
  const [name, setname] = useState("JOHN DOE");
  const [post, setpost] = useState("Front-End Developer");
  const [pic, setpic] = useState("https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg")
  return(
    <>
    <div id='container'>
      <Account name={name} post={post} pic={pic}/>
    </div>
    </>
  )
}