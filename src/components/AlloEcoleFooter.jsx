import React from 'react';
import Link from 'next/link';

const AlloEcoleFooter = () => {
  return (
    <footer className="footer-one">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link href="/">
                    <img src="/assets/images/logo/logo-white.png" alt="AlloEcole" />
                  </Link>
                </div>
                <p className="footer-text">
                  ALLOECOLE, portail de référence des établissements scolaires et universitaires de Côte d'Ivoire
                </p>
                <div className="footer-contact">
                  <p><i className="ph-map-pin"></i> Côte d'Ivoire, Abidjan-cocody</p>
                  <p><i className="ph-envelope"></i> support@alloecole.ci</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h4 className="footer-title">Études</h4>
                <ul className="footer-links">
                  <li><Link href="/bourses">Bourses d'étude</Link></li>
                  <li><Link href="/etudes-etranger">Études à l'étranger</Link></li>
                  <li><Link href="/simulateur">Simulateur d'orientation</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h4 className="footer-title">Administration</h4>
                <ul className="footer-links">
                  <li><Link href="/sign-up">S'inscrire</Link></li>
                  <li><Link href="/sign-in">Se connecter</Link></li>
                  <li><Link href="/offres">Offres ALLOECOLE</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <h4 className="footer-title">Nos Coordonnées</h4>
                <div className="footer-contact">
                  <p><i className="ph-map-pin"></i> Côte d'Ivoire, Abidjan-cocody</p>
                  <p><i className="ph-envelope"></i> support@alloecole.ci</p>
                </div>
                <div className="footer-social">
                  <h5>Suivez-nous</h5>
                  <div className="social-links">
                    <Link href="#" className="social-link">
                      <i className="ph-facebook-logo"></i>
                    </Link>
                    <Link href="#" className="social-link">
                      <i className="ph-twitter-logo"></i>
                    </Link>
                    <Link href="#" className="social-link">
                      <i className="ph-instagram-logo"></i>
                    </Link>
                    <Link href="#" className="social-link">
                      <i className="ph-linkedin-logo"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="footer-bottom-left">
                <p className="mb-0">
                  2025 © AlloEcole - Tous Droits Reservés.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-bottom-right">
                <ul className="footer-bottom-links">
                  <li><Link href="/privacy-policy">Politique de confidentialité</Link></li>
                  <li><Link href="/terms">Condition générale</Link></li>
                  <li><Link href="/legal">Mention légale</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AlloEcoleFooter;
