import React from 'react'

const Button = ({sortByDates, sortByViews}) => {
  return (
    <div>
      <button onClick={()=>sortByDates()}>Sort by Date</button>
      <button onClick={()=>sortByViews()}>Sort by Views</button>
    </div>
  )
}

export default Button
