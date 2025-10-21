import React from 'react';
import Link from 'next/link';

const AlloEcoleEcoles = () => {
  const ecoles = [
    {
      id: 1,
      name: "COLLÈGE PRIVÉ NOTRE DAME DES LAGUNES DE YOPOUGON MILLIONNAIRE",
      location: "Côte d'Ivoire",
      type: "Collège Privé",
      image: "/assets/images/ecoles/ecole-1.jpg"
    },
    {
      id: 2,
      name: "COLLEGE AHIMSA",
      location: "Côte d'Ivoire",
      type: "Collège",
      image: "/assets/images/ecoles/ecole-2.jpg"
    },
    {
      id: 3,
      name: "COLLEGE ABOUDRAMANE TRAORE PK 18",
      location: "Côte d'Ivoire",
      type: "Collège",
      image: "/assets/images/ecoles/ecole-3.jpg"
    },
    {
      id: 4,
      name: "INSTITUT SECONDAIRE FAMORY",
      location: "Côte d'Ivoire",
      type: "Institut Secondaire",
      image: "/assets/images/ecoles/ecole-4.jpg"
    }
  ];

  return (
    <section className="ecoles-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="section-title">Écoles</h2>
            <p className="section-subtitle">
              Découvrez les établissements scolaires et universitaires de Côte d'Ivoire
            </p>
          </div>
        </div>
        <div className="row g-4">
          {ecoles.map((ecole) => (
            <div key={ecole.id} className="col-lg-3 col-md-6">
              <div className="ecole-card h-100">
                <div className="ecole-image">
                  <img src={ecole.image} alt={ecole.name} className="img-fluid" />
                  <div className="ecole-type">{ecole.type}</div>
                </div>
                <div className="ecole-content">
                  <h4 className="ecole-name">{ecole.name}</h4>
                  <div className="ecole-location">
                    <i className="ph-map-pin"></i>
                    <span>{ecole.location}</span>
                  </div>
                  <Link href={`/ecoles/${ecole.id}`} className="btn btn-outline-primary btn-sm">
                    Voir plus
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/ecoles" className="btn btn-primary">
            Voir toutes les écoles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AlloEcoleEcoles;
