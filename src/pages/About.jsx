import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import "./About.css";
import heroImg from "../assets/image.avif";

export default function About() {
  const team = [
    {
      name: "Antonious Sameh",
      role: "Founder & CEO",
      bio: "Passionate about curated style and sustainable sourcing.",
    },
    {
      name: "Liam Carter",
      role: "Head of Design",
      bio: "Leads product direction and visual identity.",
    },
    {
      name: "Maya Singh",
      role: "Customer Experience",
      bio: "Ensures our customers feel cared for at every step.",
    },
  ];

  return (
    <div className="about-page container my-5">
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company" />
      </Helmet>

      <div className="about-hero row g-4 align-items-center">
        <div className="col-md-7">
          <h1>Quality Meets Style</h1>
          <p className="lead">
            We source and curate quality apparel and accessories to bring a
            timeless, approachable collection to your wardrobe.
          </p>
          <p className="text-muted">
            From small-batch makers to thoughtful designers, our selection
            focuses on craftsmanship, value, and sustainability.
          </p>
          <Link to="/contact" className="btn btn-primary mt-3">
            Get in touch
          </Link>
        </div>
        <div className="col-md-5 text-center">
          <img src={heroImg} alt="Our store" className="img-fluid rounded" />
        </div>
      </div>

      <div className="mission row g-4 mt-4">
        <div className="col-md-8">
          <h3>Our mission</h3>
          <p className="text-muted">
            We believe great style shouldn't cost the planet. Our mission is to
            make well-made, responsible products accessible to everyone while
            supporting independent makers and designers.
          </p>
        </div>
        <div className="col-md-4 stats">
          <div className="d-flex flex-column gap-3">
            <div className="stat-item d-flex justify-content-between align-items-center">
              <div>
                <div className="stat-number">1.2k+</div>
                <div className="text-muted">Products</div>
              </div>
              <div>🛍️</div>
            </div>
            <div className="stat-item d-flex justify-content-between align-items-center">
              <div>
                <div className="stat-number">8k+</div>
                <div className="text-muted">Happy customers</div>
              </div>
              <div>💬</div>
            </div>
          </div>
        </div>
      </div>

      <div className="team mt-5">
        <h3>Meet the team</h3>
        <div className="row g-4 mt-2">
          {team.map((t) => (
            <div className="col-sm-6 col-md-4" key={t.name}>
              <div className="team-card d-flex gap-3 align-items-start">
                <img src={heroImg} alt={t.name} className="team-avatar" />
                <div>
                  <div className="fw-bold">{t.name}</div>
                  <div className="team-role">{t.role}</div>
                  <div className="text-muted small mt-2">{t.bio}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
