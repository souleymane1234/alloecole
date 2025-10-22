"use client";
import React, { useState } from 'react';
import { Play, Clock, Eye, Heart, Share2, Download, User, Filter, Search, Grid, List, SortAsc } from 'lucide-react';

const VideoLibrary = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('date');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allVideos = [
    {
      id: 1,
      title: "Guide complet de l'orientation après le BAC",
      description: "Découvrez toutes les options qui s'offrent à vous après le baccalauréat",
      thumbnail: "/assets/images/poster/video-1.jpg",
      duration: "25:30",
      views: 15420,
      likes: 892,
      category: "orientation",
      publishedAt: "2024-01-20",
      author: {
        name: "Dr. Marie Kouassi",
        title: "Conseillère en orientation",
        avatar: "/assets/images/placeholder-avatar.jpg"
      },
      tags: ["orientation", "bac", "études", "choix"]
    },
    {
      id: 2,
      title: "Les meilleures bourses d'études 2024",
      description: "Un aperçu complet des opportunités de bourses disponibles",
      thumbnail: "/assets/images/poster/video-2.jpg",
      duration: "18:45",
      views: 8900,
      likes: 567,
      category: "bourses",
      publishedAt: "2024-01-18",
      author: {
        name: "Prof. Jean Traoré",
        title: "Expert en bourses",
        avatar: "/assets/images/placeholder-avatar.jpg"
      },
      tags: ["bourses", "financement", "études", "opportunités"]
    },
    {
      id: 3,
      title: "Étudier au Canada : Guide pratique",
      description: "Tout ce qu'il faut savoir pour partir étudier au Canada",
      thumbnail: "/assets/images/poster/video-3.jpg",
      duration: "32:15",
      views: 15600,
      likes: 1205,
      category: "etudes-etranger",
      publishedAt: "2024-01-15",
      author: {
        name: "Dr. Fatou Diabaté",
        title: "Spécialiste études à l'étranger",
        avatar: "/assets/images/placeholder-avatar.jpg"
      },
      tags: ["canada", "études", "étranger", "guide"]
    },
    {
      id: 4,
      title: "Campus France : Dossier parfait",
      description: "Les étapes essentielles pour réussir son dossier Campus France",
      thumbnail: "/assets/images/poster/video-4.jpg",
      duration: "22:20",
      views: 22100,
      likes: 1340,
      category: "campus-france",
      publishedAt: "2024-01-12",
      author: {
        name: "Mme. Aminata Koné",
        title: "Conseillère Campus France",
        avatar: "/assets/images/placeholder-avatar.jpg"
      },
      tags: ["campus france", "dossier", "france", "études"]
    },
    {
      id: 5,
      title: "Rédiger une lettre de motivation efficace",
      description: "Conseils pratiques pour une lettre de motivation qui marque",
      thumbnail: "/assets/images/poster/video-5.jpg",
      duration: "16:10",
      views: 9800,
      likes: 678,
      category: "conseils",
      publishedAt: "2024-01-10",
      author: {
        name: "Dr. Ibrahim Ouattara",
        title: "Expert en communication",
        avatar: "/assets/images/placeholder-avatar.jpg"
      },
      tags: ["lettre", "motivation", "conseils", "rédaction"]
    },
    {
      id: 6,
      title: "Témoignage : Mon parcours en France",
      description: "Le récit inspirant d'un étudiant ivoirien en France",
      thumbnail: "/assets/images/poster/video-6.jpg",
      duration: "28:30",
      views: 18700,
      likes: 1456,
      category: "temoignages",
      publishedAt: "2024-01-08",
      author: {
        name: "Kouassi Jean",
        title: "Étudiant en France",
        avatar: "/assets/images/placeholder-avatar.jpg"
      },
      tags: ["témoignage", "france", "parcours", "inspiration"]
    },
    {
      id: 7,
      title: "Réformes éducatives 2024",
      description: "Les nouvelles réformes du système éducatif ivoirien",
      thumbnail: "/assets/images/poster/video-7.jpg",
      duration: "19:45",
      views: 11200,
      likes: 789,
      category: "actualites",
      publishedAt: "2024-01-05",
      author: {
        name: "Ministère de l'Éducation",
        title: "Institution officielle",
        avatar: "/assets/images/placeholder-avatar.jpg"
      },
      tags: ["réformes", "éducation", "actualités", "système"]
    },
    {
      id: 8,
      title: "Les métiers d'avenir en Côte d'Ivoire",
      description: "Découvrez les secteurs porteurs pour votre avenir professionnel",
      thumbnail: "/assets/images/poster/video-8.jpg",
      duration: "24:20",
      views: 13400,
      likes: 923,
      category: "orientation",
      publishedAt: "2024-01-03",
      author: {
        name: "Dr. Marie Kouassi",
        title: "Conseillère en orientation",
        avatar: "/assets/images/placeholder-avatar.jpg"
      },
      tags: ["métiers", "avenir", "professionnel", "secteurs"]
    },
    {
      id: 9,
      title: "Bourses Chevening : Comment postuler",
      description: "Guide détaillé pour candidater aux bourses Chevening",
      thumbnail: "/assets/images/poster/video-9.jpg",
      duration: "21:15",
      views: 16800,
      likes: 1100,
      category: "bourses",
      publishedAt: "2024-01-01",
      author: {
        name: "Prof. Jean Traoré",
        title: "Expert en bourses",
        avatar: "/assets/images/placeholder-avatar.jpg"
      },
      tags: ["chevening", "bourses", "uk", "candidature"]
    },
    {
      id: 10,
      title: "Étudier en Allemagne : Opportunités",
      description: "Les avantages et opportunités d'études en Allemagne",
      thumbnail: "/assets/images/poster/video-10.jpg",
      duration: "26:40",
      views: 14500,
      likes: 987,
      category: "etudes-etranger",
      publishedAt: "2023-12-28",
      author: {
        name: "Dr. Fatou Diabaté",
        title: "Spécialiste études à l'étranger",
        avatar: "/assets/images/placeholder-avatar.jpg"
      },
      tags: ["allemagne", "études", "étranger", "opportunités"]
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes les catégories', count: allVideos.length },
    { id: 'orientation', name: 'Orientation', count: allVideos.filter(v => v.category === 'orientation').length },
    { id: 'bourses', name: 'Bourses', count: allVideos.filter(v => v.category === 'bourses').length },
    { id: 'etudes-etranger', name: 'Études à l\'étranger', count: allVideos.filter(v => v.category === 'etudes-etranger').length },
    { id: 'campus-france', name: 'Campus France', count: allVideos.filter(v => v.category === 'campus-france').length },
    { id: 'conseils', name: 'Conseils', count: allVideos.filter(v => v.category === 'conseils').length },
    { id: 'temoignages', name: 'Témoignages', count: allVideos.filter(v => v.category === 'temoignages').length },
    { id: 'actualites', name: 'Actualités', count: allVideos.filter(v => v.category === 'actualites').length }
  ];

  const filteredVideos = allVideos.filter(video => {
    const matchesCategory = filterCategory === 'all' || video.category === filterCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedVideos = [...filteredVideos].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      case 'views':
        return b.views - a.views;
      case 'likes':
        return b.likes - a.likes;
      case 'duration':
        return b.duration.localeCompare(a.duration);
      default:
        return 0;
    }
  });

  return (
    <>
      <style jsx>{`
        .library-section {
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

        .library-controls {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 3rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .controls-row {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .search-box {
          flex: 1;
          min-width: 300px;
          position: relative;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: all 0.3s;
        }

        .search-input:focus {
          outline: none;
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
        }

        .filter-select {
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          background: white;
          cursor: pointer;
          transition: all 0.3s;
        }

        .filter-select:focus {
          outline: none;
          border-color: #f97316;
        }

        .sort-select {
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          background: white;
          cursor: pointer;
          transition: all 0.3s;
        }

        .sort-select:focus {
          outline: none;
          border-color: #f97316;
        }

        .view-controls {
          display: flex;
          gap: 0.5rem;
        }

        .view-button {
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          background: white;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .view-button.active {
          border-color: #f97316;
          background: #fff7ed;
          color: #f97316;
        }

        .view-button:hover {
          border-color: #f97316;
        }

        .categories-tabs {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .category-tab {
          padding: 0.5rem 1rem;
          border: 1px solid #e5e7eb;
          background: white;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .category-tab:hover {
          border-color: #f97316;
          color: #f97316;
        }

        .category-tab.active {
          background: #f97316;
          color: white;
          border-color: #f97316;
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .videos-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
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

        .video-card.list-view {
          display: flex;
          flex-direction: row;
        }

        .video-thumbnail {
          position: relative;
          width: 100%;
          height: 200px;
          background: #e5e7eb;
          overflow: hidden;
        }

        .video-card.list-view .video-thumbnail {
          width: 300px;
          height: 180px;
          flex-shrink: 0;
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
          width: 50px;
          height: 50px;
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

        .video-card.list-view .video-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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

        .author-details h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.25rem;
        }

        .author-details p {
          font-size: 0.75rem;
          color: #6b7280;
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

        .results-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding: 1rem;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .results-count {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .load-more {
          text-align: center;
          margin-top: 3rem;
        }

        .load-more-button {
          background: #f97316;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .load-more-button:hover {
          background: #ea580c;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
        }

        @media (max-width: 768px) {
          .controls-row {
            flex-direction: column;
            align-items: stretch;
          }

          .search-box {
            min-width: auto;
          }

          .videos-grid {
            grid-template-columns: 1fr;
          }

          .video-card.list-view {
            flex-direction: column;
          }

          .video-card.list-view .video-thumbnail {
            width: 100%;
            height: 200px;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="library-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Bibliothèque complète</h2>
            <p className="section-subtitle">
              Explorez notre collection complète de vidéos éducatives
            </p>
          </div>

          <div className="library-controls">
            <div className="controls-row">
              <div className="search-box">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher une vidéo, un auteur ou un tag..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="date">Plus récent</option>
                <option value="views">Plus vues</option>
                <option value="likes">Plus aimées</option>
                <option value="duration">Plus longues</option>
              </select>

              <div className="view-controls">
                <button
                  className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={20} />
                </button>
                <button
                  className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            <div className="categories-tabs">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-tab ${filterCategory === category.id ? 'active' : ''}`}
                  onClick={() => setFilterCategory(category.id)}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          <div className="results-info">
            <div className="results-count">
              {sortedVideos.length} vidéo{sortedVideos.length > 1 ? 's' : ''} trouvée{sortedVideos.length > 1 ? 's' : ''}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280', fontSize: '0.875rem' }}>
              <SortAsc size={16} />
              Trier par: {sortBy === 'date' ? 'Date' : sortBy === 'views' ? 'Vues' : sortBy === 'likes' ? 'Likes' : 'Durée'}
            </div>
          </div>

          <div className={viewMode === 'grid' ? 'videos-grid' : 'videos-list'}>
            {sortedVideos.map((video) => (
              <div key={video.id} className={`video-card ${viewMode === 'list' ? 'list-view' : ''}`}>
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-overlay">
                    <Play size={20} />
                  </div>
                  <div className="video-duration">{video.duration}</div>
                </div>
                
                <div className="video-content">
                  <div className="video-category">{video.category}</div>
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                  
                  <div className="video-meta">
                    <div className="meta-item">
                      <Clock size={14} />
                      {video.duration}
                    </div>
                    <div className="meta-item">
                      <Eye size={14} />
                      {video.views.toLocaleString()} vues
                    </div>
                    <div className="meta-item">
                      <Heart size={14} />
                      {video.likes} j'aime
                    </div>
                  </div>

                  <div className="author-info">
                    <div className="author-avatar">
                      {video.author.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="author-details">
                      <h4>{video.author.name}</h4>
                      <p>{video.author.title}</p>
                    </div>
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

          {sortedVideos.length > 12 && (
            <div className="load-more">
              <button className="load-more-button">
                <Filter size={20} />
                Charger plus de vidéos
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default VideoLibrary;
