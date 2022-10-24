import { useState } from 'react'
import reactLogo from './assets/react.svg'
import TextArea from './components/TextArea'
import './App.css'
import Button from './components/Button'
import Stars from './components/Stars'

function App() {
  const [textarea, setTextArea] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Obrigado pelo feedback")
    console.log(textarea)
    setTextArea("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='md:container md:mx-auto border flex justify-center flex-col'>
          <h1 className='mt-2 text-lg font-semibold text-center'>Star Ratings in React</h1>
          <Stars />
          <TextArea textarea={textarea} setTextArea={setTextArea}/>
          <Button />
        </div>
      </form>
    </>
  )
}

export default App
