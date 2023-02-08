import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mycpn from './Example/Mycpn';
import ComponentParent from './changeState/ComponentParent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation/Navigation';
import Home from './Example/Home';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';
import Header from './TodoListHooks/Header';
import FormTodo from './TodoListClass/FormTodo';
import ContainerHook from './Hook/ContainerHook';

function App() {
  return (

    <div className="App">
      <Router>
        {/* <header className="App-header"> */}
        <Navigation />
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/listtodo" element={<ListTodo />} />
          <Route path="/mycpn" element={<Mycpn />} />
          <Route path="/cpnparent" element={<ComponentParent />} />
          <Route path="/users" element={<ListUser />} />
          <Route path="/users/:id" element={<DetailUser />} />
          <Route path="/todohook" element={<Header />} />
          <Route path="/todoclass" element={<FormTodo />} />
          <Route path="/hook" element={<ContainerHook />} />
          <Route path="/" element={<Home />} />
        </Routes>

        {/* </header> */}

        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Router>
    </div>
  );
}

export default App;
