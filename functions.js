let birthday = document.getElementById("birthday");

function alarm() {
    setInterval(() => {
        const d1  = new Date;
        const d2    = birthday.value;

        const diffInMs   = new Date(d2) - d1;
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

        if(diffInDays < 0 && diffInDays >= -1) {
            console.log("Feliz aniversário");
        } else if(diffInDays < -1) {
            console.log("Seu aniversário já passou, no próximo ano comemoramos!");
        } else {
            console.log(`Faltam ${Math.ceil(diffInDays)} dias para o seu aniversário`);
        }

    }, 3000)
}