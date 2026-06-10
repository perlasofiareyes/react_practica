import React, { useState } from "react";
import { useEffect } from "react";

const LifeCycle = () => {
    const [text, setText] = useState("")
    //componentDidMount
    useEffect(()=>{
        console.log("Componente cargado")
    }, [])
    //componentDidUpdate
    useEffect(()=>{
        console.log("componente actualizado")
    }, [text])
    //componentWillUnmmount
    useEffect(()=>{
        return () => console.log("componente desmontado")
    },[])
    //siempre mount || update
    useEffect(()=>{
        console.log("Componente siempre")
    })

    return(
        <><div>LifeCycle</div><input type="text" value={text} onChange={(e) => setText(e.target.value)} /></>
    )

}