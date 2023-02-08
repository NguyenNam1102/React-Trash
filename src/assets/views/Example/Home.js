import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import { toast } from 'react-toastify';
import logo from '../../images/logoTea.png';
import './Demo.scss';
import Button from '@mui/material/Button';


class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/mycpn')
    //     }, 3000)
    // }

    handleClickTea = () => {
        toast.info(`Wellcome!`);
    }

    render() {
        return (
            <>

                <p onClick={() => this.handleClickTea()}>
                    LifeTek
                    <p>
                        <Button variant="contained">
                            Login
                        </Button>
                        <Button variant="solid" color="primary">
                            Login
                        </Button>
                    </p>
                    <Player
                        src='https://assets9.lottiefiles.com/packages/lf20_gqn2n5rs.json'
                        className="player"
                        loop
                        autoplay
                        style={{ height: '200px', width: '300px' }}
                    />
                </p>
                <img className="logoTea" src={logo} />
            </>
        )
    }
}


export default Home;
