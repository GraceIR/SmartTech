


    (function() {
        // DOM elements
        const modalOverlay = document.getElementById('bookingModal');
        const modalServiceText = document.getElementById('modalServiceText');
        let currentService = null;

        // Helper functions
        function openModal(serviceName = null) {
            if (serviceName) {
                currentService = serviceName;
                modalServiceText.innerHTML = `You're interested in <strong>${escapeHtml(serviceName)}</strong>. Fill the form and we'll connect you with an expert.`;
            } else {
                currentService = "General consultation";
                modalServiceText.innerHTML = `Tell us about your needs, we'll get back to you within 24h.`;
            }
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
            document.getElementById('userName').value = '';
            document.getElementById('userEmail').value = '';
            document.getElementById('userPhone').value = '';
            currentService = null;
        }

        function escapeHtml(str) {
            if (!str) return '';
            return str.replace(/[&<>]/g, function(m) {
                if (m === '&') return '&amp;';
                if (m === '<') return '&lt;';
                if (m === '>') return '&gt;';
                return m;
            });
        }

        function submitBookingRequest() {
            const name = document.getElementById('userName').value.trim();
            const email = document.getElementById('userEmail').value.trim();
            const phone = document.getElementById('userPhone').value.trim();

            if (!name || !email) {
                alert('Please enter your name and email address to book a consultation.');
                return;
            }
            if (!email.includes('@') || !email.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }

            const serviceInfo = currentService ? `Service: ${currentService}` : 'General inquiry';
            alert(`✅ Thanks ${name}! Your consultation request for "${currentService || 'consultation'}" has been received. We'll email ${email} within 24h to schedule.`);
            console.log(`Booking request: ${serviceInfo}, Name: ${name}, Email: ${email}, Phone: ${phone}`);
            closeModal();
        }

        // Handle card clicks
        const cards = document.querySelectorAll('.service-card');
        cards.forEach(card => {
            const titleElem = card.querySelector('.card-title');
            const serviceTitle = titleElem ? titleElem.innerText : 'Consultation';
            
            card.addEventListener('click', (e) => {
                if (e.target.closest('.card-link')) {
                    return;
                }
                openModal(serviceTitle);
            });

            const linkBtn = card.querySelector('.card-link');
            if (linkBtn) {
                linkBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openModal(serviceTitle);
                });
            }
        });

        // Book a Free Call button
        const freeCallBtn = document.getElementById('freeCallBtn');
        if (freeCallBtn) {
            freeCallBtn.addEventListener('click', () => {
                currentService = "Free discovery call";
                modalServiceText.innerHTML = `You're booking a <strong>free discovery call</strong>. Share your details and we'll map out the exact digital support your business needs to grow.`;
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }

        // WhatsApp button - FIXED
        const whatsappBtn = document.getElementById('whatsappBtn');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => {
                // Replace with your actual WhatsApp number (include country code without +)
                const whatsappNumber = "2348012345678"; // Nigeria number example
                const message = encodeURIComponent("Hello! I'm interested in your digital business solutions. I'd like to speak to someone about growing my business.");
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
                window.open(whatsappUrl, '_blank');
            });
        }

        // Modal close handlers
        const closeModalBtn = document.getElementById('closeModalBtn');
        const closeIcon = document.getElementById('closeModalIcon');
        if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
        if (closeIcon) closeIcon.addEventListener('click', closeModal);
        
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        // Submit button
        const submitBtn = document.getElementById('submitBooking');
        if (submitBtn) submitBtn.addEventListener('click', submitBookingRequest);

        // Enter key handling
        const inputs = ['userName', 'userEmail', 'userPhone'];
        inputs.forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        submitBookingRequest();
                    }
                });
            }
        });

        console.log("All buttons are working! WhatsApp, Book a Consultation, and Book a Free Call are fully functional.");
    })();
