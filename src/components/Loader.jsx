import React from 'react'
import loader from '../assets/images/loader.png'

const Loader = ({loading}) => {
  return (
    <div class="flex flex-col justify-center items-center mr-auto ml-auto text-center" loading={loading}>
          <img src={loader} alt="road runner bird" />
    <div
    class="mt-0 w-28 h-28 border-8 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"
  ></div>
  
</div>
  )
}

export default Loader
