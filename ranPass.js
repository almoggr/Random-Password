let passwordBox
const btn = document.querySelector("#id_btn")
const length = 12
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '@#$%^&*()_+~|}{[]></-='
const allChars = upperCase + lowerCase + numbers + symbols

function createPassword(){
    passwordBox = document.querySelector("#password")
    let pass = ''
    pass += upperCase[Math.floor(Math.random() * upperCase.length)]
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    pass += numbers[Math.floor(Math.random() * numbers.length)]
    pass += symbols[Math.floor(Math.random() * symbols.length)]

    while(length > pass.length){
        pass += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBox.value  = pass
}

function copyPassword(){
    passwordBox.select()
    document.execCommand('copy')
}

window.onload = function(){
    btn.addEventListener('click', createPassword)
}
