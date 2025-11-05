import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCompactDisc } from 'react-icons/fa6';
import Footer from './Footer';
import './ContemporaryDance.css';

gsap.registerPlugin(ScrollTrigger);

export default function ContemporaryDance() {
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
    );

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
    <div className="dance-page">
      <div className="dance-container">
        {/* HERO */}
        <header ref={headerRef} className="dance-hero">
          <div className="dance-hero-icon">
            <FaCompactDisc />
          </div>
          <h1 className="dance-title">ÇAĞDAŞ DANS ATÖLYESİ</h1>
          <p className="dance-subtitle">“Sahnede Dönüşen Beden”</p>
          <p className="dance-desc">
            Nişantaşı’ndaki sahne sanatları akademimizde, <strong>5 ay</strong> boyunca
            <strong> haftada 1 gün / 90 dakika</strong> temel dans teknikleri ve çağdaş dans
            çalışmaları. Bedenini keşfet, sınırlarını genişlet ve hareketle anlat.
          </p>

          <div className="dance-facts">
            <div className="fact">
              <span className="fact-label">Süre</span>
              <span className="fact-value">5 Ay</span>
            </div>
            <div className="fact">
              <span className="fact-label">Sıklık</span>
              <span className="fact-value">Haftada 1 gün / 90 dk</span>
            </div>
            <div className="fact">
              <span className="fact-label">Kontenjan</span>
              <span className="fact-value">Konforlu & Nezih Sınıflar</span>
            </div>
          </div>
        </header>

        {/* PROGRAM DETAYI */}
        <section ref={addSec} className="dance-block">
          <h2 className="dance-h2">ATÖLYE NEYİ KAPSIYOR?</h2>
          <p className="dance-p">
            Temel dans teknikleri, çağdaş dans, ritim, koreografi, doğaçlama, genel kültür ve
            <strong> beden/hareket</strong> dersleri. Her derste vücut farkındalığı ve ifade
            alanını büyütürken, ritim ve müzikaliteyle <strong>beden-düşünce</strong> uyumunu
            güçlendirirsin.
          </p>

          <div className="dance-tags">
            {['Dans', 'Ritim', 'Koreografi', 'Doğaçlama', 'Genel Kültür', 'Beden / Hareket']
              .map((t) => <span key={t} className="dance-tag">{t}</span>)}
          </div>
        </section>

        {/* DERS İÇERİĞİ */}
        <section ref={addSec} className="dance-block">
          <h2 className="dance-h2">DERS İÇERİĞİ</h2>
          <ul className="dance-list">
            {[
              'Temel beden ısınmaları',
              'Merkezleme',
              'Bedenin tepkileri',
              'Ritim ve müzikalite',
              'Fiziksel duygu çalışmaları',
              'Karakterin bedeni',
              'Doğaçlama ile hikayeleme',
              'Grup dinamiği',
              'Dans performansı yaratım'
            ].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        {/* SSS / FAQ */}
        <section ref={addSec} className="dance-faq">
          <h2 className="dance-h2">Sık Sorulanlar</h2>

          <div className="faq-card">
            <h3>🩰 Ben hiç dans etmedim, yine de katılabilir miyim?</h3>
            <p>
              Kesinlikle evet! Amaç mükemmel dans etmek değil; bedenini tanımak ve özgürleştirmek.
              Dans etmeyi bilmen gerekmiyor — hissetmen yeterli.
            </p>
          </div>

          <div className="faq-card">
            <h3>🎶 Derslerde ne yapıyoruz?</h3>
            <p>
              Bazen ritimle, bazen sessizlikle hareket ediyoruz. Temel tekniklerden çağdaş dansa,
              doğaçlamadan koreografiye uzanan geniş bir yelpazede çalışıyoruz.
            </p>
          </div>

          <div className="faq-card">
            <h3>🌿 Çağdaş dans ne demek?</h3>
            <p>
              Kuralları esneten, duyguları bedene çeviren bir anlatım biçimi. Bir adımın, bir
              nefesin, bir bakışın bile hikâye olduğu bir alan.
            </p>
          </div>

          <div className="faq-card">
            <h3>💫 Koreografi mi yapıyoruz, yoksa doğaçlıyor muyuz?</h3>
            <p>
              İkisini de! Bazen planlı adımlar, bazen anlık tepkiler… Biraz içgüdü, biraz ritim,
              biraz his.
            </p>
          </div>

          <div className="faq-card">
            <h3>🤝 Ortam nasıl?</h3>
            <p>
              Samimi, özgür ve destekleyici. Kimse yargılamıyor; herkes kendi bedeninin hikâyesini
              arıyor. Grup enerjisiyle üretip birlikte nefes alıyoruz.
            </p>
          </div>

          <div className="faq-card">
            <h3>🪞 Dans ederken neyi keşfederim?</h3>
            <p>
              Kendini. Bedeninin nasıl tepki verdiğini, nasıl sustuğunu ve nasıl konuştuğunu…
              Her hareket içindeki bir duygunun yankısı olur.
            </p>
          </div>

          <div className="faq-card">
            <h3>🌱 Bu atölye kimler için?</h3>
            <p>
              Kendini ifade etmek isteyen, duygularına hareketle anlam arayan herkes için. Dansçı
              olman gerekmez; bedenini dinlemeye hazır olman yeter.
            </p>
          </div>

          <div className="faq-card">
            <h3>🔥 Dans edebilecek miyim gerçekten?</h3>
            <p>
              Evet; ama kalıp adımların ötesinde. “Bedenin nasıl isterse” oraya doğru akıyoruz — biz
              sadece yön gösteriyoruz.
            </p>
          </div>

          <div className="faq-card">
            <h3>🎵 Müziği kim seçiyor?</h3>
            <p>
              Bazen eğitmen, bazen bedenin. Ritmi bulmak için illa hoparlöre gerek yok — içindeki
              tempo yeter.
            </p>
          </div>

          <div className="faq-card">
            <h3>🪩 Profesyonel dansçı olmam gerekir mi?</h3>
            <p>
              Asla. Bedenini sahneyle tanıştırmak isteyen herkes için. Kendini anlatmak istiyorsan,
              zaten dansın içindesin.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section ref={addSec} className="dance-cta">
          <h2 className="dance-cta-title">Harekete Geç</h2>
          <p className="dance-cta-text">
            Kayıt ve detay bilgi için bizimle iletişime geç. Bedeninin dilini beraber keşfedelim.
          </p>
          <a className="dance-cta-btn" href="/contact">İLETİŞİME GEÇ</a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
