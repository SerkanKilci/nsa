import React, { useState } from 'react';
import { FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';
import Footer from './Footer';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simülasyon - gerçek API entegrasyonu yapabilirsiniz
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
                    <p className="contact-subtitle">
                        Sizinle tanışmayı ve sorularınızı yanıtlamayı çok isteriz
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Info Cards */}
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <h3>Adres</h3>
                            <p>Nişantaşı, İstanbul</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <FaPhone />
                            </div>
                            <h3>Telefon</h3>
                            <p>+90 (XXX) XXX XX XX</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <FaEnvelope />
                            </div>
                            <h3>E-posta</h3>
                            <p>info@nisantasisanat.com</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <FaClock />
                            </div>
                            <h3>Çalışma Saatleri</h3>
                            <p>Pazartesi - Cumartesi</p>
                            <p className="hours-detail">09:00 - 18:00</p>
                        </div>

                        <div className="info-card social-card">
                            <div className="info-icon">
                                <FaInstagram />
                            </div>
                            <h3>Sosyal Medya</h3>
                            <a
                                href="https://www.instagram.com/nisantasisanatakademisi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="instagram-link"
                            >
                                @nisantasisanatakademisi
                            </a>
                        </div>
                    </div>


                    {/* <div className="contact-form-wrapper">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <h2 className="form-title">Bize Yazın</h2>

                            <div className="form-group">
                                <label htmlFor="name">Ad Soyad *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Adınız ve soyadınız"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">E-posta *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="ornek@email.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Telefon</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+90 (XXX) XXX XX XX"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mesajınız *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    placeholder="Mesajınızı buraya yazın..."
                                />
                            </div>

                            <button
                                type="submit"
                                className={`submit-btn ${status}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Gönderiliyor...' :
                                    status === 'success' ? '✓ Gönderildi!' : 'Gönder'}
                            </button>

                            {status === 'success' && (
                                <p className="success-message">
                                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız!
                                </p>
                            )}
                        </form>
                    </div> */}
                </div>
            </div>

            <Footer />
        </div>
    );
}