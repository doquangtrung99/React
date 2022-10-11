import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Mainproject from './CRUD/Mainproject';
import Login from './CRUD/Login';
import Homepage from './CRUD/Homepage';
import SingleProduct from './CRUD/SingleProduct';
import CartProduct from './CRUD/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path="/mainproject" element={<Mainproject />} />
            <Route exact path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singleproduct" element={<SingleProduct />} />
            <Route path="/cartproduct" element={<CartProduct />} />
          </Routes>
        </header>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>

  );
}
export default App;
