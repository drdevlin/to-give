import Todo from './Todo';

export default function TodoList({ todos }) {
  // Style
  const style = {
    todoList: [
      'p-6',
    ].join(' '),
  };

  // Calulated Props
  const completedTodos = todos.filter((todo) => todo.completed);
  const notCompletedTodos = todos.filter((todo) => !todo.completed);
  const arrangedTodos = [...notCompletedTodos, ...completedTodos];

  return (
    <div className={style.todoList}>
      {arrangedTodos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
};
