const coursesData = [
    {
      id: 1,
      title: "AI School — Use AI Like a Pro",
      price: 35,
      priceFormatted: "$35",
      description: "Master prompt engineering, automation, AI agents, chatbots and content creation. No coding required.",
      features: ["Prompt Engineering Mastery", "Build AI Automations", "AI Content Creation", "AI Agents & Chatbots"],
      thumbnailImage: "img/AI.webp",
      thumbnailBg: "linear-gradient(135deg, #e0e7ff, #b9c8ff)"
    },
    {
      id: 2,
      title: "Social Media Management",
      price: 25,
      priceFormatted: "$25",
      description: "Strategy, content planning, community management and analytics. Become the SM pro every brand needs.",
      features: ["Platform Strategy", "Content Calendars", "Audience Growth", "Analytics & Reporting"],
      thumbnailImage: "img/social.avif",
      thumbnailBg: "linear-gradient(145deg, #fff3cd, #ffe6b3)"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      price: 30,
      priceFormatted: "$30",
      description: "Paid ads, SEO, email marketing, funnels and content strategy. Build campaigns that convert.",
      features: ["Meta & Google Ads", "SEO Fundamentals", "Email Marketing", "Funnel Strategy"],
      thumbnailImage: "img/digital.webp",
      thumbnailBg: "linear-gradient(145deg, #cffafe, #a5f3fc)"
    },
    {
      id: 4,
      title: "Graphic Design Essentials",
      price: 22,
      priceFormatted: "$22",
      description: "Visual communication, brand identity, social graphics and marketing materials using professional design tools.",
      features: ["Brand Identity Design", "Social Media Graphics", "Marketing Assets", "Pro Design Tools"],
      thumbnailImage: "img/graphics.avif",
      thumbnailBg: "linear-gradient(145deg, #f3e8ff, #e9d5ff)"
    },
    {
      id: 5,
      title: "Professional Video Editing",
      price: 25,
      priceFormatted: "$25",
      description: "From raw footage to polished content. Reels, YouTube, brand videos and social media — taught professionally.",
      features: ["Reels & Short Videos", "Brand Video Production", "Colour Grading", "Portfolio Building"],
      thumbnailImage: "img/video.webp",
      thumbnailBg: "linear-gradient(145deg, #d9f0ff, #b9e2ff)"
    },
    {
      id: 6,
      title: "Virtual Assistant Training",
      price: 22,
      priceFormatted: "$22",
      description: "Become a premium remote professional. Client management, tools, admin skills and how to find global clients.",
      features: ["Remote Work Tools", "Client Communication", "Admin Mastery", "Finding Global Clients"],
      thumbnailImage: "img/virtual.png",
      thumbnailBg: "linear-gradient(145deg, #ccfbf1, #99f6e4)"
    },
    // Data Analytics Course
    {
      id: 7,
      title: "Data Analytics — Turn Data into Insights",
      price: 35,
      priceFormatted: "$35",
      description: "Learn data analysis, visualization, and business intelligence using Python, Excel, and Power BI.",
      features: ["Python for Data", "Data Visualization", "Excel Mastery", "Power BI", "SQL Fundamentals"],
      thumbnailImage: "img/data.jpg",
     
    },
    // Web Development Course
    {
      id: 8,
      title: "Web Development — Build Modern Websites",
      price: 45,
      priceFormatted: "$45",
      description: "Master how to build professional websites from scratch.",
      features: ["HTML & CSS", "JavaScript", "React", "Responsive Design", "API Integration"],
      thumbnailImage: "img/web.webp",
     
    }
];

// Helper to create full card HTML (string)
function createCardHTML(course) {
    // Only use IMAGE - no SVG fallback
    const thumbnailContent = `<img src="${course.thumbnailImage}" alt="${course.title}" class="course-thumbnail-img">`;
    
    // bullet list
    const bulletItems = course.features.map(feat => `<li>${feat}</li>`).join('');
    
    return `
      <div class="course-card" data-course-id="${course.id}">
        <div class="card-thumbnail" style="background: ${course.thumbnailBg};">
          ${thumbnailContent}
        </div>
        <div class="card-content">
          <h3 class="course-title">${course.title}</h3>
          <p class="description">${course.description}</p>
          <div class="price">${course.priceFormatted} <span>USD</span></div>
          <ul class="feature-list">
            ${bulletItems}
          </ul>
          <button class="enroll-btn" data-name="${course.title}" data-price="${course.priceFormatted}" data-id="${course.id}">
            📘 Enrol Now
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
    document.getElementById('studentName').value = '';
    document.getElementById('studentEmail').value = '';
    modal.classList.add('active');
}

function closeModalFunc() {
    modal.classList.remove('active');
}

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

    alert(`🎉 Enrolment initiated!\n\n📘 Course: ${currentSelected.title}\n💰 Amount: ${currentSelected.price}\n👤 Student: ${name}\n📧 Email: ${email}\n\n✅ You'll receive access instructions within minutes. (Demo mode — payment simulation)`);
    closeModalFunc();
    studentNameInput.value = '';
    studentEmailInput.value = '';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFunc();
});
closeModalBtn.addEventListener('click', closeModalFunc);
enrollmentForm.addEventListener('submit', handleEnrolmentSubmit);

// init render
renderCourses();