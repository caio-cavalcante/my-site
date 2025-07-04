document.addEventListener("DOMContentLoaded", function() { // garante que rode apenas após o html ser carregado
    const nameInput = document.getElementById("q1");
    const robotCheck = document.getElementById("robotCheck");
    const q2container = document.getElementById("q2-container");
    const userNameText = document.getElementById("userName");
    const feedbackButton = document.getElementById('feedback-button');
    const q2Select = document.getElementById('q2');
    const feedbackMessage = document.getElementById('feedback-message');

    function showSecondQuestion() {
        if (robotCheck.checked) {
            const userName = nameInput.value.trim();
            if (userName) {
                userNameText.textContent = userName;
                q2container.style.display = "block";
            } else {
                alert("Por favor, insira seu nome antes de continuar.");
                robotCheck.checked = false;
                q2container.style.display = "none";
            }
        } else {
            q2container.style.display = "none";
            userNameText.textContent = "";
            feedbackMessage.textContent = "";
        }
    }

    function biscoitoBolacha() {
        const option = q2Select.value;
        let message = '';

        if (option === 'biscoito') {
            message = 'Isso é só bolacha sem recheio';
        } else if (option === 'bolacha') {
            message = 'Isso é só biscoito com recheio';
        } else {
            message = 'Indeciso?';
        }

        feedbackMessage.textContent = message;
    }

    robotCheck.addEventListener('change', showSecondQuestion); // escuta mudanças no checkbox e sempre que mudar, chama a função showSecondQuestion
    
    showSecondQuestion();

    feedbackButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (q2container.style.display === 'block') {
            biscoitoBolacha();
        } else {
            alert("Por favor, complete as perguntas antes de enviar!");
        }
    });

    q2Select.addEventListener('change', biscoitoBolacha);
});