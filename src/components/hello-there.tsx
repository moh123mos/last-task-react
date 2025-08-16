import { useState } from "react"

export default function Hello() {
  const [name, setName] = useState('Mohamed mostafa')
  const handleNameChange = () => {
    const newName = prompt('please enter your name:') || 'Guest'
    setName(newName)
  }
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: 'black', marginBottom: '12px' }}>Hello, {name}!</h2>
      <button onClick={handleNameChange}>Change Name</button>
    </div>
  )
}