const links = document.querySelectorAll("a")
for (let i = 0; i < links.length; i++) links[i].setAttribute("target", "_blank")

const getCookie = (name) => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(";").shift()
}

const getTime = () => {
    const sex = (num) => {
        if (num < 10) return `0${num}`
        else return num
    }
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const d = new Date()
    return `today is ${months[d.getMonth()].toLowerCase()} ${d.getDate()}, ${d.getFullYear()} @ ${sex(d.getHours())}:${sex(d.getMinutes())}:${sex(d.getSeconds())}`
}
const timeShit = () => {
    theTime = getTime()
    document.getElementById("time").innerHTML = theTime
    setTimeout(timeShit, 10)
}
timeShit()

const pluralize = () => {
    if (spins === 1) return "time"
    else return "times"
}

let spins = 0
if (getCookie("potato-potato-potato") === undefined) document.cookie = "potato-potato-potato=0"
document.getElementById("spin-record").innerText = `${getCookie("potato-potato-potato")} ${pluralize(getCookie("potato-potato-potato"))}`

const timeout = () => {
    spins++
    document.getElementById("spins").innerText = `${spins} ${pluralize(spins)}`
    if (spins > getCookie("potato-potato-potato")) document.cookie = `potato-potato-potato=${spins}`
    setTimeout(timeout, 2000)
}
setTimeout(timeout, 2000)
