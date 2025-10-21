'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const MonProfil = () => {
  const [activeTab, setActiveTab] = useState('informations');

  // Données utilisateur (en réalité, ces données viendraient d'une API)
  const userData = {
    nom: 'Albert',
    prenom: 'Kala',
    email: 'albert.kala@email.com',
    telephone: '+225 07 00 00 00 00',
    dateNaissance: '2000-01-01',
    nationalite: 'Ivoirienne',
    adresse: '493 Rue de Brazzaville, Abidjan-marcory',
    photo: '/assets/images/poster/albert.jpg'
  };

  const dossiers = [
    {
      id: 1,
      type: 'Études à l\'étranger',
      pays: 'Canada',
      universite: 'Université de Toronto',
      programme: 'Master en Informatique',
      dateCreation: '2024-01-15',
      statut: 'En cours de traitement',
      priorite: 'Haute',
      derniereMiseAJour: '2024-01-20',
      documents: 5,
      etape: 'Évaluation des documents'
    },
    {
      id: 2,
      type: 'Bourse d\'étude',
      pays: 'France',
      universite: 'Sorbonne Université',
      programme: 'Master en Littérature',
      dateCreation: '2024-01-10',
      statut: 'Approuvé',
      priorite: 'Moyenne',
      derniereMiseAJour: '2024-01-18',
      documents: 3,
      etape: 'Prêt pour inscription'
    }
  ];

  const demandesBourses = [
    {
      id: 1,
      titre: 'Bourse d\'excellence Eiffel 2024-2025',
      universite: 'Sorbonne Université',
      montant: '1 181€/mois',
      dateDemande: '2024-01-10',
      statut: 'En cours',
      echeance: '2024-03-15'
    },
    {
      id: 2,
      titre: 'Bourse Chevening 2024-2025',
      universite: 'University of Cambridge',
      montant: '£18,000/an',
      dateDemande: '2024-01-05',
      statut: 'Approuvée',
      echeance: '2024-02-28'
    }
  ];

  const tabs = [
    { id: 'informations', label: 'Mes informations', icon: 'ph-user' },
    { id: 'dossiers', label: 'Mes dossiers', icon: 'ph-folder' },
    { id: 'bourses', label: 'Demandes de bourses', icon: 'ph-graduation-cap' },
    { id: 'documents', label: 'Mes documents', icon: 'ph-file-text' },
    { id: 'parametres', label: 'Paramètres', icon: 'ph-gear' }
  ];

  const getStatutBadge = (statut) => {
    const badges = {
      'En cours de traitement': 'bg-warning text-dark',
      'Approuvé': 'bg-success',
      'En attente': 'bg-info',
      'Rejeté': 'bg-danger',
      'En cours': 'bg-warning text-dark',
      'Approuvée': 'bg-success'
    };
    return badges[statut] || 'bg-secondary';
  };

  const getStatutIcon = (statut) => {
    const icons = {
      'En cours de traitement': 'ph-clock',
      'Approuvé': 'ph-check-circle',
      'En attente': 'ph-hourglass',
      'Rejeté': 'ph-x-circle',
      'En cours': 'ph-clock',
      'Approuvée': 'ph-check-circle'
    };
    return icons[statut] || 'ph-question';
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'informations':
        return (
          <div className="tab-content">
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="profile-card">
                  <div className="profile-avatar">
                    <img src={userData.photo} alt="Photo de profil" />
                    <button className="btn btn-outline-orange btn-sm">
                      <i className="ph-camera me-1"></i>
                    </button>
                  </div>
                  <div className="profile-info">
                    <h4>{userData.prenom} {userData.nom}</h4>
                    <p className="text-muted">{userData.email}</p>
                    <div className="profile-stats">
                      <div className="stat-item">
                        <span className="stat-number">{dossiers.length}</span>
                        <span className="stat-label">Dossiers</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">{demandesBourses.length}</span>
                        <span className="stat-label">Bourses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="info-card">
                  <h5 className="card-title">Informations personnelles</h5>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Nom</label>
                      <input type="text" className="form-control" value={userData.nom} readOnly />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Prénom</label>
                      <input type="text" className="form-control" value={userData.prenom} readOnly />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" value={userData.email} readOnly />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Téléphone</label>
                      <input type="tel" className="form-control" value={userData.telephone} readOnly />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Date de naissance</label>
                      <input type="date" className="form-control" value={userData.dateNaissance} readOnly />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Nationalité</label>
                      <input type="text" className="form-control" value={userData.nationalite} readOnly />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Adresse</label>
                    <textarea className="form-control" rows="2" value={userData.adresse} readOnly />
                  </div>
                  <button className="btn btn-orange">
                    <i className="ph-pencil me-2"></i>
                    Modifier mes informations
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'dossiers':
        return (
          <div className="tab-content">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5>Mes dossiers d'études</h5>
              <Link href="/etudes-etranger" className="btn btn-orange">
                <i className="ph-plus me-2"></i>
                Nouveau dossier
              </Link>
            </div>
            <div className="row">
              {dossiers.map(dossier => (
                <div key={dossier.id} className="col-lg-6 mb-4">
                  <div className="dossier-card">
                    <div className="dossier-header">
                      <div className="dossier-type">
                        <i className="ph-graduation-cap me-2"></i>
                        {dossier.type}
                      </div>
                      <div className="dossier-actions">
                        <button className="btn btn-sm btn-outline-orange">
                          <i className="ph-eye"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-secondary">
                          <i className="ph-download"></i>
                        </button>
                      </div>
                    </div>
                    <div className="dossier-content">
                      <h6 className="dossier-title">{dossier.universite}</h6>
                      <p className="dossier-programme">{dossier.programme}</p>
                      <p className="dossier-pays">
                        <i className="ph-map-pin me-2"></i>
                        {dossier.pays}
                      </p>
                      <div className="dossier-meta">
                        <div className="meta-item">
                          <i className="ph-calendar me-2"></i>
                          <span>Créé le {new Date(dossier.dateCreation).toLocaleDateString('fr-FR')}</span>
                        </div>
                        <div className="meta-item">
                          <i className="ph-file me-2"></i>
                          <span>{dossier.documents} document(s)</span>
                        </div>
                      </div>
                    </div>
                    <div className="dossier-footer">
                      <div className="dossier-status">
                        <span className={`badge ${getStatutBadge(dossier.statut)}`}>
                          <i className={`${getStatutIcon(dossier.statut)} me-1`}></i>
                          {dossier.statut}
                        </span>
                        <span className={`badge ${dossier.priorite === 'Haute' ? 'bg-danger' : dossier.priorite === 'Moyenne' ? 'bg-warning text-dark' : 'bg-success'}`}>
                          {dossier.priorite}
                        </span>
                      </div>
                      <div className="dossier-etape">
                        <small className="text-muted">{dossier.etape}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'bourses':
        return (
          <div className="tab-content">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5>Mes demandes de bourses</h5>
              <Link href="/course" className="btn btn-orange">
                <i className="ph-plus me-2"></i>
                Nouvelle demande
              </Link>
            </div>
            <div className="row">
              {demandesBourses.map(demande => (
                <div key={demande.id} className="col-lg-6 mb-4">
                  <div className="bourse-card">
                    <div className="bourse-header">
                      <div className="bourse-title">
                        <h6>{demande.titre}</h6>
                        <p className="bourse-universite">{demande.universite}</p>
                      </div>
                      <div className="bourse-montant">
                        <span className="montant">{demande.montant}</span>
                      </div>
                    </div>
                    <div className="bourse-content">
                      <div className="bourse-meta">
                        <div className="meta-item">
                          <i className="ph-calendar me-2"></i>
                          <span>Demandée le {new Date(demande.dateDemande).toLocaleDateString('fr-FR')}</span>
                        </div>
                        <div className="meta-item">
                          <i className="ph-clock me-2"></i>
                          <span>Échéance: {new Date(demande.echeance).toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bourse-footer">
                      <div className="bourse-status">
                        <span className={`badge ${getStatutBadge(demande.statut)}`}>
                          <i className={`${getStatutIcon(demande.statut)} me-1`}></i>
                          {demande.statut}
                        </span>
                      </div>
                      <div className="bourse-actions">
                        <button className="btn btn-sm btn-outline-orange">
                          <i className="ph-eye me-1"></i>
                          Voir
                        </button>
                        <button className="btn btn-sm btn-outline-secondary">
                          <i className="ph-download me-1"></i>
                          PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'documents':
        return (
          <div className="tab-content">
            <h5 className="mb-4">Mes documents</h5>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="document-card">
                  <div className="document-icon">
                    <i className="ph-file-text"></i>
                  </div>
                  <div className="document-info">
                    <h6>CV</h6>
                    <p className="text-muted">cv_marie_dupont.pdf</p>
                    <div className="document-actions">
                      <button className="btn btn-sm btn-outline-orange">
                        <i className="ph-eye me-1"></i>
                        Voir
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        <i className="ph-download me-1"></i>
                        Télécharger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="document-card">
                  <div className="document-icon">
                    <i className="ph-file-text"></i>
                  </div>
                  <div className="document-info">
                    <h6>Lettre de motivation</h6>
                    <p className="text-muted">lettre_motivation.pdf</p>
                    <div className="document-actions">
                      <button className="btn btn-sm btn-outline-orange">
                        <i className="ph-eye me-1"></i>
                        Voir
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        <i className="ph-download me-1"></i>
                        Télécharger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="document-card">
                  <div className="document-icon">
                    <i className="ph-file-text"></i>
                  </div>
                  <div className="document-info">
                    <h6>Relevés de notes</h6>
                    <p className="text-muted">releves_notes.pdf</p>
                    <div className="document-actions">
                      <button className="btn btn-sm btn-outline-orange">
                        <i className="ph-eye me-1"></i>
                        Voir
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        <i className="ph-download me-1"></i>
                        Télécharger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="upload-section">
              <h6>Ajouter un nouveau document</h6>
              <div className="upload-area">
                <i className="ph-cloud-arrow-up display-4 text-muted mb-3"></i>
                <p>Glissez-déposez vos fichiers ici ou cliquez pour sélectionner</p>
                <input type="file" className="form-control" multiple accept=".pdf" />
              </div>
            </div>
          </div>
        );

      case 'parametres':
        return (
          <div className="tab-content">
            <h5 className="mb-4">Paramètres du compte</h5>
            <div className="row">
              <div className="col-lg-6">
                <div className="settings-card">
                  <h6>Changer le mot de passe</h6>
                  <div className="mb-3">
                    <label className="form-label">Mot de passe actuel</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Nouveau mot de passe</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirmer le mot de passe</label>
                    <input type="password" className="form-control" />
                  </div>
                  <button className="btn btn-orange">Changer le mot de passe</button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="settings-card">
                  <h6>Notifications</h6>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="email-notifications" defaultChecked />
                    <label className="form-check-label" htmlFor="email-notifications">
                      Notifications par email
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="sms-notifications" />
                    <label className="form-check-label" htmlFor="sms-notifications">
                      Notifications par SMS
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="bourse-updates" defaultChecked />
                    <label className="form-check-label" htmlFor="bourse-updates">
                      Mises à jour des bourses
                    </label>
                  </div>
                  <button className="btn btn-orange">Sauvegarder</button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="mon-profil-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            {/* Sidebar navigation */}
            <div className="profile-sidebar">
              <div className="profile-summary">
                <div className="profile-avatar-small">
                  <img src={userData.photo} alt="Photo de profil" />
                </div>
                <div className="profile-info-small">
                  <h5>{userData.prenom} {userData.nom}</h5>
                  <p className="text-muted">{userData.email}</p>
                </div>
              </div>
              <nav className="profile-nav">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <i className={tab.icon}></i>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="col-lg-9">
            {/* Main content */}
            <div className="profile-content">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonProfil;
