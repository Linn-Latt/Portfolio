// darkmode
let darkmode = localStorage.getItem('darkmode');
const modetoggle = document.getElementById('mode-toggle');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
};

if (darkmode === "active") enableDarkmode();

modetoggle.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});


// show navbar
const shownavmenu = (toggleId, navbarId) => {
    const toggle = document.getElementById(toggleId);
    const navbar = document.getElementById(navbarId);

    toggle.addEventListener("click", () => {
        navbar.classList.toggle('show-menu');

        toggle.classList.toggle('show-icon');
    });
};
shownavmenu('nav-toggle', 'nav-menu');




const titles = document.querySelectorAll('.list .title');

titles.forEach(title => {
    title.addEventListener('click', () => {
        // Close all other dropdowns
        titles.forEach(otherTitle => {
            if (otherTitle !== title) 
            {
                const otherParent = otherTitle.parentElement;
                otherParent.classList.remove('active');
                const otherDropdown = otherParent.querySelector('.dropdown');
                if (otherDropdown) otherDropdown.style.display = 'none';

                const otherCaret = otherTitle.querySelector('.caret');
                if (otherCaret) otherCaret.classList.remove('caret-rotate');
            }
        });

        // Toggle the clicked dropdown
        const parent = title.parentElement;
        parent.classList.toggle('active');
        const dropdown = parent.querySelector('.dropdown');
        if (dropdown) 
        {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }

        const caret = title.querySelector('.caret');
        if (caret) 
        {
            caret.classList.toggle('caret-rotate');
        }
    });
});


