import { Link } from "react-router-dom";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">Library</Link>

      <Username />
    </header>
  );
}
