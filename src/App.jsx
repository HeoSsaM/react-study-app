import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import ClassPage from './pages/ClassPage'
import TodoPage from './pages/TodoPage'
import Footer from './components/Footer'

function App() {
  return (
    <div className='container'>
      <Header />  

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/class' element={<ClassPage />} />
          <Route path='/todo' element={<TodoPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
