import { InputField } from '../Input';
import logo from '../../assets/img/logo.png';
import CartIcon from '../../assets/icons/cartIcon';
import NotificationIcon from '../../assets/icons/NotificationIcon';
import ChatIcon from '../../assets/icons/ChatIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full border border-b-4 h-[80px] grid grid-cols-3 items-center px-5 text-green-950'>
      <Link className='flex items-center space-x-2'>
        <img src={logo} alt='' className='h-16' />
        <h1 className='font-extrabold text-xl'>EMERALDA STORE</h1>
      </Link>
      <div className='flex justify-center'>
        <InputField
          className={'rounded-l-md w-full'}
          placeholder={'Search...'}
          id={'search'}
          type={'search'}
          name={'inputSearch'}
        />
      </div>
      <div className='flex items-center justify-end space-x-4'>
        <Link>
          <CartIcon size={30} color={'black'} />
        </Link>

        <Link>
          <NotificationIcon size={35} color={'black'} />
        </Link>
        <Link>
          <ChatIcon size={26} color={'black'} />
        </Link>
        <Link className='flex space-x-2'>
          <ProfileIcon size={26} color={'black'} />
          <p className='font-extrabold'>User</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
