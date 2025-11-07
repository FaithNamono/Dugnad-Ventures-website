import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Exhibitions.css';

const Exhibitions = () => {
  const navigate = useNavigate();
  const [selectedExhibition, setSelectedExhibition] = useState(null);

  const exhibitions = [
    {
      id: 1,
      title: "Modern African Renaissance",
      date: "March 1 - April 30, 2025",
      image: "/images/A1.jpg",
      description: "Exploring contemporary African art movements and their global influence through mixed media installations and digital art. This exhibition showcases how African artists are redefining modern art while maintaining cultural roots.",
      artists: ["Sarah Mukasa", "David Kato", "Grace Nalwanga", "Robert Mugisha"],
      status: "current",
      location: "Main Gallery Hall",
      curator: "Dr. Amina Bello"
    },
    {
      id: 2,
      title: "Traditional Sculpture Masters",
      date: "May 15 - July 15, 2025",
      image: "/images/A2.jpg",
      description: "Celebrating the craftsmanship of Uganda's master sculptors with works spanning generations of artistic tradition. Features rare pieces from family lineages of carvers.",
      artists: ["Joseph Ssebaggala", "Moses Oketayot", "Anna Nalule"],
      status: "upcoming",
      location: "Sculpture Pavilion",
      curator: "Mr. James Okello"
    },
    {
      id: 3,
      title: "Women in African Art",
      date: "August 1 - September 30, 2025",
      image: "/images/A3.jpg",
      description: "A powerful exhibition showcasing the voices and perspectives of female African artists across various mediums. Exploring themes of identity, heritage and modern womanhood.",
      artists: ["Sarah Mukasa", "Grace Nalwanga", "Anna Nalule", "Maria Nabukenya"],
      status: "upcoming",
      location: "Women's Art Wing",
      curator: "Ms. Fatima Nkrumah"
    },
    {
      id: 4,
      title: "Urban African Landscapes",
      date: "October 15 - December 15, 2025",
      image: "/images/pt5.jpg",
      description: "Documenting the rapid urbanization across Africa through photography, painting and mixed media. Capturing the contrast between traditional and modern African city life.",
      artists: ["Grace Nalwanga", "Joseph Ssebaggala", "Robert Mugisha"],
      status: "upcoming",
      location: "Contemporary Arts Space",
      curator: "Dr. Kwame Mensah"
    }
  ];

  const handleViewDetails = (exhibition) => {
    setSelectedExhibition(exhibition);
    // Scroll to exhibition details
    setTimeout(() => {
      document.getElementById('exhibition-details')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const handleAddToCalendar = (exhibition) => {
    // Create calendar event data
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 2);
    
    const calendarData = {
      title: exhibition.title,
      description: exhibition.description,
      location: 'Dugnad Art Gallery, Kampala',
      start: startDate.toISOString(),
      end: endDate.toISOString()
    };
    
    // In a real app, this would open calendar app or download .ics file
    alert(`Added "${exhibition.title}" to your calendar!`);
  };

  const handleContactCurator = (curator) => {
    navigate('/contact', { 
      state: { 
        subject: `Inquiry about exhibition - Curator: ${curator}` 
      } 
    });
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      current: { text: 'Current', class: 'status-current' },
      upcoming: { text: 'Upcoming', class: 'status-upcoming' },
      past: { text: 'Past', class: 'status-past' }
    };
    
    const config = statusConfig[status] || statusConfig.upcoming;
    return <span className={`status-badge ${config.class}`}>{config.text}</span>;
  };

  return (
    <div className="exhibitions-page">
      <div className="page-hero">
        <div className="container">
          <h1>Current & Upcoming Exhibitions</h1>
          <p>Immerse yourself in curated collections that tell the story of African art and culture</p>
        </div>
      </div>

      <div className="exhibitions-content">
        <div className="container">
          <div className="exhibitions-grid">
            {exhibitions.map((exhibition) => (
              <div key={exhibition.id} className="exhibition-card">
                <div className="exhibition-image">
                  <img 
                    src={exhibition.image} 
                    alt={exhibition.title}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&w=1200&h=600&q=80';
                    }}
                  />
                  {getStatusBadge(exhibition.status)}
                </div>
                <div className="exhibition-content">
                  <h3>{exhibition.title}</h3>
                  <p className="exhibition-date">{exhibition.date}</p>
                  <p className="exhibition-location">📍 {exhibition.location}</p>
                  <p className="exhibition-curator">Curated by: {exhibition.curator}</p>
                  <p className="exhibition-description">{exhibition.description}</p>
                  <div className="featured-artists">
                    <strong>Featured Artists:</strong>
                    <div className="artists-list">
                      {exhibition.artists.map((artist, index) => (
                        <span key={index} className="artist-tag">{artist}</span>
                      ))}
                    </div>
                  </div>
                  <div className="exhibition-actions">
                    <button 
                      className="btn-primary" 
                      onClick={() => handleViewDetails(exhibition)}
                    >
                      View Details
                    </button>
                    <button 
                      className="btn-outline"
                      onClick={() => handleAddToCalendar(exhibition)}
                    >
                      Add to Calendar
                    </button>
                    <button 
                      className="btn-text"
                      onClick={() => handleContactCurator(exhibition.curator)}
                    >
                      Contact Curator
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Exhibition Details Modal */}
          {selectedExhibition && (
            <div className="exhibition-modal">
              <div className="modal-content">
                <button 
                  className="modal-close"
                  onClick={() => setSelectedExhibition(null)}
                >
                  ×
                </button>
                <h2>{selectedExhibition.title}</h2>
                <div className="modal-details">
                  <p><strong>Date:</strong> {selectedExhibition.date}</p>
                  <p><strong>Location:</strong> {selectedExhibition.location}</p>
                  <p><strong>Curator:</strong> {selectedExhibition.curator}</p>
                  <p><strong>Status:</strong> {selectedExhibition.status}</p>
                </div>
                <p className="modal-description">{selectedExhibition.description}</p>
                <button 
                  className="btn-primary"
                  onClick={() => handleContactCurator(selectedExhibition.curator)}
                >
                  Contact for Private Viewing
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;