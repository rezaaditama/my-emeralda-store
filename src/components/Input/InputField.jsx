const InputField = ({ label, placeholder, id, type, name }) => {
  return (
    <div>
      <label htmlFor={id} className='font-bold text-green-950 text-lg'>
        {label}
      </label>
      <input
        type={type}
        className='w-full p-2 border border-green-800 rounded-lg  focus:outline-green-900'
        placeholder={placeholder}
        id={id}
        name={name}
      />
    </div>
  );
};

export default InputField;
