

import React from 'react'

function HighlightedText({children,className}) {
  return (
    <span className={className}>
        {children}
    </span>
  )
}

export default HighlightedText