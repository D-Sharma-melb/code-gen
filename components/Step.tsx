import React from 'react'

interface stepProps{
    step: String;
}
function Step({step}: stepProps) {
  return (
    <button type="button" className="btn btn-dark">{step}</button>
  )
}

export default Step
