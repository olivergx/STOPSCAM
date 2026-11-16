/* Scam-test
   Hver besked har en knap og en svarboks.
   Når man trykker på knappen, vises eller skjules svaret - præcis som menuen i script.js.
   Koden er den samme for alle 10 beskeder. Det eneste, der skifter, er tallet. */

/* Besked 1 */
const knap1 = document.querySelector("#knap-1");
const svar1 = document.querySelector("#svar-1");

const visSvar1 = () => {
    /* svarboks */
    svar1.classList.toggle("show");
    /* aria-expanded */
    const expanded = knap1.getAttribute('aria-expanded') === 'true';
    knap1.setAttribute('aria-expanded', expanded ? 'false' : 'true');
}

knap1.addEventListener("click", visSvar1);

/* Besked 2 */
const knap2 = document.querySelector("#knap-2");
const svar2 = document.querySelector("#svar-2");

const visSvar2 = () => {
    /* svarboks */
    svar2.classList.toggle("show");
    /* aria-expanded */
    const expanded = knap2.getAttribute('aria-expanded') === 'true';
    knap2.setAttribute('aria-expanded', expanded ? 'false' : 'true');
}

knap2.addEventListener("click", visSvar2);

/* Besked 3 */
const knap3 = document.querySelector("#knap-3");
const svar3 = document.querySelector("#svar-3");

const visSvar3 = () => {
    /* svarboks */
    svar3.classList.toggle("show");
    /* aria-expanded */
    const expanded = knap3.getAttribute('aria-expanded') === 'true';
    knap3.setAttribute('aria-expanded', expanded ? 'false' : 'true');
}

knap3.addEventListener("click", visSvar3);

/* Besked 4 */
const knap4 = document.querySelector("#knap-4");
const svar4 = document.querySelector("#svar-4");

const visSvar4 = () => {
    /* svarboks */
    svar4.classList.toggle("show");
    /* aria-expanded */
    const expanded = knap4.getAttribute('aria-expanded') === 'true';
    knap4.setAttribute('aria-expanded', expanded ? 'false' : 'true');
}

knap4.addEventListener("click", visSvar4);

/* Besked 5 */
const knap5 = document.querySelector("#knap-5");
const svar5 = document.querySelector("#svar-5");

const visSvar5 = () => {
    /* svarboks */
    svar5.classList.toggle("show");
    /* aria-expanded */
    const expanded = knap5.getAttribute('aria-expanded') === 'true';
    knap5.setAttribute('aria-expanded', expanded ? 'false' : 'true');
}

knap5.addEventListener("click", visSvar5);

/* Besked 6 */
const knap6 = document.querySelector("#knap-6");
const svar6 = document.querySelector("#svar-6");

const visSvar6 = () => {
    /* svarboks */
    svar6.classList.toggle("show");
    /* aria-expanded */
    const expanded = knap6.getAttribute('aria-expanded') === 'true';
    knap6.setAttribute('aria-expanded', expanded ? 'false' : 'true');
}

knap6.addEventListener("click", visSvar6);

/* Besked 7 */
const knap7 = document.querySelector("#knap-7");
const svar7 = document.querySelector("#svar-7");

const visSvar7 = () => {
    /* svarboks */
    svar7.classList.toggle("show");
    /* aria-expanded */
    const expanded = knap7.getAttribute('aria-expanded') === 'true';
    knap7.setAttribute('aria-expanded', expanded ? 'false' : 'true');
}

knap7.addEventListener("click", visSvar7);

/* Besked 8 */
const knap8 = document.querySelector("#knap-8");
const svar8 = document.querySelector("#svar-8");

const visSvar8 = () => {
    /* svarboks */
    svar8.classList.toggle("show");
    /* aria-expanded */
    const expanded = knap8.getAttribute('aria-expanded') === 'true';
    knap8.setAttribute('aria-expanded', expanded ? 'false' : 'true');
}

knap8.addEventListener("click", visSvar8);

/* Besked 9 */
const knap9 = document.querySelector("#knap-9");
const svar9 = document.querySelector("#svar-9");

const visSvar9 = () => {
    /* svarboks */
    svar9.classList.toggle("show");
    /* aria-expanded */
    const expanded = knap9.getAttribute('aria-expanded') === 'true';
    knap9.setAttribute('aria-expanded', expanded ? 'false' : 'true');
}

knap9.addEventListener("click", visSvar9);

/* Besked 10 */
const knap10 = document.querySelector("#knap-10");
const svar10 = document.querySelector("#svar-10");

const visSvar10 = () => {
    /* svarboks */
    svar10.classList.toggle("show");
    /* aria-expanded */
    const expanded = knap10.getAttribute('aria-expanded') === 'true';
    knap10.setAttribute('aria-expanded', expanded ? 'false' : 'true');
}

knap10.addEventListener("click", visSvar10);
