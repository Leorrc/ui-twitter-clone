import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import { Link } from 'react-router-dom'

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link
      className={`py-6 px-5 grid grid-cols-[3rem,1fr] gap-3 border-b border-solid border-[#ebeef0] dark:border-[#202020] `}
      to="/status">
      <img
        className='w-12 h-12 rounded-full'
        src="https://github.com/Leorrc.png" alt="Leonardo Carvalho" />

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <strong className="">Leonardo Carvalho</strong>
          <span className="text-sm text-[#89a2b8] ">@leozz_fps</span>
        </div>

        <p className="leading-5">
          {props.content}
        </p>

        <div className="flex items-center gap-12 mt-3">
          <button
            className="flex items-center gap-2 border-0 text-sm text-[#89a2b8] hover:text-twitterBlue"
            type="button"
          >
            <ChatCircle className="w-5 h-5" />
            20
          </button>

          <button
            className="flex items-center gap-2 border-0 text-sm text-[#89a2b8] hover:text-twitterBlue"
            type="button"
          >
            <ArrowsClockwise className="w-5 h-5" />
            20
          </button>

          <button
            className="flex items-center gap-2 border-0 text-sm text-[#89a2b8] hover:text-twitterBlue"
            type="button"
          >
            <Heart className="w-5 h-5" />
            20
          </button>
        </div>
      </div>
    </Link>
  )
}