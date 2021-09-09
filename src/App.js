import React, {useState, useEffect} from 'react'

export default function App() {
  let [count, setCout] = useState(0)
  useEffect(() => {
    let id = setInterval(() => {
      setCout(count + 1)
    }, 1000);
    return () => {
      console.log('结束')
      clearInterval(id)
    }
  })
  return (
    <div>
      { count }
    </div>
  )
}
