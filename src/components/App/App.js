import React from 'react'
import "./App.css"
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import PlanPost from '../../Pages/Plant Post/PlanPost'
import Ceramics from '../../Pages/Ceramics/Ceramics'
import Chairs from '../../Pages/Chairs/Chairs'
import Tables from '../../Pages/Tables/Tables'
import Crockery from '../../Pages/Crockery/Crockery'
import Tableware from '../../Pages/Tableware/Tableware'
import Cutlery from '../../Pages/Cutlery/Cutlery'
import Navbar from '../Navbar/Navbar'
import Search from '../../Pages/Search/Search'
import Product3 from '../../Pages/Product3/Product3'
import Products from '../Products/Products'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/planpost' element={<PlanPost />}/>
        <Route path='/ceramics' element={<Ceramics />}/>
        <Route path='/tables' element={<Tables/>}/>
        <Route path='/chairs' element={<Chairs />}/>
        <Route path='/crockery' element={<Crockery />}/>
        <Route path='/tableware' element={<Tableware />}/>
        <Route path='/cutlery' element={<Cutlery />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/product3/:id' element={<Product3 />}/>
        <Route path='/products' element={<Products />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
