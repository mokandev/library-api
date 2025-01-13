import { useRouteError } from 'react-router-dom';
import { LinkButton } from './LinkButton';

interface RouteError {
  status?: number;
  statusText?: string;
  data?: string;
  message?: string;
}

function Error() {
  const error = useRouteError() as RouteError;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="/"> &larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
