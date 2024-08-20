import { useState } from 'react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NewButton from '@/Components/NewButton';
import AuthDropdown from '@/Components/AuthDropdown';
import Modal from '@/Components/Modal';
import NewTodoForm from '@/Components/NewTodoForm';

export default function Default({ user, children }) {
  // Style
  const style = {
    app: [
      'absolute',
      'w-dvw h-dvh',
      'flex flex-col',
      'overflow-hidden',
    ].join(' '),


    /* Header */
    header: [
      'order-last',
      'md:order-first',
      'grid items-center',
      'grid-cols-3 grid-rows-1',
      'md:grid-cols-2 md:grid-rows-1',
      'border-t-[1px] border-t-slate-900',
      'md:border-b-[1px] md:border-b-slate-900',
      'py-3 px-6',
    ].join(' '),

    logo: [
      'h-12 max-h-full aspect-square fill-current text-slate-500',
    ].join(' '),

    actionArea: [
      'hidden md:flex items-center justify-end gap-2',
    ].join(' '),

    mobileNewButton: 'justify-self-center md:hidden',

    mobileAuthButton: 'justify-self-end md:hidden',


    /* Main */
    main: [
      'order-first',
      'md:order-last',
      'grid grid-cols-1 grid-rows-1',
      'h-full shrink',
      'overflow-scroll',
    ].join(' '),


    /* Animated Background */
    background: [
      '-z-10',
      'absolute inset-0',
      'bg-slate-950',
      'overflow-hidden',
    ].join(' '),

    scanningBar: [
      'w-full h-48',
      'bg-sky-800/30',
      'animate-[scan_30s_ease-in-out_alternate_infinite]',
    ].join(' '),

    orbitingBlob1: [
      'w-1/3 h-1/3 rounded-full',
      'bg-sky-800/25',
      'animate-[orbit1_50s_ease-in-out_alternate_infinite]',
    ].join(' '),

    orbitingBlob2: [
      'w-1/2 h-1/2 rounded-full',
      'bg-sky-800/20',
      'animate-[orbit2_85s_ease-in-out_alternate_infinite]',
    ].join(' '),

    diffusion: 'absolute inset-0 backdrop-brightness-50 backdrop-blur-3xl',
  };

  // State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handlers
  const handleNewButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={style.app}>

      {/* Header */}
      <header className={style.header}>

        {/* Brand */}
        <Link href="/">
          <ApplicationLogo className={style.logo} />
        </Link>

        {/* Desktop Action Buttons */}
        <div className={style.actionArea}>
          <NewButton onClick={handleNewButtonClick} />
          <AuthDropdown user={user} />
        </div>

        {/* Mobile Action Buttons */}
        <NewButton className={style.mobileNewButton} onClick={handleNewButtonClick} />
        <AuthDropdown className={style.mobileAuthButton} user={user} /> 

      </header>

      {/* Main */}
      <main className={style.main}>
        {children}
      </main>

      {/* New Todo Modal */}
      {isModalOpen && (
        <Modal onClose={handleCloseClick}>
          <NewTodoForm onSuccess={handleCloseClick} />
        </Modal>
      )}

      {/* Animated Background */}
      <div className={style.background}>
        <div className={style.scanningBar} />
        <div className={style.orbitingBlob1} />
        <div className={style.orbitingBlob2} />
        <div className={style.diffusion} />
      </div>

    </div>
  );
}
