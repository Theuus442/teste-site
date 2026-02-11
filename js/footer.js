const footerHTML = `
		<div class="container">

			<div class="footer-row">

				<div class="footer-left">
					<div class="footer-logo">
						<a href="#" id="footer-logo-text" style="font-weight: 700; color: #fff; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">
						</a>
					</div>
					<div class="footer-desc" id="footer-desc">
					</div>
				</div>

				<div class="footer-right">
					<div class="footer-nav">
						<h3 class="footer-title" id="footer-contact-title"></h3>
						<div class="footer-info-item">
							<div class="footer-info-icon"><span id="footer-address-icon"></span></div>
							<div class="footer-info-text" id="footer-address-text"></div>
						</div>
						<a href="#" class="footer-info-item" id="footer-phone-link">
							<div class="footer-info-icon"><span id="footer-phone-icon"></span></div>
							<div class="footer-info-text" id="footer-phone-text"></div>
						</a>
					</div>

					<div class="footer-nav">
						<h3 class="footer-title" id="footer-services-title-2">Nossos Serviços</h3>
						<ul id="footer-services-list-2">
						</ul>
					</div>

					<div class="footer-nav">
						<h3 class="footer-title" id="footer-schedule-title"></h3>
						<ul id="footer-schedule-list">
						</ul>
					</div>
				</div>

			</div>
			
			<div class="footer-copyright">
				<div class="copyright-text" id="footer-copyright"></div>
				<div class="pagi-signature" style="margin-top: 8px; opacity: 0.7;">
					Desenvolvido com <a href="https://pagi.com.br/" target="_blank" rel="noopener" style="color: inherit; text-decoration: underline;">PAGI SITE SEO IA</a>
				</div>
			</div>

		</div>
`;

document.querySelector('.site-footer').innerHTML = footerHTML;
