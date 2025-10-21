'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const MesDossiers = () => {
  const [dossiers, setDossiers] = useState([
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
    },
    {
      id: 3,
      type: 'Études à l\'étranger',
      pays: 'États-Unis',
      universite: 'Harvard University',
      programme: 'PhD en Sciences',
      dateCreation: '2024-01-05',
      statut: 'En attente',
      priorite: 'Basse',
      derniereMiseAJour: '2024-01-12',
      documents: 7,
      etape: 'Révision des documents'
    }
  ]);

  const [filtreStatut, setFiltreStatut] = useState('Tous');
  const [filtreType, setFiltreType] = useState('Tous');

  const statuts = ['Tous', 'En cours de traitement', 'Approuvé', 'En attente', 'Rejeté'];
  const types = ['Tous', 'Études à l\'étranger', 'Bourse d\'étude'];

  const dossiersFiltres = dossiers.filter(dossier => {
    const matchStatut = filtreStatut === 'Tous' || dossier.statut === filtreStatut;
    const matchType = filtreType === 'Tous' || dossier.type === filtreType;
    return matchStatut && matchType;
  });

  const getStatutBadge = (statut) => {
    const badges = {
      'En cours de traitement': 'bg-warning text-dark',
      'Approuvé': 'bg-success',
      'En attente': 'bg-info',
      'Rejeté': 'bg-danger'
    };
    return badges[statut] || 'bg-secondary';
  };

  const getPrioriteBadge = (priorite) => {
    const badges = {
      'Haute': 'bg-danger',
      'Moyenne': 'bg-warning text-dark',
      'Basse': 'bg-success'
    };
    return badges[priorite] || 'bg-secondary';
  };

  const getStatutIcon = (statut) => {
    const icons = {
      'En cours de traitement': 'ph-clock',
      'Approuvé': 'ph-check-circle',
      'En attente': 'ph-hourglass',
      'Rejeté': 'ph-x-circle'
    };
    return icons[statut] || 'ph-question';
  };

  return (
    <section className="mes-dossiers-section py-5">
      <div className="container">
        {/* En-tête */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="section-title">Mes Dossiers</h1>
            <p className="section-subtitle">
              Suivez l'état de vos dossiers d'études et de bourses
            </p>
          </div>
        </div>

        {/* Statistiques */}
        <div className="row mb-5">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="ph-folder-open"></i>
              </div>
              <div className="stat-content">
                <h3>{dossiers.length}</h3>
                <p>Dossiers créés</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="ph-check-circle"></i>
              </div>
              <div className="stat-content">
                <h3>{dossiers.filter(d => d.statut === 'Approuvé').length}</h3>
                <p>Approuvés</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="ph-clock"></i>
              </div>
              <div className="stat-content">
                <h3>{dossiers.filter(d => d.statut === 'En cours de traitement').length}</h3>
                <p>En cours</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="ph-hourglass"></i>
              </div>
              <div className="stat-content">
                <h3>{dossiers.filter(d => d.statut === 'En attente').length}</h3>
                <p>En attente</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div className="filters-container mb-4">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Filtrer par statut</label>
              <select 
                className="form-select"
                value={filtreStatut}
                onChange={(e) => setFiltreStatut(e.target.value)}
              >
                {statuts.map(statut => (
                  <option key={statut} value={statut}>{statut}</option>
                ))}
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Filtrer par type</label>
              <select 
                className="form-select"
                value={filtreType}
                onChange={(e) => setFiltreType(e.target.value)}
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Liste des dossiers */}
        <div className="dossiers-container">
          {dossiersFiltres.length > 0 ? (
            <div className="row">
              {dossiersFiltres.map(dossier => (
                <div key={dossier.id} className="col-lg-6 col-xl-4 mb-4">
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
                      <h5 className="dossier-title">{dossier.universite}</h5>
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
                        <div className="meta-item">
                          <i className="ph-clock me-2"></i>
                          <span>Mis à jour le {new Date(dossier.derniereMiseAJour).toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="dossier-footer">
                      <div className="dossier-status">
                        <span className={`badge ${getStatutBadge(dossier.statut)}`}>
                          <i className={`${getStatutIcon(dossier.statut)} me-1`}></i>
                          {dossier.statut}
                        </span>
                        <span className={`badge ${getPrioriteBadge(dossier.priorite)}`}>
                          {dossier.priorite}
                        </span>
                      </div>
                      <div className="dossier-etape">
                        <small className="text-muted">{dossier.etape}</small>
                      </div>
                    </div>
                    
                    <div className="dossier-progress">
                      <div className="progress">
                        <div 
                          className="progress-bar bg-orange" 
                          style={{ 
                            width: dossier.statut === 'Approuvé' ? '100%' : 
                                   dossier.statut === 'En cours de traitement' ? '60%' : 
                                   dossier.statut === 'En attente' ? '30%' : '10%'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state text-center py-5">
              <i className="ph-folder-open display-1 text-muted mb-3"></i>
              <h4>Aucun dossier trouvé</h4>
              <p className="text-muted mb-4">
                {filtreStatut !== 'Tous' || filtreType !== 'Tous' 
                  ? 'Aucun dossier ne correspond aux filtres sélectionnés.'
                  : 'Vous n\'avez pas encore créé de dossier.'}
              </p>
              <Link href="/etudes-etranger" className="btn btn-orange">
                <i className="ph-plus me-2"></i>
                Créer un nouveau dossier
              </Link>
            </div>
          )}
        </div>

        {/* Actions rapides */}
        <div className="quick-actions mt-5">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="action-card">
                <div className="action-icon">
                  <i className="ph-plus-circle"></i>
                </div>
                <div className="action-content">
                  <h5>Nouveau dossier</h5>
                  <p>Créer un nouveau dossier d'études</p>
                  <Link href="/etudes-etranger" className="btn btn-outline-orange btn-sm">
                    Commencer
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="action-card">
                <div className="action-icon">
                  <i className="ph-magnifying-glass"></i>
                </div>
                <div className="action-content">
                  <h5>Rechercher bourses</h5>
                  <p>Trouver des bourses disponibles</p>
                  <Link href="/course" className="btn btn-outline-orange btn-sm">
                    Explorer
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="action-card">
                <div className="action-icon">
                  <i className="ph-chat-circle"></i>
                </div>
                <div className="action-content">
                  <h5>Support</h5>
                  <p>Besoin d'aide ? Contactez-nous</p>
                  <Link href="/contact" className="btn btn-outline-orange btn-sm">
                    Contacter
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

export default MesDossiers;
