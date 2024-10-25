let home = 0
let guest = 0
let homeEl = document.getElementById("home-points")
let guestEl = document.getElementById("guest-points")

function home1() {
    home += 1
    homeEl.innerText = home
}

function home2() {
    home += 2
    homeEl.innerText = home
}

function home3() {
    home += 3
    homeEl.innerText = home
}

function guest1() {
    guest += 1
    guestEl.innerText = guest
}

function guest2() {
    guest += 2
    guestEl.innerText = guest
}

function guest3() {
    guest += 3
    guestEl.innerText = guest
}