import React from 'react'

const memoComponent = () => {
  return (
    <div>
        this is memo component taht only render when it detact changes in state or givin value 
        <br />this will work on functional Component
    </div>
  )
}

export default React.memo(memoComponent)
