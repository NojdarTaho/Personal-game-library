import React from "react";

const WelcomePage = () => {
  return (
    <div className="genre-page-image-container">
      <p className="genre-image-page-title"></p>
      <div className="home-page">
        <h1>Welcome to GameLibra</h1>
        <p>Explore and save your favorite games!</p>
        <div className="features">
          <div className="feature">
            <h2>Discover New Games</h2>
            <p>
              Browse through our extensive collection of games and discover new
              titles to play. From action-packed adventures to mind-bending
              puzzles, we have it all!
            </p>
          </div>
          <div className="feature">
            <h2>Create Your Library</h2>
            <p>
              Build your personal game library by saving your favorite games.
              Keep track of your progress, access game details, and organize
              your collection with ease.
            </p>
          </div>
          <div className="feature">
            <h2>Rate Games</h2>
            <p>
              Share your gaming experiences by rating the games you have played
              using our five-star rating system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
