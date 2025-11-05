import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTheaterMasks, FaUniversity, FaUserGraduate, FaBookOpen } from 'react-icons/fa';
import Footer from './Footer';
import './ConservatoryPrep.css';

gsap.registerPlugin(ScrollTrigger);

export default function ConservatoryPrep() {
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
          delay: i * 0.06,
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
    <div className="cons-page">
      <div className="cons-container">
        {/* HERO */}
        <header ref={headerRef} className="cons-hero">
          <div className="cons-hero-icon"><FaUniversity /></div>
          <h1 className="cons-title">KONSERVATUVARA HAZIRLIK ATÖLYESİ (OYUNCULUK)</h1>
          <p className="cons-subtitle">“Profesyonel bir oyunculuk yolculuğunun ilk adımı, doğru hazırlıkla başlar.”</p>

          <p className="cons-desc">
            Nişantaşı Art Akademi olarak, Türkiye’nin önde gelen üniversitelerinin Güzel Sanatlar Fakülteleri ve
            Konservatuvarların Oyunculuk / Tiyatro bölümlerinin yetenek sınavlarına hazırlanan adaylara kapsamlı,
            sistematik ve bireyselleştirilmiş bir eğitim programı sunuyoruz.
          </p>

          <div className="cons-facts">
            <div className="fact">
              <span className="fact-label">Süre</span>
              <span className="fact-value">9 Ay</span>
            </div>
            <div className="fact">
              <span className="fact-label">Yapı</span>
              <span className="fact-value">BİREBİR + Grup</span>
            </div>
            <div className="fact">
              <span className="fact-label">Lokasyon</span>
              <span className="fact-value">NİŞANTAŞI / İstanbul</span>
            </div>
          </div>
        </header>

        {/* PROGRAM AMACI */}
        <section ref={addSec} className="cons-block">
          <h2 className="cons-h2">Programın Amacı</h2>
          <p className="cons-p">
            Bu program, yalnızca sınav kazanmayı değil, <strong>sağlam bir oyunculuk altyapısı</strong> kurmayı,
            <strong> sahne varlığını güçlendirmeyi</strong> ve <strong>bireysel potansiyeli açığa çıkarmayı</strong> hedefler.
            Aday, sınav süreçlerinde ihtiyaç duyacağı tüm sanatsal donanımı kazanır.
          </p>
        </section>

        {/* EĞİTİM İÇERİĞİ */}
        <section ref={addSec} className="cons-block">
          <h2 className="cons-h2">EĞİTİM İÇERİĞİ</h2>

          <div className="cons-tags">
            {[
              'Temel Oyunculuk Teknikleri',
              'Doğaçlama ve Sahne Çalışmaları',
              'Diksiyon ve Ses Kullanımı',
              'Beden Dili ve Sahne Farkındalığı',
              'Tirad, Şiir ve Metin Analizi',
              'Sınav Provaları ve Jüri Simülasyonları',
              'Beden Hareket ve Modern Dans'
            ].map((t) => <span key={t} className="cons-tag">{t}</span>)}
          </div>

          <ul className="cons-list">
            {[
              'Birebir koçluk ile kişisel güçlü yönleri belirleme',
              'Seçilecek tirad/şiir/metin için dramaturji ve alt metin çalışmaları',
              'Ses – nefes – artikülasyon – vurgu/tonlama uygulamaları',
              'Beden farkındalığı, hareket, ritim ve sahne hakimiyeti',
              'Doğaçlama ile duygu, aksiyon ve reaktivite pratikleri',
              'Sınav günü akışı: ısınma rutini, odaklanma, sahneye giriş',
              'Gerçekçi jüri simülasyonları ve performans geri bildirimleri'
            ].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        {/* NEDEN NİŞANTAŞI ART AKADEMİ? */}
        <section ref={addSec} className="cons-block highlight">
          <div className="cons-inline-icon"><FaTheaterMasks /></div>
          <h2 className="cons-h2">NEDEN NİŞANTAŞI ART AKADEMİ?</h2>
          <p className="cons-p">
            Çünkü burada yalnızca sınava hazırlanmaz, <strong>oyuncu olmayı öğrenirsin</strong>.
            Her öğrenci için profesyonel eğitmenlerle <strong>kişiselleştirilmiş gelişim planı</strong> hazırlanır;
            özgün bir oyunculuk kimliği oluşturman için birebir ilgi ve mentorluk sağlanır.
          </p>
        </section>

        {/* HEDEF */}
        <section ref={addSec} className="cons-block">
          <div className="cons-inline-icon"><FaUserGraduate /></div>
          <h2 className="cons-h2">Hedef</h2>
          <p className="cons-p">
            Program sonunda adaylar, Türkiye’nin önde gelen konservatuvar ve tiyatro bölümlerinin
            <strong> yetenek sınavlarında başarılı olacak</strong> bilgi, disiplin ve <strong>sahne özgüvenine</strong> ulaşır.
          </p>
        </section>

        {/* KİMLER KATILABİLİR? */}
        <section ref={addSec} className="cons-block">
          <div className="cons-inline-icon"><FaBookOpen /></div>
          <h2 className="cons-h2">KİMLER KATILABİLİR?</h2>
          <ul className="cons-list">
            {[
              'Oyunculuk alanında kariyer hedefleyen lise ve üniversite öğrencileri',
              'Güzel Sanatlar Fakültesi / Konservatuvar Oyunculuk bölümlerine girmek isteyen adaylar',
              'Oyunculuk yolculuğuna profesyonel bir temel atmak isteyen herkes'
            ].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        {/* SSS */}
        <section ref={addSec} className="cons-faq">
          <h2 className="cons-h2">Sık Sorulan Sorular</h2>

          <div className="faq-card">
            <h3>1) Programa katılmak için herhangi bir ön şart var mı?</h3>
            <p>
              Hayır. Oyunculuk eğitimi almak isteyen herkes katılabilir. Konservatuvar hedefi olan öğrencilerden
              düzenli katılım ve disiplinli çalışma beklenir.
            </p>
          </div>

          <div className="faq-card">
            <h3>2) Eğitimler hangi gün ve saatlerde yapılır?</h3>
            <p>
              Hafta içi gündüz veya hafta sonu gündüz grupları bulunur. Okul/iş programına göre kişisel planlama yapılabilir.
            </p>
          </div>

          <div className="faq-card">
            <h3>3) Eğitim birebir mi, grup dersi mi?</h3>
            <p>
              Her ikisi de. Birebir derslerde kişisel gelişime odaklanılır; grup derslerinde sahne ve partner pratikleri yapılır.
            </p>
          </div>

          <div className="faq-card">
            <h3>4) Sınavlara özel tirad/metin çalışmaları yapılıyor mu?</h3>
            <p>
              Evet. Hedeflenen üniversiteye göre özgün bir sınav portföyü oluşturulur; tirad, şiir ve doğaçlama birebir çalışılır.
            </p>
          </div>

          <div className="faq-card">
            <h3>5) Eğitmen kadrosu kimlerden oluşuyor?</h3>
            <p>
              Konservatuvar mezunu, profesyonel sahne deneyimine sahip eğitmenler ve dönemsel konuk oyuncu/yönetmenler.
            </p>
          </div>

          <div className="faq-card">
            <h3>6) Deneme dersi veya ön görüşme yapılıyor mu?</h3>
            <p>
              Evet. Ücretsiz ön görüşme ve kısa bir deneme dersi imkânı sunulmaktadır.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section ref={addSec} className="cons-cta">
          <h2 className="cons-cta-title">Konservatuvar Hedefin İçİn İlk Adımı At</h2>
          <p className="cons-cta-text">
            Ücretsiz ön görüşme ve deneme dersi için bizimle iletişime geç. Sınav portföyünü birlikte oluşturalım.
          </p>
          <a className="cons-cta-btn" href="/contact">İLETİŞİME GEÇ</a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
