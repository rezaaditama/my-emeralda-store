import Button from '../Button';
import SearchIcon from '../../assets/icons/SearchIcon';

const InputField = ({ label, placeholder, id, type, name, className }) => {
  return (
    <div className='w-full'>
      <label
        htmlFor={id}
        className='font-bold text-green-950 text-md md:text-lg'
      >
        {label}
      </label>
      <div className='flex'>
        <input
          type={type}
          className={`${className} p-2 border border-green-800 focus:outline-none text-sm md:text-base`}
          placeholder={placeholder}
          id={id}
          name={name}
        />
        {type === 'search' && (
          <Button className={'rounded-r-md'}>
            <SearchIcon size={26} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default InputField;
