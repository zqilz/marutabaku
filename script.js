document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Logic ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelectorAll('header nav ul a');

    hamburger.addEventListener('click', () => {
        const isOpened = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isOpened);
        document.body.classList.toggle('nav-open');
    });

    // Close nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (document.body.classList.contains('nav-open')) {
                document.body.classList.remove('nav-open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // --- Translation Data ---
    const translations = {
        'ja': {
            siteTitle: 'マルタバク | Marutabaku - 新感覚インドネシアスイーツ',
            navLogo: 'マルタバク', // New translation key
            heroBrandName: 'マルタバク', // New translation key
            navStory: '私たちの物語',
            navMenu: 'メニュー',
            navLocation: '店舗情報',
            tagline: 'インドネシアの魂、日本の心で。',
            storyTitle: 'それは、一枚のパンケーキから始まった。',
            storyText: '「マルタバク」はインドネシアの街角で愛されるソウルフード。私たちはその伝統的な美味しさに、日本の繊細さと最高級の素材を加え、全く新しい体験として「マルタバク」を再創造しました。',
            suuitsuDesc: 'とろけるチョコレート、香ばしいナッツ、濃厚チーズ。幸せを重ねた、甘い宝石箱。',
            egguDesc: '新鮮な卵とジューシーな具材が織りなす、サクサクもちもちの新食感お食事パンケーキ。',
            commitmentTitle: '私たちのこだわり',
            commit1Title: '厳選された小麦粉',
            commit1Desc: '風味豊かで、もっちりとした食感を生み出す特別な小麦粉を使用。',
            commit2Title: '職人のチョコレート',
            commit2Desc: '世界中から選び抜いたカカオから作られた、口溶け滑らかなチョコレート。',
            commit3Title: '新鮮な平飼い卵',
            commit3Desc: 'コクと旨味が違う、契約農家から届く新鮮な卵だけを使います。',
            menuTitle: 'メニュー',
            menu1Title: 'クラシック・チョコナッツ',
            menu1Desc: '濃厚ベルギーチョコとカリフォルニア産ローストピーナッツの王道コンビ。',
            menu2Title: '抹茶とあずきの京都',
            menu2Desc: '宇治抹茶を練り込んだ生地に、北海道産あずきと黒蜜を添えて。',
            menu3Title: 'プレミアム・ミートラバー',
            menu3Desc: '国産牛100%のミンチと特製スパイスが香る、満足感たっぷりの一枚。',
            menu4Title: 'きのこのトリュフクリーム',
            menu4Desc: '数種のきのこと芳醇なトリュフクリームソース。ワインと共に。',
            locationTitle: '会いに来てください',
            locationName: 'マルタバク 原宿店',
            locationHours: '営業時間: 11:00 - 20:00 (年中無休)',
            mapText: 'ここに地図が入ります',
            footerText: '© 2024 Marutabaku Japan. All Rights Reserved.',
        },
        'en': {
            siteTitle: 'Marutabaku | A New Style of Indonesian Sweets',
            navLogo: 'Marutabaku', // New translation key
            heroBrandName: 'Marutabaku', // New translation key
            navStory: 'Our Story',
            navMenu: 'Menu',
            navLocation: 'Location',
            tagline: 'The Soul of Indonesia, with a Japanese Heart.',
            storyTitle: 'It all started with a single pancake.',
            storyText: '“Martabak” is a soul food beloved on the streets of Indonesia. We have reimagined this traditional delicacy, adding Japanese subtlety and the finest ingredients to create a completely new experience.',
            suuitsuDesc: 'Melting chocolate, fragrant nuts, and rich cheese. A sweet treasure box layered with happiness.',
            egguDesc: 'A crispy, chewy, savory pancake woven from fresh eggs and juicy fillings. A new texture sensation.',
            commitmentTitle: 'Our Commitment',
            commit1Title: 'Specially Selected Flour',
            commit1Desc: 'We use special flour that creates a rich flavor and a springy, satisfying texture.',
            commit2Title: 'Artisanal Chocolate',
            commit2Desc: 'Smooth, melt-in-your-mouth chocolate made from cacao selected from around the world.',
            commit3Title: 'Fresh Free-Range Eggs',
            commit3Desc: 'We only use fresh eggs from partner farms, distinct in their richness and umami.',
            menuTitle: 'Menu',
            menu1Title: 'Classic Choco-Nut',
            menu1Desc: 'The perfect combination of rich Belgian chocolate and roasted Californian peanuts.',
            menu2Title: 'Kyoto Matcha & Azuki',
            menu2Desc: 'A Uji Matcha-infused batter, served with Hokkaido azuki beans and black honey.',
            menu3Title: 'Premium Meat Lover',
            menu3Desc: 'A satisfying piece featuring 100% domestic beef mince and aromatic special spices.',
            menu4Title: 'Mushroom & Truffle Cream',
            menu4Desc: 'A variety of mushrooms with a fragrant truffle cream sauce. Perfect with wine.',
            locationTitle: 'Come and Visit Us',
            locationName: 'Marutabaku Harajuku Store',
            locationHours: 'Hours: 11:00 - 20:00 (Open all year round)',
            mapText: 'Map will be here',
            footerText: '© 2024 Marutabaku Japan. All Rights Reserved.',
        },
        'id': {
            siteTitle: 'Marutabaku | Martabak Gaya Baru dari Indonesia',
            navLogo: 'Marutabaku', // New translation key
            heroBrandName: 'Marutabaku', // New translation key
            navStory: 'Kisah Kami',
            navMenu: 'Menu',
            navLocation: 'Lokasi',
            tagline: 'Jiwa Indonesia, dengan Hati Jepang.',
            storyTitle: 'Semua berawal dari sepotong panekuk.',
            storyText: '“Martabak” adalah jajanan jiwa yang dicintai di jalanan Indonesia. Kami telah menata ulang kelezatan tradisional ini, menambahkan kehalusan Jepang dan bahan-bahan terbaik untuk menciptakan pengalaman yang baru.',
            suuitsuDesc: 'Cokelat leleh, kacang harum, dan keju yang kaya. Sebuah kotak harta karun manis yang penuh kebahagiaan.',
            egguDesc: 'Martabak telur gurih yang renyah dan kenyal, terbuat dari telur segar dan isian yang lezat. Sensasi tekstur baru.',
            commitmentTitle: 'Komitmen Kami',
            commit1Title: 'Tepung Pilihan Terbaik',
            commit1Desc: 'Kami menggunakan tepung terigu khusus yang menghasilkan rasa yang kaya dan tekstur yang kenyal.',
            commit2Title: 'Cokelat Artisan',
            commit2Desc: 'Cokelat lembut yang meleleh di mulut, dibuat dari biji kakao pilihan dari seluruh dunia.',
            commit3Title: 'Telur Ayam Kampung Segar',
            commit3Desc: 'Kami hanya menggunakan telur segar dari peternakan mitra, yang unggul dalam rasa dan umami.',
            menuTitle: 'Menu',
            menu1Title: 'Klasik Cokelat Kacang',
            menu1Desc: 'Kombinasi sempurna dari cokelat Belgia yang kaya dan kacang California panggang.',
            menu2Title: 'Kyoto Matcha & Azuki',
            menu2Desc: 'Adonan dengan teh hijau Uji, disajikan dengan kacang azuki Hokkaido dan madu hitam.',
            menu3Title: 'Premium Pecinta Daging',
            menu3Desc: 'Satu porsi memuaskan dengan 100% daging sapi cincang domestik dan bumbu spesial.',
            menu4Title: 'Krim Jamur & Truffle',
            menu4Desc: 'Berbagai jenis jamur dengan saus krim truffle yang harum. Sempurna dengan anggur.',
            locationTitle: 'Kunjungi Kami',
            locationName: 'Marutabaku Toko Harajuku',
            locationHours: 'Jam Buka: 11:00 - 20:00 (Buka sepanjang tahun)',
            mapText: 'Peta akan ada di sini',
            footerText: '© 2024 Marutabaku Japan. Hak Cipta Dilindungi.',
        }
    };

    const langPicker = document.querySelector('.lang-picker');
    const langButtons = document.querySelectorAll('.lang-picker button');

    const switchLanguage = (lang) => {
        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const key = el.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('data-lang', lang);

        localStorage.setItem('marutabaku_lang', lang);
    };

    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            switchLanguage(selectedLang);
        });
    });
    
    const savedLang = localStorage.getItem('marutabaku_lang');
    if (savedLang && translations[savedLang]) {
        switchLanguage(savedLang);
    } else {
        switchLanguage('ja'); // Default to Japanese if no preference is saved
    }

    // --- Original Code: Custom Cursor & Animations ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    const interactiveElements = document.querySelectorAll('a, button, .interactive-img, .commitment-item, .menu-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.backgroundColor = 'rgba(211, 161, 125, 0.3)';
        });
        el.addEventListener('mouseout', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.backgroundColor = 'rgba(109, 76, 65, 0.2)';
        });
    });

    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});