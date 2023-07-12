import { FormEvent, useState, KeyboardEvent } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"


export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar!',
    'Nossa que massa!!!',
    'Parabéns, pelo projetinho!',
    'Irado!'
  ])

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main>
      <Header title='Home' />


      <form onSubmit={createNewTweet} className='px-6 py-5 flex flex-col gap-2'>
        <label
          className='flex gap-3'
          htmlFor="tweet">
          <img
            className='w-12 h-12 rounded-full'
            src="https://github.com/Leorrc.png" alt="Leonardo Carvalho" />
          <textarea
            className='flex-1 border-0 text-xl font-medium mt-3 resize-none focus:outline-none placeholder:text-[#5b7083] dark:bg-[#121214]'
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
          />
        </label>

        <button
          className='ml-auto bg-twitterBlue rounded-full py-2 px-6 text-white text-base font-black border-0 hover:brightness-90'
          type='submit'
        >
          Tweet
        </button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}