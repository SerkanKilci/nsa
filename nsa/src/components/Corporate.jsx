import React, { useEffect, useRef } from 'react';
import './Corporate.css';
import Footer from './Footer';

const workshopData = [
  {
    icon: "🎭",
    title: "Sahne ve İletişim Atölyesi",
    description: "Sahne önü özgüveni ve etkili iletişim becerileri geliştirme"
  },
  {
    icon: "💡",
    title: "Yaratıcı Düşünme & İfade",
    description: "Yaratıcı problem çözme ve özgün ifade gücü kazandırma"
  },
  {
    icon: "🤝",
    title: "Takım Ruhu ve Empati",
    description: "Kolektif çalışma bilinci ve empati kaslarını güçlendirme"
  },
  {
    icon: "🎪",
    title: "Doğaçlama ile İletişim",
    description: "Spontane düşünme ve hızlı adaptasyon becerisi geliştirme"
  },
  {
    icon: "👤",
    title: "Beden Dili ve Sunum",
    description: "Etkili beden dili kullanımı ve profesyonel sunum teknikleri"
  }
];

const benefitsData = [
  { icon: "🎯", text: "Takım ruhu ve iletişim becerileri güçlenir" },
  { icon: "🧠", text: "Yaratıcılık ve problem çözme kasları gelişir" },
  { icon: "💪", text: "Stres yönetimi ve sahne önü özgüveni artar" },
  { icon: "🎉", text: "Katılımcılar eğlenerek öğrenir, motive olur" }
];

const faqData = [
  {
    question: "Kurumsal eğitimlerin içeriği sabit mi yoksa kurumlara göre mi şekilleniyor?",
    answer: "Eğitimlerimizin tamamı kurumların ihtiyaçlarına göre özelleştirilir. Şirket kültürünüz, ekip yapınız ve hedefleriniz analiz edilerek sizin için özel bir içerik oluşturulur."
  },
  {
    question: "Eğitimler nerede yapılıyor?",
    answer: "Eğitimleri dilerseniz Nişantaşı Art Akademi profesyonel stüdyolarında, dilerseniz kendi ofisinizde ya da uygun gördüğünüz farklı bir mekânda gerçekleştirebiliriz. Mekân seçimi, eğitim içeriğine ve katılımcı sayısına göre belirlenir."
  },
  {
    question: "Eğitimler ne kadar sürüyor?",
    answer: "Programlarımız genellikle yarım gün, tam gün veya iki tam gün olarak planlanır. Ancak kurumun ihtiyaçlarına göre süre ve yoğunluk esnek şekilde tasarlanır."
  },
  {
    question: "Katılımcı sayısında bir sınır var mı?",
    answer: "Eğitimin içeriğine bağlı olarak değişmekle birlikte, ideal katılımcı sayısı 10 ila 25 kişi arasındadır. Ancak büyük ekipler için özel grup çalışmaları veya paralel oturumlar da düzenlenebilir."
  },
  {
    question: "Hangi pozisyonlardaki çalışanlar için uygundur?",
    answer: "Eğitimlerimiz; yönetici, orta kademe, satış, insan kaynakları, iletişim ve yaratıcı departman çalışanları dahil olmak üzere tüm beyaz yakalı profesyonellere uygundur. İçerikler, her seviyeye göre yeniden yapılandırılır."
  },
  {
    question: "Eğitimler eğlence mi, gelişim mi odaklı?",
    answer: "Her ikisi de. Eğitimlerimizde sanat temelli eğlenceli uygulamalar kullanılır; ancak amaç her zaman katılımcıların iletişim, yaratıcılık ve özgüven becerilerini geliştirmektir. Yani keyifli olduğu kadar ölçülebilir gelişim odaklıdır."
  },
  {
    question: "Kurum olarak eğitim talebinde bulunmak istiyoruz, süreç nasıl ilerliyor?",
    answer: "İlk adımda sizinle kısa bir ön görüşme yapıyoruz. Hedeflerinizi, ekip yapınızı ve beklentilerinizi dinledikten sonra size özel bir program önerisi ve teklif dosyası hazırlıyoruz. Onay sonrası tarih planlaması yapılarak uygulamaya geçiliyor."
  }
];

export default function Corporate() {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const workshopsRef = useRef(null);
  const benefitsRef = useRef(null);
  const whyUsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);
  const workshopCardRefs = useRef([]);
  const faqCardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const animateOnScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    const elements = [
      headerRef.current,
      heroRef.current,
      workshopsRef.current,
      benefitsRef.current,
      whyUsRef.current,
      faqRef.current,
      ctaRef.current,
      ...workshopCardRefs.current,
      ...faqCardRefs.current
    ].filter(Boolean);

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToWorkshopRefs = (el) => {
    if (el && !workshopCardRefs.current.includes(el)) {
      workshopCardRefs.current.push(el);
    }
  };

  const addToFaqRefs = (el) => {
    if (el && !faqCardRefs.current.includes(el)) {
      faqCardRefs.current.push(el);
    }
  };

  return (
    <div className="corporate-page">
      <div className="corporate-container">
        {/* Header */}
        <div ref={headerRef} className="corporate-header">
          <h1 className="corporate-main-title">Kurumsal Eğitimler</h1>
          <div className="corporate-header-line"></div>
        </div>

        {/* Hero Section */}
        <section ref={heroRef} className="corporate-hero-section">
          <div className="hero-icon">🏢</div>
          <h2 className="hero-title">Yaratıcılıkla Güçlenen Kurumlar</h2>
          <p className="hero-subtitle">Nişantaşı Art Akademi Institutional</p>
          <p className="hero-text">
            Kurumların en değerli kaynağına, yani insana dokunuyoruz.
            Yaratıcılık, iletişim, ekip uyumu ve sahne deneyiminden gelen özgüven…
            Tüm bunları birleştirerek şirketlere özel geliştirici, ilerletici ve eğlenceli eğitim programları tasarlıyoruz.
          </p>
          <p className="hero-text">
            Her biri geliştirici, ilerletici ve eğlenceli bir deneyim sunan bu atölyeler;
            çalışanların iletişim becerilerini güçlendirir, takım ruhunu pekiştirir ve yaratıcılık kaslarını harekete geçirir.
          </p>
        </section>

        {/* Workshops Section */}
        <section ref={workshopsRef} className="corporate-workshops-section">
          <h2 className="section-title">Eğitim Başlıklarımızdan Bazıları</h2>
          <div className="workshops-grid">
            {workshopData.map((workshop, index) => (
              <div
                key={index}
                ref={addToWorkshopRefs}
                className="workshop-card"
              >
                <div className="workshop-icon">{workshop.icon}</div>
                <h3 className="workshop-title">{workshop.title}</h3>
                <p className="workshop-description">{workshop.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="corporate-benefits-section">
          <h2 className="section-title">Kurumsal Eğitimlerimizle</h2>
          <div className="benefits-grid">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="benefit-icon">{benefit.icon}</span>
                <p className="benefit-text">{benefit.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Us Section */}
        <section ref={whyUsRef} className="corporate-why-section">
          <h2 className="why-title">Neden Nişantaşı Sanat Akademisi?</h2>
          <p className="why-text">
            Çünkü biz eğitimi bir seminer değil, bir sahne deneyimi olarak görüyoruz.
            Her kurumun kendine özgü bir hikâyesi vardır; biz o hikâyeyi sahneye taşır,
            ekiplerinizi yeniden bir bütün haline getiririz.
          </p>
          <div className="result-box">
            <span className="result-icon">✨</span>
            <p className="result-text">
              <strong>Sonuç:</strong> daha yaratıcı, daha özgüvenli ve daha motive bir ekip.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="corporate-faq-section">
          <h2 className="section-title">Sık Sorulan Sorular</h2>
          <p className="faq-subtitle">Kurumsal Eğitimler Hakkında</p>
          <div className="faq-grid">
            {faqData.map((faq, index) => (
              <div
                key={index}
                ref={addToFaqRefs}
                className="corporate-faq-card"
              >
                <div className="corporate-faq-question">
                  <span className="corporate-faq-icon">💭</span>
                  <h3>{faq.question}</h3>
                </div>
                <p className="corporate-faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="corporate-cta-section">
          <h2 className="cta-title">Sizin İçin Tasarlayalım</h2>
          <p className="cta-text">
            Kurum kültürünüzü güçlendirecek, çalışanlarınızı motive edecek ve ofis rutininin dışına çıkaracak
            deneyimler tasarlıyoruz. Her biri eğlenceli, yenilikçi ve sahne temelli bu eğitimlerle
            çalışanlarınızı sahnede değil, hayatta öne çıkarıyoruz.
          </p>
          <a href="/contact" className="cta-button">
            İLETİŞİME GEÇİN
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}