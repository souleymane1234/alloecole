"use client";
import React from 'react';
import { Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const PermutationStats = () => {
  const stats = [
    {
      icon: <Users size={32} />,
      title: "Demandes actives",
      value: "456",
      description: "Permutations en cours",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Taux de réussite",
      value: "78%",
      description: "Demandes abouties",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Clock size={32} />,
      title: "Délai moyen",
      value: "15 jours",
      description: "Traitement des dossiers",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Correspondances",
      value: "1,247",
      description: "Échanges facilités",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <>
      <style jsx>{`
        .stats-section {
          padding: 3rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .stats-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .stats-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
        }

        .stats-subtitle {
          font-size: 1.25rem;
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .stat-icon {
          margin: 0 auto 1.5rem;
          padding: 1rem;
          border-radius: 0.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .stat-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .stat-description {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .highlight-section {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          margin-top: 3rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border-left: 4px solid #f97316;
        }

        .highlight-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .highlight-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .highlight-item {
          text-align: center;
        }

        .highlight-number {
          font-size: 2rem;
          font-weight: bold;
          color: #f97316;
          margin-bottom: 0.5rem;
        }

        .highlight-label {
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .stats-title {
            font-size: 2rem;
          }

          .stats-subtitle {
            font-size: 1rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .stat-card {
            padding: 1.5rem;
          }

          .highlight-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <section className="stats-section">
        <div className="container">
          <div className="stats-header">
            <h2 className="stats-title">Statistiques des Permutations</h2>
            <p className="stats-subtitle">
              Découvrez l'impact de notre plateforme sur les échanges d'établissements
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className={`stat-icon ${stat.bgColor} ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-title">{stat.title}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>

          <div className="highlight-section">
            <h3 className="highlight-title">
              <TrendingUp size={24} />
              Performances du mois
            </h3>
            <div className="highlight-content">
              <div className="highlight-item">
                <div className="highlight-number">+23%</div>
                <div className="highlight-label">Nouvelles demandes</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">+15%</div>
                <div className="highlight-label">Taux de réussite</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">-3 jours</div>
                <div className="highlight-label">Délai de traitement</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">98%</div>
                <div className="highlight-label">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PermutationStats;
