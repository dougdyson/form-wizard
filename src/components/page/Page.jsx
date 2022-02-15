import React from 'react';

import { Header } from '../header/Header';
import './page.css';

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Regan Lee' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Regan Lee' })}
      />

      <section>
        <h2>Welcome to BlockDocs!</h2>
      </section>
    </article>
  );
};
