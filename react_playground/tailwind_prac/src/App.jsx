
import './App.css'
import { SideBar } from './components/SideBar'
import Content from './components/Content'

function App() {

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <SideBar />
        <Content />
      </div>
    </>
  )
}

export default App
