import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTheaterMasks, FaUniversity, FaUserGraduate, FaBookOpen } from 'react-icons/fa';
import Footer from './Footer';
import './AdvancedActing.css';

gsap.registerPlugin(ScrollTrigger);

export default function AdvancedActing() {
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
        <div className="adv-page">
            <div className="adv-container">
                {/* HERO */}
                <header ref={headerRef} className="adv-hero">
                    <div className="adv-hero-icon"><FaTheaterMasks /></div>
                    <h1 className="adv-title">İLERİ SEVİYE OYUNCULUK ATÖLYESİ</h1>
                    <p className="adv-subtitle">“Sahnede özgün, cesur ve fark edilir bir dil.”</p>

                    <p className="adv-desc">
                        Nişantaşı Art Akademi’nin ileri seviye programı; sahne deneyimi olan ya da temel eğitimini
                        tamamlamış oyuncular için tasarlanmıştır. Oyunculuğu bir sanat formu olarak derinlemesine
                        ele alır; karakter derinliği, doğru metin çözümleme, sahne farkındalığı ve partnerle
                        organik bağa odaklanır.
                    </p>

                    <div className="adv-facts">
                        <div className="fact">
                            <span className="fact-label">Süre</span>
                            <span className="fact-value">6 Ay</span>
                        </div>
                        <div className="fact">
                            <span className="fact-label">Yapı</span>
                            <span className="fact-value">Uygulamalı + BİREBİR</span>
                        </div>
                        <div className="fact">
                            <span className="fact-label">Final</span>
                            <span className="fact-value">Sahne Sunumu</span>
                        </div>
                    </div>
                </header>

                {/* PROGRAM AMACI */}
                <section ref={addSec} className="adv-block">
                    <h2 className="adv-h2">Programın Amacı</h2>
                    <p className="adv-p">
                        Katılımcıların sahnede daha <strong>özgün</strong>, <strong>cesur</strong> ve
                        <strong> fark edilir</strong> bir oyunculuk dili geliştirmesi amaçlanır. Odak noktası;
                        <strong> karakter analizi</strong> ve derinliği, <strong>metin/alt metin çözümleme</strong>,
                        <strong> sahne farkındalığı</strong> ve <strong>partnerle organik bağ</strong> kurabilmektir.
                    </p>
                </section>

                {/* EĞİTİM İÇERİĞİ */}
                <section ref={addSec} className="adv-block">
                    <h2 className="adv-h2">EĞİTİM İÇERİĞİ</h2>

                    <div className="adv-tags">
                        {[
                            'İleri Seviye Oyunculuk Çalışmaları',
                            'Duygusal Derinlik & Eylem Bilinci',
                            'Metin ve Alt Metin Analizi',
                            'Partner Etkileşimi & Doğallık',
                            'Reji–Oyuncu İlişkisi',
                            'Sahne Provaları',
                            'Final Sunumu'
                        ].map((t) => <span key={t} className="adv-tag">{t}</span>)}
                    </div>

                    <ul className="adv-list">
                        {[
                            'Karakter geçmişi, hedef, engel ve eylem analizleri',
                            'Alt metin, tempo–ritim ve duygusal süreklilik çalışmaları',
                            'Sahnede partner dinleme, reaktivite ve organik etkileşim',
                            'Metne dramaturjik yaklaşım ve eylem planı oluşturma',
                            'Reji beklentisini okuma, sahnede esneklik ve uyum',
                            'Yoğun uygulamalı prova takvimi ve kayıt analizleri',
                            'Dönem sonunda seçilmiş sahnelerle izleyiciye açık sunum'
                        ].map((item) => <li key={item}>{item}</li>)}
                    </ul>
                </section>

                {/* NEDEN NİŞANTAŞI ART AKADEMİ? */}
                <section ref={addSec} className="adv-block highlight">
                    <div className="cons-inline-icon"><FaTheaterMasks /></div>
                    <div className="adv-inline-icons">
                    </div>
                    <h2 className="adv-h2">Neden Nişantaşı Art Akademi?</h2>
                    <p className="adv-p">
                        Çünkü burada oyunculuk bir <strong>ifade biçimi</strong> olarak öğretilir. Her katılımcı için
                        profesyonel eğitmenlerle <strong>kişiselleştirilmiş gelişim planı</strong> hazırlanır; yaratıcı
                        potansiyeline ulaşman için sürekli geri bildirim ve mentorluk sağlanır.
                    </p>
                </section>

                {/* HEDEF */}
                <section ref={addSec} className="adv-block">
                    <div className="cons-inline-icon"><FaUserGraduate /></div>
                    <h2 className="adv-h2">Hedef</h2>
                    <p className="adv-p">
                        Sahne üzerindeki varlığı güçlendirirken <strong>duygusal süreklilik</strong> ve
                        <strong> özgün oyunculuk dili</strong> oluşturmak. Amaç; “rol yapmak”tan uzaklaşıp
                        <strong> anda kalarak</strong> sahnede <strong>var olmak</strong>.
                    </p>
                </section>

                {/* KİMLER KATILABİLİR? */}
                <section ref={addSec} className="adv-block">
                    <div className="cons-inline-icon"><FaBookOpen /></div>
                    <h2 className="adv-h2">Kimler Katılabilir?</h2>
                    <ul className="adv-list">
                        {[
                            'Temel oyunculuk eğitimini tamamlamış katılımcılar',
                            'Sahne deneyimine sahip oyuncular',
                            'İfade biçimi, sezgisel derinlik ve yaratıcılık yönlerini geliştirmek isteyenler'
                        ].map((item) => <li key={item}>{item}</li>)}
                    </ul>
                </section>

                {/* SSS */}
                <section ref={addSec} className="adv-faq">
                    <h2 className="adv-h2">Sık Sorulan Sorular</h2>

                    <div className="faq-card">
                        <h3>1) Bu atölyeye katılmak için temel eğitim şart mı?</h3>
                        <p>
                            Evet. Program ileri seviyedir. Ancak her başvuru bireysel değerlendirilir; gerekirse kısa bir
                            ön görüşme veya seviye tespiti yapılır.
                        </p>
                    </div>

                    <div className="faq-card">
                        <h3>2) Atölye boyunca ne tür çalışmalar yapılır?</h3>
                        <p>
                            Odağımız sahnede gerçeklik: karakter çözümleme, alt metin, duygusal eylem, partner çalışmaları
                            ve yoğun sahne pratiği. Dönem sonunda seçilen metinlerle sahne sunumları yapılır.
                        </p>
                    </div>

                    <div className="faq-card">
                        <h3>3) Programın sonunda gösteri var mı?</h3>
                        <p>
                            Evet. Süreç, izleyiciyle buluşan bir <strong>final sunumu</strong> ile tamamlanır.
                        </p>
                    </div>

                    <div className="faq-card">
                        <h3>4) Eğitim ve sıklık nasıl?</h3>
                        <p>
                            Program 6 ay sürer. Haftada belirli gün ve yoğun uygulamalı içerikle ilerler. Gerektikçe
                            ek prova saatleri planlanabilir.
                        </p>
                    </div>

                    <div className="faq-card">
                        <h3>5) Katılım belgesi veriliyor mu?</h3>
                        <p>
                            Evet. Programı tamamlayanlara Nişantaşı Art Akademi İleri Seviye Oyunculuk Atölyesi Katılım
                            Belgesi verilir.
                        </p>
                    </div>

                    <div className="faq-card">
                        <h3>6) Kamera önü eğitimi de var mı?</h3>
                        <p>
                            Odağımız sahnedir; ancak doğal oyunculuk ve farkındalık çalışmaları kamera önü performansına da
                            doğrudan katkı sağlar.
                        </p>
                    </div>

                    <div className="faq-card">
                        <h3>7) Ön görüşme yapılabiliyor mu?</h3>
                        <p>
                            Evet. Kısa bir ön görüşme ile uygunluk değerlendirilir; program içeriği anlatılır.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section ref={addSec} className="adv-cta">
                    <h2 className="adv-cta-title">OYUNCULUĞUNU BİR ÜST SEVİYEYE TAŞI</h2>
                    <p className="adv-cta-text">
                        Ön görüşme ve kayıt için bize ulaş. Sahnede dilini, merkezini ve varlığını birlikte derinleştirelim.
                    </p>
                    <a className="adv-cta-btn" href="/contact">İLETİŞİME GEÇ</a>
                </section>
            </div>

            <Footer />
        </div>
    );
}
