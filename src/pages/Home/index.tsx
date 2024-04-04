import { Play } from "phosphor-react";

export function Home() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmount">Durante</label>
          <input type="number" id="minutesAmount" />
          <span>minutos.</span>
        </div>
        <div>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </div>
        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </div>
  )
}