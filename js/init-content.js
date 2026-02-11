document.addEventListener('DOMContentLoaded', () => {
    // 2. Geral
    document.querySelector('link[rel="icon"]').href = pageContent.general.favicon;

    // 3. Header
    const headerWorkDesc = document.getElementById('header-work-desc');
    if (headerWorkDesc) headerWorkDesc.textContent = pageContent.header.workDescription;

    const headerAddressText = document.getElementById('header-address-text');
    if (headerAddressText) headerAddressText.textContent = pageContent.header.address;

    const headerAddressIcon = document.getElementById('header-address-icon');
    if (headerAddressIcon) headerAddressIcon.textContent = pageContent.header.addressIcon;
    
    const headerPhoneLink = document.getElementById('header-phone-link');
    if (headerPhoneLink) headerPhoneLink.href = pageContent.header.phoneHref;

    const headerPhoneIcon = document.getElementById('header-phone-icon');
    if (headerPhoneIcon) headerPhoneIcon.textContent = pageContent.header.phoneIcon;

    const headerPhoneText = document.getElementById('header-phone-text');
    if (headerPhoneText) headerPhoneText.textContent = pageContent.header.phone;

    const headerLogoText = document.getElementById('header-logo-text');
    if (headerLogoText) headerLogoText.textContent = pageContent.general.pageTitle;

    const headerMobileLogoText = document.getElementById('header-mobile-logo-text');
    if (headerMobileLogoText) headerMobileLogoText.textContent = pageContent.general.pageTitle;
    if (document.getElementById('footer-logo-text')) {
        document.getElementById('footer-logo-text').textContent = pageContent.general.pageTitle;
    }

    // Links de Navegação
    const navLists = [
        { el: document.getElementById('header-nav-list'), isMobile: false },
        { el: document.getElementById('header-mobile-nav-list'), isMobile: true }
    ];
    
    navLists.forEach(item => {
        const list = item.el;
        if (!list) return;
        list.innerHTML = '';

        // Adicionar Nome da Empresa/Título no Desktop (lado esquerdo do Sobre Nós)
        if (!item.isMobile) {
            const liTitle = document.createElement('li');
            liTitle.className = 'nav-company-title';
            liTitle.innerHTML = `<span style="font-weight: 700; color: #fff; margin-right: 20px; font-size: 18px;">${pageContent.general.pageTitle}</span>`;
            list.appendChild(liTitle);
        }

        pageContent.header.navLinks.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.className = 'anchor-link';
            a.href = link.href;
            a.textContent = link.text;
            li.appendChild(a);
            list.appendChild(li);
        });
    });

    const mobileAddressIcon = document.getElementById('header-mobile-address-icon');
    if (mobileAddressIcon) mobileAddressIcon.textContent = pageContent.header.addressIcon;

    const mobileAddressText = document.getElementById('header-mobile-address-text');
    if (mobileAddressText) mobileAddressText.textContent = pageContent.header.address;

    const mobilePhoneLink = document.getElementById('header-mobile-phone-link');
    if (mobilePhoneLink) mobilePhoneLink.href = pageContent.header.phoneHref;

    const mobilePhoneIcon = document.getElementById('header-mobile-phone-icon');
    if (mobilePhoneIcon) mobilePhoneIcon.textContent = pageContent.header.phoneIcon;

    const mobilePhoneText = document.getElementById('header-mobile-phone-text');
    if (mobilePhoneText) mobilePhoneText.textContent = pageContent.header.phone;

    // 5. Banner (Buttons only)
    const bannerButtonsContainer = document.getElementById('banner-buttons');
    if (bannerButtonsContainer && pageContent.banner && pageContent.banner.buttons) {
        bannerButtonsContainer.innerHTML = '';
        pageContent.banner.buttons.forEach(btn => {
            const btnA = document.createElement('a');
            btnA.href = btn.href;
            const isWa = btn.href.startsWith('https://wa.me/');
            if (isWa) {
                btnA.target = '_blank';
                btnA.rel = 'noopener';
            }
            btnA.className = `banner-btn ${isWa ? '' : 'anchor-link'} ${btn.class || ''}`.trim();
            btnA.textContent = btn.text;
            bannerButtonsContainer.appendChild(btnA);
        });
    }

    // 6. Sobre Nós
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle) aboutTitle.textContent = pageContent.aboutUs.title;
    
    const aboutDesc = document.getElementById('about-desc');
    if (aboutDesc) aboutDesc.innerHTML = pageContent.aboutUs.description;

    const aboutBtn = document.getElementById('about-btn');
    if (aboutBtn) {
        aboutBtn.textContent = pageContent.aboutUs.buttonText;
        aboutBtn.href = pageContent.aboutUs.buttonHref;
        const isWa = pageContent.aboutUs.buttonHref.startsWith('https://wa.me/');
        if (isWa) {
            aboutBtn.target = '_blank';
            aboutBtn.rel = 'noopener';
            aboutBtn.classList.remove('anchor-link');
        } else {
            aboutBtn.classList.add('anchor-link');
        }
    }

    const aboutImg = document.getElementById('about-img');
    if (aboutImg) {
        aboutImg.src = pageContent.aboutUs.image;
        aboutImg.alt = pageContent.aboutUs.imageAlt;
    }

    // Features Section
    if (document.getElementById('features-title')) {
        document.getElementById('features-title').textContent = pageContent.features.title;
    }
    const featuresList = document.getElementById('features-list');
    if (featuresList && pageContent.features) {
        featuresList.innerHTML = '';
        pageContent.features.items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'features-item';
            const isWa = item.link.startsWith('https://wa.me/');
            card.innerHTML = `
                <div class="features-thumb">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <div class="features-body">
                    <h3 class="features-item-title">${item.title}</h3>
                    <p class="features-item-desc">${item.description}</p>
                    <a href="${item.link}" class="def-btn ${isWa ? '' : 'anchor-link'}" ${isWa ? 'target="_blank" rel="noopener"' : ''} style="width: 100%; text-align: center; padding: 12px 25px;">Entrar em Contato</a>
                </div>
            `;
            featuresList.appendChild(card);
        });
    }

    // Testimonials Section (dentro de s-solutions)
    if (document.getElementById('testimonials-title')) {
        document.getElementById('testimonials-title').textContent = pageContent.testimonials.title;
    }
    const testimonialsList = document.getElementById('testimonials-list');
    if (testimonialsList && pageContent.testimonials) {
        testimonialsList.innerHTML = '';
        pageContent.testimonials.reviews.forEach((review, index) => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `
                <div class="reviews-item">
                    <div class="reviews-body">
                        <h3 class="reviews-name">${review.name}</h3>
                        <div class="reviews-profi">${review.profession}</div>
                        <p class="reviews-comment">${review.comment}</p>
                    </div>
                </div>
            `;
            testimonialsList.appendChild(slide);
        });
    }

    // 15. Footer
    if (document.getElementById('footer-desc')) {
        document.getElementById('footer-desc').innerHTML = pageContent.footer.description;
    }
    if (document.getElementById('footer-services-title')) {
        document.getElementById('footer-services-title').textContent = pageContent.footer.servicesTitle;
    }
    
    const footerServicesList = document.getElementById('footer-services-list');
    const footerServicesList2 = document.getElementById('footer-services-list-2');
    
            if (footerServicesList || footerServicesList2) {
        const lists = [footerServicesList, footerServicesList2].filter(l => l !== null);
        lists.forEach(list => {
            list.innerHTML = '';
            pageContent.footer.servicesLinks.forEach(link => {
                const li = document.createElement('li');
                li.textContent = link.text;
                list.appendChild(li);
            });
        });
    }

    if (document.getElementById('footer-services-title-2')) {
        document.getElementById('footer-services-title-2').textContent = pageContent.footer.servicesTitle;
    }

    if (document.getElementById('footer-schedule-title')) {
        document.getElementById('footer-schedule-title').textContent = pageContent.footer.scheduleTitle;
    }
    const footerScheduleList = document.getElementById('footer-schedule-list');
    if (footerScheduleList) {
        footerScheduleList.innerHTML = '';
        pageContent.footer.schedule.forEach(time => {
            const li = document.createElement('li');
            li.textContent = time;
            footerScheduleList.appendChild(li);
        });
    }

    if (document.getElementById('footer-contact-title')) {
        document.getElementById('footer-contact-title').textContent = pageContent.footer.contactTitle;
    }
    if (document.getElementById('footer-address-icon')) {
        document.getElementById('footer-address-icon').textContent = pageContent.footer.addressIcon;
    }
    if (document.getElementById('footer-address-text')) {
        document.getElementById('footer-address-text').textContent = pageContent.footer.address;
    }
    if (document.getElementById('footer-phone-link')) {
        document.getElementById('footer-phone-link').href = pageContent.footer.phoneHref;
    }
    if (document.getElementById('footer-phone-icon')) {
        document.getElementById('footer-phone-icon').textContent = pageContent.footer.phoneIcon;
    }
    if (document.getElementById('footer-phone-text')) {
        document.getElementById('footer-phone-text').textContent = pageContent.footer.phone;
    }
    
    // Ano Atual Dinâmico
    const currentYear = new Date().getFullYear();
    const copyrightText = pageContent.footer.copyright.replace(/\d{4}/, currentYear);
    document.getElementById('footer-copyright').textContent = copyrightText;

});
