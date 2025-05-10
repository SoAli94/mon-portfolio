
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from "react";


export default function Home() {
    const [isButtonVisible, setIsButtonVisible] = useState(false); // État pour gérer la visibilité du bouton

   // Fonction pour afficher le bouton après la fin des animations
   const handleAnimationEnd = () => {
    // Afficher le bouton après la fin de l'animation du texte
    setTimeout(() => {
      setIsButtonVisible(true);
    }, 3000); // Le délai de 3000ms correspond à la durée de l'animation du texte
  };

  return (
    
    <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent' // 👈 ici le fond doit être transparent
      }}>
      
      <Header /> {/* ← AJOUT ICI */}
      <AnimatedBackground />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '1rem' }}>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ marginBottom: '2rem' }}
        >
        <Image
        src="/Ali.jpeg"
        alt="Mon portrait"
        width={200}
        height={200}
        style={{
            borderRadius: '50%',
            border: '5px solid #333',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            transition: 'border 0.3s ease', // Transition pour un effet fluide
        }}
        onMouseOver={(e) => e.target.style.border = '5px solid #7CFC00'} // Change la couleur au survol
        onMouseOut={(e) => e.target.style.border = '5px solid #333'} // Restaure la couleur initiale
        />

        </motion.div>


        {/* Animation du premier texte */}
        <h1
            className="typing-text"
            onAnimationEnd={handleAnimationEnd} // Affiche le bouton après la fin de l'animation
            style={{
              animation: 'typing 3s steps(30) 1s forwards, blink 0.75s step-end infinite',
            }}
          >
            Bonjour, moi c’est Ali AHMAD.
        </h1>

        {/* Animation du deuxième texte */}
          <p
            className="typing-text"
            style={{
              animation: 'typing 3s steps(40) 4s forwards, blink 0.75s step-end infinite',
              marginBottom: '3rem',
            }}
          >
            Ingénieur en systèmes numériques.
          </p>

          {/* Saut de ligne avant le bouton */}
          <br />


          {/* Le bouton apparaît après l'animation des deux textes */}
          {isButtonVisible && (
            <a
              href="#projects"
              style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'background-color 0.3s',
                 
                
                textAlign: 'center' // Centre le bouton
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#000'}
            >
              Voir mes projets
            </a>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

  