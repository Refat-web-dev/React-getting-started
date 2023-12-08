import React from "react"
import * as  ReactDOMClient from "react-dom/client"

const rootElement = ReactDOMClient.createRoot(document.querySelector("#root"));

const arr = ["Ernest", "Arzi", "Elvira", "Remzi", "Refat"]

function btnEvent() {
    alert("hi")
}
let someLayout = (
    <>
        <h1>Refat</h1>
        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, aliquid? Tempora architecto accusantium optio et tempore earum ea illo quidem atque officiis aspernatur placeat hic, impedit modi quis vel voluptate!</p>
        <img src="img/boys.jfif" alt="boys" />
        {Boolean(arr.length) &&
            <>
                <h2>Family:</h2>
                <ol>
                    {arr.map((item, index) => <li key={index}>{item}</li>)}
                </ol>
                <button style={{ all: "unset", padding: "10px", borderRadius: "10px", background: "royalblue", cursor: "pointer" }} onClick={btnEvent}>Press me</button>
            </>
        }

    </>
)

rootElement.render(someLayout);