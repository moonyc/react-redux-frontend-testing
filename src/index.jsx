import './style.css'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'

const Message = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  return(
    <>
       <a href="#" onClick={handleClick}>Want to buy a new car?</a>
        { click === true && <p>Call +11 22 33 44 now!</p>}
    </>
  )
}

const root = createRoot(document.querySelector('#root'))



root.render(
    <Message />
)