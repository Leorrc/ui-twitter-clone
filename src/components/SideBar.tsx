import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from 'phosphor-react'
import twitterLogo from '../assets/logo-twitter.svg'
import { NavLink } from 'react-router-dom'

export function SideBar() {
  return (
    <aside className='flex flex-col gap-8 py-6 px-3 items-center md:items-start md:px-5'>
      <img
        className='w-8 h-8'
        src={twitterLogo}
        alt="Logo" />

      <nav className='flex flex-col gap-8 group'>
        <NavLink
          className='flex items-center gap-5 text-lg font-bold sidebar-link'
          to="/">
          <House
            weight='fill'
            className='w-8 h-8 sidebar-link' />
          <span className="hidden md:block">Home</span>
        </NavLink>
        <a
          className='flex items-center gap-5 text-lg font-bold'
          href="">
          <Hash className='w-8 h-8' />
          <span className="hidden md:block">Explore</span>
        </a>
        <a
          className='flex items-center gap-5 text-lg font-bold'
          href="">
          <Bell className='w-8 h-8' />
          <span className="hidden md:block">Notifications</span>
        </a>
        <a
          className='flex items-center gap-5 text-lg font-bold'
          href="">
          <Envelope className='w-8 h-8' />
          <span className="hidden md:block">Messages</span>
        </a>
        <a
          className='flex items-center gap-5 text-lg font-bold'
          href="">
          <BookmarkSimple className='w-8 h-8' />
          <span className="hidden md:block">Bookmarks</span>
        </a>
        <a
          className='flex items-center gap-5 text-lg font-bold'
          href="">
          <FileText className='w-8 h-8' />
          <span className="hidden md:block">Lists</span>
        </a>
        <a
          className='flex items-center gap-5 text-lg font-bold'
          href="">
          <User className='w-8 h-8' />
          <span className="hidden md:block">Profile</span>
        </a>
        <a
          className='flex items-center gap-5 text-lg font-bold'
          href="">
          <DotsThreeCircle className='w-8 h-8' />
          <span className="hidden md:block">More</span>
        </a>
      </nav>

      <button className='bg-twitterBlue border-0 rounded-full p-4 flex justify-center w-full text-white font-black text-xl hover:brightness-90'>
        <Pencil className='w-6 h-6 block md:hidden' />
        <span className="hidden md:block">Tweet</span>
      </button>
    </aside>
  )
}