import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

const colors = {
  blue: "#005eff",
  grey: "#a9a9a9"
}

const Stars = () => {
  const stars = Array(5).fill(0)
  const [currentValue, setCurrentValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)

  const handleClick = (value) => {
    setCurrentValue(value)
  }

  const handleMouseOver = (value) => {
    setHoverValue(value)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  return (
    <>
      <div className='flex justify-center'>

          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                className='m-2 text-3xl'
                style={{cursor: "pointer"}}
                color={(hoverValue || currentValue) > index ? colors.blue : colors.grey}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
              />
            )
          })}
      </div>
    </>
  )
}

export default Stars
