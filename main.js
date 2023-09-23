function inittabnav(){
    const tabmenu = document.querySelectorAll('.js-tabmenu li');
    const tabcontent = document.querySelectorAll('.js-tabcontent section');
    tabcontent[0].classList.add('ativo');

    if(tabmenu.length && tabcontent.length){
        function activetab(index) {
            tabcontent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabcontent[index].classList.add('ativo');
        }
        
        tabmenu.forEach((itemmenu, index) => {
            itemmenu.addEventListener('click', () =>{
                activetab(index);
            });
        });
    }
}
inittabnav();
function initaccordion(){
    const accordionlist = document.querySelectorAll('.js-accordion dt');
    if(accordionlist.length){
        accordionlist[0].classList.add('ativo');
        accordionlist[0].nextElementSibling.classList.add('ativo');

        function activeaccordion(event){
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        }

        accordionlist.forEach((item) => {
            item.addEventListener('click', activeaccordion);
        });
    }
}
initaccordion();
function initscrollsuave(){
    function scroltosection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    const linksinternos = document.querySelectorAll('.js-menu a[href^="#"]');
    linksinternos.forEach((link) => {
        link.addEventListener('click', scroltosection);
    });
}
initscrollsuave();

function initanimascroll(){
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
        const metade = window.innerHeight * 0.5;

        function animascroll() {
            sections.forEach((section) => {
                const sectiontop = section.getBoundingClientRect().top;
                const issectionvisible = (sectiontop - metade) < 0;
                if(issectionvisible) {
                    section.classList.add('ativo');
                }
            });
        }
        window.addEventListener('scroll', animascroll);
    }
}
initanimascroll();