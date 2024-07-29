"use client"
import "../menu.css"
import { useState } from "react";
import Link from "next/link";
const Submenu=({items,title})=>{
    const [show,setShow]=useState(false);
    return (
    <div className="item" onMouseOver={()=>{setShow(true)}} onMouseOut={()=>{setShow(false)}}>
        <span>
            {title}
        </span>
        <div className={show?"submenu show":"submenu"}>
            {
                items.map((item)=>{
                    return (<div className="submenu-item">
                        {item.label}
                    </div>)
                })
            }
        </div>
    </div>
        
    );
}

export default()=>{
    return(
    <div className="container">
        <div className="title">
          <Link href="/dashboard">
            Future City 6.9
          </Link>
        </div>
        <div className="body">
          <Link href="/about" className="item">
            About
          </Link>
          <Link href="/contact" className="item">
            Contact
          </Link>
          <Submenu
            title="Menu 3"
            items={[
                {
                    'label':'Sub 1',
                },
                {
                    'label':'Sub 2',
                },
                {
                    'label':'Sub 3',
                }
            ]}
          />
        </div>
      </div>
    );
}