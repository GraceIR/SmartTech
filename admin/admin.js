 
    // =============================================
    // ===== DATA =====
    // =============================================

    const coursesData = [{
        id: 1,
        title: "AI School — Use AI Like a Pro",
        price: 35,
        priceFormatted: "$35",
        description: "Master prompt engineering, automation, AI agents, chatbots and content creation.",
        features: ["Prompt Engineering", "AI Automations", "AI Content Creation", "AI Agents"],
        thumbnailImage: "img/AI.webp",
        thumbnailBg: "linear-gradient(135deg, #e0e7ff, #b9c8ff)",
        emoji: "🤖"
    }, {
        id: 2,
        title: "Social Media Management",
        price: 25,
        priceFormatted: "$25",
        description: "Strategy, content planning, community management and analytics.",
        features: ["Platform Strategy", "Content Calendars", "Audience Growth", "Analytics"],
        thumbnailImage: "img/social.avif",
        thumbnailBg: "linear-gradient(145deg, #fff3cd, #ffe6b3)",
        emoji: "📱"
    }, {
        id: 3,
        title: "Digital Marketing Mastery",
        price: 30,
        priceFormatted: "$30",
        description: "Paid ads, SEO, email marketing, funnels and content strategy.",
        features: ["Meta & Google Ads", "SEO Fundamentals", "Email Marketing", "Funnel Strategy"],
        thumbnailImage: "img/digital.webp",
        thumbnailBg: "linear-gradient(145deg, #cffafe, #a5f3fc)",
        emoji: "📊"
    }, {
        id: 4,
        title: "Graphic Design Essentials",
        price: 22,
        priceFormatted: "$22",
        description: "Visual communication, brand identity, social graphics and marketing materials.",
        features: ["Brand Identity", "Social Graphics", "Marketing Assets", "Design Tools"],
        thumbnailImage: "img/graphics.avif",
        thumbnailBg: "linear-gradient(145deg, #f3e8ff, #e9d5ff)",
        emoji: "🎨"
    }, {
        id: 5,
        title: "Professional Video Editing",
        price: 25,
        priceFormatted: "$25",
        description: "From raw footage to polished content. Reels, YouTube, brand videos.",
        features: ["Reels & Short Videos", "Brand Video", "Colour Grading", "Portfolio Building"],
        thumbnailImage: "img/video.webp",
        thumbnailBg: "linear-gradient(145deg, #d9f0ff, #b9e2ff)",
        emoji: "🎬"
    }, {
        id: 6,
        title: "Virtual Assistant Training",
        price: 22,
        priceFormatted: "$22",
        description: "Become a premium remote professional. Client management, tools, admin skills.",
        features: ["Remote Tools", "Client Communication", "Admin Mastery", "Finding Clients"],
        thumbnailImage: "img/virtual.png",
        thumbnailBg: "linear-gradient(145deg, #ccfbf1, #99f6e4)",
        emoji: "💼"
    }, {
        id: 7,
        title: "Data Analytics — Turn Data into Insights",
        price: 35,
        priceFormatted: "$35",
        description: "Learn data analysis, visualization, and business intelligence.",
        features: ["Python for Data", "Data Visualization", "Excel Mastery", "Power BI", "SQL"],
        thumbnailImage: "img/data.jpg",
        thumbnailBg: "linear-gradient(145deg, #e0e7ff, #b9c8ff)",
        emoji: "📈"
    }, {
        id: 8,
        title: "Web Development — Build Modern Websites",
        price: 45,
        priceFormatted: "$45",
        description: "Master how to build professional websites from scratch.",
        features: ["HTML & CSS", "JavaScript", "React", "Responsive Design", "API Integration"],
        thumbnailImage: "img/web.webp",
        thumbnailBg: "linear-gradient(145deg, #d9f0ff, #b9e2ff)",
        emoji: "🌐"
    }];

    const healthTechData = [{
        id: 1,
        title: "How to Use AI as a Doctor",
        category: "AI for Doctors",
        priceFormatted: "$9.38",
        description: "A practical guide to prompt engineering for healthcare professionals.",
        features: ["Medical prompt engineering", "AI tools for clinicians", "Practical case studies"],
        featured: false,
        emoji: "🩺"
    }, {
        id: 2,
        title: "Healthcare Data Analysis",
        category: "Most Popular",
        priceFormatted: "$35",
        description: "Master healthcare data analysis, visualization, and interpretation.",
        features: ["Healthcare Data Fundamentals", "Data Visualization", "Medical Statistics"],
        featured: true,
        emoji: "📊"
    }, {
        id: 3,
        title: "The Impact of Technology on Healthcare",
        category: "Healthcare Insight",
        priceFormatted: "$7.50",
        description: "Understand how technology is reshaping medicine and healthcare.",
        features: ["Digital health landscape", "Telemedicine", "AI in medicine"],
        featured: false,
        emoji: "🏥"
    }];

    // ===== REST OF YOUR DATA =====
    const testimonialsData = [
        { name: "Adaeze M.", type: "Video", content: "The AI School completely changed how I work...", rating: 5,
            status: "published", date: "2025-06-10" },
        { name: "Fatima K.", type: "Written", content: "I joined the Virtual Assistant training...", rating: 5,
            status: "pending", date: "2025-06-09" },
        { name: "Tunde O.", type: "Video", content: "I landed my first paying client...", rating: 5,
            status: "published", date: "2025-06-08" }
    ];

    const projectsData = [
        { name: "Smart Tech Academy", category: "Education", status: "active", date: "2025-06-10" },
        { name: "Health Tech Cohort", category: "Healthcare", status: "ongoing", date: "2025-06-05" }
    ];

    const newsletterData = [
        { email: "adaeze.m@email.com", date: "2025-06-10", status: "active" },
        { email: "tunde.o@email.com", date: "2025-06-09", status: "active" },
        { email: "fatima.k@email.com", date: "2025-06-08", status: "unsubscribed" }
    ];

    const paymentsData = [
        { id: "#TX-2025-001", user: "Adaeze M.", course: "AI School", amount: "₦85,000", status: "paid",
            date: "2025-06-10" },
        { id: "#TX-2025-002", user: "Tunde O.", course: "Digital Marketing", amount: "₦65,000", status: "paid",
            date: "2025-06-09" },
        { id: "#TX-2025-003", user: "Fatima K.", course: "Virtual Assistant", amount: "₦45,000", status: "pending",
            date: "2025-06-08" }
    ];

    // =============================================
    // ===== ACTION BUTTON FUNCTIONS =====
    // =============================================

    function viewItem(type, id) {
        showToast(`📋 Viewing ${type} #${id}`, 'info');
        console.log(`View ${type} with ID: ${id}`);
    }

    function editItem(type, id) {
        showToast(`✏️ Editing ${type} #${id}`, 'warning');
        console.log(`Edit ${type} with ID: ${id}`);
    }

    function deleteItem(type, id) {
        if (confirm(`⚠️ Are you sure you want to delete this ${type}?`)) {
            showToast(`🗑️ ${type} #${id} deleted!`, 'success');
            console.log(`Delete ${type} with ID: ${id}`);
        }
    }

    // =============================================
    // ===== RENDER FUNCTIONS (with emoji fallbacks) =====
    // =============================================

    function renderCourses() {
        const tbody = document.getElementById('coursesTableBody');
        if (!tbody) return;
        tbody.innerHTML = coursesData.map(c => `
            <tr>
                <td>
                    <div style="width:50px;height:50px;border-radius:8px;background:${c.thumbnailBg || '#1A7EB6'};display:flex;align-items:center;justify-content:center;font-size:24px;color:white;">
                        ${c.emoji || '📚'}
                    </div>
                </td>
                <td><strong>${c.title}</strong></td>
                <td>${c.priceFormatted}</td>
                <td>${c.features.slice(0, 3).join(', ')}${c.features.length > 3 ? '...' : ''}</td>
                <td><span class="status-badge published">Active</span></td>
                <td>
                    <div class="action-btns">
                        <button class="btn-view" onclick="viewItem('course', ${c.id})"><i class="fas fa-eye"></i></button>
                        <button class="btn-edit" onclick="editItem('course', ${c.id})"><i class="fas fa-edit"></i></button>
                        <button class="btn-delete" onclick="deleteItem('course', ${c.id})"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    function renderHealth() {
        const tbody = document.getElementById('healthTableBody');
        if (!tbody) return;
        tbody.innerHTML = healthTechData.map(c => `
            <tr>
                <td>
                    <div style="width:50px;height:50px;border-radius:8px;background:${c.featured ? '#10B981' : '#1A7EB6'};display:flex;align-items:center;justify-content:center;font-size:24px;color:white;">
                        ${c.emoji || '🏥'}
                    </div>
                </td>
                <td><strong>${c.title}</strong></td>
                <td><span class="status-badge ${c.featured ? 'paid' : 'published'}">${c.category}</span></td>
                <td>${c.priceFormatted}</td>
                <td>${c.features.join(', ')}</td>
                <td><span class="status-badge ${c.featured ? 'paid' : 'published'}">${c.featured ? 'Featured' : 'Active'}</span></td>
                <td>
                    <div class="action-btns">
                        <button class="btn-view" onclick="viewItem('health', ${c.id})"><i class="fas fa-eye"></i></button>
                        <button class="btn-edit" onclick="editItem('health', ${c.id})"><i class="fas fa-edit"></i></button>
                        <button class="btn-delete" onclick="deleteItem('health', ${c.id})"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    function renderTestimonials() {
        const tbody = document.getElementById('testimonialsTableBody');
        if (!tbody) return;
        tbody.innerHTML = testimonialsData.map((t, i) => `
            <tr>
                <td><strong>${t.name}</strong></td>
                <td><span class="status-badge ${t.type === 'Video' ? 'published' : 'pending'}">${t.type}</span></td>
                <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">"${t.content}"</td>
                <td>${'⭐'.repeat(t.rating)}</td>
                <td><span class="status-badge ${t.status}">${t.status.charAt(0).toUpperCase() + t.status.slice(1)}</span></td>
                <td>${t.date}</td>
                <td>
                    <div class="action-btns">
                        <button class="btn-view" onclick="viewItem('testimonial', ${i+1})"><i class="fas fa-eye"></i></button>
                        <button class="btn-edit" onclick="editItem('testimonial', ${i+1})"><i class="fas fa-edit"></i></button>
                        <button class="btn-delete" onclick="deleteItem('testimonial', ${i+1})"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    function renderProjects() {
        const tbody = document.getElementById('projectsTableBody');
        if (!tbody) return;
        tbody.innerHTML = projectsData.map((p, i) => `
            <tr>
                <td><strong>${p.name}</strong></td>
                <td>${p.category}</td>
                <td><span class="status-badge ${p.status}">${p.status.charAt(0).toUpperCase() + p.status.slice(1)}</span></td>
                <td>${p.date}</td>
                <td>
                    <div class="action-btns">
                        <button class="btn-view" onclick="viewItem('project', ${i+1})"><i class="fas fa-eye"></i></button>
                        <button class="btn-edit" onclick="editItem('project', ${i+1})"><i class="fas fa-edit"></i></button>
                        <button class="btn-delete" onclick="deleteItem('project', ${i+1})"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    function renderNewsletter() {
        const tbody = document.getElementById('newsletterTableBody');
        if (!tbody) return;
        tbody.innerHTML = newsletterData.map((n, i) => `
            <tr>
                <td>${n.email}</td>
                <td>${n.date}</td>
                <td><span class="status-badge ${n.status}">${n.status.charAt(0).toUpperCase() + n.status.slice(1)}</span></td>
                <td>
                    <div class="action-btns">
                        <button class="btn-edit" onclick="editItem('subscriber', ${i+1})"><i class="fas fa-edit"></i></button>
                        <button class="btn-delete" onclick="deleteItem('subscriber', ${i+1})"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    function renderPayments() {
        const tbody = document.getElementById('paymentsTableBody');
        if (!tbody) return;
        tbody.innerHTML = paymentsData.map((p, i) => `
            <tr>
                <td>${p.id}</td>
                <td>${p.user}</td>
                <td>${p.course}</td>
                <td>${p.amount}</td>
                <td><span class="status-badge ${p.status}">${p.status.charAt(0).toUpperCase() + p.status.slice(1)}</span></td>
                <td>${p.date}</td>
                <td>
                    <div class="action-btns">
                        <button class="btn-view" onclick="viewItem('payment', ${i+1})"><i class="fas fa-eye"></i></button>
                        <button class="btn-edit" onclick="editItem('payment', ${i+1})"><i class="fas fa-edit"></i></button>
                        <button class="btn-delete" onclick="deleteItem('payment', ${i+1})"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    // =============================================
    // ===== DARK MODE TOGGLE =====
    // =============================================

    const themeToggle = document.getElementById('themeToggle');
    const themeLabel = document.getElementById('themeLabel');
    let currentTheme = localStorage.getItem('theme') || 'light';

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        currentTheme = theme;
        themeLabel.textContent = theme === 'dark' ? 'Dark' : 'Light';
    }

    setTheme(currentTheme);

    themeToggle.addEventListener('click', function() {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        showToast(`Switched to ${newTheme} mode!`, 'success');
    });

    // =============================================
    // ===== SIDEBAR =====
    // =============================================

    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function toggleSidebar() {
        sidebar.classList.toggle('open');
        sidebarOverlay.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);

    // =============================================
    // ===== NAVIGATION =====
    // =============================================

    const menuItems = document.querySelectorAll('.sidebar-menu .menu-item');
    const sections = {
        dashboard: document.getElementById('section-dashboard'),
        payments: document.getElementById('section-payments'),
        users: document.getElementById('section-users'),
        testimonials: document.getElementById('section-testimonials'),
        projects: document.getElementById('section-projects'),
        courses: document.getElementById('section-courses'),
        health: document.getElementById('section-health'),
        newsletter: document.getElementById('section-newsletter'),
        settings: document.getElementById('section-settings')
    };

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            Object.values(sections).forEach(section => {
                if (section) section.style.display = 'none';
            });
            const sectionId = this.getAttribute('data-section');
            if (sectionId && sections[sectionId]) {
                sections[sectionId].style.display = 'block';
            }
            if (window.innerWidth <= 1024) toggleSidebar();
        });
    });

    // =============================================
    // ===== TABS =====
    // =============================================

    document.querySelectorAll('.admin-tabs').forEach(tabContainer => {
        const tabs = tabContainer.querySelectorAll('.tab-btn');
        const parentSection = tabContainer.closest('.section-content');
        const tabContents = parentSection.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                tabContents.forEach(content => content.classList.remove('active'));
                const tabId = this.getAttribute('data-tab');
                const targetContent = parentSection.querySelector(`#${tabId}`);
                if (targetContent) targetContent.classList.add('active');
            });
        });
    });

    // =============================================
    // ===== MODALS =====
    // =============================================

    function openModal(modalId) {
        document.getElementById(modalId).classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // =============================================
    // ===== TOAST =====
    // =============================================

    let toastTimeout;

    function showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        toast.className = 'toast-notification';
        toast.classList.add(type);
        toastMessage.textContent = message;
        const icon = toast.querySelector('i');
        icon.className = type === 'success' ? 'fas fa-check-circle' :
            type === 'error' ? 'fas fa-exclamation-circle' :
            'fas fa-exclamation-triangle';
        toast.classList.add('show');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => toast.classList.remove('show'), 4000);
    }

    // =============================================
    // ===== NOTIFICATION =====
    // =============================================

    document.querySelector('.notification-btn').addEventListener('click', function() {
        showToast('You have 3 new notifications!', 'warning');
    });

    // =============================================
    // ===== INIT =====
    // =============================================

    // Wait for DOM to fully load
    document.addEventListener('DOMContentLoaded', function() {
        renderCourses();
        renderHealth();
        renderTestimonials();
        renderProjects();
        renderNewsletter();
        renderPayments();

        console.log('🚀 Admin Dashboard loaded successfully!');
        console.log('📚 Courses:', coursesData.length);
        console.log('🏥 Health Tech:', healthTechData.length);
    });
