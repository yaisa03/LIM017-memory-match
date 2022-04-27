export class AudioController {
    constructor() {
        this.bgMusic = new Audio('../sounds/bgMusic.mp3');
        this.flipSound = new Audio('../sounds/flip.wav');
        this.matchSound = new Audio('../sounds/match.wav');
        this.victorySound = new Audio('../sounds/victory.wav');
        this.gameOverSound = new Audio('../sounds/gameover.wav');
        this.bgMusic.volume = 0.3;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}