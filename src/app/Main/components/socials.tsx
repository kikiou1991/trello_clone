import Icon from '@/components/Icons'
import { Button } from '@nextui-org/react'
import React from 'react'

const Socials = () => {
  return (
    <div className='flex flex-row flex-wrap-0'>
         <Button className="bg-[#292f46] hover:bg-[#3d51a1] px-1" size="sm" isIconOnly>
          <Icon name="linkedIn"/>
        </Button >
        <Button className="bg-[#292f46] hover:bg-[#3d51a1] px-1" size="sm" isIconOnly>
          <Icon name="github"/>
        </Button>
        <Button className="bg-[#292f46] hover:bg-[#3d51a1] px-1"  size="sm" isIconOnly>
          <Icon name="discord"/>
        </Button>
    </div>
  )
}

export default Socials