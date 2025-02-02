import { Link } from 'react-router-dom';
import Username from '../features/user/Username';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Library
      </Link>

      <Username />
    </header>
  );
}
