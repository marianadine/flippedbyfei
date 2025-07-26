import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <h1 style={{
        fontFamily: 'Funnel Display, sans-serif',
        fontSize: '48px',
        margin: 0
      }}>
        Coming Soon!
      </h1>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>
        Stay tuned for updates.
      </p>
    </div>
  );
}

export default App;
