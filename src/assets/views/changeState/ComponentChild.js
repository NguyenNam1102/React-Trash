import React from "react";

class ComponentChild extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name: this.props.data,
    //     }

    // }

    // dataSend = this.props;

    render() {
        // console.log('>>> props:', this.props)
        let { data } = this.props;
        return (
            <>
                <p>Save name:</p>
                <p>{data}</p>
            </>
        )
    }
}

export default ComponentChild;