import React, { useState } from 'react';
import { FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';
import Footer from './Footer';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  // Buraya kendi adresini yaz
  const addressText = 'Nişantaşı Sanat Akademisi, Meşrutiyet Mahallesi Hacı Mansur Sokak, Vali Konağı Cd. Mim Plaza Nişantaşı D:10/61, 34363 Şişli/İstanbul';
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(addressText)}`;

  // Telefon ve e-posta
  const phoneNumber = '+90 (541) 906 96 77';
  const phoneHref = 'tel:+905419069677'; // boşluk ve parantezsiz yaz
  const emailAddress = 'info@nisantasisanat.com';
  const emailHref = `mailto:${emailAddress}`;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1 className="contact-title">İLETİŞİM</h1>
          <p className="contact-subtitle">Sizinle tanışmayı ve sorularınızı yanıtlamayı çok isteriz</p>
        </div>

        <div className="contact-content">
          {/* Contact Info Cards */}
          <div className="contact-info">

            {/* Adres (Haritaya yönlendirir) */}
            <a
              className="info-card info-card-link"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Haritada aç"
              title="Haritada aç"
            >
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <h3>Adres</h3>
              <p>{addressText}</p>
              <span className="card-cta">Haritada Aç</span>
            </a>

            {/* Telefon (Aramaya yönlendirir) */}
            <a className="info-card info-card-link" href={phoneHref} aria-label="Telefon et">
              <div className="info-icon"><FaPhone /></div>
              <h3>Telefon</h3>
              <p>{phoneNumber}</p>
              <span className="card-cta">Ara</span>
            </a>

            {/* E-posta (Varsayılan posta uygulaması) */}
            <a className="info-card info-card-link" href={emailHref} aria-label="E-posta gönder">
              <div className="info-icon"><FaEnvelope /></div>
              <h3>E-posta</h3>
              <p>{emailAddress}</p>
              <span className="card-cta">E-posta Gönder</span>
            </a>

            <div className="info-card">
              <div className="info-icon"><FaClock /></div>
              <h3>Çalışma Saatleri</h3>
              <p>Pazartesi - Cumartesi</p>
              <p className="hours-detail">09:00 - 18:00</p>
            </div>

            <div className="info-card social-card">
              <div className="info-icon"><FaInstagram /></div>
              <h3>Sosyal Medya</h3>
              <a
                href="https://www.instagram.com/nisantasiartakademi"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                @nisantasiartakademi
              </a>
            </div>
          </div>

          {/* İstersen formu geri açabilirsin */}
          {/*
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              ...
            </form>
          </div>
          */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
