import React from 'react';
import Button from './components/Button';
import Form from './components/Form';
import CardList from './components/CardList';
import './App.css';

function App() {
  const sampleCards = [
    { id: 1, title: 'Learn React Testing' },
    { id: 2, title: 'Master Jest & RTL' },
    { id: 3, title: 'Write Clean Code' },
  ];

  return (
    <div className="App fade-in">
      <header className="App-header">
        <h1 className="title-gradient">Front-end Excellence</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>
          Experiment No4 – Automated Quality Assurance
        </p>
      </header>
      
      <main className="main-content">
        <section className="glass section-card">
          <h2>Registration</h2>
          <Form />
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass section-card">
            <h2>Data Stream</h2>
            <CardList status="done" cards={sampleCards} />
          </div>

          <div className="glass section-card">
            <h2>Actions</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Button label="Sync Now" />
              <Button label="Logs" variant="secondary" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
