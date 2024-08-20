import DefaultLayout from '@/Layouts/DefaultLayout';
import TodoList from '@/Components/TodoList';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, todos }) {
  const userTodos = todos.filter((todo) => todo.user_id === auth.user.id);

  return (
    <>
      <Head title="TO-GIVE" />

      <DefaultLayout user={auth.user}>
        <TodoList todos={userTodos} />
      </DefaultLayout>
    </>
  );
}
