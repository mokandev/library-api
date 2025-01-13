import { ChangeEvent, useState } from 'react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <Input onChange={handleChange} value={username} />

      {username !== '' && (
        <div>
          <Button type='primary' text="Start reading now" />
        </div>
      )}
    </form>
  );
}

export default CreateUser;
