import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const location = useLocation();

  // Complete artwork data with 10 items per category
  const artworks = [
    // PAINTINGS (10 items)
    { id: 1, title: "Sunset Over Kampala", category: "painting", price: "$1,200", image: "/images/p1.jpg", description: "Vibrant acrylic painting capturing Kampala's golden hour" },
    { id: 2, title: "Nile River Dreams", category: "painting", price: "$1,800", image: "/images/p2.jpg", description: "Oil on canvas depicting the majestic Nile River" },
    { id: 3, title: "Market Colors", category: "painting", price: "$950", image: "images/p3.jpg", description: "Mixed media celebrating Uganda's vibrant markets" },
    { id: 4, title: "Ancestral Stories", category: "painting", price: "$1,500", image: "/images/p4.jpg", description: "Traditional storytelling through contemporary art" },
    { id: 5, title: "Mountain Mist", category: "painting", price: "$1,100", image: "/images/p5.jpg", description: "Watercolor landscape of Rwenzori Mountains" },
    { id: 6, title: "Urban Rhythm", category: "painting", price: "$1,350", image: "/images/p6.jpg", description: "Abstract cityscape of modern Kampala" },
    { id: 7, title: "Harvest Celebration", category: "painting", price: "$1,650", image: "/images/p7.jpg", description: "Celebrating Uganda's agricultural heritage" },
    { id: 8, title: "Dance of Colors", category: "painting", price: "$1,250", image: "/images/p8.jpg", description: "Expressionist interpretation of traditional dance" },
    { id: 9, title: "Lake Victoria Blues", category: "painting", price: "$1,400", image: "/images/p9.jpg", description: "Impressionist view of Africa's largest lake" },
    { id: 10, title: "Golden Savannah", category: "painting", price: "$1,750", image: "/images/p10.jpg", description: "Wildlife and landscapes of Queen Elizabeth Park" },

    // SCULPTURE (10 items)
    { id: 11, title: "Ancestral Wisdom", category: "sculpture", price: "$2,500", image: "/images/s1.jpg", description: "Ebony wood carving representing traditional wisdom" },
    { id: 12, title: "Wooden Spirit", category: "sculpture", price: "$1,800", image: "/images/s2.jpg", description: "Mahogany sculpture inspired by African mythology" },
    { id: 13, title: "Dancing Figures", category: "sculpture", price: "$2,200", image: "/images/s3.jpg", description: "Bronze casting of traditional dance movements" },
    { id: 14, title: "Stone Guardian", category: "sculpture", price: "$3,000", image: "/images/s4.jpg", description: "Soapstone carving protecting cultural heritage" },
    { id: 15, title: "Modern Totem", category: "sculpture", price: "$1,900", image: "/images/s5.jpg", description: "Contemporary interpretation of traditional totems" },
    { id: 16, title: "Earthen Vessel", category: "sculpture", price: "$1,200", image: "/images/s6.jpg", description: "Terracotta sculpture with traditional patterns" },
    { id: 17, title: "Metal Fusion", category: "sculpture", price: "$2,800", image: "/images/s7.jpg", description: "Mixed metal abstract sculpture" },
    { id: 18, title: "Community Circle", category: "sculpture", price: "$3,200", image: "/images/s8.jpg", description: "Interactive installation piece" },
    { id: 19, title: "Ancestral Mask", category: "sculpture", price: "$1,600", image: "/images/s9.jpg", description: "Traditional ceremonial mask reproduction" },
    { id: 20, title: "River Stone", category: "sculpture", price: "$2,100", image: "/images/s10.jpg", description: "Natural stone carving from Nile river stones" },

    // PHOTOGRAPHY (10 items)
    { id: 21, title: "Samburu Warriors", category: "photography", price: "$600", image: "/images/pt1.jpg", description: "Black and white portrait series" },
    { id: 22, title: "Wildlife Majesty", category: "photography", price: "$450", image: "/images/pt2.jpg", description: "Capturing Uganda's diverse wildlife" },
    { id: 23, title: "Young Ambitious lady", category: "photography", price: "$550", image: "/images/artist3.jpg", description: "Street photography in modern Kampala" },
    { id: 24, title: "Cultural Heritage", category: "photography", price: "$500", image: "/images/pt4.jpg", description: "Documenting traditional ceremonies" },
    { id: 25, title: "Landscape Dreams", category: "photography", price: "$650", image: "/images/pt5.jpg", description: "Aerial views of Uganda's natural beauty" },
    { id: 26, title: "Market Life", category: "photography", price: "$480", image: "/images/pt6.jpg", description: "Vibrant market scenes and daily life" },
    { id: 27, title: "Fishing Traditions", category: "photography", price: "$520", image: "/images/pt7.jpg", description: "Traditional fishing methods on Lake Victoria" },
    { id: 28, title: "Children of Africa", category: "photography", price: "$580", image: "/images/pt8.jpg", description: "Portrait series of Ugandan youth" },
    { id: 29, title: "Sunset Silhouettes", category: "photography", price: "$620", image: "/images/pt9.jpg", description: "Dramatic sunset scenes across Uganda" },
    { id: 30, title: "Urban Development", category: "photography", price: "$540", image: "/images/pt10.jpg", description: "Documenting Kampala's rapid growth" },

    // COLLAGE (10 items)
    { id: 31, title: "African Rhythms", category: "collage", price: "$950", image: "/images/c1.jpg", description: "Textile and paper collage celebrating music" },
    { id: 32, title: "Tribal Patterns", category: "collage", price: "$1,100", image: "/images/c2.jpg", description: "Mixed media cultural patterns" },
    { id: 33, title: "Urban Layers", category: "collage", price: "$850", image: "/images/c3.jpg", description: "Contemporary city life through collage" },
    { id: 34, title: "Ancestral Voices", category: "collage", price: "$1,200", image: "/images/c4.jpg", description: "Historical narratives in mixed media" },
    { id: 35, title: "Color Fusion", category: "collage", price: "$900", image: "/images/c5.jpg", description: "Vibrant fusion of traditional and modern" },
    { id: 36, title: "Memory Fragments", category: "collage", price: "$1,050", image: "/images/c6.jpg", description: "Personal history through assembled memories" },
    { id: 37, title: "Textile Stories", category: "collage", price: "$980", image: "/images/c7.jpg", description: "African fabrics telling cultural stories" },
    { id: 38, title: "Digital Collage", category: "collage", price: "$1,150", image: "/images/c8.jpg", description: "Traditional motifs in digital format" },
    { id: 39, title: "Urban Textures", category: "collage", price: "$920", image: "/images/c9.jpg", description: "City textures and found objects" },
    { id: 40, title: "Cultural Fusion", category: "collage", price: "$1,100", image: "/images/c10.jpg", description: "Blending multiple African cultural elements" },

    // CRAFTS (10 items)
    { id: 41, title: "Basket Weaving Art", category: "crafts", price: "$300", image: "/images/ct1.jpg", description: "Traditional basket weaving techniques" },
    { id: 42, title: "Beaded Elegance", category: "crafts", price: "$250", image: "/images/ct2.jpg", description: "Handcrafted beadwork jewelry" },
    { id: 43, title: "Pottery Heritage", category: "crafts", price: "$400", image: "/images/ct3.jpg", description: "Traditional Ugandan pottery" },
    { id: 44, title: "Textile Art", category: "crafts", price: "$350", image: "/images/ct4.jpg", description: "Hand-woven textiles with natural dyes" },
    { id: 45, title: "Wood Carving", category: "crafts", price: "$500", image: "/images/ct5.jpg", description: "Intricate wooden household items" },
    { id: 46, title: "Leather Work", category: "crafts", price: "$280", image: "/images/ct6.jpg", description: "Traditional leather crafting techniques" },
    { id: 47, title: "Metal Crafts", category: "crafts", price: "$320", image: "/images/ct7.jpg", description: "Hand-forged metal decorative pieces" },
    { id: 48, title: "Natural Fiber Art", category: "crafts", price: "$270", image: "/images/ct8.jpg", description: "Art from sustainable natural materials" },
    { id: 49, title: "Ceramic Sculpture", category: "crafts", price: "$380", image: "/images/ct9.jpg", description: "Small decorative ceramic pieces" },
    { id: 50, title: "Beaded Narrative", category: "crafts", price: "$420", image: "/images/ct10.jpg", description: "Storytelling through intricate beadwork" },

    // MOSAIC (10 items)
    { id: 51, title: "Cultural Mosaic", category: "mosaic", price: "$1,800", image: "/images/m1.jpg", description: "Glass and stone mosaic wall art" },
    { id: 52, title: "African Sun", category: "mosaic", price: "$2,100", image: "/images/m2.jpg", description: "Vibrant sun motif in ceramic tiles" },
    { id: 53, title: "Tribal Harmony", category: "mosaic", price: "$1,950", image: "/images/m3.jpg", description: "Geometric patterns in mixed materials" },
    { id: 54, title: "Waterfall Dreams", category: "mosaic", price: "$2,300", image: "/images/m4.jpg", description: "Mosaic depicting Murchison Falls" },
    { id: 55, title: "Urban Mosaic", category: "mosaic", price: "$1,700", image: "/images/m5.jpg", description: "Contemporary city scenes in mosaic" },
    { id: 56, title: "Ancestral Patterns", category: "mosaic", price: "$2,000", image: "/images/m6.jpg", description: "Traditional symbols in modern mosaic" },
    { id: 57, title: "Color Rhythm", category: "mosaic", price: "$1,850", image: "/images/m7.jpg", description: "Musical themes in colorful tiles" },
    { id: 58, title: "Earth Tones", category: "mosaic", price: "$1,950", image: "/images/m8.jpg", description: "Natural earth-colored stone mosaic" },
    { id: 59, title: "Community Story", category: "mosaic", price: "$2,200", image: "/images/m9.jpg", description: "Narrative mosaic telling village stories" },
    { id: 60, title: "Modern Heritage", category: "mosaic", price: "$1,900", image: "/images/m10.jpg", description: "Contemporary take on traditional mosaic" }
  ];

  // Filter artworks based on active filter
  const filteredArtworks = activeFilter === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === activeFilter);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateImage = (direction) => {
    let newIndex = currentImage + direction;
    if (newIndex < 0) newIndex = filteredArtworks.length - 1;
    if (newIndex >= filteredArtworks.length) newIndex = 0;
    setCurrentImage(newIndex);
  };

  // Handle search from artist page
  React.useEffect(() => {
    if (location.state?.search) {
      // You could implement search functionality here
      console.log('Search for:', location.state.search);
    }
  }, [location.state]);

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <div className="container">
          <h1>Our Complete Collection</h1>
          <p>Explore all {artworks.length} artworks across 6 different categories of African art</p>
        </div>
      </div>

      <div className="gallery-content">
        <div className="container">
          <div className="gallery-controls">
            <div className="filter-buttons">
              {['all', 'painting', 'sculpture', 'photography', 'collage', 'crafts', 'mosaic'].map(filter => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  <span className="artwork-count">
                    ({artworks.filter(art => filter === 'all' || art.category === filter).length})
                  </span>
                </button>
              ))}
            </div>
            
            <Link to="/" className="back-to-home">
              ← Back to Home
            </Link>
          </div>

          <div className="artwork-grid full-grid">
            {filteredArtworks.map((artwork, index) => (
              <div 
                key={artwork.id} 
                className="artwork-card"
                onClick={() => openLightbox(index)}
              >
                <div className="artwork-image">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&w=400';
                    }}
                  />
                  <div className="artwork-overlay">
                    <span className="view-btn">View Details</span>
                  </div>
                  <div className="artwork-category">{artwork.category}</div>
                </div>
                <div className="artwork-info">
                  <h3>{artwork.title}</h3>
                  <p>{artwork.description}</p>
                  <span className="artwork-price">{artwork.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-nav prev" onClick={() => navigateImage(-1)}>‹</button>
            <button className="lightbox-nav next" onClick={() => navigateImage(1)}>›</button>
            <div className="lightbox-image">
              <img 
                src={filteredArtworks[currentImage]?.image} 
                alt={filteredArtworks[currentImage]?.title}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&w=800';
                }}
              />
            </div>
            <div className="lightbox-info">
              <h3>{filteredArtworks[currentImage]?.title}</h3>
              <p>{filteredArtworks[currentImage]?.description}</p>
              <span className="price">{filteredArtworks[currentImage]?.price}</span>
              <button className="btn-primary lightbox-inquire">
                Inquire About This Piece
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;