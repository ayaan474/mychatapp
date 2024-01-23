import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm.jsx';
import './App.css';

const projectID = '2e4e32a6-295e-4b1f-936c-0a1c8c524113';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
