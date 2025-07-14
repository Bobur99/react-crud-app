import React, { useState } from 'react'
import './Banner.css'

function Banner() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')

  let DataInput = (e) => {
      setText(e.target.value)
  }

  let getDataInput = () => {
      setResult(text)
  }

  return (
    <div className='banner-wrapper'>
    <div className='banner'>
      <div className="info-block">
        <input onChange={DataInput} type="text" name="" id="" placeholder='Enter some text...' />
        <button onClick={getDataInput}>send</button>
      </div>
      {result ? <h3>{result}</h3> : null}
    </div>
    </div>
  )
}

export default Banner