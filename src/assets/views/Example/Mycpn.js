import React from "react";
import Childcpn from "./Childcpn";
import AddComponent from "./AddComponent";

class Mycpn extends React.Component {

    state = {
        // name: 'XNAM',
        // age: '22',
        arrJobs: [
            { id: 'job1', title: 'Developers', salary: '500' },
            { id: 'job2', title: 'Testers', salary: '300' },
            { id: 'job3', title: 'Project managers', salary: '1000' },
        ],

        arrCity: [
            { stt: 'City 1', city: 'Ha Noi' },
            { stt: 'City 2', city: 'Ho Chi Minh' },
            { stt: 'City 3', city: 'Da Nang' },
        ]
    }

    // handleChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // handleClickBtn = () => {
    //     alert('click me')
    // }


    addNewJob = (job) => {
        let currentJob = this.state.arrJobs;
        // currentJob.push(job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currentJob
        })
    }


    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>>>run componentDidUpdate', 'prev state: ', prevState, ' current state: ', this.state)
    }
    componentDidMount() {
        console.log(`>>>run componentDidMount`)
    }

    // re-render
    render() {
        // let name = 'Nam';
        console.log('>>> call render: ', this.state)
        return (
            <>
                {/* <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleChangeName(event)}
                    /> 
                    My name is {this.state.name}
                </div>
                <div className="second"> My age: {this.state.age} </div>
                <div className="third">
                    <button onClick={() => this.handleClickBtn()}> Click me</button>
                </div> */}

                <div>
                    <AddComponent
                        addNewJob={this.addNewJob}
                    />


                    {/* <Childcpn name="one"/>
            <Childcpn name="two"/>
            <Childcpn name="three"/> */}

                    <Childcpn
                        arrJobs={this.state.arrJobs}
                        arrCity={this.state.arrCity}
                        deleteAJob={this.deleteAJob}
                    />
                </div>
            </>

        )
    }
}

export default Mycpn;











