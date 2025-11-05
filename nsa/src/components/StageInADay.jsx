// src/components/StageInADay.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GiTheaterCurtains } from 'react-icons/gi';
import Footer from './Footer';
import './StageInADay.css';

gsap.registerPlugin(ScrollTrigger);

export default function StageInADay() {
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Header intro
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
    );

    // Section reveals on scroll
    sectionsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  const addSec = (el) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  return (
    <div className="scene-page">
      <div className="scene-container">
        {/* HERO */}
        <header ref={headerRef} className="scene-hero">
          <div className="scene-hero-icon">
            <GiTheaterCurtains />
          </div>
          <h1 className="scene-title">SAHNEDE BİR GÜN</h1>
          <p className="scene-subtitle">Sahneye İlk Adım</p>
          <p className="scene-desc">
            Nişantaşı’nda <strong>10 kişilik</strong> sınıflarda, hafta sonu <strong>2 saat</strong>lik kompakt bir deneyimle
            sahneye ilk adımını at. Temel oyunculuk, doğaçlama ve beden/nefes farkındalığı ile
            güvenli ve eğlenceli bir çalışma.
          </p>

          <div className="scene-facts">
            <div className="fact">
              <span className="fact-label">Süre</span>
              <span className="fact-value">1 Gün</span>
            </div>
            <div className="fact">
              <span className="fact-label">Program</span>
              <span className="fact-value">2 Saat</span>
            </div>
            <div className="fact">
              <span className="fact-label">Kontenjan</span>
              <span className="fact-value">10 KİŞİ</span>
            </div>
          </div>
        </header>

        {/* PROGRAM DETAYI */}
        <section ref={addSec} className="scene-block">
          <h2 className="scene-h2">ATÖLYE NEYİ KAPSIYOR?</h2>
          <p className="scene-p">
            Tek günde, yoğun ama sıcak bir akış: <strong>temel oyunculuk</strong>, <strong>doğaçlama</strong>,
            <strong> beden/nefes</strong>. Tema üzerinden kısa çalışmalarla hem bireysel hem grup
            halinde üretip paylaşıyoruz.
          </p>

          <div className="scene-tags">
            {['Temel Oyunculuk', 'Doğaçlama', 'Beden / Hareket', 'Nefes', 'Sahne Farkındalığı']
              .map((t) => <span key={t} className="scene-tag">{t}</span>)}
          </div>
        </section>

        {/* DERS İÇERİĞİ */}
        <section ref={addSec} className="scene-block">
          <h2 className="scene-h2">DERS İÇERİĞİ</h2>
          <ul className="scene-list">
            {[
              'Isınma, grup dinamiği ve ansambl',
              'Tema üzerinden doğaçlama oyunları',
              'Beden ve nefesle ifade çalışmaları',
              'Kısa sahne çalışmaları ve paylaşım anı',
              'Sahne heyecanını yönetme'
            ].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        {/* SSS / FAQ — metinler senin gönderdiğin formatla uyumlu */}
        <section ref={addSec} className="scene-faq">
          <h2 className="scene-h2">Sık Sorulanlar</h2>

          <div className="faq-card">
            <h3>Hiç sahneye çıkmadım, yapabilir miyim?</h3>
            <p>
              Evet, tam da bu yüzden buradasın! İlk adımı beraber atıyoruz; rahatlama, nefes ve
              sahnede duruş üzerine pratik yapıyoruz.
            </p>
          </div>

          <div className="faq-card">
            <h3>🎬 1 gün 2 saat yeter mi?</h3>
            <p>
              Kompakt ve akışkan bir tempo var. Bu sürede hem ısınıyor hem doğaçlıyor hem de kısa
              bir paylaşım anına geliyoruz.
            </p>
          </div>

          <div className="faq-card">
            <h3>🤝 Kimlerle birlikte olacağım?</h3>
            <p>
              Senin gibi meraklı ve hevesli katılımcılarla. <strong>10 kişilik</strong> küçük grup yapısı
              sayesinde herkes aktif oluyor.
            </p>
          </div>

          <div className="faq-card">
            <h3>🎭 Peki ne öğreneceğiz?</h3>
            <p>
              Temel oyunculuk, doğaçlama ve beden farkındalığı—ama en çok da sahnede kendini tanımayı.
            </p>
          </div>

          <div className="faq-card">
            <h3>💡 Doğaçlama zor mu?</h3>
            <p>
              Hayır. Tema rehberliğinde herkesin katkı verdiği, eğlenceli ve güvenli alıştırmalarla ilerliyoruz.
            </p>
          </div>

          <div className="faq-card">
            <h3>💭 Yaş ya da deneyim şartı var mı?</h3>
            <p>
              Yok. Her yaş ve deneyim seviyesine uygun; önemli olan üretme ve paylaşma isteği.
            </p>
          </div>

          <div className="faq-card">
            <h3>🎬 Atölye sonunda ne olacak?</h3>
            <p>
              Grup içinde <strong>kısa bir paylaşım</strong> (mini gösterim) yapıyoruz. Bu bir performans
              gecesi değil; deneyim ve keşif odaklı bir alan.
            </p>
          </div>

          <div className="faq-card">
            <h3>😄 Yalnız gelirsem garip olur mu?</h3>
            <p>
              Asla. Birçok katılımcı tek geliyor ve kısa sürede ısınma-oyunlarla kaynaşıyoruz.
            </p>
          </div>

          <div className="faq-card">
            <h3>🌿 Ne kazanacağım?</h3>
            <p>
              Özgüven, topluluk önünde rahatlık, yaratıcılık ve bolca keyif. İki saatlik mini bir
              terapi gibi düşün.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section ref={addSec} className="scene-cta">
          <h2 className="scene-cta-title">SAHNEYE İLK ADIMINI AT</h2>
          <p className="scene-cta-text">
            Hafta sonunu sahne deneyimiyle renklendir. Kayıt ve detaylı bilgi için bizimle iletişime geç.
          </p>
          <a className="scene-cta-btn" href="/contact">İLETİŞİME GEÇ</a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
