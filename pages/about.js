import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('parcours');

  const tabStyle = (tab) => ({
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderBottom: activeTab === tab ? '2px solid #000' : '2px solid transparent',
    backgroundColor: activeTab === tab ? '#000' : 'transparent',
    transition: 'all 0.3s ease',
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <main
        style={{
            flex: 1,
            padding: '2rem 1rem',
            maxWidth: '800px',
            minWidth: '800px',
            margin: '0 auto',
            backgroundColor: '#293133',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            borderRadius: '12px',
        }}
        >

        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>À propos</h2>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <div style={tabStyle('parcours')} onClick={() => setActiveTab('parcours')}>🎓 Parcours</div>
          <div style={tabStyle('competences')} onClick={() => setActiveTab('competences')}>🛠️ Compétences</div>
        </div>

        {activeTab === 'parcours' && (
          <div>
            <ul style={{ lineHeight: '1.6' }}>
              <li>BTS SIO — Lycée Exemple (2023 - 2025)</li>
              <li>Bac Général — Lycée NomDuLycée (mention AB, 2023)</li>
            </ul>
          </div>
        )}

        {activeTab === 'competences' && (
          <div>
            <ul style={{ lineHeight: '1.6' }}>
              <li>HTML / CSS / JavaScript</li>
              <li>React / Next.js</li>
              <li>Git / GitHub</li>
              <li>Figma / UI Design</li>
            </ul>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
