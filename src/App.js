import React from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import boys from "./img/boys.jfif"
import Button from "./components/Button"


class SomeLayout extends React.Component {
    text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, aliquid? Tempora architecto accusantium optio et tempore earum ea illo quidem atque officiis aspernatur placeat hic, impedit modi quis vel voluptate!"

    constructor(props) {
        super(props)

        this.state = {
            arr: ["Random", "Elements", "From", "Random", "ArraY"],
            editTxt: this.text,
        }

        this.btnEvent = this.btnEvent.bind(this)
        this.edit = this.edit.bind(this)
        this.reset = this.reset.bind(this)
    }

    render() {
        return (<>
            <Header />

            <p className="text">{this.state.editTxt}</p>

            <button onClick={this.reset} style={{ all: "unset", padding: "10px", borderRadius: "10px", background: "rgb(144, 27, 27)", cursor: "pointer" }}>Reset</button>

            <input placeholder="Would you like to edit the text at the top" onChange={this.edit} />

            <Image image={boys} alt="boys" />

            {Boolean(this.state.arr.length) &&
                <>
                    <h2>Some list of array:</h2>

                    <ul>
                        {this.state.arr.map((item, index) => <li key={index}>{index + 1 + ". " + item}</li>)}
                    </ul>

                    <button style={{ all: "unset", padding: "10px", borderRadius: "10px", background: "royalblue", cursor: "pointer" }} onClick={this.btnEvent}>Press me to add elements in arr</button>
                </>
            }
            <Button/>
        </>)
    }

    btnEvent() {
        this.state.arr.push(this.state.arr[Math.floor(Math.random() * this.state.arr.length)]);

        this.setState({ arr: this.state.arr });
    }

    edit(event) {
        this.setState({ editTxt: event.target.value ? event.target.value : this.text })
    }

    reset() {
        this.setState({ editTxt: this.text })
    }
}

export default SomeLayout