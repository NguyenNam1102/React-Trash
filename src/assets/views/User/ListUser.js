import React from "react";
import axios from "axios";

class ListUser extends React.Component {

    state = {
        ListUser: []
    }

    // // promise
    // componentDidMount() {
    //     axios.get('https://reqres.in/api/users?page=1')
    //         .then(res => {
    //             console.log('>>>check res: ', res.data.data)
    //         })
    // }

    // async - await
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        // console.log('>>>check res: ', res.data.data)
        this.setState({
            ListUser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    render() {
        let { ListUser } = this.state
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users:
                </div>
                <div className="list-user-content">
                    {ListUser && ListUser.length > 0 &&
                        ListUser.map((item, index) => {
                            return (
                                <div className="child" key={item.id}>
                                    {index + 1} - {item.first_name} - {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListUser;
