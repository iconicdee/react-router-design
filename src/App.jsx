import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import Project from './pages/Project';
import SharedLayoutProduct from './pages/SharedLayoutProduct';


function App() {
  const [user,setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />}/>
          <Route path="about" element={<About />} />

          <Route path="/products" element= {<SharedLayoutProduct/>}>
              <Route index element={<Product/>}/>
              <Route path=":productId" element={<SingleProduct/>}/>
          </Route>

          <Route path='login' element={<Login setUser={setUser}/>}/>

          <Route path='dashboard' element={
            <ProtectedRoute user={user}>
              <Dashboard user={user}/>
            </ProtectedRoute>
            }/>

            <Route path='/projects' element={<Project/>}/>

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
