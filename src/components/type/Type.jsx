import React from 'react'
import Typewriter from 'typewriter-effect'
import "./Type.css"

export const Type = () => {
  return (
    <Typewriter
    options={{
        strings: ["No Rate Limits.", "No Bluemarks.", "Just Vanilla People Having Fun!"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}
