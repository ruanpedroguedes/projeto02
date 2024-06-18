"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Television {
    constructor() {
        this.isOn = false;
        this.channel = 1; // Canal inicial padrão
        this.volume = 10; // Volume inicial padrão
    }
    power() {
        this.isOn = !this.isOn;
        console.log(`TV está ${this.isOn ? 'ligada' : 'desligada'}.`);
    }
    setChannel(channel) {
        if (channel < 1 || channel > 999) {
            console.log('Canal inválido. Por favor, informe um canal entre 1 e 999.');
            return;
        }
        if (this.isOn) {
            this.channel = channel;
            console.log(`Canal alterado para ${this.channel}.`);
        }
        else {
            console.log('A TV está desligada.');
        }
    }
    increaseVolume() {
        if (this.isOn) {
            if (this.volume < 100) {
                this.volume++;
                console.log(`Volume aumentado para ${this.volume}.`);
            }
            else {
                console.log('Volume já está no máximo.');
            }
        }
        else {
            console.log('A TV está desligada.');
        }
    }
    decreaseVolume() {
        if (this.isOn) {
            if (this.volume > 0) {
                this.volume--;
                console.log(`Volume diminuído para ${this.volume}.`);
            }
            else {
                console.log('Volume já está no mínimo.');
            }
        }
        else {
            console.log('A TV está desligada.');
        }
    }
    getStatus() {
        console.log(`TV está ${this.isOn ? 'ligada' : 'desligada'}, Canal: ${this.channel}, Volume: ${this.volume}`);
    }
}
exports.default = Television;
