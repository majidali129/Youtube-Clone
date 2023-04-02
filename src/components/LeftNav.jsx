import React,{useContext} from 'react'

import { categories } from '../utils/constants'
import LeftNavMenuItems from '../components/LeftNavMenuItems'
import { Context } from '../context/contextApi'
import { useNavigate } from 'react-router-dom'

const LeftNav = () => {
  
  const {selectCategories, setSelectCategories, mobileMenu} = useContext(Context)

  const navigate = useNavigate()

  const clickHandler = (name, type) => {
    switch (type) {
      case 'category':
        return setSelectCategories(name);
      case 'home':
        return setSelectCategories(name);
      case 'menu':
        return false;
      default:
        break;
    }
  }

  return (
    <div className= {`absolute w-[245px]  overflow-y-auto h-full md:relative py-4  bg-black  z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-[0]" : ""}`} >
      <div className='flex flex-col px-4'>
        {
          categories.map(item=>{
            return(
              <React.Fragment key={item.name}>
                <LeftNavMenuItems
                text={item.type === 'home' ? "Home" : item.name}
                icon={item.icon}
                action={()=>{
                  clickHandler(item.name, item.type);
                  navigate('/')
                }}
                className={`${selectCategories === item.name ? 'bg-white/[0.6]' : ""}`}
                />
                {
                  item.divider && (
                    <hr className='my-5 border-white/[0.5]'/>
                  )
                }
              </React.Fragment>
            )
          })
        }
        <hr className='my-5 border-white/[0.3]' />
        <div className='text-white/[0.7] text-xl'>
          Clone by Majid Ali
        </div>
      </div>
    </div>
  )
}

export default LeftNav