import { ChangeEvent } from 'react';

interface IInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Your full name"
      value={value}
      onChange={onChange}
      className="mb-8 w-72 rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3 "
    />
  );
};
