import { Link } from 'react-router-dom';

interface ILinkButton {
  children: string;
  to: string;
}

export const LinkButton: React.FC<ILinkButton> = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="test-sm text-blue-500 hover:text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
};
