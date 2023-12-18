import React from 'react'
import '@/app/css/loader.scss'
import { useSelector } from 'react-redux'
const Loading = () => {
    const loading = useSelector((state) => state.Loading.value);
  return (
    <>
    {loading && <div className='loading'>
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <p><b>Please Wait, Loading Content</b></p>
    </div>}
    </>
  )
}

export default Loading