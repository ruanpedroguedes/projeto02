import Television from './Television';
const prompt = require('prompt-sync')();

const tv = new Television();

function showMenu() {
    console.log("\n=== Controle Remoto ===");
    console.log("1. Ligar/Desligar TV");
    console.log("2. Informar Canal");
    console.log("3. Aumentar Volume");
    console.log("4. Diminuir Volume");
    console.log("5. Mostrar Status da TV");
    console.log("0. Sair");
}

function handleUserInput() {
    let option: string;
    do {
        showMenu();
        option = prompt("Selecione uma opção: ");
        switch (option) {
            case "1":
                tv.power();
                break;
            case "2":
                const channel = parseInt(prompt("Informe o canal (1-999): "));
                tv.setChannel(channel);
                break;
            case "3":
                tv.increaseVolume();
                break;
            case "4":
                tv.decreaseVolume();
                break;
            case "5":
                tv.getStatus();
                break;
            case "0":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida.");
        }
    } while (option !== "0");
}

handleUserInput();
