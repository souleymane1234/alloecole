'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const BourseDetails = () => {
  const [activeTab, setActiveTab] = useState('description');

  // Données de la bourse (en réalité, ces données viendraient d'une API)
  const bourse = {
    id: 1,
    title: "Programme doctoral de littérature de l'Université de Bâle (Suisse)",
    published: "06/10/2025",
    deadline: "16/11/2025",
    type: "Doctorat",
    country: "Suisse",
    status: "current",
    university: "Université de Bâle",
    duration: "3-4 ans",
    amount: "CHF 1'500/mois",
    language: "Français, Allemand, Anglais",
    requirements: [
      "Master en littérature ou domaine connexe",
      "Excellence académique (moyenne minimale 5.0/6.0)",
      "Projet de recherche innovant",
      "Maîtrise de l'allemand (niveau C1)",
      "Lettre de motivation",
      "2 lettres de recommandation"
    ],
    benefits: [
      "Bourse mensuelle de CHF 1'500",
      "Exemption des frais de scolarité",
      "Accès aux ressources de recherche",
      "Encadrement par des professeurs renommés",
      "Possibilité de séjours à l'étranger",
      "Réseau international d'étudiants"
    ],
    applicationProcess: [
      "Préparation du dossier de candidature",
      "Soumission en ligne avant le 16/11/2025",
      "Évaluation par le comité de sélection",
      "Entretien avec les candidats présélectionnés",
      "Notification des résultats en janvier 2026",
      "Début du programme en septembre 2026"
    ],
    description: "Le programme doctoral en littérature de l'Université de Bâle offre une formation d'excellence dans un environnement de recherche international. Les candidats retenus bénéficient d'un encadrement personnalisé et d'un accès privilégié aux ressources documentaires de l'une des plus prestigieuses universités suisses.",
    contact: {
      email: "phd.literature@unibas.ch",
      phone: "+41 61 207 30 00",
      website: "https://www.unibas.ch/literature-phd"
    }
  };

  const isExpired = bourse.status === 'past';
  const daysLeft = Math.ceil((new Date(bourse.deadline) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <section className="bourse-details-section py-5">
      <div className="container">
        {/* En-tête de la bourse */}
        <div className="bourse-header-detail mb-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="bourse-badge mb-3">
                <span className={`badge ${isExpired ? 'bg-secondary' : 'bg-orange'}`}>
                  {isExpired ? 'Bourse expirée' : 'Bourse active'}
                </span>
                <span className="badge bg-white text-orange border-orange ms-2">{bourse.type}</span>
                <span className="badge bg-orange text-white ms-2">{bourse.country}</span>
              </div>
              
              <h1 className="bourse-title-detail mb-3">{bourse.title}</h1>
              
              {/* Image de la bourse */}
              <div className="bourse-image-container mb-4">
                <img 
                  src="/assets/images/poster/bourse.jpg" 
                  alt={bourse.title}
                  className="bourse-image"
                  onError={(e) => {
                    e.target.src = '/assets/images/poster/bourse.jpg';
                  }}
                />
                <div className="bourse-image-overlay">
                  <div className="bourse-image-badge">
                    <i className="ph-graduation-cap me-2"></i>
                    Programme Doctoral
                  </div>
                </div>
              </div>
              
              <div className="bourse-meta-detail mb-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="meta-item-detail">
                      <i className="ph-building me-2"></i>
                      <strong>Université :</strong> {bourse.university}
                    </div>
                    <div className="meta-item-detail">
                      <i className="ph-calendar me-2"></i>
                      <strong>Publié :</strong> {bourse.published}
                    </div>
                    <div className="meta-item-detail">
                      <i className="ph-clock me-2"></i>
                      <strong>Limite :</strong> {bourse.deadline}
                      {!isExpired && daysLeft > 0 && (
                        <span className="text-warning ms-2">({daysLeft} jours restants)</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="meta-item-detail">
                      <i className="ph-timer me-2"></i>
                      <strong>Durée :</strong> {bourse.duration}
                    </div>
                    <div className="meta-item-detail">
                      <i className="ph-currency-circle-dollar me-2"></i>
                      <strong>Montant :</strong> {bourse.amount}
                    </div>
                    <div className="meta-item-detail">
                      <i className="ph-translate me-2"></i>
                      <strong>Langues :</strong> {bourse.language}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="bourse-actions-card">
                <div className="card">
                  <div className="card-body text-center">
                    <h5 className="card-title">Actions</h5>
                    {!isExpired ? (
                      <>
                        <button className="btn btn-orange btn-lg w-100 mb-3">
                          <i className="ph-paper-plane-tilt me-2"></i>
                          Postuler maintenant
                        </button>
                        {/* <button className="btn btn-outline-orange w-100 mb-3">
                          <i className="ph-heart me-2"></i>
                          Ajouter aux favoris
                        </button>
                        <button className="btn btn-outline-secondary w-100">
                          <i className="ph-share-network me-2"></i>
                          Partager
                        </button> */}
                      </>
                    ) : (
                      <>
                        <button className="btn btn-outline-secondary w-100 mb-3" disabled>
                          <i className="ph-clock me-2"></i>
                          Bourse expirée
                        </button>
                        {/* <button className="btn btn-outline-orange w-100">
                          <i className="ph-share-network me-2"></i>
                          Partager
                        </button> */}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Onglets de contenu */}
        <div className="bourse-content-tabs">
          <div className="row">
            <div className="col-12">
              <ul className="nav nav-tabs bourse-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => setActiveTab('description')}
                    type="button"
                  >
                    <i className="ph-file-text me-2"></i>
                    Description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'requirements' ? 'active' : ''}`}
                    onClick={() => setActiveTab('requirements')}
                    type="button"
                  >
                    <i className="ph-list-checks me-2"></i>
                    Exigences
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === 'benefits' ? 'active' : ''}`}
                    onClick={() => setActiveTab('benefits')}
                    type="button"
                  >
                    <i className="ph-gift me-2"></i>
                    Avantages
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Contenu des onglets */}
          <div className="tab-content mt-4">
            <div className={`tab-pane fade ${activeTab === 'description' ? 'show active' : ''}`}>
              <div className="row">
                <div className="col-lg-8">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Description du programme</h4>
                      <p className="card-text">{bourse.description}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Informations clés</h5>
                      <ul className="list-unstyled">
                        <li><strong>Type :</strong> {bourse.type}</li>
                        <li><strong>Pays :</strong> {bourse.country}</li>
                        <li><strong>Durée :</strong> {bourse.duration}</li>
                        <li><strong>Montant :</strong> {bourse.amount}</li>
                        <li><strong>Langues :</strong> {bourse.language}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`tab-pane fade ${activeTab === 'requirements' ? 'show active' : ''}`}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Exigences de candidature</h4>
                  <ul className="list-group list-group-flush">
                    {bourse.requirements.map((req, index) => (
                      <li key={index} className="list-group-item d-flex align-items-start">
                        <i className="ph-check-circle text-success me-3 mt-1"></i>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className={`tab-pane fade ${activeTab === 'benefits' ? 'show active' : ''}`}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Avantages de la bourse</h4>
                  <div className="row">
                    {bourse.benefits.map((benefit, index) => (
                      <div key={index} className="col-md-6 mb-3">
                        <div className="benefit-item d-flex align-items-start">
                          <i className="ph-star text-warning me-3 mt-1"></i>
                          <span>{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bourses similaires */}
        <div className="similar-bourses mt-5">
          <h3 className="mb-4">Bourses similaires</h3>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card similar-bourse-card">
                <div className="card-body">
                  <div className="bourse-badge mb-2">
                    <span className="badge bg-orange">Doctorat</span>
                    <span className="badge bg-white text-orange border-orange ms-2">Suisse</span>
                  </div>
                  <h5 className="card-title">Bourse UNIL 2026/2027</h5>
                  <p className="card-text">Bourse d'études de l'Université de Lausanne</p>
                  <div className="bourse-meta">
                    <small className="text-muted">
                      <i className="ph-clock me-1"></i>
                      Limite: 01/11/2025
                    </small>
                  </div>
                  <Link href="/bourses/3" className="btn btn-orange btn-sm">
                    Voir détails
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card similar-bourse-card">
                <div className="card-body">
                  <div className="bourse-badge mb-2">
                    <span className="badge bg-orange">Doctorat</span>
                    <span className="badge bg-white text-orange border-orange ms-2">International</span>
                  </div>
                  <h5 className="card-title">Bourse d'étude doctorat sciences</h5>
                  <p className="card-text">Recrutement et égalité dans l'enseignement</p>
                  <div className="bourse-meta">
                    <small className="text-muted">
                      <i className="ph-clock me-1"></i>
                      Limite: 04/11/2025
                    </small>
                  </div>
                  <Link href="/bourses/2" className="btn btn-orange btn-sm">
                    Voir détails
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card similar-bourse-card">
                <div className="card-body">
                  <div className="bourse-badge mb-2">
                    <span className="badge bg-secondary">Expirée</span>
                    <span className="badge bg-white text-orange border-orange ms-2">France</span>
                  </div>
                  <h5 className="card-title">Bourse d'excellence Eiffel</h5>
                  <p className="card-text">Programme de bourses d'excellence français</p>
                  <div className="bourse-meta">
                    <small className="text-muted">
                      <i className="ph-clock me-1"></i>
                      Expirée: 15/03/2024
                    </small>
                  </div>
                  <Link href="/bourses/4" className="btn bg-secondary btn-sm">
                    Voir détails
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BourseDetails;
