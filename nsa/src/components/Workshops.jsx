import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Workshops.css';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const workshopsData = [
  {
    id: 1,
    title: 'OYUN ÇALIŞMA / ÇIKARMA ATÖLYESİ',
    subtitle: 'Sahne Senin',
    description: 'Nişantaşı\'nda bulunan 8 kişi kontenjanlı sınıflarımızda, haftada 1 gün 2 saat olacak şekilde 5 ay boyunca alacağın oyunculuk eğitimi sonrası, seyirciyle buluşacak oyunda yer almak ister misin?',
    detailedInfo: 'Atölye boyunca, temel oyunculuk, doğaçlama, diksiyon, ses / nefes, metin okuma / çözümleme ve beden / hareket dersleri işlenecek. Bu işlenilen derslerin doğrultusunda yerli veya yabancı bir tiyatro oyunu seçilerek, seçilen oyun üzerinden rol dağılımları yapılıp sahneye çıkma çalışmaları ile devam edilecektir.',
    duration: '5 Ay',
    frequency: 'Haftada 1 gün 2 saat',
    capacity: '8 kişilik ferah sınıflar',
    courses: ['Oyunculuk', 'Doğaçlama', 'Diksiyon', 'Ses / Nefes', 'Beden / Hareket', 'Genel Kültür', 'Metin Çözümleme'],
    content: ['Ansambl oluşturma', 'Oyun okuma', 'Oyun yorumlama', 'Algı çalışmaları', 'Bedenini tanıma', 'Takım çalışmaları', 'Bireysel beceri çalışmaları', 'Doğru nefes teknikleri', 'Sahneye çıkma deneyimi'],
    icon: '🎭'
  },
  {
    id: 2,
    title: 'ÇAĞDAŞ DANS ATÖLYESİ',
    subtitle: 'Sahnede Dönüşen Beden',
    description: 'Nişantaşı\'nda bulunan sahne sanatları akademimizde, 5 ay boyunca haftada 1 gün 90 dakika alacağın temel dans teknikleriyle, Çağdaş Dans Atölyemizde yer almak ister misin?',
    detailedInfo: 'Atölye boyunca, temel dans teknikleri, çağdaş dans, ritim, koreografi, doğaçlama, genel kültür ve beden / hareket dersleri işlenecek.',
    duration: '5 Ay',
    frequency: 'Haftada 1 gün 90 dakika',
    capacity: 'Konforlu ve nezih sınıflar',
    courses: ['Dans', 'Ritim', 'Koreografi', 'Doğaçlama', 'Genel Kültür', 'Beden Hareket'],
    content: ['Temel beden ısınmaları', 'Merkezleme', 'Bedenin tepkileri', 'Ritim ve müzikalite', 'Fiziksel duygu çalışmaları', 'Karakterin bedeni', 'Doğaçlama ile hikayeleme', 'Grup dinamiği', 'Dans performansı yaratım'],
    icon: '💃'
  },
  {
    id: 3,
    title: 'SAHNEDE BİR GÜN',
    subtitle: 'Sahneye İlk Adım',
    description: 'Nişantaşı\'nda bulunan 10 kişi kontenjanlı sınıflarımızda, hafta sonu 2 saat olacak şekilde planlanan ve ilk defa sahnede olmayı deneyimleyecek olan ekiplete yer almak ister misin?',
    detailedInfo: 'Atölye boyunca, temel oyunculuk, doğaçlama, beden / hareket dersleri işlenecek. Tema üzerinden doğaçlama çalışması ile sahneye çıkılacak.',
    duration: '1 Gün',
    frequency: '2 Saat',
    capacity: '10 kişilik ferah sınıflar',
    courses: ['Temel Oyunculuk', 'Doğaçlama', 'Beden / Hareket'],
    content: ['Ansambl oluşturma', 'Oyun oluşturma', 'Oyun yorumlama', 'Algı çalışmaları', 'Beden ile farkındalık', 'Takım çalışmaları'],
    icon: '⭐'
  }
];

export default function Workshops() {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="workshops-minimal-page">
      <div className="workshops-minimal-container">
        <div ref={headerRef} className="workshops-minimal-header">
          <h1 className="workshops-minimal-title">ATÖLYELERİMİZ</h1>
          <p className="workshops-minimal-subtitle">
            Sanat yolculuğunuza başlamak için mükemmel bir yer
          </p>
        </div>

        <div className="workshops-minimal-grid">
          {workshopsData.map((workshop) => (
            <div
              key={workshop.id}
              ref={addToRefs}
              className={`workshop-minimal-card ${expandedCard === workshop.id ? 'expanded' : ''}`}
            >
              <div className="workshop-minimal-main">
                <div className="workshop-minimal-icon">{workshop.icon}</div>
                <h2 className="workshop-minimal-card-title">{workshop.title}</h2>
                <h3 className="workshop-minimal-card-subtitle">"{workshop.subtitle}"</h3>
                <p className="workshop-minimal-card-description">{workshop.description}</p>

                <div className="workshop-minimal-info">
                  <div className="minimal-info-item">
                    <span className="minimal-label">Süre</span>
                    <span className="minimal-value">{workshop.duration}</span>
                  </div>
                  <div className="minimal-info-item">
                    <span className="minimal-label">Sıklık</span>
                    <span className="minimal-value">{workshop.frequency}</span>
                  </div>
                </div>

                <button 
                  className="workshop-minimal-toggle-btn"
                  onClick={() => toggleCard(workshop.id)}
                >
                  {expandedCard === workshop.id ? 'Daha Az Göster' : 'Detayları Gör'}
                </button>
              </div>

              <div className={`workshop-minimal-details ${expandedCard === workshop.id ? 'show' : ''}`}>
                <p className="minimal-detailed-info">{workshop.detailedInfo}</p>

                <div className="minimal-section">
                  <h4>📚 Dersler</h4>
                  <div className="minimal-tags">
                    {workshop.courses.map((course, idx) => (
                      <span key={idx} className="minimal-tag">{course}</span>
                    ))}
                  </div>
                </div>

                <div className="minimal-section">
                  <h4>🎯 Ders İçeriği</h4>
                  <ul className="minimal-content-list">
                    {workshop.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="minimal-capacity">
                  👥 {workshop.capacity}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>

      <Footer />
    </div>
  );
}