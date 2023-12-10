import React, { useEffect, useState } from "react"

const Button = (props) => {
    const [click, setCLick] = useState(0)
    useEffect(() => {
        document.title = ` React App clicked ${click}`
    })
    return (<>
        <button style={{ all: "unset", padding: "10px", borderRadius: "10px", background: "royalblue", cursor: "pointer" }} onClick={() => setCLick(click + 1)} >{props.text}{click}</button>
    </>)
}

Button.defaultProps = {
    text: "Click count "
}

export default Button