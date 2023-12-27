"use client"
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Navbar, NavbarContent } from '@nextui-org/react'
import React from 'react'

interface Props {
    name: string,
    location: string
}

const Profile = ({name, location}: Props) => {
  return (
    <Navbar className='bg-[#292f46]'>
    
          <NavbarContent as="div" className='items-center'>
              <Dropdown className='bg-slate-100' placement='bottom-end'>
                <DropdownTrigger>
                  <Avatar
                          isBordered
                          as="button"
                          className="transition-transform"
                          color="secondary"
                          name={name}
                          size="sm"
                          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />

                </DropdownTrigger>
                <DropdownMenu >
                  <DropdownSection>
                    <DropdownItem>{name}</DropdownItem>
                    <DropdownItem>{location}</DropdownItem>

                  </DropdownSection>
                  
                </DropdownMenu>
              </Dropdown>
          </NavbarContent>
    </Navbar>
  )
}

export default Profile