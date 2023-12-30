import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'
import EditPage from './Pages/EditPage'
import Navbar from './Components/Navbar'
import NotFound from './Pages/NotFound'


function App() {
  return (
    <>
      <Navbar />
      
      
      <div className='container mx-auto px-2 h-full'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/edit' element={<EditPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
