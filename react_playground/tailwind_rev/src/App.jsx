import './App.css'
import Screen1 from './components/Screen1'

function App() {

  return (
    <>
      <div className='grid grid-cols-10'>
        {/* <div className='md:col-span-4 col-span-10 bg-red-500'>
          Hello Virendra Patil!!!
        </div>
        <div className='md:col-span-4 col-span-10 bg-green-500'>
          Hello Virendra Patil!!!
        </div>
        <div className='md:col-span-2 col-span-10 bg-blue-800'>
          Hello Virendra Patil!!!
        </div> */}
        <Screen1 />
      </div>
    </>
  )
}

export default App
