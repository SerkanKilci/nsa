import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import Footer from './Footer';
import { 
  FaTheaterMasks,   
  FaGem,            
  FaBullseye,       
  FaPalette,        
  FaHandshake,      
  FaLightbulb,      
  FaStar            
} from 'react-icons/fa';
gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "GÜNÜN NASIL GEÇECEK ?",
    answer: "Akademide her gün, sanatla iç içe geçen bir keşif yolculuğu gibidir. Dersler, doğaçlama çalışmalar, beden farkındalığı ve grup etkileşimleriyle dolu; hem öğretici hem de sosyalleştirici bir atmosfer seni bekler."
  },
  {
    question: "KİMLER KATILABİLİR ?",
    answer: "Sanata ilgi duyan, kendini ifade etmek isteyen ve bu alanı deneyimlemeye açık herkes. Akademimizde profesyonel olmak zorunda değilsin; önemli olan, üretim sürecine dâhil olma isteğindir."
  },
  {
    question: "AMACINIZ SANATÇI YETİŞTİRMEK Mİ ?",
    answer: "Hayır. Amacımız, her bireyin sanatla kendi bağını kurmasına yardımcı olmak. Kimseyi sanatçı yapmak değil; sanat aracılığıyla kendini tanımasını, ifade etmesini ve sosyalleşmesini sağlamaktır."
  },
  {
    question: "EĞİTİMLER HANGİ ALANLARDA VERİLİYOR ?",
    answer: "Oyunculuk, dans ve müzik. Üçü de çağdaş, yenilikçi ve paylaşım temelli bir anlayışla yürütülür. Her alan, katılımcının yaratıcılığını geliştirmeye ve sahneyle ilişkisini güçlendirmeye yöneliktir."
  },
  {
    question: "ATMOSFER NASIL OLACAK ?",
    answer: "Eğlenceli ve samimi. Akademimiz, herkesin kendini özgürce ifade edebileceği, üretim sürecine katılabileceği bir sosyal sanat alanıdır."
  },
  {
    question: "KATILIM İÇİN YAL YADA DENEYİM ŞARTI VAR MI ?",
    answer: "Hayır. Dersler, her yaş ve deneyim düzeyine uygun şekilde tasarlanır. Önemli olan sanatla vakit geçirme, üretme ve paylaşma isteğidir."
  },
  {
    question: "NEDEN NİŞANTAŞI SANAT AKADEMİSİ ?",
    answer: "Çünkü biz sanatı hayatın merkezine koyuyoruz. Çağdaş, yenilikçi ve paylaşımcı eğitim anlayışımızla; bireylerin sadece sahnede değil, hayatın her alanında özgüvenle var olmasını hedefliyoruz."
  }
];

export default function About() {
  const headerRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const visionSectionRef = useRef(null);
  const missionSectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  const decorativeRefs = useRef([]);
  const faqRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );

    gsap.fromTo(
      aboutSectionRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(
      visionSectionRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: visionSectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(
      missionSectionRef.current,
      { opacity: 0, y: 100, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: missionSectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(
      faqSectionRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: faqSectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    faqRefs.current.forEach((faq, index) => {
      if (faq) {
        gsap.fromTo(
          faq,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: faq,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
          }
        );
      }
    });

    decorativeRefs.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: index % 2 === 0 ? -50 : 50,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      }
    });
  }, []);

  const addToDecorativeRefs = (el) => {
    if (el && !decorativeRefs.current.includes(el)) {
      decorativeRefs.current.push(el);
    }
  };

  const addToFaqRefs = (el) => {
    if (el && !faqRefs.current.includes(el)) {
      faqRefs.current.push(el);
    }
  };

  return (
    <div className="about-page">
      <div className="about-container">
        <div ref={headerRef} className="about-header">
          <h1 className="about-main-title">Hakkımızda</h1>
          <div className="about-header-line"></div>
        </div>

        <div className="about-content">
          <section ref={aboutSectionRef} className="about-section main-about">
            <div className="section-icon"><FaTheaterMasks></FaTheaterMasks></div>
            <div className="section-content">
              <h2 className="section-title">NIİŞANTAŞI SANAT AKADEMİSİ</h2>
              <p className="section-text">
                Nişantaşı Sanat Akademisi; oyunculuk, dans ve müzik alanlarında çağdaş, yenilikçi ve 
                disiplinli bir sanat eğitimi sunan sahne sanatları kurumudur. Akademi, sanatın sadece 
                bir meslek değil; aynı zamanda bireyin kendini ifade etme, sosyalleşme ve gelişme alanı 
                olduğuna inanır.
              </p>
              <p className="section-text">
                Bu anlayışla, her bireyin sanatla kurduğu ilişkiyi güçlendirmeyi, üretim sürecini 
                paylaşılabilir bir deneyime dönüştürmeyi hedefler.
              </p>
            </div>
            <div ref={addToDecorativeRefs} className="decorative-element element-1"></div>
          </section>

          <div className="vision-mission-grid">
            <section ref={visionSectionRef} className="about-section vision-section">
              <div className="section-badge">
                <span className="badge-icon"><FaGem></FaGem></span>
                <span className="badge-text">VİZYON</span>
              </div>
              <div className="section-content">
                <h2 className="section-title-alt">SANATI HERKES İÇİN ULAŞILABİLİR KILMAK</h2>
                <p className="section-text">
                  Nişantaşı Sanat Akademisi, çağdaş sanat eğitimiyle bireyleri sadece sahneye değil, 
                  hayata hazırlayan; üretken, paylaşımcı ve bilinçli bireyler yetiştirmeyi vizyon edinir.
                </p>
                <div className="highlight-box">
                  <p className="highlight-text">
                    Sanatı, herkes için ulaşılabilir bir yaşam alanına dönüştürmek.
                  </p>
                </div>
              </div>
              <div ref={addToDecorativeRefs} className="decorative-element element-2"></div>
            </section>

            <section ref={missionSectionRef} className="about-section mission-section">
              <div className="section-badge">
                <span className="badge-icon"><FaBullseye></FaBullseye></span>
                <span className="badge-text">MİSYON</span>
              </div>
              <div className="section-content">
                <h2 className="section-title-alt">YARATICILIĞI GELİŞTİREN EĞİTİM</h2>
                <p className="section-text">
                  Sanatı sosyalleştiren, bireyin yaratıcılığını ve ifade gücünü geliştiren eğitim 
                  programlarıyla; güvenli, ilham veren ve kolektif bir öğrenme ortamı yaratmak.
                </p>
                <div className="highlight-box">
                  <p className="highlight-text">
                    Amacımız kimseyi "sanatçı yapmak" değil, herkesin kendi potansiyelini sanat 
                    aracılığıyla keşfetmesini sağlamaktır.
                  </p>
                </div>
              </div>
              <div ref={addToDecorativeRefs} className="decorative-element element-3"></div>
            </section>
          </div>

          <section ref={faqSectionRef} className="faq-section">
            <h2 className="faq-main-title">Sık Sorulan Sorular</h2>
            <p className="faq-subtitle">Akademide Seni Neler Bekliyor?</p>
            <div className="faq-grid">
              {faqData.map((faq, index) => (
                <div key={index} ref={addToFaqRefs} className="faq-card">
                  <div className="faq-question">
                    <span className="faq-icon"></span>
                    <h3>{faq.question}</h3>
                  </div>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="values-section">
            <h2 className="values-title">DEĞERLERİMİZ</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon"><FaPalette></FaPalette></div>
                <h3 className="value-title">Yaratıcılık</h3>
                <p className="value-text">
                  Her bireyin özgün ifade gücünü keşfetmesini destekliyoruz
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon"><FaHandshake></FaHandshake></div>
                <h3 className="value-title">İŞBİRLİĞİ</h3>
                <p className="value-text">
                  Kolektif öğrenme ve paylaşma kültürünü teşvik ediyoruz
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon"><FaLightbulb></FaLightbulb></div>
                <h3 className="value-title">YENİLİKÇİLİK</h3>
                <p className="value-text">
                  Çağdaş ve güncel sanat yaklaşımlarıyla eğitim veriyoruz
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon"><FaStar></FaStar></div>
                <h3 className="value-title">KAPSAYICILIK</h3>
                <p className="value-text">
                  Sanatı herkes için erişilebilir ve anlamlı kılıyoruz
                </p>
              </div>
            </div>
          </section>

          <div className="about-cta">
            <h2 className="cta-title">Sanat Yolculuğunuza Başlamaya Hazır mısınız?</h2>
            <p className="cta-text">
              Nişantaşı Sanat Akademisi'nde kendinizi keşfedin ve sanatın dönüştürücü gücünü deneyimleyin
            </p>
            <div className="cta-buttons">
              <a href="/workshops" className="cta-button primary">
                ATÖLYELERİMİZİ KEŞFEDİN
              </a>
              <a href="/contact" className="cta-button secondary">
                İLETİŞİME GEÇİN
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}