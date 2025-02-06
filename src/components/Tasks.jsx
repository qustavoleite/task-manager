import { ChevronRightIcon, Trash } from 'lucide-react'

export function Tasks({ tasks, onTaskClick, onDeleteClick }) {
  return (
    <ul className='space-y-4 p-6 bg-slate-200 rounded-md shadow'>
      {tasks.map((task) => (
        <li key={task.id} className='flex gap-2'>
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-white p-2 rounded-md text-left ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>

          <button className='bg-slate-400 p-2 rounded-md text-white'>
            <ChevronRightIcon />
          </button>

          <button
            className='bg-slate-400 p-2 rounded-md text-white'
            onClick={() => onDeleteClick(task.id)}
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  )
}
