import { useState } from 'react'
import { Tasks } from './components/Tasks'
import { AddTask } from './components/AddTask'

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar programação',
      description: 'Estudar programação para ser um dev frontend',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Ler um livro',
      description: 'Para me manter informado',
      isCompleted: true,
    },
    {
      id: 3,
      title: 'Estudar inglês',
      description: 'Para aprender  inglês',
      isCompleted: true,
    },
  ])

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] '>
        <h1 className='text-slate-100 text-3xl font-bold text-center'>
          Gerenciador de tarefas
        </h1>
        {/* <AddTask /> */}
        <Tasks tasks={tasks} />
      </div>
    </div>
  )
}
