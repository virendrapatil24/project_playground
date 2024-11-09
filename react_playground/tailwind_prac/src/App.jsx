
import './App.css'
import { SideBar } from './components/SideBar'
import Content from './components/Content'
import { useMediaQuery } from './components/hooks/useMediaQuery'
import { createContext, useContext } from 'react'


export const WidthSize = createContext();

function App() {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <>
      <WidthSize.Provider value={{ isDesktop }}>
        <div className="flex h-screen bg-gray-100">
          <SideBar />
          <Content />
        </div>
      </WidthSize.Provider>
    </>
  )
};

export default App
