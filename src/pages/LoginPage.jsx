import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { InputField, Checkbox } from '../components/Input';

const LoginPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='border border-green-900 rounded px-5 py-7 shadow-xl space-y-2 w-4/5 md:w-1/3'>
        <div className='text-center'>
          <h1 className='font-extrabold uppercase text-2xl text-green-950'>
            login
          </h1>
          <p className='text-sm'>
            Silakan masukkan data diri Anda untuk mengakses layanan kami.
          </p>
        </div>
        <form action='' className='space-y-1'>
          <InputField
            label={'Username'}
            placeholder={'Masukkan Username'}
            id={'username'}
            type={'text'}
            name={'inputUsername'}
          />
          <InputField
            label={'Password'}
            placeholder={'Masukkan Password'}
            id={'password'}
            type={'password'}
            name={'inputPassword'}
          />
          <div className='flex w-full justify-between py-1'>
            <div className='flex items-center'>
              <Checkbox
                id={'rememberMe'}
                label={'Remember Me'}
                name={'saveMe'}
              />
            </div>
            <Link className='text-xs font-bold text-green-950'>
              Forgot Password?
            </Link>
          </div>
          <Button type={'submit'}>SUBMIT</Button>
        </form>
        <p className='text-sm text-center'>
          Belum memiliki akun?{' '}
          <Link to={'/register'} className='text-green-950 font-bold'>
            Daftar
          </Link>{' '}
          sekarang!
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
