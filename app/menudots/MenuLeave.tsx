import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from '@headlessui/react';

export default function MenuLeave() {
  return (
    <div className=' justify-center items-center'>
      <Menu as='div' className='relative '>
        <MenuButton
          as='button'
          className='flex items-center justify-center gap-2.5'
        >
          <div className='w-3 h-3 p1 bg-slate-800 rounded-full'></div>
          <div className='w-3 h-3 p1 bg-slate-800 rounded-full'></div>
          <div className='w-3 h-3 p1 bg-slate-800 rounded-full'></div>
        </MenuButton>
        <Transition
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <MenuItems
            anchor='bottom start'
            className='top-2 flex flex-col justify-center mt-2 py-1 px-2 text-xl font-medium text-base-content bg-white rounded-md border border-solid shadow-md border-base-300 w-auto'
          >
            <MenuItem>
              <button className='flex gap-4 justify-start px-2 py-1 items-center whitespace-nowrap rounded-md hover:bg-base-100/50'>
                <div>tasks</div>
              </button>
            </MenuItem>
            <MenuItem>
              <button className='flex justify-start p-2 items-center gap-4 mt-2.5 rounded-md hover:bg-base-100/50'>
                <div> verlaten</div>
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
