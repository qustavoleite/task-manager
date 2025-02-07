import { useState } from 'react'
import { Tasks } from './components/Tasks'
import { AddTask } from './components/AddTask'
import { v4 as uuidv4 } from 'uuid'

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

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task
    })

    setTasks(newTasks)
  }

  function onDeleteClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  function onAddTaskSubmit(title, description) {
    const newTasks = {
      id: uuidv4(),
      title: title,
      description: description,
      isCompleted: false,
    }

    setTasks([...tasks, newTasks])
  }

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] space-y-4'>
        <h1 className='text-slate-100 text-3xl font-bold text-center'>
          Gerenciador de tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteClick={onDeleteClick}
        />
      </div>
    </div>
  )
}
