import Home from './pages/Home'
import Resume from './pages/Resume'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App