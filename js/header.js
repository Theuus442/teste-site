const headerHTML = `
		<div class="header-top">
			<div class="container">
				<div class="header-row">

					<!-- Header top mobile START -->
					<div class="header-mobile-logo">
						<a href="#">
							<span id="header-mobile-logo-text" style="font-weight: 700; color: #fff; font-size: 22px; text-transform: uppercase; letter-spacing: 1px;"></span>
						</a>
					</div>

					<div class="hamburger">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<!-- Header top mobile END -->

					<div class="header-desc" id="header-work-desc"></div>
					<div class="header-right">
						<div class="header-info">
							<span id="header-address-icon" style="font-size: 18px; margin-right: 5px;"></span>
							<span id="header-address-text"></span>
						</div>
						<a href="#" class="header-info" id="header-phone-link">
							<span id="header-phone-icon" style="font-size: 18px; margin-right: 5px;"></span>
							<span id="header-phone-text"></span>
						</a>
						<a href="#s-contact" class="header-info anchor-link">
							<span style="font-size: 18px; margin-right: 5px;">✉️</span>
							<span>Contato</span>
						</a>

					</div>
				</div>
			</div>
		</div>

		<div class="header-bottom">
			<div class="container">
				<div class="header-bottom-row">
					<div class="header-logo">
						<a href="#">
							<span id="header-logo-text" style="font-weight: 700; color: #fff; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;"></span>
						</a>
					</div>

					<nav class="header-nav">
						<ul id="header-nav-list">
						</ul>
					</nav>
				</div>
			</div>
		</div>


		<!-- Header mobile START -->
		<div class="header-mobile-wrap">
			<nav class="header-mobile-nav">
				<ul id="header-mobile-nav-list">
				</ul>
			</nav>

			<div class="header-mobile-info">
				<span id="header-mobile-address-icon" style="font-size: 18px; margin-right: 10px;"></span>
				<span id="header-mobile-address-text"></span>
			</div>
			<a href="#" class="header-mobile-info" id="header-mobile-phone-link">
				<span id="header-mobile-phone-icon" style="font-size: 18px; margin-right: 10px;"></span>
				<span id="header-mobile-phone-text"></span>
			</a>
			<a href="#s-contact" class="header-mobile-info anchor-link">
				<span style="font-size: 18px; margin-right: 10px;">✉️</span>
				<span>Contato</span>
			</a>

		</div>
		<!-- Header mobile END -->
`;

document.querySelector('.site-header').innerHTML = headerHTML;
