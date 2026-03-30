(function() {
    // ========== HEALTH TECH COURSES ==========
    const healthTechCourses = [
        {
            id: 1,
            title: "🤖 How to Use AI as a Doctor",
            category: "AI for Doctors",
            badgeClass: "badge-cyan",
            priceRaw: 15000,
            priceFormatted: "₦15,000",
            description: "A practical guide to prompt engineering for healthcare professionals. AI tools to enhance clinical workflow, research, and patient communication.",
            features: ["Medical prompt engineering", "AI tools for clinicians", "Practical case studies"],
            featured: false,
            buttonClass: "enroll-btn",
            buttonText: "Enrol — Pay to Access →"
        },
        {
            id: 2,
            title: "🗺️ The Ultimate Health Tech Roadmap 2026",
            category: "Most Popular",
            badgeClass: "badge-yellow",
            priceRaw: 20000,
            priceFormatted: "₦20,000",
            description: "A step-by-step guide for healthcare professionals ready to transition into health technology. Know where to start, what to learn, and how to position yourself.",
            features: ["Career transition roadmap", "Health tech roles explained", "Personalised pathway guide"],
            featured: true,
            buttonClass: "enroll-btn yellow-tint",
            buttonText: "Enrol — Pay to Access →"
        },
        {
            id: 3,
            title: "🏥 The Impact of Technology on Healthcare",
            category: "Healthcare Insight",
            badgeClass: "badge-cyan",
            priceRaw: 12000,
            priceFormatted: "₦12,000",
            description: "Understand how technology is reshaping medicine — telemedicine, AI diagnostics, digital health platforms. Essential for every forward-thinking healthcare professional.",
            features: ["Digital health landscape", "Telemedicine & AI in medicine", "Future of healthcare tech"],
            featured: false,
            buttonClass: "enroll-btn",
            buttonText: "Enrol — Pay to Access →"
        }
    ];

    // Helper to generate card HTML
    function generateCardHTML(course) {
        const featuredClass = course.featured ? "featured" : "";
        const featuresList = course.features.map(f => `<li>${f}</li>`).join('');
        return `
            <div class="course-card ${featuredClass}" data-course-id="${course.id}">
                <div class="card-content">
                    <div class="badge-row">
                        <span class="category-badge ${course.badgeClass}">${course.category}</span>
                    </div>
                    <h3 class="course-title">${course.title}</h3>
                    <p class="description">${course.description}</p>
                    <div class="price">${course.priceFormatted} <span>NGN</span></div>
                    <ul class="feature-list">
                        ${featuresList}
                    </ul>
                    <button class="${course.buttonClass}" data-name="${course.title}" data-price="${course.priceFormatted}" data-id="${course.id}">
                        ${course.buttonText}
                    </button>
                </div>
            </div>
        `;
    }

    // DOM elements
    const grid = document.getElementById('coursesGrid');
    if (!grid) return; // exit if not on health page

    function renderHealthCourses() {
        let html = '';
        healthTechCourses.forEach(course => {
            html += generateCardHTML(course);
        });
        grid.innerHTML = html;
        attachButtonEvents();
    }

    // Modal elements
    const modal = document.getElementById('paymentModal');
    const modalCourseName = document.getElementById('modalCourseName');
    const modalCoursePrice = document.getElementById('modalCoursePrice');
    const closeModal = document.getElementById('closeModalBtn');
    const enrollmentForm = document.getElementById('enrollmentForm');

    let currentCourse = { title: '', price: '' };

    function openModal(courseTitle, coursePrice) {
        currentCourse.title = courseTitle;
        currentCourse.price = coursePrice;
        modalCourseName.innerText = courseTitle;
        modalCoursePrice.innerText = coursePrice;
        document.getElementById('studentName').value = '';
        document.getElementById('studentEmail').value = '';
        modal.classList.add('active');
    }

    function closeModalFunc() {
        modal.classList.remove('active');
    }

    function attachButtonEvents() {
        const btns = document.querySelectorAll('.enroll-btn');
        btns.forEach(btn => {
            btn.removeEventListener('click', enrollHandler);
            btn.addEventListener('click', enrollHandler);
        });
    }

    function enrollHandler(e) {
        const btn = e.currentTarget;
        const name = btn.getAttribute('data-name');
        const price = btn.getAttribute('data-price');
        openModal(name, price);
    }

    function handleEnrollmentSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('studentName').value.trim();
        const email = document.getElementById('studentEmail').value.trim();
        if (!name || !email) {
            alert("❌ Please enter your full name and email address.");
            return;
        }
        alert(`🎉 Enrolment initiated!\n\n📘 Course: ${currentCourse.title}\n💰 Amount: ${currentCourse.price}\n👤 Student: ${name}\n📧 Email: ${email}\n\n✅ You will receive access instructions shortly. (Demo mode)`);
        closeModalFunc();
    }

    // Event listeners
    if (modal) {
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModalFunc(); });
        if (closeModal) closeModal.addEventListener('click', closeModalFunc);
        if (enrollmentForm) enrollmentForm.addEventListener('submit', handleEnrollmentSubmit);
    }

    // Initialize
    renderHealthCourses();
})();
