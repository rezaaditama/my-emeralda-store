const Button = ({ children, type, className, onClick }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${className} font-bold bg-green-900 text-white  border border-green-950 p-2 hover:bg-green-800`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
