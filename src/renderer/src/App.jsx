import React from 'react';

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div>Hello world</div>
    </>
  )
}

export default App
