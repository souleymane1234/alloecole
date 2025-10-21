import React from 'react';
import Link from 'next/link';

const AlloEcolePermutations = () => {
  const permutations = [
    {
      id: 1,
      niveau: "BTS 1",
      annee: "2018-2019",
      origine: "Grande école ASTC",
      souhait: "Université de Amérique",
      status: "En cours"
    },
    {
      id: 2,
      niveau: "Master",
      annee: "2019-2020",
      origine: "Université Félix Houfouet Boigny",
      souhait: "Université de Strasbourg",
      status: "En cours"
    },
    {
      id: 3,
      niveau: "Licence professionnelle génie informatique",
      annee: "2018-2019",
      origine: "LEGACY INSTITUT",
      souhait: "Campus France",
      status: "En cours"
    }
  ];

  return (
    <section className="permutations-section py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="section-title">Permutations</h2>
            <p className="section-subtitle">
              Consultez les demandes de permutation entre établissements
            </p>
          </div>
        </div>
        <div className="row g-4">
          {permutations.map((permutation) => (
            <div key={permutation.id} className="col-lg-4 col-md-6">
              <div className="permutation-card h-100">
                <div className="permutation-header">
                  <span className="permutation-niveau">{permutation.niveau}</span>
                  <span className="permutation-annee">{permutation.annee}</span>
                </div>
                <div className="permutation-content">
                  <div className="permutation-info">
                    <div className="info-item">
                      <strong>Origine:</strong> {permutation.origine}
                    </div>
                    <div className="info-item">
                      <strong>Souhaitée:</strong> {permutation.souhait}
                    </div>
                  </div>
                  <div className="permutation-status">
                    <span className={`status-badge status-${permutation.status.toLowerCase().replace(' ', '-')}`}>
                      {permutation.status}
                    </span>
                  </div>
                  <Link href={`/permutations/${permutation.id}`} className="btn btn-primary btn-sm">
                    Voir détails
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/permutations" className="btn btn-outline-primary">
            Voir toutes les permutations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AlloEcolePermutations;
