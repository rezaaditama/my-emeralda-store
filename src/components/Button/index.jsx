const Button = ({ children, type, className }) => {
  return (
    <>
      <button
        type={type}
        className={`${className} font-bold bg-green-900 text-white  border border-green-950 p-2 hover:bg-green-800`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
