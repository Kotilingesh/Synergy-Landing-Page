// const baseClientUrl = 'http://127.0.0.1:5500/public'
const baseClientUrl = 'https://synergynitt.in/'

// const baseServerUrl = 'http://localhost:7000'
const baseServerUrl = 'https://syn-2022.herokuapp.com'

// --- Show navigation ---

const bodyElement = document.querySelector('body')

let navElement = document.createElement('nav')

function toggleRowTwo() {
    document.querySelector('#nav__row2').classList.toggle('hidden')
}

navElement.innerHTML = `
<div class="nav__row1">
<a href="${baseClientUrl}">

<img
    src="${baseClientUrl}/synergy_icons/android-icon-192x192.png"
    alt="Synergy"
    class="nav__icon"
/>
</a>
<div class="spacer"></div>
<ul class="desktop">

<li>
    <a href="${baseClientUrl}/events">Events</a>
</li>
<li>
    <a href="${baseClientUrl}/events/workshops"> Workshops </a>
    </li>
    <li>
    <a href="${baseClientUrl}/events/guest-lectures"> Guest Lectures </a>
    </li>
${
    localStorage.getItem('synergyId')
        ? `
    <li>
    <a href="${baseClientUrl}/profile"> Profile </a>
    </li>
    `
        : `<li>
    <a href="${baseClientUrl}/register"> Register </a>
    </li>
    
    `
}

</ul>
<button class="phone" onclick="toggleRowTwo()">
<svg xmlns="http://www.w3.org/2000/svg" height="1.1rem" viewBox="0 0 24 24" width="1.1rem" fill="var(--blue)"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
</button>
</div>
<div class="nav__row2 hidden phone" id="nav__row2">
<ul>

<li>
    <a href="${baseClientUrl}/events">Events</a>
</li>
<li>
    <a href="${baseClientUrl}/events/workshops"> Workshops </a>
    </li>
    <li>
    <a href="${baseClientUrl}/events/guest-lectures"> Guest Lectures </a>
    </li>
${
    localStorage.getItem('synergyId')
        ? `
    <li>
    <a href="${baseClientUrl}/profile"> Profile </a>
    </li>
    `
        : `<li>
    <a href="${baseClientUrl}/register"> Register </a>
    </li>
    
    `
}

</ul>
</div>

`

bodyElement.prepend(navElement)

// --- Show footer ---

const footer = document.querySelector('footer')
footer.innerHTML = `
<div class="footer-col">
<ul>
    <li><strong><a href="${baseClientUrl}">Synergy</a></strong></li>
    <li><a href="${baseClientUrl}/team">Team</a></li>
    <li>Contact</li>
</ul>
</div>

<div class="footer-col">
<strong>Connect with us</strong>

<a href="https://www.instagram.com/synergynitt">
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram-square" class="svg-inline--fa fa-instagram-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg>
</a>

<a href="https://www.facebook.com/synergynitt/">
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" class="svg-inline--fa fa-facebook fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
</a>

<a href="https://www.linkedin.com/company/synergy-nit-trichy/">
<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-linkedin fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
</a>
</div>

`
