import { useLibraryContext } from '../../context/LibraryContext';

export default function Username() {
  const { username } = useLibraryContext();

  return <div className="text-sm font-semibold">{username}</div>;
}
