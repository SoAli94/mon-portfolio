import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#fff',
      padding: '1rem 2rem',
      textAlign: 'center',
      borderTop: '1px solid #eee',
      color: '#777',
      fontSize: '0.9rem'
    }}>
      <div style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>
        <a
          href="https://github.com/SoAli94"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link1"
            >
            <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in//ali-ahmad-11a633340/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin />
        </a>
      </div>
      © {new Date().getFullYear()} Ali AHMAD — Tous droits réservés.
    </footer>
  );
}

  
  