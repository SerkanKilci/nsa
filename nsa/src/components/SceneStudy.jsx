import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTheaterMasks } from 'react-icons/fa';
import Footer from './Footer';
import './SceneStudy.css';

gsap.registerPlugin(ScrollTrigger);

export default function SceneStudy() {
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
            <FaTheaterMasks />
          </div>
          <h1 className="scene-title">OYUN ÇALIŞMA / ÇIKARMA ATÖLYESİ</h1>
          <p className="scene-subtitle">“Sahne Senin”</p>
          <p className="scene-desc">
            Nişantaşı’nda 8 kişilik sınıflarla, haftada 1 gün 2 saat, 5 ay boyunca oyunculuk eğitimleri.
            Program sonunda seçilen bir tiyatro oyununda sahne alırsın.
          </p>

          <div className="scene-facts">
            <div className="fact">
              <span className="fact-label">Süre</span>
              <span className="fact-value">5 Ay</span>
            </div>
            <div className="fact">
              <span className="fact-label">Sıklık</span>
              <span className="fact-value">Haftada 1 gün / 2 saat</span>
            </div>
            <div className="fact">
              <span className="fact-label">Kontenjan</span>
              <span className="fact-value">8 KİŞİ</span>
            </div>
          </div>
        </header>

        {/* PROGRAM DETAYI */}
        <section ref={addSec} className="scene-block">
          <h2 className="scene-h2">ATÖLYE NEYİ KAPSIYOR?</h2>
          <p className="scene-p">
            Haftada 1 gün, 2 saatlik derslerle, 5 ay boyunca <strong>temel oyunculuk</strong>, 
            <strong> doğaçlama</strong>, <strong>diksiyon</strong>, <strong>ses/nefes</strong>, 
            <strong> metin çözümleme</strong> ve <strong>beden/hareket</strong> çalışmaları yapacaksın. 
            Sürecin sonunda seyirciyle buluşacak bir oyunda <strong>rol</strong> alacaksın.
          </p>

          <div className="scene-tags">
            {['Oyunculuk', 'Doğaçlama', 'Diksiyon', 'Ses / Nefes', 'Beden / Hareket', 'Metin Çözümleme', 'Genel Kültür']
              .map((t) => <span key={t} className="scene-tag">{t}</span>)}
          </div>
        </section>

        {/* DERS İÇERİĞİ */}
        <section ref={addSec} className="scene-block">
          <h2 className="scene-h2">Ders İçeriği</h2>
          <ul className="scene-list">
            {[
              'Ansambl oluşturma ve oyun okuma',
              'Oyun yorumlama ve algı çalışmaları',
              'Bedenini tanıma ve nefes teknikleri',
              'Takım çalışmaları ve bireysel beceri gelişimi',
              'Sahneye çıkma deneyimi'
            ].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        {/* SSS / FAQ */}
        <section ref={addSec} className="scene-faq">
          <h2 className="scene-h2">Sık Sorulanlar</h2>

          <div className="faq-card">
            <h3>🎬 Bu atölye tam olarak neyi kapsıyor?</h3>
            <p>
              Temel oyunculuk, doğaçlama, diksiyon, ses/nefes, metin çözümleme ve beden/hareket. 
              5 ayın sonunda bir tiyatro oyununda sahne alırsın.
            </p>
          </div>

          <div className="faq-card">
            <h3>💭 Ben amatörüm, katılabilir miyim?</h3>
            <p>
              Kesinlikle! Profesyonel olman gerekmiyor. Önemli olan sahneye adım atma isteğin ve 
              keyifli bir deneyime açık olman.
            </p>
          </div>

          <div className="faq-card">
            <h3>🎭 Sahneye çıkmak gerçekten mümkün mü?</h3>
            <p>
              Evet. Program sonunda sınıfça seçilen bir oyunda <strong>sahneye çıkacaksın</strong>.
            </p>
          </div>

          <div className="faq-card">
            <h3>🤝 Sınıflar nasıl?</h3>
            <p>
              8 kişiyle sınırlı; samimi, ferah ve birebir çalışmaya elverişli. Hem bireysel gelişim
              hem de grup enerjisi birlikte ilerler.
            </p>
          </div>

          <div className="faq-card">
            <h3>🎶 Ne gibi çalışmalar yapacağız?</h3>
            <ul className="scene-list compact">
              <li>Ansambl oluşturma ve oyun okuma</li>
              <li>Oyun yorumlama ve algı çalışmaları</li>
              <li>Bedenini tanıma ve nefes teknikleri</li>
              <li>Takım çalışmaları ve bireysel beceri gelişimi</li>
            </ul>
          </div>

          <div className="faq-card">
            <h3>✨ Neden bu atölyeyi seçmeliyim?</h3>
            <p>
              Çünkü sahneye adım atmak için doğru yer burası. Öğrenirken eğlenir, sürecin sonunda 
              <strong>seyirciye karşı oynayarak</strong> deneyimini taçlandırırsın.
            </p>
          </div>

          <div className="faq-card">
            <h3>🎭 Sahneye gerçekten çıkacak mıyım?</h3>
            <p>
              Evet! 5 ayın sonunda tüm sınıf sahneye çıkar ve seyirciyle buluşur.
            </p>
          </div>

          <div className="faq-card">
            <h3>💭 Daha önce hiç sahneye çıkmadım, yapabilir miyim?</h3>
            <p>
              Elbette. Sahne duruşu, nefes ve heyecan yönetimini birlikte çalışıyoruz.
            </p>
          </div>

          <div className="faq-card">
            <h3>🤝 Buradaki insanlar nasıl?</h3>
            <p>
              Destekleyici, üretken ve paylaşımcı. Kimse yarışmıyor; herkes birbirini besliyor.
            </p>
          </div>

          <div className="faq-card">
            <h3>🌟 Bu deneyim bana ne kazandırır?</h3>
            <p>
              Kendine güven, sahne hakimiyeti, topluluk önünde rahatlık, yaratıcılık ve en önemlisi 
              <strong>kendini tanıma</strong>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section ref={addSec} className="scene-cta">
          <h2 className="scene-cta-title">Sahneye İlk Adımını At</h2>
          <p className="scene-cta-text">
            Kayıt ve detay bilgi için bizimle iletişime geç. Birlikte metinden sahneye uzanan
            bu yolculuğu başlatalım.
          </p>
          <a className="scene-cta-btn" href="/contact">İletişime Geç</a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
