// Seleção de elementos 
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

const openCloseGeneratorButton = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#length")
const letterInput = document.querySelector("#letter")
const numberInput = document.querySelector("#number")
const symbolInput = document.querySelector("#symbols")
const copyPasswordButton = document.querySelector("#copy-password")







// Funções 
const getLetterLowerCase = () => {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}


const getLetterUpperCase = () => {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

const getNumber = () => {
    return Math.floor(Math.random() * 11).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=<>/.,!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = "";
    

    const generators = []

    if (letterInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase)
    }
    if (numberInput.checked) {
        generators.push(getNumber)
    }
    if (symbolInput.checked) {
        generators.push(getSymbol)
    }



    if (generators.length === 0) {
        return;
    }


    let passwordLength = 0; 
    let errorText = ""; 

    
    if (generators.length > 0) {
        passwordLength = parseInt(lengthInput.value);
        
        if (passwordLength < 5 || passwordLength > 20) {
            errorText = "O comprimento da senha deve estar entre 5 e 20 caracteres.";
        }
    }

    if (errorText) {
       
        generatedPasswordElement.style.display = "block";
        
        generatedPasswordElement.querySelector("h4").innerText = errorText;
    } else {
        
        for (i = 0; i < passwordLength; i++) {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            password += randomValue;
        }

        generatedPasswordElement.style.display = "block";
        generatedPasswordElement.querySelector("h4").innerText = password;
    }
}

// eventos 
generatePasswordButton.addEventListener("click", (e) => {
    e.preventDefault();

    generatePassword(getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol);
})

openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide");
})


copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault();

    const password = generatedPasswordElement.querySelector("h4").innerText

    navigator.clipboard.writeText(password).then(() => {
        copyPasswordButton.innerText = "Senha copiada com sucesso!";

        setTimeout(() => {
            copyPasswordButton.innerText = "Copiar";
        }, 2000);



    })

})


