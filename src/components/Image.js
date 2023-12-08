import React from "react"

class Image extends React.Component {
    render() {
        return (<>
            <h2>Some image</h2>
            <img src={this.props.image} alt={this.props.alt} />
        </>)
    }
}

export default Image