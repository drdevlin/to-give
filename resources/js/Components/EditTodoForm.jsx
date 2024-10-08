import { Field, Fieldset, Input, Label, Legend } from '@headlessui/react';
import { useForm } from '@inertiajs/react';

/** EDIT TODO FORM
 * Edits an existing todo.
 * */
export default function EditTodoForm({ todo, onSuccess = () => {} }) {
  // Style
  const style = {
    form: 'w-full max-w-prose',

    field: 'w-full mt-2',

    legend: 'text-lg font-bold',

    label: 'block mt-1',

    input: 'w-full border-none rounded-lg bg-white/10',

    button: [
      'w-full',
      'mt-5',
      'rounded',
      'px-4 py-2',
      'text-sm text-white',
      'bg-sky-900/50 hover:bg-sky-800/50 active:bg-sky-950/50',
      'transition',
    ].join(' '),
  };

  // Handlers
  const { data, setData, patch, processing, reset, /* TODO: errors */ } = useForm({
    recipient: todo.recipient,
    amount: todo.amount,
  });

  const handleRecipientInputChange = (event) => {
    setData('recipient', event.target.value);
  };

  const handleAmountInputChange = (event) => {
    setData('amount', event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    patch(route('todos.update', todo.id), {
      onSuccess: () => {
        reset();
        onSuccess();
      },
    });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Fieldset>
        <Legend className={style.legend}>Edit</Legend>
        <Field className={style.field}>
          <Label className={style.label}>To Whom?</Label>
          <Input className={style.input} value={data.recipient} onChange={handleRecipientInputChange} />
        </Field>
        <Field className={style.field}>
          <Label className={style.label}>How Much?</Label>
          <Input className={style.input} value={data.amount} onChange={handleAmountInputChange} />
        </Field>
        <button className={style.button} disabled={processing}>Update</button>
      </Fieldset>
    </form>
  );
}
