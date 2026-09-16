/**
 * CMOTD site-wide content and navigation configuration.
 * ----------------------------------------------------
 * Edit labels, shared contact details and shared links here.
 * Page-specific content remains in each HTML page.
 */
(function () {
  // Resolve all shared links from this script's location, not from the current page.
  // That keeps navigation correct even if future pages are placed in deeper folders.
  const scriptUrl =
    document.currentScript && document.currentScript.src
      ? document.currentScript.src
      : new URL("assets/js/site-config.js", window.location.href).href;
  const rootUrl = new URL("../../", scriptUrl);
  const href = (path) => new URL(path, rootUrl).href;

  window.CMOTD_SITE = {
    root: rootUrl.href,
    institution: {
      shortName: "CMOTD",
      university: "Rivers State University",
      fullName: "Centre for Marine and Offshore Technology Development",
      strapline: "Marine, Offshore & Computational Technology",
      location: "Port Harcourt, Rivers State, Nigeria",
      phone: "+234 (0) 84 992 011",
      established: "2021",
    },
    routes: {
      home: href("index.html"),
      about: href("pages/cmotd_about_us.html"),
      programmes: href("pages/cmotd_programmes_courses.html"),
      programmeDirectory: href("pages/cmotd_programmes_directory.html"),
      courses: href("pages/cmotd_courses_directory.html"),
      research: href("index.html#research"),
      repository: href("index.html#research-repository"),
      events: href("pages/cmotd_events_newsfeed_directory.html"),
      verification: href("index.html#verification-hub"),
      support: href("pages/cmotd_support_faqs.html"),
      contact: href("pages/cmotd_contact_us.html"),
      login: href("pages/cmotd_authentication_login_with_passkey.html"),
      register: href("pages/cmotd_authentication_register.html"),
      portalOverview: href("pages/cmotd_portal_overview_operations_dashboard.html"),
      portalAcademic: href("pages/cmotd_portal_academic_training_management.html"),
      portalCertificates: href("pages/cmotd_portal_certificates_institutional_audits.html"),
      portalResearch: href("pages/cmotd_portal_research_computational_simulations.html"),
    },
    publicNav: [
      {
        id: "home",
        label: "Home",
        route: "home",
      },
      {
        id: "about",
        label: "About",
        route: "about",
      },

      {
        id: "programmes",
        label: "Programmes",
        children: [
          {
            label: "Programme Directory",
            route: "programmeDirectory",
          },
          {
            label: "Courses & Training",
            route: "courses",
          },
        ],
      },

      {
        id: "research",
        label: "Research",
        route: "research",
      },

      {
        id: "events",
        label: "News & Events",
        route: "events",
      },

      {
        id: "services",
        label: "Services",
        children: [
          {
            label: "Verification",
            route: "verification",
          },
          {
            label: "Support",
            route: "support",
          },
          {
            label: "Contact",
            route: "contact",
          },
        ],
      },
    ],
    institutionPartners: [
      {
        id: "rsu",
        name: "Rivers State University",
        description: "Academic Institution",
        logo: "rsu.webp",
      },
      {
        id: "ncdmb",
        name: "Nigerian Content Development and Monitoring Board",
        description: "Industry Development",
        logo: "ncdmb.png",
      },
      {
        id: "coren",
        name: "Council for the Regulation of Engineering in Nigeria",
        description: "Engineering Regulation",
        logo: "coren.png",
      },
      {
        id: "aveva",
        name: "AVEVA",
        description: "Engineering Software",
        logo: "aveva.svg",
      },
      {
        id: "somatrix",
        name: "Somatrix",
        description: "Technology Partner",
        logo: "somatrix.webp",
      },
      {
        id: "brainbox",
        name: "Brainbox",
        description: "Technology Partner",
        logo: "brainbox.png",
      },
    ],
    footerColumns: [
      {
        title: "Explore CMOTD",
        links: [
          ["About the Centre", "about"],
          ["Programmes & Courses", "programmes"],
          ["Facilities", href("pages/cmotd_facilities.html")],
          ["Faculty & Technical Staff", href("pages/cmotd_faculty_technical_staff.html")],
          ["Events & News", "events"],
        ],
      },
      {
        title: "Training",
        links: [
          ["Programme Directory", "programmeDirectory"],
          ["Course Directory", "courses"],
          ["Apply / Register", "register"],
          ["Alumni & Career Impact", href("pages/cmotd_alumni_career_impact.html")],
          [
            "Facilities Booking",
            href("pages/cmotd_facilities_live_availability_schedule_matrix.html"),
          ],
        ],
      },
      {
        title: "Resources",
        links: [
          ["Certificate Verification", "verification"],
          ["Research Repository", "repository"],
          ["Support & FAQs", "support"],
          ["Contact Us", "contact"],
          ["e-Portal Login", "login"],
        ],
      },
    ],
  };
})();
