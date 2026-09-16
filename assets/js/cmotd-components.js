/**
 * CMOTD reusable UI components.
 * -----------------------------
 * The project deliberately uses native Web Components so shared UI stays
 * framework-free and every HTML page can consume the same component source.
 */
(function () {
  const site = window.CMOTD_SITE;
  if (!site) {
    console.error("CMOTD components: site-config.js must load first.");
    return;
  }

  const { routes, institution } = site;
  // Resolve assets relative to this component file.
  // This works from index.html, /pages/, and other directories.
  const componentScriptUrl = document.currentScript?.src;
  const institutionAsset = (filename) => {
    if (componentScriptUrl) {
      return new URL(`../img/institution/${filename}`, componentScriptUrl).href;
    }

    return `/assets/img/institution/${filename}`;
  };
  const logoAsset = (filename) => {
    if (componentScriptUrl) {
      return new URL(`../logos/${filename}`, componentScriptUrl).href;
    }

    return `/assets/logos/${filename}`;
  };
  const routeValue = (value) => routes[value] || value || "#";
  const icon = (name, classes = "text-[18px]") =>
    `<span class="material-symbols-outlined ${classes}" aria-hidden="true">${name}</span>`;

  const logo = (compact = false, inverted = false) => {
    const logoFile = inverted ? "logo_full_light.svg" : "logo_full_dark.svg";

    return `
    <a
      class="group inline-flex items-center focus:outline-none"
      href="${routes.home}"
      aria-label="CMOTD home"
    >
      <img
        src="${logoAsset(logoFile)}"
        alt="CMOTD"
        class="${compact ? "h-10" : "h-12"} w-auto object-contain"
      />
    </a>
  `;
  };
  class CMOTDButton extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = "true";
      const href = this.getAttribute("href");
      const variant = this.getAttribute("variant") || "primary";
      const size = this.getAttribute("size") || "md";
      const target = this.getAttribute("target") || "";
      const iconName = this.getAttribute("icon");
      const iconPosition = this.getAttribute("icon-position") || "end";
      const label = this.innerHTML;
      const variants = {
        primary: "bg-brand-cobalt-deep hover:bg-primary text-white shadow-sm",
        secondary:
          "bg-surface-container-lowest hover:bg-brand-slate-50 text-brand-slate-800 border border-brand-slate-200 shadow-sm",
        outline:
          "bg-transparent hover:bg-surface-container-low text-primary border border-primary/30",
        ghost:
          "bg-transparent hover:bg-surface-container-low text-brand-slate-700 hover:text-primary",
      };
      const sizes = {
        sm: "h-8 px-3 text-label-sm",
        md: "h-10 px-4 text-label-md",
        lg: "h-12 px-6 text-body-md",
      };
      const classes = `inline-flex ${this.classList.contains("w-full") ? "w-full" : ""} items-center justify-center gap-2 rounded font-label-md transition-all active:scale-[0.98] ${variants[variant] || variants.primary} ${sizes[size] || sizes.md}`;
      const content = `${iconName && iconPosition === "start" ? icon(iconName, "text-[16px]") : ""}<span>${label}</span>${iconName && iconPosition !== "start" ? icon(iconName, "text-[16px]") : ""}`;
      this.innerHTML = href
        ? `<a class="${classes}" href="${href}" ${target ? `target="${target}"` : ""}>${content}</a>`
        : `<button class="${classes}" type="${this.getAttribute("type") || "button"}">${content}</button>`;
    }
  }

  class CMOTDCard extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = "true";
      const variants = {
        surface:
          "block bg-surface-container-lowest border border-brand-slate-200 rounded-xl p-6 shadow-sm",
        interactive:
          "block bg-surface-container-lowest border border-brand-slate-200 rounded-xl p-6 shadow-sm hover:border-brand-cobalt/40 hover:shadow-lg transition-all",
        media:
          "bg-white rounded-xl border border-brand-slate-200 overflow-hidden flex flex-col justify-between hover:border-brand-slate-400 hover:shadow-lg transition-all group",
        course:
          "bg-surface-container-lowest rounded border border-brand-slate-200 hover:border-brand-cobalt-deep transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between overflow-hidden group",
      };
      this.className =
        `${this.className || ""} ${variants[this.getAttribute("variant") || "surface"]}`.trim();
    }
  }

  class CMOTDSiteHeader extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;

      this.dataset.ready = "true";
      this.style.display = "contents";

      const active = this.getAttribute("active") || "";
      const variant = this.getAttribute("variant") || "default";
      const minimal = variant === "minimal";

      // =========================================================
      // DESKTOP NAVIGATION
      // =========================================================
      const nav = site.publicNav
        .map((item) => {
          const selected = item.id === active;

          const cls = selected
            ? "text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1"
            : "text-brand-slate-700 dark:text-brand-slate-300 hover:text-primary dark:hover:text-primary-fixed";

          // Standard navigation link
          if (!item.children?.length) {
            return `
            <a
              class="${cls} whitespace-nowrap font-label-md text-label-md transition-colors"
              href="${routeValue(item.route)}"
            >
              ${item.label}
            </a>
          `;
          }

          // Dropdown children
          const dropdownItems = item.children
            .map(
              (child) => `
              <a
                href="${routeValue(child.route)}"
                class="
                  block whitespace-nowrap rounded-lg px-4 py-2.5
                  text-sm text-brand-slate-700
                  transition-colors
                  hover:bg-surface-container-low hover:text-primary
                  dark:text-brand-slate-300
                  dark:hover:bg-brand-slate-800
                  dark:hover:text-primary-fixed
                "
              >
                ${child.label}
              </a>
            `,
            )
            .join("");

          // Dropdown navigation item
          return `
          <div class="group relative flex h-full items-center">
            <button
              type="button"
              class="${cls} flex items-center gap-1 whitespace-nowrap font-label-md text-label-md transition-colors"
            >
              ${item.label}

              ${icon(
                "keyboard_arrow_down",
                "text-[18px] transition-transform duration-200 group-hover:rotate-180",
              )}
            </button>

            <div
              class="
                invisible absolute left-0 top-full z-50
                min-w-[220px]
                translate-y-2
                rounded-xl
                border border-brand-slate-200
                bg-white
                p-2
                opacity-0
                shadow-xl
                transition-all duration-150

                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100

                dark:border-brand-slate-700
                dark:bg-brand-navy-900
              "
            >
              ${dropdownItems}
            </div>
          </div>
        `;
        })
        .join("");

      // =========================================================
      // MOBILE NAVIGATION
      // =========================================================
      const mobileNav = site.publicNav
        .map((item) => {
          const selected = item.id === active;

          // Standard mobile link
          if (!item.children?.length) {
            return `
            <a
              class="
                block rounded-lg px-4 py-3
                font-label-md text-label-md
                ${
                  selected
                    ? "bg-primary/10 text-primary dark:bg-primary-fixed/10 dark:text-primary-fixed"
                    : "text-brand-slate-700 hover:bg-surface-container-low dark:text-brand-slate-300 dark:hover:bg-brand-slate-800"
                }
              "
              href="${routeValue(item.route)}"
            >
              ${item.label}
            </a>
          `;
          }

          // Mobile dropdown children
          const children = item.children
            .map(
              (child) => `
              <a
                href="${routeValue(child.route)}"
                class="
                  block rounded-lg px-4 py-2
                  text-sm text-brand-slate-600
                  transition-colors
                  hover:bg-surface-container-low
                  hover:text-primary

                  dark:text-brand-slate-400
                  dark:hover:bg-brand-slate-800
                  dark:hover:text-primary-fixed
                "
              >
                ${child.label}
              </a>
            `,
            )
            .join("");

          return `
          <div class="py-1">
            <div
              class="
                px-4 py-2
                text-xs font-bold uppercase tracking-wider
                text-brand-slate-400
                dark:text-brand-slate-500
              "
            >
              ${item.label}
            </div>

            <div
              class="
                ml-3 border-l border-brand-slate-200 pl-2
                dark:border-brand-slate-700
              "
            >
              ${children}
            </div>
          </div>
        `;
        })
        .join("");

      // =========================================================
      // HEADER
      // =========================================================
      this.innerHTML = `
      <!-- =====================================================
           GLOBAL INSTITUTIONAL UTILITY BANNER

           LIGHT MODE:
           Deep CMOTD navy / blue

           DARK MODE:
           White background with dark text
           ===================================================== -->
      <div
        class="
          w-full
          border-b border-brand-navy-900
          bg-brand-navy-950
          text-[12px] text-brand-slate-300

          dark:border-brand-slate-200
          dark:bg-white
          dark:text-brand-navy-900
        "
      >
        <div
          class="
            mx-auto
            flex max-w-[1280px]
            flex-col items-center justify-between
            gap-2
            px-4 py-2
            md:flex-row
            lg:px-8
          "
        >
          <!-- Left -->
          <div class="flex min-w-0 items-center gap-3">
            <span
              class="
                inline-flex shrink-0 items-center gap-1.5
                rounded
                bg-brand-slate-800
                px-2 py-0.5
                font-medium
                text-brand-slate-200

                dark:bg-brand-slate-100
                dark:text-brand-navy-900
              "
            >
              <span
                class="h-1.5 w-1.5 rounded-full bg-status-verified"
              ></span>

              Est. ${institution.established}
            </span>

            <span
              class="
                truncate
                font-medium tracking-tight
                text-brand-slate-300

                dark:text-brand-navy-800
              "
            >
              ${institution.fullName} · ${institution.university}, Port Harcourt
            </span>
          </div>

          <!-- Right -->
          <div
            class="
              hidden shrink-0 items-center gap-5
              font-medium
              text-brand-slate-400

              dark:text-brand-slate-700
              lg:flex
            "
          >
            <a
              class="
                flex items-center gap-1
                transition-colors
                hover:text-primary-fixed
                dark:hover:text-primary
              "
              href="${routes.verification}"
            >
              ${icon("verified", "text-[15px]")}
              Certificate Registry
            </a>

            <span
              class="
                text-brand-slate-700
                dark:text-brand-slate-300
              "
            >
              |
            </span>

            <a
              class="
                flex items-center gap-1
                transition-colors
                hover:text-primary-fixed
                dark:hover:text-primary
              "
              href="${routes.repository}"
            >
              ${icon("menu_book", "text-[15px]")}
              R&amp;D Repository
            </a>

            <span
              class="
                text-brand-slate-700
                dark:text-brand-slate-300
              "
            >
              |
            </span>

            <span
              class="
                flex items-center gap-2
                text-brand-slate-300

                dark:text-brand-slate-700
              "
            >
              ${icon("call", "text-[15px]")}
              ${institution.phone}
            </span>
          </div>
        </div>
      </div>

      <!-- =====================================================
           MAIN SITE NAVIGATION
           ===================================================== -->
      <header
        class="
          sticky top-0 z-50 w-full
          ${
            minimal
              ? "bg-white/95 backdrop-blur-md dark:bg-brand-navy-950/95"
              : "bg-surface-container-lowest dark:bg-brand-navy-950"
          }
          border-b border-brand-slate-200
          shadow-sm
          dark:border-brand-slate-800
        "
      >
        <div
          class="
            mx-auto
            flex h-[76px] max-w-[1280px]
            items-center justify-between
            gap-4
            px-4
            lg:px-8
          "
        >
          <!-- Logo -->
          ${logo(minimal)}

          <!-- Desktop Navigation -->
          <nav
            class="hidden h-full items-center gap-6 xl:flex"
            aria-label="Primary navigation"
          >
            ${nav}
          </nav>

          <!-- Right Actions -->
          <div class="flex items-center gap-2 sm:gap-3">
            <!-- Search -->
            <a
              class="
                hidden h-9 w-9
                items-center justify-center
                rounded-lg
                text-brand-slate-500
                transition-colors

                hover:bg-surface-container-low
                hover:text-primary

                dark:text-brand-slate-400
                dark:hover:bg-brand-slate-800
                dark:hover:text-primary-fixed

                sm:flex
              "
              href="${routes.programmeDirectory}"
              aria-label="Search programmes"
            >
              ${icon("search", "text-[20px]")}
            </a>

            <!-- Portal Login -->
            <a
              class="
                hidden h-10
                items-center gap-2
                rounded
                border border-brand-slate-200
                bg-surface-container-lowest
                px-3.5
                font-label-md text-label-md
                text-brand-slate-800
                shadow-sm
                transition-all

                hover:bg-brand-slate-50

                dark:border-brand-slate-700
                dark:bg-brand-navy-900
                dark:text-brand-slate-200
                dark:hover:bg-brand-slate-800

                lg:inline-flex
              "
              href="${routes.login}"
            >
              ${icon("account_circle", "text-[18px] text-primary dark:text-primary-fixed")}

              <span>Portal Login</span>
            </a>

            <!-- Apply -->

            <!-- Mobile Menu Button -->
            <button
              class="
                flex h-10 w-10
                items-center justify-center
                rounded-lg
                text-brand-slate-700
                transition-colors

                hover:bg-surface-container-low

                dark:text-brand-slate-300
                dark:hover:bg-brand-slate-800

                xl:hidden
              "
              type="button"
              data-cmotd-menu-toggle
              aria-expanded="false"
              aria-label="Open navigation"
            >
              ${icon("menu", "text-[24px]")}
            </button>
          </div>
        </div>

        <!-- ===================================================
             MOBILE NAVIGATION PANEL
             =================================================== -->
        <div
          class="
            hidden
            border-t border-brand-slate-200
            bg-surface-container-lowest
            px-4 py-4
            shadow-lg

            dark:border-brand-slate-800
            dark:bg-brand-navy-950

            xl:hidden
          "
          data-cmotd-mobile-menu
        >
          <nav
            class="grid gap-1"
            aria-label="Mobile navigation"
          >
            ${mobileNav}
          </nav>

          <div
            class="
              mt-4 grid grid-cols-2 gap-2
              border-t border-brand-slate-200
              pt-4

              dark:border-brand-slate-800
            "
          >
            <cmotd-button
              href="${routes.login}"
              variant="secondary"
              size="sm"
              icon="account_circle"
              icon-position="start"
            >
              Portal Login
            </cmotd-button>
          </div>
        </div>
      </header>
    `;

      // =========================================================
      // MOBILE MENU TOGGLE
      // =========================================================
      const toggle = this.querySelector("[data-cmotd-menu-toggle]");
      const menu = this.querySelector("[data-cmotd-mobile-menu]");

      if (toggle && menu) {
        toggle.addEventListener("click", () => {
          const open = toggle.getAttribute("aria-expanded") === "true";

          toggle.setAttribute("aria-expanded", String(!open));
          menu.classList.toggle("hidden", open);

          const glyph = toggle.querySelector(".material-symbols-outlined");

          if (glyph) {
            glyph.textContent = open ? "menu" : "close";
          }
        });
      }
    }
  }

  class CMOTDSiteFooter extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = "true";
      this.style.display = "contents";
      const columns = site.footerColumns
        .map(
          (column) => `
        <div>
          <h2 class="text-surface-bright font-headline-sm text-[15px] mb-4">${column.title}</h2>
          <ul class="space-y-2.5 text-body-sm font-body-sm">
            ${column.links.map(([label, value]) => `<li><a class="text-brand-slate-400 hover:text-surface-bright transition-colors" href="${routeValue(value)}">${label}</a></li>`).join("")}
          </ul>
        </div>`,
        )
        .join("");
      this.innerHTML = `
        <footer class="w-full bg-brand-navy-950 text-brand-slate-400 px-6 lg:px-12 py-14 border-t border-brand-slate-800">
          <div class="max-w-[1280px] mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-slate-800">
              <div class="lg:col-span-2 space-y-4">
                <div>${logo(true, true)}</div>
                <p class="text-body-sm font-body-sm text-brand-slate-400 max-w-md leading-6">${institution.fullName} at ${institution.university}, advancing maritime, offshore, engineering and computational technology capability through training, research and industry collaboration.</p>
                <div class="flex items-start gap-2 text-body-sm">${icon("location_on", "text-[18px] text-primary-fixed mt-0.5")}<span>${institution.location}</span></div>
              </div>
              ${columns}
            </div>
            <div class="pt-7 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-brand-slate-500">
              <p>© <span data-cmotd-year></span> CMOTD · ${institution.university}. All rights reserved.</p>
              <div class="flex items-center gap-4"><a class="hover:text-white" href="${routes.support}">Accessibility</a><a class="hover:text-white" href="${routes.support}">Privacy</a><a class="hover:text-white" href="${routes.contact}">Contact</a></div>
            </div>
          </div>
        </footer>`;
      const year = this.querySelector("[data-cmotd-year]");
      if (year) year.textContent = new Date().getFullYear();
    }
  }

  const portalItems = [
    ["overview", "dashboard", "Overview & Operations", "portalOverview"],
    ["academic", "school", "Academic & Training", "portalAcademic"],
    ["certificates", "verified", "Certificates & Audits", "portalCertificates"],
    ["research", "memory", "Research & Simulations", "portalResearch"],
  ];

  class CMOTDPortalSidebar extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = "true";
      this.style.display = "contents";
      const active = this.getAttribute("active") || "overview";
      const navItems = portalItems
        .map(
          ([id, glyph, label, route]) => `
        <a class="flex items-center gap-3 px-3 py-2.5 rounded-lg ${active === id ? "bg-brand-cobalt-deep text-white shadow-sm" : "text-brand-slate-300 hover:bg-brand-slate-800 hover:text-white"} transition-colors" href="${routes[route]}">${icon(glyph, "text-[20px]")}<span class="font-label-md text-label-md">${label}</span></a>`,
        )
        .join("");
      this.innerHTML = `
        <aside class="fixed inset-y-0 left-0 w-portal-sidebar-width h-full flex flex-col bg-brand-navy-950 border-r border-brand-slate-800 z-40 p-space-md">
          <div>
            <div class="flex items-center gap-3 px-2 pb-5 mb-4 border-b border-brand-slate-800">
              <div class="w-10 h-10 rounded-lg bg-brand-cobalt-deep flex items-center justify-center text-white">${icon("waves", "text-[22px]")}</div>
              <div><div class="text-white font-headline-sm text-[16px]">CMOTD E-PORTAL</div><div class="text-brand-slate-500 text-[11px]">Rivers State University</div></div>
            </div>
            <cmotd-button class="w-full mb-5" href="${routes.register}" size="sm" icon="add_circle" icon-position="start">New Registration</cmotd-button>
            <p class="px-3 mb-2 text-[10px] uppercase tracking-[0.16em] text-brand-slate-500 font-bold">Navigation Hub</p>
            <nav class="space-y-1" aria-label="Portal navigation">${navItems}</nav>
            <div class="mt-5 pt-5 border-t border-brand-slate-800 space-y-1">
              <a class="flex items-center gap-3 px-3 py-2 text-brand-slate-400 hover:text-white" href="#">${icon("handshake", "text-[19px]")}<span class="text-label-sm">Industrial Partnerships</span></a>
              <a class="flex items-center gap-3 px-3 py-2 text-brand-slate-400 hover:text-white" href="#">${icon("approval_delegation", "text-[19px]")}<span class="text-label-sm">Registry & Approvals</span></a>
              <a class="flex items-center gap-3 px-3 py-2 text-brand-slate-400 hover:text-white" href="#">${icon("settings", "text-[19px]")}<span class="text-label-sm">System Settings</span></a>
            </div>
          </div>
          <div class="border-t border-brand-slate-800 pt-4 space-y-1">
            <a class="flex items-center gap-3 px-3 py-2 text-brand-slate-400 hover:text-white" href="${routes.support}">${icon("menu_book", "text-[19px]")}<span class="text-label-sm">Documentation</span></a>
            <div class="mt-3 px-3 py-2 rounded bg-brand-navy-900 border border-brand-slate-800 text-[10px] text-brand-slate-500">RSU-CMOTD · Secure Node</div>
          </div>
        </aside>`;
    }
  }

  class CMOTDPortalTopbar extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = "true";
      this.style.display = "contents";
      const title = this.getAttribute("title") || "Overview & Operations";
      this.innerHTML = `
        <header class="sticky top-0 z-30 h-16 w-full bg-surface-container-lowest border-b border-brand-slate-200 shadow-sm flex items-center justify-between px-space-lg">
          <div class="min-w-0"><div class="text-[11px] text-brand-slate-500 truncate">${institution.fullName}</div><div class="font-headline-sm text-[16px] text-brand-navy-900 truncate">${title}</div></div>
          <div class="flex items-center gap-2 sm:gap-3">
            <a class="hidden lg:flex items-center gap-2 h-9 px-3 rounded-lg bg-surface-container-low text-brand-slate-700 hover:text-primary text-label-sm" href="${routes.verification}">${icon("verified_user", "text-[17px]")} Verify Cert</a>
            <button class="w-9 h-9 rounded-lg text-brand-slate-600 hover:bg-surface-container-low" aria-label="Notifications">${icon("notifications", "text-[19px]")}</button>
            <a class="w-9 h-9 rounded-lg text-brand-slate-600 hover:bg-surface-container-low flex items-center justify-center" href="${routes.support}" aria-label="Help">${icon("help_outline", "text-[19px]")}</a>
            <div class="hidden md:flex items-center gap-2 pl-3 border-l border-brand-slate-200"><div class="w-8 h-8 rounded-full bg-brand-navy-900 text-white flex items-center justify-center text-[11px] font-bold">TB</div><div><div class="text-label-sm font-semibold text-brand-navy-900">Dr. Tamuno Briggs</div><div class="text-[10px] text-brand-slate-500">Lead Administrator</div></div></div>
          </div>
        </header>`;
    }
  }

  class CMOTDPortalFooter extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = "true";
      this.style.display = "contents";
      this.innerHTML = `
        <footer class="mt-8 bg-brand-navy-900 text-brand-slate-400 py-6 px-space-lg border-t border-brand-slate-800 text-body-sm">
          <div class="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            <p><span class="text-white font-semibold">CMOTD · RSU</span> · Secure institutional e-Portal</p>
            <div class="flex items-center gap-4 text-[12px]"><a class="hover:text-white" href="${routes.support}">Documentation</a><a class="hover:text-white" href="${routes.contact}">Helpdesk</a><span>© <span data-cmotd-year></span> CMOTD</span></div>
          </div>
        </footer>`;
      const year = this.querySelector("[data-cmotd-year]");
      if (year) year.textContent = new Date().getFullYear();
    }
  }
  class CMOTDInstitutionStrip extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;

      this.dataset.ready = "true";
      this.style.display = "contents";

      const partners = site.institutionPartners || [];
      const partnerItems = partners
        .map(
          (partner) => `
            <div
              class="group flex items-center justify-center rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              title="${partner.name}"
            >
              <img
                src="${institutionAsset(partner.logo)}"
                alt="${partner.name}"
                loading="lazy"
                decoding="async"
                class="object-contain opacity-85 transition-opacity duration-200 group-hover:opacity-100"
              />
            </div>
          `,
        )
        .join("");

      this.innerHTML = `
        <section
          class="border-y border-brand-slate-200 bg-surface-container-low py-10 dark:border-brand-slate-800 dark:bg-brand-navy-950"
          aria-label="Institutional alliances and technology partners"
        >
          <div class="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div class="mb-7 text-center">
              <h2 class="text-[22px] font-semibold text-brand-navy-900 dark:text-white">
                Institutional Alliances &amp; Technology Partners
              </h2>
              <p class="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-brand-slate-500 dark:text-brand-slate-400">
                Academic, regulatory and technology relationships supporting CMOTD training,
                research and professional development.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              ${partnerItems}
            </div>
          </div>
        </section>
      `;
    }
  }
  customElements.define("cmotd-button", CMOTDButton);
  customElements.define("cmotd-card", CMOTDCard);
  customElements.define("cmotd-site-header", CMOTDSiteHeader);
  customElements.define("cmotd-institution-strip", CMOTDInstitutionStrip);
  customElements.define("cmotd-site-footer", CMOTDSiteFooter);
  customElements.define("cmotd-portal-sidebar", CMOTDPortalSidebar);
  customElements.define("cmotd-portal-topbar", CMOTDPortalTopbar);
  customElements.define("cmotd-portal-footer", CMOTDPortalFooter);
})();
