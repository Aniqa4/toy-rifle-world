import { useEffect } from "react"

const usetitle= title =>{
    useEffect(()=>{
        document.title=`${title} - Toy Rifle World`;
    },[title])
};


export default usetitle;