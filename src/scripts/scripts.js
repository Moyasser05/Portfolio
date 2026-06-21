function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.activeElement.blur();
}

const projectsData = {
    mccld: {
        icon: '<i class="fa-solid fa-industry text-primary"></i>',
        title: "Metal Collection Company",
        desc: "Enhanced the frontend of a Saudi industrial company website by improving UI, responsiveness, performance, and overall user experience. Focused on optimizing load times and making the site fully usable across devices.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://www.mccld.sa"
    },
    elegance: {
        icon: '<i class="fa-solid fa-spray-can-sparkles text-secondary"></i>',
        title: "Elegance Oud",
        desc: "Full e-commerce frontend with product filtering, real-time favorites, multilingual support (Arabic/English), and a modern, conversion-focused checkout experience.",
        tech: ["Vue 3", "Element Plus", "Bootstrap", "Vue i18n"],
        link: "https://eleganceoud.com"
    },
    liwa: {
        icon: '<i class="fa-solid fa-mountain-sun text-accent"></i>',
        title: "Liwa Website",
        desc: "Corporate website built with React featuring REST API integration, Tailwind CSS styling, client-side routing, and performance optimizations for fast page loads.",
        tech: ["React", "Tailwind CSS", "React Router"],
        link: "https://www.liwaoasis.shop/"
    },
    otp: {
        icon: '<i class="fa-solid fa-shield-halved text-success"></i>',
        title: "OTP Demo API",
        desc: "RESTful backend service for OTP generation, verification, and admin management workflows, built with Django REST Framework and secured endpoints.",
        tech: ["Python", "Django", "REST API"],
        link: "#"
    },
    webenia: {
        icon: '<i class="fa-solid fa-code text-info"></i>',
        title: "Webenia Website",
        desc: "Responsive corporate frontend built with reusable UI components and dynamic routing, designed for easy scaling and maintenance.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://webenia.com"
    }
};

function openProjectModal(key) {
    const data = projectsData[key];
    if (!data) return;

    document.getElementById('modalIcon').innerHTML = data.icon;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDesc').textContent = data.desc;
    document.getElementById('modalLink').href = data.link;

    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    data.tech.forEach(t => {
        const badge = document.createElement('span');
        badge.className = 'badge badge-primary';
        badge.textContent = t;
        techContainer.appendChild(badge);
    });

    document.getElementById('projectModal').showModal();
}

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');

function showFieldError(input, errorId, show) {
    const errorEl = document.getElementById(errorId);
    if (show) {
        input.classList.add('input-error', 'textarea-error');
        errorEl.style.display = 'block';
    } else {
        input.classList.remove('input-error', 'textarea-error');
        errorEl.style.display = 'none';
    }
}

function validateName() {
    const valid = nameInput.value.trim().length >= 2;
    showFieldError(nameInput, 'nameError', !valid);
    return valid;
}

function validateEmail() {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = pattern.test(emailInput.value.trim());
    showFieldError(emailInput, 'emailError', !valid);
    return valid;
}

function validateMessage() {
    const valid = messageInput.value.trim().length >= 10;
    showFieldError(messageInput, 'messageError', !valid);
    return valid;
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

function showToast(message, type) {
    const toast = document.getElementById('toast');
    const alertBox = document.getElementById('toastAlert');
    const msg = document.getElementById('toastMsg');

    msg.textContent = message;
    alertBox.className = 'alert bg-' + type;
    toast.style.display = 'block';

    setTimeout(() => { toast.style.display = 'none'; }, 3000);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (!isNameValid || !isEmailValid || !isMessageValid) {
        showToast('Please fix the errors before submitting.', 'error');
        return;
    }

    showToast('Message sent successfully!', 'success');
    form.reset();
    showFieldError(nameInput, 'nameError', false);
    showFieldError(emailInput, 'emailError', false);
    showFieldError(messageInput, 'messageError', false);
});