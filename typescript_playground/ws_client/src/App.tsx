import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  }, [])


  const sendMessage = () => {
    const msg = inputRef.current.value;
    if (socket) {
      //@ts-ignore
      socket.send(msg)
    }

  }

  return (
    <>
      <div>
        <input ref={inputRef} type="text" placeholder='type here...'></input>
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  )
}

export default App
