import './App.css'
import Contact from './components/Contact'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Works from './components/Works'

function App() {
  return (
    <div className='w-10/12 m-auto'>
      <div style={{height: '100vh'}} className='flex flex-col justify-center'>
        <Main/>
        <Navbar/>
      </div>

      <div style={{height: '100vh'}} className='flex flex-col justify-center'>
        <Works/>
      </div>

      <div style={{height: '100vh'}} className='flex flex-col justify-center'>
        <Contact/>
      </div>
      
    </div>
  )
}

export default App
