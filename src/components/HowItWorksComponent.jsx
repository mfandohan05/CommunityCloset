import './HowItWorksComponent.css';

function HowItWorksComponent() {
  return (
    <section className="how-section">
      <h2 className="how-title">How It Works</h2>

      <div className="how-steps">
        <div className="how-step">
          <div className="how-icon">🛍️</div>
          <h3>Browse</h3>
          <p>Explore free items available in your community.</p>
        </div>

        <div className="how-step">
          <div className="how-icon">📌</div>
          <h3>Reserve</h3>
          <p>Hold items you need before someone else grabs them.</p>
        </div>

        <div className="how-step">
          <div className="how-icon">📦</div>
          <h3>Pick Up</h3>
          <p>Head to your selected pickup location—it's always free.</p>
        </div>

        <div className="how-step">
          <div className="how-icon">🔄</div>
          <h3>Repeat</h3>
          <p>Give, take, and keep the community moving forward.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksComponent;