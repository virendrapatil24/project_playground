
import './App.css'
import Image from './components/Image'
import profileImage from './assets/profile_image.png'

function App() {

  return (
    <>
      <div className="flex h-screen bg-green-300">
        Hello
        <Image width="w-80" height="h-80" src={profileImage} />
      </div>
    </>
  )
}

export default App
