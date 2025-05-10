import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const linkStyle = (path) => ({
    textDecoration: 'none',
    color: router.pathname === path ? '#000' : '#555',
    fontWeight: router.pathname === path ? 'bold' : 'normal',
    borderBottom: router.pathname === path ? '2px solid #000' : 'none',
    paddingBottom: '2px',
    transition: 'all 0.3s ease',
  });

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      borderBottom: '1px solid #ddd',
      backgroundColor: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 10,
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1 style={{ margin: 0, fontWeight: 'bold', cursor: 'pointer' }}>Mon Portfolio</h1>
      </Link>

      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/about" style={linkStyle('/about')}>À propos</Link>
        <a href="#projects" style={linkStyle('#projects')}>Projets</a>
        <a href="#contact" style={linkStyle('#contact')}>Contact</a>
      </nav>
    </header>
  );
}

  