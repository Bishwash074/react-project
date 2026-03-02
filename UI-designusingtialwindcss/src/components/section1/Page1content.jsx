import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = () => {
  return (
    <div className=' h-[90vh] items-center bg-amber-950 py-10  flex gap-10 px-10'>
      <Leftcontent/>
      <Rightcontent/>
    </div>
  )
}

export default Page1content