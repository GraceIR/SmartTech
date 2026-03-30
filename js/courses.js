 // COURSES DATA (as per brief)
  const coursesData = [
    {
      id: 1,
      title: "AI School — Use AI Like a Pro",
      category: "AI & Tech",
      categoryBadgeColor: "badge-blue",
      price: 25000,
      priceFormatted: "₦25,000",
      level: "All Levels",
      description: "Master prompt engineering, automation, AI agents, chatbots and content creation. No coding required.",
      features: ["Prompt Engineering Mastery", "Build AI Automations", "AI Content Creation", "AI Agents & Chatbots"],
      thumbnailIconType: "ai",
      thumbnailBg: "linear-gradient(135deg, #e0e7ff, #b9c8ff)"
    },
    {
      id: 2,
      title: "Social Media Management",
      category: "Marketing",
      categoryBadgeColor: "badge-yellow",
      price: 20000,
      priceFormatted: "₦20,000",
      level: "Beginner–Mid",
      description: "Strategy, content planning, community management and analytics. Become the SM pro every brand needs.",
      features: ["Platform Strategy", "Content Calendars", "Audience Growth", "Analytics & Reporting"],
      thumbnailIconType: "marketing",
      thumbnailBg: "linear-gradient(145deg, #fff3cd, #ffe6b3)"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      category: "Marketing",
      categoryBadgeColor: "badge-cyan",
      price: 22000,
      priceFormatted: "₦22,000",
      level: "All Levels",
      description: "Paid ads, SEO, email marketing, funnels and content strategy. Build campaigns that convert.",
      features: ["Meta & Google Ads", "SEO Fundamentals", "Email Marketing", "Funnel Strategy"],
      thumbnailIconType: "digital",
      thumbnailBg: "linear-gradient(145deg, #cffafe, #a5f3fc)"
    },
    {
      id: 4,
      title: "Graphic Design Essentials",
      category: "Creative",
      categoryBadgeColor: "badge-lavender",
      price: 18000,
      priceFormatted: "₦18,000",
      level: "Beginner",
      description: "Visual communication, brand identity, social graphics and marketing materials using professional design tools.",
      features: ["Brand Identity Design", "Social Media Graphics", "Marketing Assets", "Pro Design Tools"],
      thumbnailIconType: "design",
      thumbnailBg: "linear-gradient(145deg, #f3e8ff, #e9d5ff)"
    },
    {
      id: 5,
      title: "Professional Video Editing",
      category: "Creative",
      categoryBadgeColor: "badge-blue",
      price: 20000,
      priceFormatted: "₦20,000",
      level: "Beginner–Mid",
      description: "From raw footage to polished content. Reels, YouTube, brand videos and social media — taught professionally.",
      features: ["Reels & Short Videos", "Brand Video Production", "Colour Grading", "Portfolio Building"],
      thumbnailIconType: "video",
      thumbnailBg: "linear-gradient(145deg, #d9f0ff, #b9e2ff)"
    },
    {
      id: 6,
      title: "Virtual Assistant Training",
      category: "Business",
      categoryBadgeColor: "badge-cyan-tint",
      price: 18000,
      priceFormatted: "₦18,000",
      level: "Beginner",
      description: "Become a premium remote professional. Client management, tools, admin skills and how to find global clients.",
      features: ["Remote Work Tools", "Client Communication", "Admin Mastery", "Finding Global Clients"],
      thumbnailIconType: "va",
      thumbnailBg: "linear-gradient(145deg, #ccfbf1, #99f6e4)"
    }
  ];

  // ---- SVG ILLUSTRATIONS (vector art for each category) ----
  function getSvgIcon(type, color = "#1e293b") {
    const iconMap = {
      ai: `<svg class="thumbnail-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="12" width="24" height="18" rx="3" fill="url(#gradAi)" stroke="${color}" stroke-width="1.5"/><path d="M20 8L20 12M20 30L20 34M12 20L8 20M32 20L28 20M15 15L17 18M25 15L23 18M15 27L17 24M25 27L23 24" stroke="${color}" stroke-width="1.4" stroke-linecap="round"/><defs><linearGradient id="gradAi" x1="8" y1="21" x2="32" y2="21" gradientUnits="userSpaceOnUse"><stop stop-color="#3b82f6"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs></svg>`,
      marketing: `<svg class="thumbnail-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 28L30 12M30 12L25 10M30 12L28 17" stroke="${color}" stroke-width="1.7" stroke-linecap="round"/><rect x="6" y="26" width="28" height="6" fill="#f97316" rx="2" fill-opacity="0.7"/><path d="M14 26L14 32M26 26L26 32" stroke="${color}" stroke-width="1.2"/><circle cx="30" cy="12" r="2.5" fill="#facc15" stroke="${color}"/></svg>`,
      digital: `<svg class="thumbnail-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 26L32 26M20 12L20 26M14 20L20 26L26 20" stroke="${color}" stroke-width="1.6" stroke-linecap="round"/><rect x="6" y="28" width="28" height="4" fill="#06b6d4" rx="1.5"/><path d="M12 12L28 12" stroke="${color}" stroke-width="1.4" stroke-dasharray="2 2"/><circle cx="20" cy="10" r="2" fill="#0e7490" stroke="${color}"/></svg>`,
      design: `<svg class="thumbnail-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 12L32 18L20 30L8 18L14 12L20 18L26 12Z" fill="#a855f7" fill-opacity="0.5" stroke="${color}" stroke-width="1.3"/><path d="M20 18L20 30M14 12L20 18L26 12" stroke="${color}" stroke-width="1.4"/><circle cx="20" cy="12" r="2" fill="#c084fc"/></svg>`,
      video: `<svg class="thumbnail-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="12" width="18" height="16" rx="2" fill="#3b82f6" fill-opacity="0.3" stroke="${color}" stroke-width="1.5"/><path d="M26 20L32 16L32 24L26 20Z" fill="#0284c7" stroke="${color}" stroke-width="1.3"/><circle cx="14" cy="20" r="1.8" fill="white"/><rect x="11" y="16" width="2" height="8" fill="${color}"/></svg>`,
      va: `<svg class="thumbnail-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 26L20 32L28 26" stroke="${color}" stroke-width="1.5" fill="#14b8a6" fill-opacity="0.3"/><circle cx="20" cy="20" r="6" stroke="${color}" stroke-width="1.5"/><path d="M20 14L20 20L24 24" stroke="${color}" stroke-width="1.3"/><rect x="16" y="28" width="8" height="4" fill="#2dd4bf"/></svg>`
    };
    return iconMap[type] || iconMap.ai;
  }

  // Helper to create full card HTML (string)
  function createCardHTML(course) {
    const svgString = getSvgIcon(course.thumbnailIconType, "#1f2937");
    // bullet list
    const bulletItems = course.features.map(feat => `<li>${feat}</li>`).join('');
    return `
      <div class="course-card" data-course-id="${course.id}">
        <div class="card-thumbnail" style="background: ${course.thumbnailBg};">
          ${svgString}
        </div>
        <div class="card-content">
          <div class="badge-row">
            <span class="category-badge ${course.categoryBadgeColor}">${course.category}</span>
            <span class="level-tag">🏷️ ${course.level}</span>
          </div>
          <h3 class="course-title">${course.title}</h3>
          <p class="description">${course.description}</p>
          <div class="price">${course.priceFormatted} <span>NGN</span></div>
          <ul class="feature-list">
            ${bulletItems}
          </ul>
          <button class="enroll-btn" data-name="${course.title}" data-price="${course.priceFormatted}" data-id="${course.id}">
            📘 Enrol Now — Pay to Access
          </button>
        </div>
      </div>
    `;
  }

  // Render all courses into grid
  const gridContainer = document.getElementById('coursesGrid');
  function renderCourses() {
    let cardsHTML = '';
    coursesData.forEach(course => {
      cardsHTML += createCardHTML(course);
    });
    gridContainer.innerHTML = cardsHTML;
    attachEnrollEvents();
  }

  // modal handling
  const modal = document.getElementById('paymentModal');
  const modalCourseNameSpan = document.getElementById('modalCourseName');
  const modalCoursePriceSpan = document.getElementById('modalCoursePrice');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const enrollmentForm = document.getElementById('enrollmentForm');

  let currentSelected = { title: '', price: '' };

  function openModal(courseTitle, coursePrice) {
    currentSelected.title = courseTitle;
    currentSelected.price = coursePrice;
    modalCourseNameSpan.innerText = courseTitle;
    modalCoursePriceSpan.innerText = coursePrice;
    // reset form fields
    document.getElementById('studentName').value = '';
    document.getElementById('studentEmail').value = '';
    modal.classList.add('active');
  }

  function closeModalFunc() {
    modal.classList.remove('active');
  }

  // attach event listeners to all Enrol Now buttons
  function attachEnrollEvents() {
    const allEnrollBtns = document.querySelectorAll('.enroll-btn');
    allEnrollBtns.forEach(btn => {
      btn.removeEventListener('click', enrollHandler);
      btn.addEventListener('click', enrollHandler);
    });
  }

  function enrollHandler(e) {
    const button = e.currentTarget;
    const courseName = button.getAttribute('data-name');
    const coursePrice = button.getAttribute('data-price');
    openModal(courseName, coursePrice);
  }

  // payment / enrolment simulation (modal confirm)
  function handleEnrolmentSubmit(event) {
    event.preventDefault();
    const studentNameInput = document.getElementById('studentName');
    const studentEmailInput = document.getElementById('studentEmail');
    const name = studentNameInput.value.trim();
    const email = studentEmailInput.value.trim();

    if (!name || !email) {
      alert("❌ Please enter your full name and email to continue.");
      return;
    }

    // Demo success message with course details pre-filled
    alert(`🎉 Enrolment initiated!\n\n📘 Course: ${currentSelected.title}\n💰 Amount: ${currentSelected.price}\n👤 Student: ${name}\n📧 Email: ${email}\n\n✅ You'll receive access instructions within minutes. (Demo mode — payment simulation)`);
    closeModalFunc();
    // optional: clear form fields
    studentNameInput.value = '';
    studentEmailInput.value = '';
  }

  // Close modal via backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFunc();
  });
  closeModalBtn.addEventListener('click', closeModalFunc);
  enrollmentForm.addEventListener('submit', handleEnrolmentSubmit);

  // init render
  renderCourses();
