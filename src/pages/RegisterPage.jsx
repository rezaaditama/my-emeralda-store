import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { InputField } from '../components/Input';

const RegisterPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='border border-green-900 px-5 py-7 rounded-md shadow-xl space-y-2 w-4/5 md:w-1/3'>
        <div className='text-center'>
          <h1 className='uppercase font-extrabold text-2xl text-green-950'>
            register
          </h1>
          <p className='text-sm'>
            Daftar sekarang untuk mulai menggunakan layanan kami.
          </p>
        </div>
        <form action='' className='space-y-1'>
          <InputField
            label={'Nama Lengkap'}
            placeholder={'Masukkan Nama Lengkap'}
            id={'namaLengkap'}
            type={'text'}
            name={'inputNamaLengkap'}
          />
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
            type={'text'}
            name={'inputPassword'}
          />
          <InputField
            label={'Verify Password'}
            placeholder={'Masukkan Verify Password'}
            id={'verfyPassword'}
            type={'text'}
            name={'inputVerfyPassword'}
            className={'mb-1'}
          />
          <Button type={'submit'}>REGISTER</Button>
        </form>
        <p className='text-sm text-center'>
          Sudah memiliki akun?{' '}
          <Link to={'/'} className='text-green-950 font-bold'>
            Masuk
          </Link>{' '}
          untuk melanjutkan
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
