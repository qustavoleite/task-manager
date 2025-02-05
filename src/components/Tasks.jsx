import { ChevronRightIcon, Trash } from 'lucide-react'

export function Tasks(props) {
  return (
    <ul className='space-y-4 mt-4 p-6 bg-slate-200 rounded-md shadow'>
      {props.tasks.map((task) => (
        <li key={task.id} className='flex gap-2'>
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-white p-2 rounded-md text-left ${
              task.isCompleted && 'line-through'
            }`}
          >
            {task.title}
          </button>

          <button className='bg-slate-400 p-2 rounded-md'>
            <ChevronRightIcon />
          </button>

          <button
            className='bg-slate-400 p-2 rounded-md'
            onClick={() => props.onDeleteClick(task.id)}
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  )
}
