import React from "react";
import { toast } from 'react-toastify';

class Childcpn extends React.Component {

    // handleChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // handleClickBtn = () => {
    //     alert('click me')
    // }

    // re-render

    state = {
        showJobs: false
    }

    handleShow = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleDelete = (job) => {
        console.log(job)
        this.props.deleteAJob(job)
        toast.success(`Đã xóa!`)
    }

    render() {
        // let name = 'Nam';
        console.log('>>> check props: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        // let { name, age } = this.props;

        let { arrJobs } = this.props;
        let { arrCity } = this.props;
        let { showJobs } = this.state;
        let { checkStatus } = showJobs === true ? 'showJobs = true' : 'showJobs = false';

        return (
            <>
                <div>
                    Child component: {this.props.name} - age: {this.props.age}
                </div>
                <div>
                    {
                        arrCity.map((courses, index) => {
                            return (
                                <div key={courses.stt}>
                                    {courses.stt} - {courses.city}
                                </div>
                            )
                        })
                    }
                </div>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShow()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="jobLists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} &nbsp;
                                            <button onClick={() => this.handleDelete(item)}>
                                                Delete
                                            </button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShow()}>Hide</button>
                        </div>
                    </>
                }
            </>

        )
    }
}

export default Childcpn;











