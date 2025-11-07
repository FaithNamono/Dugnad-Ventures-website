import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Sample featured artworks (replace with your actual images)
  const featuredArtworks = [
    {
      id: 1,
      title: "Sunset Over Kampala",
      category: "painting",
      price: "$1,200",
      image: "/images/p1.jpg",
      description: "Vibrant acrylic painting"
    },
    {
      id: 2,
      title: "Ancestral Wisdom",
      category: "sculpture",
      price: "$2,500",
      image: "/images/s1.jpg",
      description: "Ebony wood carving"
    },
    {
      id: 3,
      title: "Wildlife Majesty",
      category: "photography",
      price: "$450",
      image: "/images/pt2.jpg",
      description: "Wildlife photography"
    },
    {
      id: 4,
      title: "Cultural Mosaic",
      category: "mosaic",
      price: "$1,800",
      image: "/images/m1.jpg",
      description: "Glass and stone mosaic"
    },
    {
      id: 5,
      title: "African Rhythms",
      category: "collage",
      price: "$950",
      image: "/images/c1.jpg",
      description: "Textile and paper collage"
    },
    {
      id: 6,
      title: "Basket Weaving Art",
      category: "crafts",
      price: "$300",
      image: "/images/ct1.jpg",
      description: "Traditional basket weaving"
    }
  ];

  const filteredArtworks = activeFilter === 'all' 
    ? featuredArtworks 
    : featuredArtworks.filter(art => art.category === activeFilter);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1>Celebrating African Artistic Heritage</h1>
          <p>Discover the vibrant soul of Uganda through contemporary and traditional art forms at Dugnad Art Gallery</p>
          <div className="hero-buttons">
            <Link to="/gallery" className="btn-primary">
              Explore Gallery
            </Link>
            <Link to="/exhibitions" className="btn-secondary">
              View Exhibitions
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="featured-section">
        <div className="container">
          <h2>Featured Artworks</h2>
          <p className="section-subtitle">A curated selection from our diverse collection of African art</p>
          
          <div className="filter-buttons">
            {['all', 'painting', 'sculpture', 'photography', 'collage', 'crafts', 'mosaic'].map(filter => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="artwork-grid">
            {filteredArtworks.map((artwork) => (
              <div key={artwork.id} className="artwork-card">
                <div className="artwork-image">
                  <img src={artwork.image} alt={artwork.title} />
                  <div className="artwork-overlay">
                    <span className="view-btn">View Details</span>
                  </div>
                </div>
                <div className="artwork-info">
                  <h3>{artwork.title}</h3>
                  <p>{artwork.description}</p>
                  <span className="artwork-price">{artwork.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="view-all-container">
            <Link to="/gallery" className="btn-outline view-all-btn">
              View All Artworks
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Sections */}
      <section className="info-sections">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🎨</div>
              <h3>50+ Artists</h3>
              <p>Featuring both established and emerging African artists</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🖼️</div>
              <h3>7 Categories</h3>
              <p>From traditional crafts to contemporary installations</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Kampala Location</h3>
              <p>Visit our gallery in the heart of Uganda's capital</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;