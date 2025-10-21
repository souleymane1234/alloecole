'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const EtudesEtranger = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations personnelles
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateNaissance: '',
    nationalite: '',
    
    // Informations académiques
    niveauEtude: '',
    domaineEtude: '',
    etablissementActuel: '',
    moyenne: '',
    diplomeObtenu: '',
    
    // Destination souhaitée
    paysSouhaite: '',
    villeSouhaite: '',
    universiteSouhaite: '',
    programmeSouhaite: '',
    niveauSouhaite: '',
    
    // Langues
    langueMaternelle: '',
    languesEtrangeres: [],
    niveauAnglais: '',
    niveauFrancais: '',
    certificatsLangues: '',
    
    // Motivation et objectifs
    motivation: '',
    objectifsCarriere: '',
    experienceInternationale: '',
    
    // Situation financière
    budgetDisponible: '',
    besoinBourse: false,
    typeBourse: '',
    autresFinancements: '',
    
    // Documents
    cv: null,
    lettreMotivation: null,
    relevesNotes: null,
    diplomes: null,
    certificatsLangues: null
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { id: 1, title: 'Informations personnelles', icon: 'ph-user' },
    { id: 2, title: 'Profil académique', icon: 'ph-graduation-cap' },
    { id: 3, title: 'Destination souhaitée', icon: 'ph-globe' },
    { id: 4, title: 'Langues', icon: 'ph-translate' },
    { id: 5, title: 'Motivation', icon: 'ph-lightbulb' },
    { id: 6, title: 'Financement', icon: 'ph-currency-circle-dollar' },
    { id: 7, title: 'Documents', icon: 'ph-file-text' }
  ];

  const paysOptions = [
    'France', 'Canada', 'États-Unis', 'Royaume-Uni', 'Allemagne', 'Suisse', 
    'Belgique', 'Pays-Bas', 'Suède', 'Norvège', 'Danemark', 'Finlande',
    'Espagne', 'Italie', 'Portugal', 'Australie', 'Nouvelle-Zélande', 'Japon',
    'Corée du Sud', 'Singapour', 'Autre'
  ];

  const niveauxEtude = [
    'Baccalauréat', 'Licence', 'Master', 'Doctorat', 'Post-doctorat'
  ];

  const domainesEtude = [
    'Sciences', 'Ingénierie', 'Médecine', 'Droit', 'Économie', 'Commerce',
    'Arts', 'Lettres', 'Sciences sociales', 'Informatique', 'Autre'
  ];

  const niveauxLangue = [
    'Débutant (A1)', 'Élémentaire (A2)', 'Intermédiaire (B1)', 
    'Intermédiaire supérieur (B2)', 'Avancé (C1)', 'Maîtrise (C2)'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleArrayChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].includes(value) 
        ? prev[name].filter(item => item !== value)
        : [...prev[name], value]
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0] || null
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.nom) newErrors.nom = 'Le nom est requis';
        if (!formData.prenom) newErrors.prenom = 'Le prénom est requis';
        if (!formData.email) newErrors.email = 'L\'email est requis';
        if (!formData.telephone) newErrors.telephone = 'Le téléphone est requis';
        break;
      case 2:
        if (!formData.niveauEtude) newErrors.niveauEtude = 'Le niveau d\'étude est requis';
        if (!formData.domaineEtude) newErrors.domaineEtude = 'Le domaine d\'étude est requis';
        break;
      case 3:
        if (!formData.paysSouhaite) newErrors.paysSouhaite = 'Le pays souhaité est requis';
        if (!formData.niveauSouhaite) newErrors.niveauSouhaite = 'Le niveau souhaité est requis';
        break;
      // Add more validations for other steps
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      alert('Votre dossier d\'études à l\'étranger a été créé avec succès !');
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h3 className="step-title">Informations personnelles</h3>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Nom *</label>
                <input
                  type="text"
                  className={`form-control ${errors.nom ? 'is-invalid' : ''}`}
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                />
                {errors.nom && <div className="invalid-feedback">{errors.nom}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Prénom *</label>
                <input
                  type="text"
                  className={`form-control ${errors.prenom ? 'is-invalid' : ''}`}
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                />
                {errors.prenom && <div className="invalid-feedback">{errors.prenom}</div>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Téléphone *</label>
                <input
                  type="tel"
                  className={`form-control ${errors.telephone ? 'is-invalid' : ''}`}
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                />
                {errors.telephone && <div className="invalid-feedback">{errors.telephone}</div>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Date de naissance</label>
                <input
                  type="date"
                  className="form-control"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Nationalité</label>
                <input
                  type="text"
                  className="form-control"
                  name="nationalite"
                  value={formData.nationalite}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step-content">
            <h3 className="step-title">Profil académique</h3>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Niveau d'étude actuel *</label>
                <select
                  className={`form-select ${errors.niveauEtude ? 'is-invalid' : ''}`}
                  name="niveauEtude"
                  value={formData.niveauEtude}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionnez votre niveau</option>
                  {niveauxEtude.map(niveau => (
                    <option key={niveau} value={niveau}>{niveau}</option>
                  ))}
                </select>
                {errors.niveauEtude && <div className="invalid-feedback">{errors.niveauEtude}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Domaine d'étude *</label>
                <select
                  className={`form-select ${errors.domaineEtude ? 'is-invalid' : ''}`}
                  name="domaineEtude"
                  value={formData.domaineEtude}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionnez votre domaine</option>
                  {domainesEtude.map(domaine => (
                    <option key={domaine} value={domaine}>{domaine}</option>
                  ))}
                </select>
                {errors.domaineEtude && <div className="invalid-feedback">{errors.domaineEtude}</div>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Établissement actuel</label>
                <input
                  type="text"
                  className="form-control"
                  name="etablissementActuel"
                  value={formData.etablissementActuel}
                  onChange={handleInputChange}
                  placeholder="Nom de votre université/école"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Moyenne générale</label>
                <input
                  type="text"
                  className="form-control"
                  name="moyenne"
                  value={formData.moyenne}
                  onChange={handleInputChange}
                  placeholder="Ex: 15.5/20 ou 3.8/4.0"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Diplôme(s) obtenu(s)</label>
              <textarea
                className="form-control"
                name="diplomeObtenu"
                value={formData.diplomeObtenu}
                onChange={handleInputChange}
                rows="3"
                placeholder="Listez vos diplômes avec les années d'obtention"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="step-content">
            <h3 className="step-title">Destination souhaitée</h3>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Pays souhaité *</label>
                <select
                  className={`form-select ${errors.paysSouhaite ? 'is-invalid' : ''}`}
                  name="paysSouhaite"
                  value={formData.paysSouhaite}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionnez un pays</option>
                  {paysOptions.map(pays => (
                    <option key={pays} value={pays}>{pays}</option>
                  ))}
                </select>
                {errors.paysSouhaite && <div className="invalid-feedback">{errors.paysSouhaite}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Ville souhaitée</label>
                <input
                  type="text"
                  className="form-control"
                  name="villeSouhaite"
                  value={formData.villeSouhaite}
                  onChange={handleInputChange}
                  placeholder="Ex: Paris, Londres, Toronto"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Université souhaitée</label>
                <input
                  type="text"
                  className="form-control"
                  name="universiteSouhaite"
                  value={formData.universiteSouhaite}
                  onChange={handleInputChange}
                  placeholder="Nom de l'université"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Programme souhaité</label>
                <input
                  type="text"
                  className="form-control"
                  name="programmeSouhaite"
                  value={formData.programmeSouhaite}
                  onChange={handleInputChange}
                  placeholder="Ex: Master en Informatique"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Niveau souhaité *</label>
              <select
                className={`form-select ${errors.niveauSouhaite ? 'is-invalid' : ''}`}
                name="niveauSouhaite"
                value={formData.niveauSouhaite}
                onChange={handleInputChange}
              >
                <option value="">Sélectionnez le niveau souhaité</option>
                {niveauxEtude.map(niveau => (
                  <option key={niveau} value={niveau}>{niveau}</option>
                ))}
              </select>
              {errors.niveauSouhaite && <div className="invalid-feedback">{errors.niveauSouhaite}</div>}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="step-content">
            <h3 className="step-title">Compétences linguistiques</h3>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Langue maternelle</label>
                <input
                  type="text"
                  className="form-control"
                  name="langueMaternelle"
                  value={formData.langueMaternelle}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Niveau d'anglais</label>
                <select
                  className="form-select"
                  name="niveauAnglais"
                  value={formData.niveauAnglais}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionnez votre niveau</option>
                  {niveauxLangue.map(niveau => (
                    <option key={niveau} value={niveau}>{niveau}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Niveau de français</label>
                <select
                  className="form-select"
                  name="niveauFrancais"
                  value={formData.niveauFrancais}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionnez votre niveau</option>
                  {niveauxLangue.map(niveau => (
                    <option key={niveau} value={niveau}>{niveau}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Certificats de langues</label>
                <input
                  type="text"
                  className="form-control"
                  name="certificatsLangues"
                  value={formData.certificatsLangues}
                  onChange={handleInputChange}
                  placeholder="Ex: TOEFL, IELTS, DELF"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Autres langues étrangères</label>
              <div className="row">
                {['Espagnol', 'Allemand', 'Italien', 'Chinois', 'Japonais', 'Arabe'].map(langue => (
                  <div key={langue} className="col-md-4 mb-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={langue}
                        checked={formData.languesEtrangeres.includes(langue)}
                        onChange={() => handleArrayChange('languesEtrangeres', langue)}
                      />
                      <label className="form-check-label" htmlFor={langue}>
                        {langue}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="step-content">
            <h3 className="step-title">Motivation et objectifs</h3>
            <div className="mb-3">
              <label className="form-label">Pourquoi souhaitez-vous étudier à l'étranger ? *</label>
              <textarea
                className="form-control"
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                rows="4"
                placeholder="Décrivez vos motivations pour étudier à l'étranger..."
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Objectifs de carrière</label>
              <textarea
                className="form-control"
                name="objectifsCarriere"
                value={formData.objectifsCarriere}
                onChange={handleInputChange}
                rows="3"
                placeholder="Quels sont vos objectifs professionnels ?"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Expérience internationale</label>
              <textarea
                className="form-control"
                name="experienceInternationale"
                value={formData.experienceInternationale}
                onChange={handleInputChange}
                rows="3"
                placeholder="Avez-vous déjà voyagé ou étudié à l'étranger ?"
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="step-content">
            <h3 className="step-title">Situation financière</h3>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Budget disponible (par an)</label>
                <select
                  className="form-select"
                  name="budgetDisponible"
                  value={formData.budgetDisponible}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionnez votre budget</option>
                  <option value="< 5000€">Moins de 5 000€</option>
                  <option value="5000-10000€">5 000€ - 10 000€</option>
                  <option value="10000-20000€">10 000€ - 20 000€</option>
                  <option value="20000-30000€">20 000€ - 30 000€</option>
                  <option value="> 30000€">Plus de 30 000€</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Avez-vous besoin d'une bourse ?</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="besoinBourse"
                    checked={formData.besoinBourse}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label">
                    Oui, je recherche une bourse
                  </label>
                </div>
              </div>
            </div>
            {formData.besoinBourse && (
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Type de bourse recherchée</label>
                  <select
                    className="form-select"
                    name="typeBourse"
                    value={formData.typeBourse}
                    onChange={handleInputChange}
                  >
                    <option value="">Sélectionnez le type</option>
                    <option value="Bourse d'excellence">Bourse d'excellence</option>
                    <option value="Bourse de mérite">Bourse de mérite</option>
                    <option value="Bourse sociale">Bourse sociale</option>
                    <option value="Bourse de recherche">Bourse de recherche</option>
                    <option value="Toute bourse disponible">Toute bourse disponible</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Autres financements</label>
                  <input
                    type="text"
                    className="form-control"
                    name="autresFinancements"
                    value={formData.autresFinancements}
                    onChange={handleInputChange}
                    placeholder="Prêt étudiant, famille, etc."
                  />
                </div>
              </div>
            )}
          </div>
        );

      case 7:
        return (
          <div className="step-content">
            <h3 className="step-title">Documents à joindre</h3>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">CV (PDF)</label>
                <input
                  type="file"
                  className="form-control"
                  name="cv"
                  onChange={handleFileChange}
                  accept=".pdf"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Lettre de motivation (PDF)</label>
                <input
                  type="file"
                  className="form-control"
                  name="lettreMotivation"
                  onChange={handleFileChange}
                  accept=".pdf"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Relevés de notes (PDF)</label>
                <input
                  type="file"
                  className="form-control"
                  name="relevesNotes"
                  onChange={handleFileChange}
                  accept=".pdf"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Diplômes (PDF)</label>
                <input
                  type="file"
                  className="form-control"
                  name="diplomes"
                  onChange={handleFileChange}
                  accept=".pdf"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Certificats de langues (PDF)</label>
              <input
                type="file"
                className="form-control"
                name="certificatsLangues"
                onChange={handleFileChange}
                accept=".pdf"
              />
            </div>
            <div className="alert alert-info">
              <i className="ph-info me-2"></i>
              <strong>Note :</strong> Tous les documents doivent être au format PDF. La taille maximale par fichier est de 5MB.
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="etudes-etranger-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {/* En-tête */}
            <div className="text-center mb-5">
              <h1 className="section-title">Études à l'étranger</h1>
              <p className="section-subtitle">
                Créez votre dossier d'études à l'étranger et trouvez les meilleures opportunités
              </p>
            </div>

            {/* Progress bar */}
            <div className="progress-container mb-5">
              <div className="progress">
                <div 
                  className="progress-bar bg-orange" 
                  style={{ width: `${(currentStep / steps.length) * 100}%` }}
                ></div>
              </div>
              <div className="progress-text text-center mt-2">
                Étape {currentStep} sur {steps.length}
              </div>
            </div>

            {/* Steps navigation */}
            <div className="steps-navigation mb-4">
              <div className="row">
                {steps.map(step => (
                  <div key={step.id} className="col-md-3 col-6 mb-3">
                    <div 
                      className={`step-item ${currentStep >= step.id ? 'active' : ''} ${currentStep === step.id ? 'current' : ''}`}
                      onClick={() => setCurrentStep(step.id)}
                    >
                      <div className="step-icon">
                        <i className={step.icon}></i>
                      </div>
                      <div className="step-title">{step.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form content */}
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                {renderStepContent()}
                
                {/* Navigation buttons */}
                <div className="form-navigation mt-4">
                  <div className="row">
                    <div className="col-md-6">
                      {currentStep > 1 && (
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={prevStep}
                        >
                          <i className="ph-arrow-left me-2"></i>
                          Précédent
                        </button>
                      )}
                    </div>
                    <div className="col-md-6 text-end">
                      {currentStep < steps.length ? (
                        <button
                          type="button"
                          className="btn btn-orange"
                          onClick={nextStep}
                        >
                          Suivant
                          <i className="ph-arrow-right ms-2"></i>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-orange btn-lg"
                        >
                          <i className="ph-check me-2"></i>
                          Créer mon dossier
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtudesEtranger;
