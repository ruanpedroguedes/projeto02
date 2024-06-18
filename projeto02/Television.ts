class Television {
          private isOn: boolean;
          private channel: number;
          private volume: number;
      
          constructor() {
              this.isOn = false;
              this.channel = 1;  // Canal inicial padrão
              this.volume = 10;  // Volume inicial padrão
          }
      
          public power(): void {
              this.isOn = !this.isOn;
              console.log(`TV está ${this.isOn ? 'ligada' : 'desligada'}.`);
          }
      
          public setChannel(channel: number): void {
              if (channel < 1 || channel > 999) {
                  console.log('Canal inválido. Por favor, informe um canal entre 1 e 999.');
                  return;
              }
              if (this.isOn) {
                  this.channel = channel;
                  console.log(`Canal alterado para ${this.channel}.`);
              } else {
                  console.log('A TV está desligada.');
              }
          }
      
          public increaseVolume(): void {
              if (this.isOn) {
                  if (this.volume < 100) {
                      this.volume++;
                      console.log(`Volume aumentado para ${this.volume}.`);
                  } else {
                      console.log('Volume já está no máximo.');
                  }
              } else {
                  console.log('A TV está desligada.');
              }
          }
      
          public decreaseVolume(): void {
              if (this.isOn) {
                  if (this.volume > 0) {
                      this.volume--;
                      console.log(`Volume diminuído para ${this.volume}.`);
                  } else {
                      console.log('Volume já está no mínimo.');
                  }
              } else {
                  console.log('A TV está desligada.');
              }
          }
      
          public getStatus(): void {
              console.log(`TV está ${this.isOn ? 'ligada' : 'desligada'}, Canal: ${this.channel}, Volume: ${this.volume}`);
          }
      }
      
      export default Television;
      