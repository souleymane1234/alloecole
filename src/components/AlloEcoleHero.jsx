'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const AlloEcoleHero = () => {
  const videos = [
    {
      id: 1,
      title: "Orientation scolaire : Comment choisir sa filière ?",
      video: "/assets/video/video.mp4",
      poster: "/assets/images/poster/poster.jpg"
    },
    {
      id: 2,
      title: "Bourses d'études : Guide complet 2025",
      video: "/assets/video/video2.mp4",
      poster: "/assets/images/poster/poster.jpg"
    },
    {
      id: 3,
      title: "Permutations : Procédures et conseils",
      video: "/assets/video/video.mp4",
      poster: "/assets/images/poster/poster.jpg"
    },
    {
      id: 4,
      title: "Études à l'étranger : Opportunités et démarches",
      video: "/assets/video/video.mp4",
      poster: "/assets/images/poster/poster.jpg"
    }
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const videoRef = useRef(null);

  // Fonction pour passer à la vidéo suivante
  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour jouer la vidéo
  const handlePlayClick = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Erreur lors de la lecture de la vidéo:', error);
      }
    }
  };

  // Fonction pour gérer le volume
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
      setIsMuted(newVolume === 0);
    }
  };

  // Fonction pour mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      if (newMutedState) {
        setVolume(0);
      } else {
        const newVolume = volume === 0 ? 0.5 : volume;
        setVolume(newVolume);
        videoRef.current.volume = newVolume;
      }
    }
  };

  // Fonction pour mettre en pause/reprendre
  const togglePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error('Erreur lors de la lecture de la vidéo:', error);
        }
      }
    }
  };

  // Gérer la fin de vidéo
  const handleVideoEnd = () => {
    nextVideo();
  };

  // Gérer le changement de vidéo
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play().catch(console.error);
      }
    }
  }, [currentVideoIndex]);

  const currentVideo = videos[currentVideoIndex];

  return (
    <section className="hero-section position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="hero-title">
                ALLOECOLE <br />
                <span className="text-primary"> Portail de référence</span>
                <br />
                des établissements scolaires et universitaires de Côte d'Ivoire
              </h1>
              <p className="hero-text">
                Centralisez vos démarches éducatives : bourses d'études, inscriptions, 
                permutations, orientation et paiements mobiles en un seul endroit.
              </p>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="webtv-header">
              <h2 className="webtv-title">WebTV AlloEcole</h2>
              <p className="webtv-subtitle">Découvrez nos contenus vidéo éducatifs</p>
            </div>
            <div className="hero-webtv">
              <div className="webtv-container">
                <div className="main-video">
                  <div className="video-player">
                    <div className="video-container" style={{ position: 'relative', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
                      <video
                        ref={videoRef}
                        className="video-element"
                        poster={currentVideo.poster}
                        onEnded={handleVideoEnd}
                        preload="metadata"
                        style={{ width: '100%', display: 'block' }}
                      >
                        <source src={currentVideo.video} type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                      </video>
                      
                      {!isPlaying && (
                        <div 
                          className="play-button" 
                          onClick={handlePlayClick} 
                          style={{ 
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 10,
                            cursor: 'pointer',
                            fontSize: '4rem',
                            color: 'white',
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            borderRadius: '50%',
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            border: '3px solid rgba(255,255,255,0.8)'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)'}
                        >
                          <i className="ph-play-circle-fill"></i>
                        </div>
                      )}
                      
                      <div className="video-overlay" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)',
                        padding: '20px',
                        zIndex: 5
                      }}>
                        <h4 className='text-white' style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>
                          {currentVideo.title}
                        </h4>
                      </div>
                      
                      <div className="video-controls" style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                        padding: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        zIndex: 5
                      }}>
                        <div className="control-left" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                          <button 
                            className="control-btn"
                            onClick={togglePlayPause}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              color: 'white',
                              fontSize: '2rem',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              padding: '5px',
                              transition: 'transform 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          >
                            <i className={isPlaying ? "ph-pause-circle" : "ph-play-circle"}></i>
                          </button>
                          <button 
                            className="control-btn"
                            onClick={nextVideo}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              color: 'white',
                              fontSize: '1.6rem',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              padding: '5px',
                              transition: 'transform 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          >
                            <i className="ph-skip-forward"></i>
                          </button>
                          <div className="video-indicators" style={{ display: 'flex', gap: '8px', marginLeft: '10px' }}>
                            {videos.map((_, index) => (
                              <div 
                                key={index}
                                className={`video-dot ${index === currentVideoIndex ? 'active' : ''}`}
                                onClick={() => setCurrentVideoIndex(index)}
                                style={{
                                  width: '10px',
                                  height: '10px',
                                  borderRadius: '50%',
                                  backgroundColor: index === currentVideoIndex ? '#0d6efd' : 'rgba(255,255,255,0.5)',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease',
                                  border: index === currentVideoIndex ? '2px solid white' : 'none'
                                }}
                                onMouseEnter={(e) => {
                                  if (index !== currentVideoIndex) {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.8)';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (index !== currentVideoIndex) {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.5)';
                                  }
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="control-right" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <button 
                            className="control-btn"
                            onClick={toggleMute}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              color: 'white',
                              fontSize: '1.5rem',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              padding: '5px',
                              transition: 'transform 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          >
                            <i className={isMuted || volume === 0 ? "ph-speaker-slash" : "ph-speaker-high"}></i>
                          </button>
                          <div className="volume-control" style={{ width: '90px' }}>
                            <input
                              type="range"
                              min="0"
                              max="1"
                              step="0.1"
                              value={isMuted ? 0 : volume}
                              onChange={handleVolumeChange}
                              className="volume-slider"
                              style={{
                                width: '100%',
                                cursor: 'pointer',
                                accentColor: '#0d6efd',
                                height: '4px'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlloEcoleHero;