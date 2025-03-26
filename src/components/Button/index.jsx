const Button = ({ children, type }) => {
  return (
    <>
      <button
        type={type}
        className='w-full font-bold bg-green-900 text-white rounded-md border border-green-950 p-2 hover:bg-green-800  '
      >
        {children}
      </button>
    </>
  );
};

export default Button;
