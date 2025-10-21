import React from 'react';
import Link from 'next/link';

const AlloEcoleServices = () => {
  const services = [
    {
      image: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/award.svg",
      title: "Bourses d'études",
      description: "Consultez et postulez aux bourses d'études disponibles",
      link: "/bourses",
      color: "primary"
    },
    {
      image: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/bell.svg",
      title: "Alertes SMS",
      description: "Recevez des notifications par SMS pour les mises à jour importantes",
      link: "/alertes-sms",
      color: "success"
    },
    {
      image: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/arrow-repeat.svg",
      title: "Permutations",
      description: "Initiez ou répondez à une demande de permutation",
      link: "/permutations",
      color: "info"
    },
    {
      image: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/compass.svg",
      title: "Orientation",
      description: "Conseils pratiques et simulateur d'orientation",
      link: "/orientation",
      color: "warning"
    },
    {
      image: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/building.svg",
      title: "Écoles",
      description: "Recherchez et découvrez les établissements",
      link: "/ecoles",
      color: "danger"
    },
    {
      image: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/credit-card.svg",
      title: "Paiements mobiles",
      description: "Paiement des frais scolaires et examens",
      link: "/paiements",
      color: "secondary"
    }
  ];

  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="section-title">Nos Services</h2>
            <p className="section-subtitle">
              Découvrez tous les services que nous proposons pour faciliter votre parcours éducatif
            </p>
          </div>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-2 col-md-6">
              <Link href={service.link}>
              <div className="service-card h-100">
                <div className="service-icon">
                  <img src={service.image} alt={service.title} width="36" height="36" style={{ filter: 'invert(1)', opacity: 0.95 }} />
                </div>
                <div className="service-content">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                  {/* <Link href={service.link} className={`btn btn-${service.color} btn-sm`}>
                    En savoir plus
                  </Link> */}
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlloEcoleServices;
