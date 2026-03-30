(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });



})(jQuery);




// navbar link active          
    (function() {
        
        function getCurrentFileName() {
            let path = window.location.pathname;
           
            let fileName = path.substring(path.lastIndexOf('/') + 1);
           
            if (fileName === "") {
                return "index.html";
            }
            
            fileName = fileName.split('?')[0].split('#')[0];
            return fileName;
        }

      
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        if (!navLinks.length) return;

        const currentFile = getCurrentFileName();

       
        navLinks.forEach(link => {
            
            link.classList.remove('active');
            
            let href = link.getAttribute('href');
            if (!href) return;
            
            
            let targetFile = href.split('?')[0].split('#')[0];
            
            if (targetFile.includes('/')) {
                targetFile = targetFile.substring(targetFile.lastIndexOf('/') + 1);
            }
           
            if (targetFile === "") return;
            
           
            if (targetFile === currentFile) {
                link.classList.add('active');
            }
            
            
            if ((currentFile === "index.html" || currentFile === "") && (targetFile === "index.html" || targetFile === "")) {
           
                if (!link.classList.contains('active')) {
                    link.classList.add('active');
                }
            }
            
          
            if ((currentFile === "index.html") && (targetFile === "" || targetFile === "index.html")) {
                link.classList.add('active');
            }
        });
        
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
              
                navLinks.forEach(nav => nav.classList.remove('active'));
              
                this.classList.add('active');
                
            });
        });
        
      
        
       
        window.addEventListener('pageshow', function() {
            // re-run active check (ensures active class matches after back/forward cache)
            const newCurrentFile = getCurrentFileName();
            navLinks.forEach(link => {
                let href = link.getAttribute('href');
                if (!href) return;
                let targetFile = href.split('?')[0].split('#')[0];
                if (targetFile.includes('/')) targetFile = targetFile.substring(targetFile.lastIndexOf('/') + 1);
                if (targetFile === "") return;
                link.classList.remove('active');
                if (targetFile === newCurrentFile) {
                    link.classList.add('active');
                }
                if ((newCurrentFile === "index.html" || newCurrentFile === "") && (targetFile === "index.html" || targetFile === "")) {
                    link.classList.add('active');
                }
            });
        });
        
        // Provide console feedback (optional, can be removed in production)
        console.log(`Active navigation initialized. Current page: ${currentFile}`);
    })();


    

 

    const form = document.getElementById('newsletterForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // NOTE FOR DEVELOPER: Connect this to Mailchimp, ConvertKit, or chosen platform
      successMessage.style.display = 'block';
      form.reset();
    });
  

      function openModal(id) {
      document.getElementById(id).style.display = 'flex';
    }
    function closeModal(id) {
      document.getElementById(id).style.display = 'none';
    }

    // Consultation form
    document.getElementById('consultationForm').addEventListener('submit', function(e){
      e.preventDefault();
      closeModal('consultationModal');
      showToast('Request Received! Our team will reach out within 24 hours.');
      // NOTE FOR DEVELOPER: Send email notification to client, optionally connect to CRM
    });

    // Enrolment form
    document.getElementById('enrolmentForm').addEventListener('submit', function(e){
      e.preventDefault();
      closeModal('enrolmentModal');
      // NOTE FOR DEVELOPER: Integrate with Paystack/Flutterwave, redirect or send WhatsApp notification
      showToast('Proceeding to payment gateway...');
    });

    function showToast(message) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 3000);
    }
 

  
  