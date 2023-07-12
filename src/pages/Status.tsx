import { FormEvent, useState, KeyboardEvent } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import { PaperPlaneRight } from "phosphor-react"


export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function createNewAnswers(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }
  return (
    <main>
      <Header title='Tweet' />

      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, quam cupiditate. Animi culpa aperiam saepe dolore velit tenetur quod quas, amet atque non, sed ab vero, et nisi necessitatibus numquam!" />

      <Separator />

      <form
        onSubmit={createNewAnswers}
        className='px-6 py-5 flex gap-2 items-center border-b border-solid border-[#ebeef0] dark:border-[#202020] '>
        <label
          className='flex flex-1 gap-3 items-center'
          htmlFor="tweet">
          <img
            className='w-12 h-12 rounded-full'
            src="https://github.com/Leorrc.png" alt="Leonardo Carvalho" />
          <textarea
            className='flex-1 border-0 text-base font-medium mt-5 resize-none focus:outline-none placeholder:text-[#5b7083] dark:bg-[#121214] md:text-xl'
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>

        <button
          className='p-3 ml-auto bg-twitterBlue rounded-full text-white text-base font-black border-0 md:py-2 md:px-6 hover:brightness-90'
          type='submit'
        >
          <PaperPlaneRight className="w-5 h-5 block md:hidden" />
          <span className="hidden md:block">
            Answer
          </span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}