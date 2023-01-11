import React from 'react'
import styles from "../Pages/product/Style/Mens.module.css"
export default function Pagination({
    current,
    onChange,
    total
}) {

    const prev = <button style={{fontSize:"25px",padding:"5px",color:"white"}} disabled={current===1} onClick={()=>onChange(current-1)} >{"<"}</button>
    const next = <button style={{fontSize:"25px",padding:"5px",color:"white"}} disabled={current===total} onClick={()=>onChange(current+1)}>{">"}</button>

    const pages = new Array(total).fill(0).map((a,i)=>
    <button style={{width:"40px", border:"2px solid white",color:"white",fontSize:"25px"}} onClick={()=>onChange(i+1)} disabled={current=== (i+1)} >{i+1}</button>
    )

  return <div style={{marginTop:"20px",width:"100%",display:"flex",justifyContent:"space-between"}}>
          <div>
            {prev}
          </div>
          <div>
            {pages}
          </div>
          <div>
            {next}
          </div>
    </div>
  
}
