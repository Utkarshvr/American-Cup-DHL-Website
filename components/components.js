// Shared Components JavaScript

// Hamburger Menu Toggle
function toggleHamburgerMenu() {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  
  if (hamburgerMenu && mobileSidebar && sidebarOverlay) {
    hamburgerMenu.classList.toggle('active');
    mobileSidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('open');
    
    // Prevent body scroll when menu is open
    if (mobileSidebar.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

// Close mobile menu when clicking overlay
function closeMobileMenu() {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  
  if (hamburgerMenu && mobileSidebar && sidebarOverlay) {
    hamburgerMenu.classList.remove('active');
    mobileSidebar.classList.remove('open');
    sidebarOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Set active navigation link based on current page
function setActiveNavLink() {
  const currentPage = document.body.getAttribute('data-page');
  const navLinks = document.querySelectorAll('.nav-link, .sidebar-link');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('data-page');
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Initialize components when DOM is ready
function initializeComponents() {
  // Add event listeners for hamburger menu
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', toggleHamburgerMenu);
  }
  
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeMobileMenu);
  }
  
  // Set active navigation link
  setActiveNavLink();
}

// Initialize components after they are loaded
function initializeComponentsAfterLoad() {
  // Use a small delay to ensure DOM is updated
  setTimeout(() => {
    initializeComponents();
  }, 100);
}

// Export the initialization function for use in pages
window.initializeComponentsAfterLoad = initializeComponentsAfterLoad;
