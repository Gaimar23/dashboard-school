import "./Announcements.scss";

const Announcements = () => {
  return (
    <div className="announcements-subcontainer">
      <div className="title-icon">
        <h1 className="title">Annonces</h1>
        <span>Tous</span>
      </div>
      <div className="list-container">
        <div className="item">
          <div className="intro">
            <h2>Nouvelle revue mensuelle</h2>
            <span>23/09/2025</span>
          </div>
          <p className="description">
            Ceci est un nouveau jour et Ceci est un nouveau jour et Ceci est un
            nouveau jour et direction
          </p>
        </div>
        <div className="item">
          <div className="intro">
            <h2>Nouvelle revue mensuelle</h2>
            <span>23/09/2025</span>
          </div>
          <p className="description">
            Ceci est un nouveau jour et Ceci est un nouveau jour et Ceci est un
            nouveau jour et direction
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
