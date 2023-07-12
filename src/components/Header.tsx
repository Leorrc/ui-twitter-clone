import { Sparkle } from "phosphor-react";

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <div className='px-6 py-5 flex items-center justify-between text-xl font-bold border-b border-[#ebeef0] dark:border-[#202020] '>
      {title}
      <Sparkle
        className='w-6 h-6 text-twitterBlue' />
    </div>
  )
}