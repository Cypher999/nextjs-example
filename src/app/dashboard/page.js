"use client"
import Image from "next/image";
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Content from "./components/content";
export default function Home() {

  useEffect(()=>{
    AOS.init()
  },[])
  return (
  <main>
    <div className="title-image-container" data-aos="fade-left">
      <div className="title-text">
        <h2>Welcome To Cyberpunk City</h2>
      </div>
    </div>
    <Content/>
  </main>
  );
}
