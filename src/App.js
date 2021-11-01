
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Pages/Header/Header';
import AuthProvider from './Pages/context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Details from './Pages/Details/Details';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Footer/Footer';
import Packages from './Pages/Packages/Packages';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import AddNewService from './Pages/AddNewService/AddNewService';

function App() {
  return (
   <AuthProvider>
   <Router>
     <Header> </Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route exact path="/packages">
         <Packages></Packages>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
       <Route path="/register">
         <Register></Register>
       </Route>
       <Route path="/myorders">
         <MyOrders></MyOrders>
       </Route>
       <Route path="/manageallorders">
         <ManageAllOrders></ManageAllOrders>
       </Route>
       <Route path="/addnewservice">
         <AddNewService></AddNewService>
       </Route>
       <PrivateRoute path="/packages/:key">
         <Details></Details>
       </PrivateRoute>
       <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
     </Switch>
     <Footer></Footer>
   </Router>
 </AuthProvider>
    
  );
}

export default App;
