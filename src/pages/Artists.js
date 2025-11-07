import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Artists.css';

const Artists = () => {
  const navigate = useNavigate();
  const [selectedArtist, setSelectedArtist] = useState(null);

  const artists = [
    {
      id: 1,
      name: "Peace Fetalu",
      specialty: "Mixed Media & Painting",
      image: "/images/artist2.jpg",
      bio: "Contemporary artist exploring African identity through vibrant color palettes and social commentary. Her work has been exhibited across East Africa and Europe.",
      works: 24,
      featured: true,
      nationality: "Ugandan",
      education: "Makerere University, Fine Arts",
      awards: ["2023 East African Art Prize", "2022 Uganda Cultural Excellence Award"],
      statement: "My art explores the intersection of traditional African motifs and contemporary urban experiences."
    },
    {
      id: 2,
      name: "David Kato",
      specialty: "Wood Sculpture",
      image: "/images/artist9.jpg",
      bio: "Master sculptor preserving traditional techniques while incorporating modern themes and materials. Trained under his grandfather, a renowned tribal carver.",
      works: 18,
      featured: true,
      nationality: "Ugandan",
      education: "Traditional Apprenticeship",
      awards: ["2024 African Heritage Award", "2023 Woodcarving Masters Prize"],
      statement: "Each piece of wood tells a story; my hands simply help it speak."
    },
    {
      id: 3,
      name: "Faith Namono",
      specialty: "Photography",
      image: "/images/artist5.jpg",
      bio: "Documentary photographer capturing the essence of Ugandan culture and daily life. Winner of the 2023 African Photography Awards.",
      works: 32,
      featured: true,
      nationality: "Ugandan",
      education: "Kampala School of Photography",
      awards: ["2023 African Photography Awards", "2022 National Geographic Grant"],
      statement: "Through my lens, I capture the soul of Africa - its people, its landscapes, its spirit."
    },
    {
      id: 4,
      name: "Amos Mukasa",
      specialty: "Contemporary Painting",
      image: "/images/artist8.jpg",
      bio: "Abstract painter known for bold geometric patterns and exploration of urban African landscapes. His work challenges traditional perspectives.",
      works: 15,
      featured: false,
      nationality: "Ugandan",
      education: "Margaret Trowell School of Industrial Arts",
      awards: ["2023 Young Artists Grant"],
      statement: "I paint the rhythm of the city - the chaos and harmony of urban Africa."
    },
    {
      id: 5,
      name: "Sarah Mukasa",
      specialty: "Textile Art & Weaving",
      image: "/images/artist6.jpg",
      bio: "Textile artist reviving traditional weaving techniques with contemporary designs. Her work incorporates natural dyes and sustainable materials.",
      works: 28,
      featured: true,
      nationality: "Ugandan",
      education: "Nkumba University, Textile Design",
      awards: ["2024 Sustainable Art Prize", "2023 Women in Arts Award"],
      statement: "Every thread connects us to our ancestors; every pattern tells our story."
    },
    {
      id: 6,
      name: "Yusuf Ssebaggala",
      specialty: "Ceramics & Pottery",
      image: "/images/artist10.jpg",
      bio: "Ceramic artist creating functional art pieces that tell stories of Ugandan heritage. His work is collected internationally.",
      works: 22,
      featured: false,
      nationality: "Ugandan",
      education: "Traditional Pottery Master",
      awards: ["2022 Ceramic Arts International"],
      statement: "Clay remembers the hands that shape it; I create vessels that carry our culture."
    },
    {
      id: 7,
      name: "Brighet Mirembe",
      specialty: "Mixed Media Collage",
      image: "/images/artist1.jpg",
      bio: "Collage artist using found materials and photographs to create narratives about modern African womanhood and identity.",
      works: 19,
      featured: false,
      nationality: "Ugandan",
      education: "Makerere University, Fine Arts",
      awards: ["2023 Emerging Artist Award"],
      statement: "I assemble fragments of our reality to create new narratives of African womanhood."
    },
    {
      id: 8,
      name: "Robert Mugisha",
      specialty: "Digital Art & Animation",
      image: "/images/artist.jpg",
      bio: "Pioneering digital artist blending traditional African motifs with cutting-edge technology and animation techniques.",
      works: 35,
      featured: true,
      nationality: "Ugandan",
      education: "University of Nairobi, Digital Arts",
      awards: ["2024 Digital Innovation Award", "2023 Tech Meets Art Prize"],
      statement: "I bridge ancient symbols with future technologies to create new African visual languages."
    }
  ];

  const handleViewPortfolio = (artist) => {
    // Filter artworks by this artist and navigate to gallery
    navigate('/gallery', { 
      state: { 
        filter: 'all',
        search: artist.name
      } 
    });
  };

  const handleContactArtist = (artist) => {
    navigate('/contact', { 
      state: { 
        subject: `Commission Inquiry - Artist: ${artist.name}`,
        message: `I'm interested in commissioning a work from ${artist.name} specializing in ${artist.specialty}.`
      } 
    });
  };

  const handleViewArtistDetails = (artist) => {
    setSelectedArtist(artist);
  };

  return (
    <div className="artists-page">
      <div className="page-hero">
        <div className="container">
          <h1>Featured Artists</h1>
          <p>Meet the talented creators behind the artwork that defines contemporary African art</p>
        </div>
      </div>

      <div className="artists-content">
        <div className="container">
          <div className="artists-grid">
            {artists.map((artist) => (
              <div key={artist.id} className="artist-card">
                <div className="artist-image">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(artist.name)}&background=2c3e50&color=ffffff&size=300`;
                    }}
                  />
                  {artist.featured && <div className="featured-badge">Featured</div>}
                </div>
                <div className="artist-info">
                  <h3>{artist.name}</h3>
                  <p className="artist-nationality">{artist.nationality}</p>
                  <p className="artist-specialty">{artist.specialty}</p>
                  <p className="artist-bio">{artist.bio}</p>
                  <div className="artist-stats">
                    <span className="works-count">{artist.works} works in collection</span>
                  </div>
                  <div className="artist-actions">
                    <button 
                      className="btn-primary"
                      onClick={() => handleViewPortfolio(artist)}
                    >
                      View Portfolio
                    </button>
                    <button 
                      className="btn-outline"
                      onClick={() => handleContactArtist(artist)}
                    >
                      Contact Artist
                    </button>
                    <button 
                      className="btn-text"
                      onClick={() => handleViewArtistDetails(artist)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Artist Details Modal */}
      {selectedArtist && (
        <div className="artist-modal">
          <div className="modal-content">
            <button 
              className="modal-close"
              onClick={() => setSelectedArtist(null)}
            >
              ×
            </button>
            <div className="modal-header">
              <img src={selectedArtist.image} alt={selectedArtist.name} />
              <div className="modal-header-info">
                <h2>{selectedArtist.name}</h2>
                <p className="artist-specialty">{selectedArtist.specialty}</p>
                <p className="artist-nationality">{selectedArtist.nationality}</p>
              </div>
            </div>
            <div className="modal-details">
              <div className="detail-section">
                <h4>Artist Statement</h4>
                <p>{selectedArtist.statement}</p>
              </div>
              <div className="detail-section">
                <h4>Education</h4>
                <p>{selectedArtist.education}</p>
              </div>
              <div className="detail-section">
                <h4>Awards & Recognition</h4>
                <ul>
                  {selectedArtist.awards.map((award, index) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-actions">
              <button 
                className="btn-primary"
                onClick={() => handleViewPortfolio(selectedArtist)}
              >
                View All Works
              </button>
              <button 
                className="btn-outline"
                onClick={() => handleContactArtist(selectedArtist)}
              >
                Commission Work
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artists;