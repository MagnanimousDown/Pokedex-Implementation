import React, { useState } from 'react';

const PokemonThumnail = ({ id, name, image, type, stats }) => {
  const [showStats, setShowStats] = useState(false);

  const handleClick = () => {
    setShowStats(!showStats);
  };

  // Function to map Pokemon types to corresponding CSS classes
  const getTypeClassName = (type) => {
    switch (type.toLowerCase()) {
      case 'rock':
        return 'rock';
      case 'ghost':
        return 'ghost';
      case 'electric':
        return 'electric';
      case 'bug':
        return 'bug';
      case 'poison':
        return 'poison';
      case 'normal':
        return 'normal';
      case 'fairy':
        return 'fairy';
      case 'fire':
        return 'fire';
      case 'grass':
        return 'grass';
      case 'water':
        return 'water';
      default:
        return 'normal'; // Default to normal if type is not recognized
    }
  };

  const typeStyle = getTypeClassName(type);

  return (
    <div className={`thumb-container ${typeStyle}`} onClick={handleClick}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
        {showStats && (
          <div className="stats" style={{
            '--hp': stats.hp,
            '--attack': stats.attack,
            '--defense': stats.defense,
            '--specialAttack': stats.specialAttack,
            '--specialDefense': stats.specialDefense,
            '--speed': stats.speed,
          }}>
            <p className="hp">
              <span>HP:</span>
              <div className="bar-container">
                <div className="bar"></div>
              </div>
              <span className="stat-value">{stats.hp}</span>
            </p>
            <p className="attack">
              <span>Attack:</span>
              <div className="bar-container">
                <div className="bar"></div>
              </div>
              <span className="stat-value">{stats.attack}</span>
            </p>
            <p className="defense">
              <span>Defense:</span>
              <div className="bar-container">
                <div className="bar"></div>
              </div>
              <span className="stat-value">{stats.defense}</span>
            </p>
            <p className="special-attack">
              <span>Special Attack:</span>
              <div className="bar-container">
                <div className="bar"></div>
              </div>
              <span className="stat-value">{stats.specialAttack}</span>
            </p>
            <p className="special-defense">
              <span>Special Defense:</span>
              <div className="bar-container">
                <div className="bar"></div>
              </div>
              <span className="stat-value">{stats.specialDefense}</span>
            </p>
            <p className="speed">
              <span>Speed:</span>
              <div className="bar-container">
                <div className="bar"></div>
              </div>
              <span className="stat-value">{stats.speed}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonThumnail;
