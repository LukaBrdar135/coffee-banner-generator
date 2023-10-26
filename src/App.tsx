import './App.css'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='page'>
        <Welcome />
      </div>
    </div>
  )
}

export default App
