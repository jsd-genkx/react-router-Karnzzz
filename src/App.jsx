import { BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (

    <div className='ml-4 bg-gray-100 text-gray-800'>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
