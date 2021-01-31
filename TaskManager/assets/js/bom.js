// Define UI Variables  her

// For the Location Information
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const href = document.getElementById("href")
href.addEventListener('click', hrefFun)

function hrefFun(e){
    const hrefBadge = document.getElementById("hrefSpan")
    hrefBadge.innerHTML = document.location.href
}

const proto = document.getElementById("protocol")
proto.addEventListener('click', protoFun)

function protoFun(e){
    const protoBadge = document.getElementById("protoSpan")
    protoBadge.innerHTML = document.location.protocol
}

const host = document.getElementById("host")
host.addEventListener('click', hostFun)

function hostFun(e){
    const hostBadge = document.getElementById("hostSpan")
    hostBadge.innerHTML = document.location.hostname
}

const port = document.getElementById("port")
port.addEventListener('click', portFun)

function portFun(e){
    const portBadge = document.getElementById("portSpan")
    portBadge.innerHTML = document.location.port
}

const hostName = document.getElementById("hostname")
hostname.addEventListener('click', hostNameFun)

function hostNameFun(e){
    const hostnameBadge = document.getElementById("hostnameSpan")
    hostnameBadge.innerHTML = document.location.hostname
}

// For the Browser Information 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const appName = document.getElementById("appname")
appName.addEventListener('click', appNameFun)

function appNameFun(e){
    const appnameBadge = document.getElementById("appnameSpan")
    appnameBadge.innerHTML = navigator.appName
}

const appversion = document.getElementById("appversion")
appversion.addEventListener('click', appverFun)

function appverFun(e){
    const appverBadge = document.getElementById("appverSpan")
    appverBadge.innerHTML = navigator.appVersion
}

const platform = document.getElementById("platform")
platform.addEventListener('click', platformFun)

function platformFun(e){
    const platformBadge = document.getElementById("platformSpan")
    platformBadge.innerHTML = navigator.platform
}

const lang = document.getElementById("language")
lang.addEventListener('click', langFun)

function langFun(e){
    const langBadge = document.getElementById("languageSpan")
    langBadge.innerHTML = navigator.language
}

const cookie = document.getElementById("cookieEnabled")
cookie.addEventListener('click', cookieFun)

function cookieFun(e){
    const cookieBadge = document.getElementById("cookieSpan")
    cookieBadge.innerHTML = navigator.cookieEnabled
}


// For the Screen Infromation
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const height = document.getElementById("height")
height.addEventListener('click', getHeight)

function getHeight(e){
    const heightBadge = document.getElementById("heightSpan")
    heightBadge.innerHTML = screen.height
}

const width = document.getElementById("width")
width.addEventListener('click', getWidth)

function getWidth(e){
    const widthBadge = document.getElementById("widthSpan")
    widthBadge.innerHTML = screen.width
}

const pixel = document.getElementById("pixelDepth")
pixel.addEventListener('click', pixelDepth)

function pixelDepth(e){
    const pixelBadge = document.getElementById("pixelSpan")
    pixelBadge.innerHTML = screen.pixelDepth
}


// For the Browsing History Information
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const length = document.getElementById("length")
length.addEventListener('click', getLength)

function getLength(e){
    const lengthBadge = document.getElementById("lengthSpan")
    lengthBadge.innerHTML = history.length
}

const state = document.getElementById("state")
state.addEventListener('click', getState)

function getState(e){
    const stateBadge = document.getElementById("stateSpan")
    stateBadge.innerHTML = history.state
}

const reloadIcon = document.querySelector('.fa');   
reloadIcon.addEventListener('click', reloadPage)

// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}