import React from 'react';

const AlloEcoleNewsletter = () => {
  return (
    <section className="newsletter-section py-5 bg-primary text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="newsletter-content">
              <h2 className="newsletter-title">Souscrivez à notre Newsletter</h2>
              <p className="newsletter-text">
                Recevez de façon périodique toutes les informations pertinentes de notre plateforme
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="newsletter-form">
              <form className="d-flex gap-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Votre adresse email"
                  required
                />
                <button type="submit" className="btn btn-white">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlloEcoleNewsletter;
