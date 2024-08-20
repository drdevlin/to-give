import { useState } from 'react';
import { router } from '@inertiajs/react';
import { CheckIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import Modal from './Modal';
import EditTodoForm from './EditTodoForm';

/** TODO
 * Displays a single todo with buttons to
 * mark completed, edit, and delete.
 * */
export default function Todo({ todo }) {
  // Style
  const style = {
    todo: [
      'flex gap-3',
      'w-full max-w-prose',
      'mx-auto mb-3',
      'border-[1px] rounded-lg',
      todo.completed ? 'border-sky-800/25' : 'border-sky-800/50',
      'p-3',
      'text-sm text-white',
      todo.completed ? 'bg-sky-900/10' : 'bg-sky-900/25',
    ].join(' '),

    completedButton: [
      'flex-none self-center',
      'flex items-center justify-center',
      'h-5 w-5',
      'border-[1px] border-white/50 rounded',
      'bg-white/10',
      'hover:cursor-pointer',
    ].join(' '),

    description: [
      'col-span-2',
      'w-full',
    ].join(' '),

    recipient: 'font-bold',

    editButton: 'flex-none',

    deleteButton: 'flex-none',
  };

  // State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handlers
  const handleCompletedClick = (event) => {
    event.preventDefault();
    router.patch(route('todos.update', todo.id), { completed: !todo.completed });
  };

  const handleEditClick = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleModalCloseClick = () => {
    setIsModalOpen(false);
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    router.delete(route('todos.update', todo.id));
  }

  return (
    <>
      <div className={style.todo}>
        <button className={style.completedButton} onClick={handleCompletedClick}>
          {!!todo.completed && <CheckIcon />}
        </button>
        <div className={style.description}>
          <div className={style.recipient}>{todo.recipient}</div>
          <div>{todo.amount}</div>
        </div>
        <button className={style.editButton} onClick={handleEditClick}><Pencil1Icon /></button>
        <button className={style.deleteButton} onClick={handleDeleteClick}><TrashIcon /></button>
      </div>
      {
        isModalOpen && (
          <Modal onClose={handleModalCloseClick}>
            <EditTodoForm todo={todo} onSuccess={handleModalCloseClick} />
          </Modal>
        )
      }
    </>
  );
}
