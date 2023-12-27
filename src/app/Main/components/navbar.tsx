"use client"
import React from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from '@nextui-org/react';
import Icon from '@/components/Icons';
import Header from './header';
import Profile from './profile';
import NavigationMobile from './mobileNavigation';
import MyModal from './modal';
import Socials from './socials';

const NavbarTop = () => {
  return (
    <Navbar
      isBordered
      className='w-full border-slate-300 text-[#a8b0d3] bg-[#292f46]'
      classNames={{ base: 'w-screen', wrapper: 'w-screen max-w-none' }}
    >
      {/* Left section with navigation */}
      <NavbarContent className="sm:hidden flex flex-grow-0 ml-auto">
        <NavbarMenuToggle aria-label="Open menu" />
        <NavbarMenu>
          <NavigationMobile />
        </NavbarMenu>
      </NavbarContent>

      {/* Center section with project icon, header, and add button */}
      <NavbarContent className="items-center flex flex-grow-0 gap-1">
        <Icon name="projectIcon" />
        <Header />
        <Dropdown className="bg-slate-100" placement="bottom-end">
          <DropdownTrigger>
            <Button className="bg-[#292f46] hover:bg-[#3d51a1]" size="sm" isIconOnly>
              <Icon name="addIcon" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownSection>
              <DropdownItem>Something</DropdownItem>
              <DropdownItem>This is a notification</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      {/* Empty space between left and right sections */}
      <div className="flex-grow"></div>

      {/* Right section with modal, calendar, notification, and profile */}
      <NavbarContent className="items-center flex flex-grow-0 flex-wrap-0">
        <MyModal />
        <Button className="bg-[#292f46] hover:bg-[#3d51a1]" size="sm" isIconOnly>
          <Icon name="calendar" />
        </Button>
        <Dropdown className="bg-slate-100" placement="bottom-end">
          <DropdownTrigger>
            <Button className="bg-[#292f46] hover:bg-[#3d51a1]" size="sm" isIconOnly>
              <Icon name="notiBell" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownSection>
              <DropdownItem>Something</DropdownItem>
              <DropdownItem>This is a notification</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        <Socials/>
        <Profile name="Gabor Adorjani" location="Bristol, UK" />
      </NavbarContent>
    </Navbar>
  );
};
        


export default NavbarTop;
