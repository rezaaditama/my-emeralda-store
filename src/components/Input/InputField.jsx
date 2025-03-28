const InputField = ({ label, placeholder, id, type, name, className }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className='font-bold text-green-950 text-md md:text-lg'
      >
        {label}
      </label>
      <input
        type={type}
        className={`${className} w-full p-2 border border-green-800 rounded-md  focus:outline-green-900 text-sm md:text-base`}
        placeholder={placeholder}
        id={id}
        name={name}
      />
    </div>
  );
};

export default InputField;
