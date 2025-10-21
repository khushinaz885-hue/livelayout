function cont(){
// container
let cw = document.getElementById("cw").value
let cws = document.getElementById("cws").value

document.getElementById("cont").style.width = cw + cws

// header
let hw = document.getElementById("hw").value
let hh = document.getElementById("hh").value
let hc = document.getElementById("hc").value
let ws = document.getElementById("hws").value
let hs = document.getElementById("hhs").value

document.getElementById("head").style.width = hw + ws
document.getElementById("head").style.height = hh + hs
document.getElementById("head").style.backgroundColor = hc


// navbar
let nw = document.getElementById("nw").value
let nh = document.getElementById("nh").value
let nc = document.getElementById("nc").value
let nws = document.getElementById("nws").value
let nhs = document.getElementById("nhs").value

document.getElementById("nav").style.width = nw + nws
document.getElementById("nav").style.height = nh + nhs
document.getElementById("nav").style.backgroundColor = nc

// aside

let aw = document.getElementById("aw").value
let ah = document.getElementById("ah").value
let ac = document.getElementById("ac").value
let aws = document.getElementById("aws").value
let ahs = document.getElementById("ahs").value

document.getElementById("asd").style.width = aw + aws
document.getElementById("asd").style.height = ah + ahs
document.getElementById("asd").style.backgroundColor = ac

// main
let mw = document.getElementById("mw").value
let mh = document.getElementById("mh").value
let mc = document.getElementById("mc").value
let mws = document.getElementById("mws").value
let mhs = document.getElementById("mhs").value

document.getElementById("main").style.width = mw + mws
document.getElementById("main").style.height = mh + mhs
document.getElementById("main").style.backgroundColor = mc

// article


let arw = document.getElementById("arw").value
let arh = document.getElementById("arh").value
let arc = document.getElementById("arc").value
let arws = document.getElementById("arws").value
let arhs = document.getElementById("arhs").value

document.getElementById("art").style.width = arw + arws
document.getElementById("art").style.height = arh + arhs
document.getElementById("art").style.backgroundColor = arc

// footer
let fw = document.getElementById("fw").value
let fh = document.getElementById("fh").value
let fc = document.getElementById("fc").value
let fws = document.getElementById("fws").value
let fhs = document.getElementById("fhs").value

document.getElementById("foot").style.width = fw + fws
document.getElementById("foot").style.height = fh + fhs
document.getElementById("foot").style.backgroundColor = fc

}