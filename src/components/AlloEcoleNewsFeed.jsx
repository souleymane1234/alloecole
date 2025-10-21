import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight, ChevronRight } from 'lucide-react';

const AlloEcoleNewsFeed = () => {
  const actualites = [
    {
      id: 1,
      type: "actualite",
      title: "Ouverture des inscriptions pour l'année académique 2025-2026",
      date: "20/10/2025",
      image: "/assets/images/poster/ecole.png",
      excerpt: "Les inscriptions pour la nouvelle année académique sont officiellement ouvertes dans tous les établissements de Côte d'Ivoire. Ne manquez pas cette opportunité...",
      views: 1250
    },
    {
      id: 2,
      type: "bourse",
      title: "Programme doctoral de littérature de l'Université de Bâle (Suisse)",
      published: "06/10/2025",
      deadline: "16/11/2025",
      typeEtude: "Doctorat",
      country: "Suisse",
      image: "/assets/images/poster/bourse.jpg"
    },
    {
      id: 3,
      type: "ecole",
      name: "COLLÈGE PRIVÉ NOTRE DAME DES LAGUNES DE YOPOUGON MILLIONNAIRE",
      location: "Yopougon, Côte d'Ivoire",
      typeEcole: "Collège Privé",
      image: "/assets/images/poster/ecole.png",
      description: "Établissement d'excellence offrant un enseignement de qualité avec des infrastructures modernes et un personnel qualifié."
    },
    {
      id: 4,
      type: "actualite",
      title: "Nouvelles bourses d'excellence disponibles pour les étudiants ivoiriens",
      date: "18/10/2025",
      image: "/assets/images/poster/bourse.jpg",
      excerpt: "Le gouvernement annonce de nouvelles opportunités de bourses pour encourager l'excellence académique et soutenir les étudiants méritants...",
      views: 2100
    },
    {
      id: 5,
      type: "permutation",
      niveau: "BTS 1",
      annee: "2018-2019",
      origine: "Grande école ASTC",
      souhait: "Université de Amérique",
      status: "En cours",
      date: "15/10/2025"
    },
    {
      id: 6,
      type: "bourse",
      title: "Bourse d'étude doctorat en recrutement et égalité dans l'enseignement des sciences et de l'ingénierie",
      published: "29/09/2025",
      deadline: "04/11/2025",
      typeEtude: "Doctorat",
      country: "International",
      image: "/assets/images/poster/ecole.png"
    },
    {
      id: 7,
      type: "ecole",
      name: "COLLEGE AHIMSA",
      location: "Abidjan, Côte d'Ivoire",
      typeEcole: "Collège",
      image: "/assets/images/poster/ecole.png",
      description: "Institution reconnue pour son approche pédagogique innovante et son engagement envers la réussite de chaque élève."
    },
    {
      id: 8,
      type: "actualite",
      title: "Réforme du système éducatif : Ce qui va changer en 2026",
      date: "15/10/2025",
      image: "/assets/images/poster/ecole.png",
      excerpt: "Une réforme majeure du système éducatif ivoirien est en cours, avec de nombreux changements prévus pour améliorer la qualité de l'enseignement...",
      views: 890
    },
    {
      id: 9,
      type: "permutation",
      niveau: "Master",
      annee: "2019-2020",
      origine: "Université Félix Houfouet Boigny",
      souhait: "Université de Strasbourg",
      status: "En cours",
      date: "12/10/2025"
    },
    {
      id: 10,
      type: "bourse",
      title: "Bourse d'études de l'Université de Lausanne UNIL, 2026/2027",
      published: "29/09/2025",
      deadline: "01/11/2025",
      typeEtude: "Master/Doctorat",
      country: "Suisse",
      image: "/assets/images/poster/bourse.jpg"
    },
    {
      id: 11,
      type: "ecole",
      name: "COLLEGE ABOUDRAMANE TRAORE PK 18",
      location: "Abobo, Côte d'Ivoire",
      typeEcole: "Collège",
      image: "/assets/images/poster/ecole.png",
      description: "Établissement public offrant un enseignement de qualité accessible à tous avec un encadrement professionnel."
    },
    {
      id: 12,
      type: "actualite",
      title: "Salon de l'orientation 2025 : Les dates annoncées",
      date: "12/10/2025",
      image: "/assets/images/poster/ecole.png",
      excerpt: "Le grand salon de l'orientation scolaire et professionnelle se tiendra du 5 au 8 novembre prochain à Abidjan. Un événement incontournable...",
      views: 1450
    },
    {
      id: 13,
      type: "permutation",
      niveau: "Licence professionnelle génie informatique",
      annee: "2018-2019",
      origine: "LEGACY INSTITUT",
      souhait: "Campus France",
      status: "En cours",
      date: "10/10/2025"
    },
    {
      id: 14,
      type: "ecole",
      name: "INSTITUT SECONDAIRE FAMORY",
      location: "Marcory, Côte d'Ivoire",
      typeEcole: "Institut Secondaire",
      image: "/assets/images/poster/ecole.png",
      description: "Institut moderne spécialisé dans la formation technique et professionnelle avec des équipements de pointe."
    },
    {
      id: 15,
      type: "actualite",
      title: "Comment bien préparer son dossier Campus France",
      date: "10/10/2025",
      image: "/assets/images/poster/ecole.png",
      excerpt: "Guide complet pour maximiser vos chances d'admission dans les universités françaises. Découvrez toutes les étapes essentielles...",
      views: 3200
    }
  ];

  const renderActualiteCard = (item) => (
    <div className="card" key={item.id}>
      <img src={item.image} alt={item.title} className="card-image" />
      <div className="card-content">
        <div className="card-badges">
          <span className="badge badge-orange">Actualité</span>
          <div className="date-info">
            <Calendar className="icon-sm" />
            {item.date}
          </div>
        </div>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-excerpt">{item.excerpt}</p>
        <div className="card-footer">
          <button className="link-button">
            Lire la suite <ArrowRight className="icon-sm" />
          </button>
          <span className="views">{item.views} vues</span>
        </div>
      </div>
    </div>
  );

  const renderBourseCard = (item) => (
    <div className="card" key={item.id}>
      <img src={item.image} alt={item.title} className="card-image" />
      <div className="card-content">
        <div className="card-badges badges-wrap">
          <span className="badge badge-orange">Bourse d'études</span>
          <span className="badge badge-blue">{item.typeEtude}</span>
          <span className="badge badge-green">{item.country}</span>
        </div>
        <h3 className="card-title">{item.title}</h3>
        <div className="info-list">
          <div className="info-item">
            <Calendar className="icon-md icon-orange" />
            <span>Publié le: {item.published}</span>
          </div>
          <div className="info-item deadline">
            <Clock className="icon-md" />
            <span>Date limite: {item.deadline}</span>
          </div>
        </div>
        <button className="button-primary">Voir les détails de la bourse</button>
      </div>
    </div>
  );

  const renderEcoleCard = (item) => (
    <div className="card" key={item.id}>
      <img src={item.image} alt={item.name} className="card-image" />
      <div className="card-content">
        <div className="card-badges">
          <span className="badge badge-orange">{item.typeEcole}</span>
        </div>
        <h3 className="card-title">{item.name}</h3>
        <div className="location-info">
          <MapPin className="icon-md icon-orange" />
          <span>{item.location}</span>
        </div>
        <p className="card-excerpt">{item.description}</p>
        <button className="button-secondary">Découvrir l'établissement</button>
      </div>
    </div>
  );

  const renderPermutationCard = (item) => (
    <div className="card" key={item.id}>
      <div className="card-content">
        <div className="card-badges">
          <span className="badge badge-orange">Permutation</span>
          <span className="badge badge-purple">{item.status}</span>
        </div>
        <h3 className="card-title">{item.niveau}</h3>
        <div className="permutation-path">
          <div className="path-item">
            <div className="path-dot"></div>
            <div>
              <p className="path-label">École d'origine</p>
              <p className="path-value">{item.origine}</p>
            </div>
          </div>
          <div className="path-arrow">
            <ChevronRight className="icon-lg" />
          </div>
          <div className="path-item">
            <div className="path-dot"></div>
            <div>
              <p className="path-label">École souhaitée</p>
              <p className="path-value">{item.souhait}</p>
            </div>
          </div>
        </div>
        <div className="year-info">
          <Calendar className="icon-sm icon-orange" />
          <span>Année académique: {item.annee}</span>
        </div>
        <button className="button-primary">Voir les détails de la permutation</button>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .section {
          padding: 3rem 1rem;
        }

        .max-width {
          max-width: 1280px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
        }

        .title-accent {
          color: #f97316;
        }

        .subtitle {
          font-size: 1.25rem;
          color: #6b7280;
        }

        .main-layout {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        .sidebar {
          background: white;
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 2rem;
        }

        .sidebar-left {
          width: 280px;
          flex-shrink: 0;
        }

        .sidebar-right {
          width: 280px;
          flex-shrink: 0;
        }

        .sidebar-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #f97316;
        }

        .sidebar-item {
          padding: 0.75rem;
          margin-bottom: 0.5rem;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .sidebar-item:hover {
          background-color: #fff7ed;
        }

        .sidebar-link {
          display: block;
          color: #4b5563;
          text-decoration: none;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .sidebar-link:hover {
          color: #f97316;
        }

        .content-area {
          flex: 1;
          min-width: 0;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (max-width: 1199px) {
          .sidebar-right {
            display: none;
          }
        }

        @media (max-width: 991px) {
          .main-layout {
            flex-direction: column;
          }

          .sidebar-left {
            width: 100%;
            position: static;
          }

          .sidebar-right {
            display: none;
          }
        }

        .card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
          border-left: 4px solid #f97316;
        }

        .card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        .card-image {
          width: 100%;
          height: 16rem;
          object-fit: cover;
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-badges {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .badges-wrap {
          flex-wrap: wrap;
        }

        .badge {
          padding: 0.25rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 9999px;
        }

        .badge-orange {
          background-color: #ffedd5;
          color: #f97316;
        }

        .badge-blue {
          background-color: #dbeafe;
          color: #2563eb;
        }

        .badge-green {
          background-color: #dcfce7;
          color: #16a34a;
        }

        .badge-purple {
          background-color: #f3e8ff;
          color: #9333ea;
        }

        .date-info {
          display: flex;
          align-items: center;
          color: #6b7280;
          font-size: 0.875rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 0.75rem;
          cursor: pointer;
          transition: color 0.2s;
        }

        .card-title:hover {
          color: #f97316;
        }

        .card-excerpt {
          color: #6b7280;
          margin-bottom: 1rem;
          line-height: 1.625;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .link-button {
          display: flex;
          align-items: center;
          color: #f97316;
          font-weight: 600;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
        }

        .link-button:hover {
          color: #ea580c;
        }

        .views {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .info-list {
          margin-bottom: 1rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }

        .info-item.deadline {
          color: #dc2626;
          font-weight: 600;
        }

        .location-info {
          display: flex;
          align-items: center;
          color: #6b7280;
          margin-bottom: 1rem;
        }

        .button-primary {
          width: 100%;
          padding: 0.75rem;
          background-color: #f97316;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .button-primary:hover {
          background-color: #ea580c;
        }

        .button-secondary {
          width: 100%;
          padding: 0.75rem;
          background-color: white;
          color: #f97316;
          border: 2px solid #f97316;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .button-secondary:hover {
          background-color: #fff7ed;
        }

        .permutation-path {
          margin-bottom: 1rem;
        }

        .path-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }

        .path-dot {
          width: 0.5rem;
          height: 0.5rem;
          background-color: #f97316;
          border-radius: 50%;
          margin-top: 0.5rem;
          margin-right: 0.75rem;
          flex-shrink: 0;
        }

        .path-label {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .path-value {
          font-weight: 600;
          color: #1f2937;
        }

        .path-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0.5rem 0;
        }

        .year-info {
          display: flex;
          align-items: center;
          color: #6b7280;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .icon-sm {
          width: 1rem;
          height: 1rem;
          margin-right: 0.25rem;
        }

        .icon-md {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
        }

        .icon-lg {
          width: 1.5rem;
          height: 1.5rem;
        }

        .icon-orange {
          color: #f97316;
        }

        .load-more-container {
          text-align: center;
          margin-top: 3rem;
        }

        .load-more-button {
          padding: 1rem 2rem;
          background-color: #f97316;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1.125rem;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: background-color 0.2s;
        }

        .load-more-button:hover {
          background-color: #ea580c;
        }

        @media (max-width: 767px) {
          .main-title {
            font-size: 1.875rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .card-title {
            font-size: 1.25rem;
          }

          .section {
            padding: 2rem 1rem;
          }
        }
      `}</style>
      
      <div className="container">
        <section className="section">
          <div className="max-width">
            <div className="header">
              <h2 className="main-title">
                <span className="title-accent">File d'Actualités</span> AlloEcole
              </h2>
              <p className="subtitle">
                Toutes les informations importantes pour votre parcours éducatif
              </p>
            </div>

            <div className="main-layout">
              {/* Sidebar Left */}
              <aside className="sidebar sidebar-left">
                <h3 className="sidebar-title">Catégories</h3>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">📰 Toutes les actualités</a>
                </div>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">🎓 Bourses d'études</a>
                </div>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">🏫 Établissements</a>
                </div>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">🔄 Permutations</a>
                </div>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">📚 Inscriptions</a>
                </div>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">🌍 Études à l'étranger</a>
                </div>
                
                <h3 className="sidebar-title" style={{marginTop: '2rem'}}>Filtres</h3>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">Cette semaine</a>
                </div>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">Ce mois-ci</a>
                </div>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">Plus populaires</a>
                </div>
              </aside>

              {/* Content Area */}
              <div className="content-area">
                <div className="grid">
                  {actualites.map((item) => {
                    if (item.type === 'actualite') return renderActualiteCard(item);
                    if (item.type === 'bourse') return renderBourseCard(item);
                    if (item.type === 'ecole') return renderEcoleCard(item);
                    if (item.type === 'permutation') return renderPermutationCard(item);
                    return null;
                  })}
                </div>

                <div className="load-more-container">
                  <button className="load-more-button">
                    Charger plus d'actualités
                  </button>
                </div>
              </div>

              {/* Sidebar Right */}
              <aside className="sidebar sidebar-right">
                <h3 className="sidebar-title">À la une</h3>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    <strong>Dates limites</strong><br/>
                    <small style={{color: '#6b7280'}}>5 bourses expirent bientôt</small>
                  </a>
                </div>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    <strong>Nouveautés</strong><br/>
                    <small style={{color: '#6b7280'}}>12 nouvelles écoles ajoutées</small>
                  </a>
                </div>
                
                <h3 className="sidebar-title" style={{marginTop: '2rem'}}>Liens utiles</h3>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">📝 Guide d'inscription</a>
                </div>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">💰 Calculateur de frais</a>
                </div>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">📞 Nous contacter</a>
                </div>
                <div className="sidebar-item">
                  <a href="#" className="sidebar-link">❓ FAQ</a>
                </div>

                <h3 className="sidebar-title" style={{marginTop: '2rem'}}>Statistiques</h3>
                <div style={{padding: '0.75rem', background: '#fff7ed', borderRadius: '0.375rem', fontSize: '0.875rem'}}>
                  <p style={{marginBottom: '0.5rem'}}><strong>1,247</strong> écoles</p>
                  <p style={{marginBottom: '0.5rem'}}><strong>89</strong> bourses actives</p>
                  <p><strong>456</strong> permutations en cours</p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AlloEcoleNewsFeed;