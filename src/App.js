import React from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import boys from "./img/boys.jfif"


class SomeLayout extends React.Component {
    arr = ["Random", "Elements", "From", "Random", "ArraY"]

    render() {
        return (<>
            <Header />

            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, aliquid? Tempora architecto accusantium optio et tempore earum ea illo quidem atque officiis aspernatur placeat hic, impedit modi quis vel voluptate!</p>

            <Image image={boys} alt="boys" />

            {Boolean(this.arr.length) &&
                <>
                    <h2>Some list of array:</h2>

                    <ol>
                        {this.arr.map((item, index) => <li key={index}>{item}</li>)}
                    </ol>

                    <button style={{ all: "unset", padding: "10px", borderRadius: "10px", background: "royalblue", cursor: "pointer" }} onClick={this.btnEvent}>Press me</button>
                </>
            }

        </>)
    }

    btnEvent() { alert("hi") }
}

export default SomeLayout