import React, { useEffect } from 'react'

export const Songs = () => {
    const API = import.meta.env.VITE_BASE_URL;
    useEffect(() => {
        fetch(`${API}/songs`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        .catch(error)
    }, []) //dependency array
  return (
    <div>
        Songs
    </div>
  )
}
