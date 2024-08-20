import { Link } from '@inertiajs/react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { PersonIcon } from '@radix-ui/react-icons';

export default function AuthDropdown({ className = '', user }) {
  const style = {
    button: [
      'rounded',
      'py-2 pl-3 pr-3 md:pr-4',
      'text-sm text-white',
      'bg-sky-900/50 hover:bg-sky-800/50 active:bg-sky-950/50',
      'transition',
    ].join(' '),

    buttonContent: [
      'flex items-center gap-1',
    ].join(' '),

    buttonText: [
      'hidden md:inline',
      'mb-[-1px] leading-none',
    ].join(' '),

    menu: [
      'flex justify-end',
      'md:w-[var(--button-width)]',
      'mt-[-0.5rem] md:mt-2',
      'border-[1px] border-sky-800/50 rounded-lg',
      'py-2 pl-3 pr-4',
      'text-sm text-white',
      'bg-sky-900/25',
    ].join(' '),
  };

  return (
    <Menu>

      <MenuButton className={[className, style.button].join(' ')}>
        <div className={style.buttonContent}>
          <PersonIcon />
          <span className={style.buttonText}>{user.name}</span>
        </div>
      </MenuButton>

      <MenuItems className={style.menu} anchor="bottom end">
        <MenuItem>
          <Link href={route('logout')} method="post" as="button">
            Logout
          </Link>
        </MenuItem>
      </MenuItems>
      
    </Menu>
  );
}
