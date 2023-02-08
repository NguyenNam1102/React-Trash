import React from "react";
import ComponentChild from "./ComponentChild";
import { toast } from 'react-toastify';



class ComponentParent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            sName: ''
        }
    }
    handleFullName = (event) => {
        this.setState({
            fName: event.target.value
        })
    }

    handleBtn = (event) => {
        event.preventDefault();
        this.setState({
            sName: this.state.fName
        })
        toast.success(`Done!`)
    }

    render() {
        let { sName } = this.state;
        return (
            <>
                <form>
                    <br />
                    <label
                        htmlFor="fname"> Full name: {this.state.fName}
                    </label> <br />
                    <input type="text"
                        onChange={(event) => this.handleFullName(event)}
                    /> <br />
                    <button onClick={(event) => this.handleBtn(event)} >
                        Click me
                    </button> <br />
                    <ComponentChild data={sName} />
                </form>
            </>
        )

    }
}

export default ComponentParent;


