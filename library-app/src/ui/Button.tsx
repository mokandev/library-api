interface IButtonProps {
  text: string;
  handlerFunction?: () => void;
}

export const Button: React.FC<IButtonProps> = ({ text, handlerFunction }) => {
  return (
    <button
      onClick={handlerFunction}
      className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-500 sm:px-6 sm:py-4"
    >
      {text}
    </button>
  );
};
