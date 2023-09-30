import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Login from './Login.jsx'
import Home from './Home.jsx'
import EditBook from './EditBook'
import AddBook from './AddBook'
import ReadBook from './ReadBook'
import ReadAuthor from './ReadAuthor'
import EditAuthor from './EditAuthor'
import AddAuthor from './AddAuthor'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Router>
<Routes>
  
  <Route path="/" element={<Login/>} />
  <Route path='/home'  element={<Home />}></Route>
  <Route path='/book' element={<ReadBook/>}></Route>
  <Route path='/author' element={<ReadAuthor/>}></Route>
  <Route path='/authorEdit' element={<EditAuthor/>}></Route>
  <Route path='/authorAdd' element={<AddAuthor/>}></Route>
  <Route path='/create'  element={<AddBook />}></Route>
  <Route path='/update/:id' element={<EditBook />}></Route>
</Routes>
  </Router>

    </>
  )
}

export default App
