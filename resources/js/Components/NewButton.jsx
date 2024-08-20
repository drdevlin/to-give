import { Button } from '@headlessui/react';
import { PlusIcon } from '@radix-ui/react-icons';

export default function NewButton({ className = '', onClick }) {
  const style = {
    button: [
      'rounded',
      'py-2 pl-3 pr-3 md:pr-4',
      'text-sm text-white',
      'bg-sky-600/50 hover:bg-sky-500/50 active:bg-sky-700/50',
      'transition',
    ].join(' '),

    content: [
      'flex items-center gap-1',
    ].join(' '),

    text: [
      'hidden md:inline',
      'mb-[-1px] leading-none',
    ].join(' '),
  };

  return (
    <Button className={[className, style.button].join(' ')} onClick={onClick}>
      <div className={style.content}>
        <PlusIcon />
        <span className={style.text}>New</span>
      </div>
    </Button>
  );
}
