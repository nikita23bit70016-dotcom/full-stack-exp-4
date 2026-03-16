import React from 'react';
import '../Components.css';

function CardList({ status, cards }) {
  if (status === 'loading') return (
    <div className="status-msg" style={{ color: 'var(--text-secondary)' }}>
      <div className="spinner" style={{ marginBottom: '10px' }}>Syncing data...</div>
    </div>
  );
  
  if (status === 'error') return (
    <div className="status-msg" style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--error)' }}>
      Failed to retrieve data.
    </div>
  );
  
  if (!cards || cards.length === 0) return (
    <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>No records found.</p>
  );

  return (
    <ul className="premium-list">
      {cards.map((card) => (
        <li key={card.id} className="glass premium-card fade-in">
          <span className="card-icon" />
          <span style={{ fontWeight: 500 }}>{card.title}</span>
        </li>
      ))}
    </ul>
  );
}

export default CardList;
