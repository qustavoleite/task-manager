import { ChevronRightIcon, Trash } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'

export function Tasks({ tasks, onTaskClick, onDeleteClick }) {
  const navigate = useNavigate()

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    query.set('title', task.title)
    query.set('description', task.description)
    navigate(`/task?${query.toString()}`)
  }

  return (
    <ul className='space-y-4 p-6 bg-slate-200 rounded-md shadow'>
      {tasks.map((task) => (
        <li key={task.id} className='flex gap-2'>
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-white p-2 rounded-md text-left ${
              task.isCompleted && 'line-through'
            }`}
          >
            {task.title}
          </button>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => onDeleteClick(task.id)}>
            <Trash />
          </Button>
        </li>
      ))}
    </ul>
  )
}
