interface IButtonProps {
  text: string;
  handlerFunction?: () => void;
  type: 'small' | 'primary' | 'secondary';
}

export const Button: React.FC<IButtonProps> = ({
  text,
  handlerFunction,
  type,
}) => {
  const base =
    'inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-500 ';

  const styles = {
    primary: base + 'px-4 py-3 md:px-10 md:py-4',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-all duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-500 px-4 py-2.5 md:px-10 md:py-3.5 text-xs ',
  };

  return (
    <button onClick={handlerFunction} className={styles[type]}>
      {text}
    </button>
  );
};
