
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add hover effects for project items
        document.querySelectorAll('.project').forEach(project => {
            project.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            project.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Add active nav link highlighting
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.style.color = '#cccccc';
                if (link.getAttribute('href') === `#${current}`) {
                    link.style.color = '#3b82f6';
                }
            });
        });
