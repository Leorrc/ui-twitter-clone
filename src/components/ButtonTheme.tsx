import { useTheme } from "../hooks/useTheme"

export function ButtonTheme() {
  const { theme, setTheme } = useTheme()

  function handleThemeSwitch() {
    const sound = new Audio('/sound/sound.mp3')

    sound.play()
    if (theme !== "dark") {
      document.documentElement.classList.add("dark")
      setTheme("dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
      setTheme("light")
    }
  }

  return (
    <label
      className="absolute right-0 flex cursor-pointer p-4">

      <input
        className='sr-only peer'
        type="checkbox"
        onClick={handleThemeSwitch}
      />

      <div className="peer after:bg-no-repeat after:bg-center after:bg-sun peer-checked:after:bg-moon after:transaction-all after:duration-300 after:left-0 peer-checked:after:left-12 flex w-24 h-12 px-1 bg-zinc-300 dark:bg-zinc-700 rounded-full items-center after:rounded-full after:content-[''] after:flex after:relative after:w-10 after:h-10 after:bg-zinc-100 dark:after:bg-zinc-800 after:-rotate-180 after:peer-checked:rotate-0 shadow-inner"
      >
      </div>
    </label>
  )
}