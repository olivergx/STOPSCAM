const bars = document.querySelector("#bars");
const icon = document.querySelector("#bars > i");

const openNav = () => {
    /* navigation */
    document.querySelector("nav > ul").classList.toggle("show");
    /* icon - skifter mellem burger-ikon og kryds */
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
    /* aria-expanded */
    const expanded = bars.getAttribute('aria-expanded') === 'true';
    bars.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    /* aria-label */
    const label = bars.getAttribute('aria-label') === 'åbn navigation';
    bars.setAttribute('aria-label', label ? 'luk navigation' : 'åbn navigation');
}

bars.addEventListener("click", openNav);
