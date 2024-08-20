import { Cross1Icon } from '@radix-ui/react-icons';

export default function Modal({ onClose = () => {}, children }) {
  const style = {
    modal: [
      'absolute inset-0',
      'grid grid-cols-1 grid-rows-5',
      'p-3',
      'backdrop-blur-xl',
    ].join(' '),

    closeArea: 'row-start-1 row-span-1 flex items-start justify-end',

    closeButton: 'p-0',

    closeIcon: 'h-6 w-6 fill-current text-white/50',

    formArea: 'row-start-2 row-span-3 grid place-items-center text-white',
  };

  return (
    <div className={style.modal}>
      <div className={style.closeArea}>
        <button className={style.closeButton} onClick={onClose}>
          <Cross1Icon className={style.closeIcon}/>
        </button>
      </div>
      <div className={style.formArea}>
        {children}
      </div>
    </div>
  );
}
