"use client";
import React, { useState } from 'react';
import { Play, Clock, Eye, Heart, Share2, Download, User } from 'lucide-react';

const FeaturedVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const featuredVideos = [
    {
      id: 1,
      title: "Comment réussir son orientation après le BAC",
      description: "Guide complet pour choisir la bonne filière après le baccalauréat",
      thumbnail: "/assets/images/poster/video-1.jpg",
      duration: "12:45",
      views: 15420,
      likes: 892,
      category: "Orientation",
      publishedAt: "2024-01-20",
      author: {
        name: "Dr. Marie Kouassi",
        avatar: "/assets/images/placeholder-avatar.jpg"
      },
      featured: true
    },
    {
      id: 2,
      title: "Les meilleures bourses d'études en 2024",
      description: "Découvrez toutes les opportunités de bourses disponibles",
      thumbnail: "/assets/images/poster/video-2.jpg",
      duration: "18:30",
      views: 12300,
      likes: 756,
      category: "Bourses",
      publishedAt: "2024-01-18",
      author: {
        name: "Prof. Jean Traoré",
        avatar: "/assets/images/placeholder-avatar.jpg"
      },
      featured: true
    },
    {
      id: 3,
      title: "Étudier à l'étranger : Guide pratique",
      description: "Tout ce qu'il faut savoir pour partir étudier à l'étranger",
      thumbnail: "/assets/images/poster/video-3.jpg",
      duration: "25:15",
      views: 18900,
      likes: 1205,
      category: "Études à l'étranger",
      publishedAt: "2024-01-15",
      author: {
        name: "Dr. Fatou Diabaté",
        avatar: "/assets/images/placeholder-avatar.jpg"
      },
      featured: true
    },
    {
      id: 4,
      title: "Préparer son dossier Campus France",
      description: "Étapes essentielles pour un dossier Campus France réussi",
      thumbnail: "/assets/images/poster/video-4.jpg",
      duration: "16:20",
      views: 22100,
      likes: 1340,
      category: "Campus France",
      publishedAt: "2024-01-12",
      author: {
        name: "Mme. Aminata Koné",
        avatar: "/assets/images/placeholder-avatar.jpg"
      },
      featured: true
    }
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <style jsx>{`
        .featured-section {
          padding: 4rem 0;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto;
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .video-card {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .video-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .video-thumbnail {
          position: relative;
          width: 100%;
          height: 200px;
          background: #e5e7eb;
          overflow: hidden;
        }

        .video-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .play-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: rgba(249, 115, 22, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .video-card:hover .play-overlay {
          background: #f97316;
          transform: translate(-50%, -50%) scale(1.1);
        }

        .video-duration {
          position: absolute;
          bottom: 0.75rem;
          right: 0.75rem;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .video-content {
          padding: 1.5rem;
        }

        .video-category {
          display: inline-block;
          background: #fef3c7;
          color: #92400e;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .video-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .video-description {
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .video-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          color: #6b7280;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .author-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f97316;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 0.875rem;
        }

        .author-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
        }

        .video-actions {
          display: flex;
          gap: 0.5rem;
        }

        .action-button {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid #e5e7eb;
          background: white;
          color: #6b7280;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .action-button:hover {
          border-color: #f97316;
          color: #f97316;
        }

        .action-button.primary {
          background: #f97316;
          color: white;
          border-color: #f97316;
        }

        .action-button.primary:hover {
          background: #ea580c;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .modal-content {
          background: white;
          border-radius: 1rem;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-header {
          padding: 2rem 2rem 1rem;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
        }

        .modal-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #6b7280;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }

        .modal-close:hover {
          background: #f3f4f6;
        }

        .modal-body {
          padding: 2rem;
        }

        .video-player {
          width: 100%;
          height: 400px;
          background: #000;
          border-radius: 0.5rem;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.125rem;
        }

        @media (max-width: 768px) {
          .videos-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2rem;
          }

          .modal-overlay {
            padding: 1rem;
          }

          .video-player {
            height: 250px;
          }
        }
      `}</style>

      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Vidéos en vedette</h2>
            <p className="section-subtitle">
              Découvrez nos contenus les plus populaires et les plus utiles
            </p>
          </div>

          <div className="videos-grid">
            {featuredVideos.map((video) => (
              <div key={video.id} className="video-card" onClick={() => handleVideoClick(video)}>
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-overlay">
                    <Play size={24} />
                  </div>
                  <div className="video-duration">{video.duration}</div>
                </div>
                
                <div className="video-content">
                  <div className="video-category">{video.category}</div>
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                  
                  <div className="video-meta">
                    <div className="meta-item">
                      <Clock size={16} />
                      {video.duration}
                    </div>
                    <div className="meta-item">
                      <Eye size={16} />
                      {video.views.toLocaleString()} vues
                    </div>
                    <div className="meta-item">
                      <Heart size={16} />
                      {video.likes} j'aime
                    </div>
                  </div>

                  <div className="author-info">
                    <div className="author-avatar">
                      {video.author.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="author-name">{video.author.name}</div>
                  </div>

                  <div className="video-actions">
                    <button className="action-button primary">
                      <Play size={16} />
                      Regarder
                    </button>
                    <button className="action-button">
                      <Heart size={16} />
                    </button>
                    <button className="action-button">
                      <Share2 size={16} />
                    </button>
                    <button className="action-button">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de lecture vidéo */}
      {selectedVideo && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{selectedVideo.title}</h3>
              <button className="modal-close" onClick={handleCloseModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="video-player">
                <div style={{ textAlign: 'center' }}>
                  <Play size={48} style={{ marginBottom: '1rem' }} />
                  <p>Lecteur vidéo intégré</p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>
                    {selectedVideo.duration} • {selectedVideo.views.toLocaleString()} vues
                  </p>
                </div>
              </div>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedVideos;
