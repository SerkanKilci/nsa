import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhatAwaits.css';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const questionsData = [
  {
    id: 1,
    question: "Profesyonel olmam gerekiyor mu?",
    answer: "Hiç gerek yok. Bizim için önemli olan sahnede ne kadar iyi olduğun değil, orada olmayı neden istediğin. Akademide kimseyi sanatçı yapmaya çalışmıyoruz ama herkesin içindeki yaratıcı sesi bulmasına yardımcı oluyoruz.",
    icon: "🎭"
  },
  {
    id: 2,
    question: "Ne tür eğitimler var?",
    answer: "Oyunculuk, dans ve müzik. Ama sadece teknik eğitim değil; ritim, beden, doğaçlama ve sahneyle kurulan bağ üzerine bir deneyim alanı. Kısacası, sanatın her biçimiyle tanışabileceğin bir oyun alanı.",
    icon: "📚"
  },
  {
    id: 3,
    question: "Nasıl bir atmosfer var?",
    answer: "Ciddi ama kasılmayan, disiplinli ama sıcacık. Burada rekabet değil, paylaşım var. Herkesin birbirinden beslendiği, birlikte ürettiği ve sanatla sosyalleştiği bir alan.",
    icon: "✨"
  },
  {
    id: 4,
    question: "Neden Nişantaşı Sanat Akademisi?",
    answer: "Çünkü biz sahneleri doldurmak için değil, insanları sanatla buluşturmak için varız. Sanatı hayatın ortasına koyuyoruz çünkü inanıyoruz ki, herkesin içinde biraz sahne ışığı vardır.",
    icon: "🌟"
  },
  {
    id: 5,
    question: "Akademiye ilk geldiğimde beni ne karşılayacak?",
    answer: "Seni kostümler değil, samimi bir \"hoş geldin\" karşılayacak. Burada ilk adımını attığında, kendini sahnenin ortasında değil bir topluluğun içinde hissedersin.",
    icon: "🤝"
  },
  {
    id: 6,
    question: "Arkadaş edinir miyim?",
    answer: "Kesinlikte. Burada insanlar sadece aynı sınıfta değil, aynı duyguda buluşuyor. Birlikte üretmek, birlikte gülmek, bazen birlikte susmak bile bu akademinin en güzel tarafı.",
    icon: "❤️"
  },
  {
    id: 7,
    question: "Ya çekinirsem, yapamam sanırsam?",
    answer: "Hiç sorun değil. Çünkü burada kimse senden kusursuz olmanı beklemiyor. Biz kusurlarıyla güzel, içten gelen hâlleri seviyoruz. Zaten en güzel performanslar da oradan doğuyor.",
    icon: "💪"
  },
  {
    id: 8,
    question: "Burada neler değişir?",
    answer: "Bakışın değişir, yürüyüşün, nefesin… Bir sahneye adım attığında artık sadece rol yapmazsın; kendini, bir başkasında tanımayı öğrenirsin. Kısacası, sanat senden bir parça almaz seni tamamlar.",
    icon: "🦋"
  }
];

export default function WhatAwaits() {
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );

    // Intro animation
    gsap.fromTo(
      introRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Cards stagger animation
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            delay: (index % 2) * 0.1
          }
        );
      }
    });
  }, []);

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <div className="what-awaits-page">
      <div className="what-awaits-container">
        {/* Header */}
        <div ref={headerRef} className="what-awaits-header">
          <h1 className="what-awaits-title">Seni Neler Bekliyor?</h1>
          <div className="title-underline"></div>
        </div>

        {/* Intro Section */}
        <section ref={introRef} className="intro-section">
          <div className="intro-content">
            <h2 className="intro-title">Akademide Seni Neler Bekliyor?</h2>
            <p className="intro-text">
              Nişantaşı Sanat Akademisi'nde seni bekleyen deneyim, sadece bir eğitim programından çok daha fazlası. 
              Burada sanatla kuracağın bağ, kendini keşfetme yolculuğun ve paylaştığın her anın bir parçası olacak.
            </p>
          </div>
        </section>

        {/* Questions Grid */}
        <div className="questions-grid">
          {questionsData.map((item, index) => (
            <div
              key={item.id}
              ref={addToCardRefs}
              className="question-card"
            >
              <div className="question-icon-wrapper">
                <span className="question-icon">{item.icon}</span>
              </div>
              <div className="question-content">
                <h3 className="question-title">{item.question}</h3>
                <p className="question-answer">{item.answer}</p>
              </div>
              <div className="card-number">{String(item.id).padStart(2, '0')}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="what-awaits-cta">
          <div className="cta-content">
            <h2 className="cta-title">Hazır mısın?</h2>
            <p className="cta-text">
              Sanat yolculuğuna başlamak için doğru yerdesin. Akademimizde seni bekleyen deneyimi keşfet.
            </p>
            <div className="cta-buttons">
              <a href="/workshops" className="cta-btn primary">
                Atölyelerimizi İncele
              </a>
              <a href="/contact" className="cta-btn secondary">
                Bizimle İletişime Geç
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}