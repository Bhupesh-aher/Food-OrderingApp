import { useEffect, useState } from "react";

const User = ({name}) => {

    const [count] = useState(0);

    useEffect(()=> {
        // console.log("useEffect")

        // const tim = setInterval(()=> {
        //     console.log("namste")
        // }, 1000)

        // return () => {
        //     clearInterval(tim)
        //     console.log("UesEffect return")
        // }

    }, [])
    
    // console.log("render")

    return (
        <div className="user-cart">
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <h2>Location: Dehardun</h2>
            <h3>Contact: @akshaymarch7</h3>
        </div>
    )
} 

export default User;