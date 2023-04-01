import React from 'react'

const LeftNavMenuItems = ({text, icon, action, className}) => {
  return (
    <div 
    className={'text-white text-sm cursor-pointer px-4 h-10 flex items-center mb-[3px] rounded-lg hover:bg-white/[0.5] ' + className}
    onClick={action}
    >
      <span className='text-3xl mr-5'>{icon}</span>
      <span className='text-lg mr-5'>{text}</span>
    </div>
  )
}

export default LeftNavMenuItems