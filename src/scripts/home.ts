export const home = {
    init() {
        console.log('home');
        this.setupIncrementButton();
    },

    incrementCounter() {
        const value = document.getElementById('counter-value')?.innerHTML;
        console.log(value);
    },

    setupIncrementButton() {
        const button = document.getElementById('counter-button-increment');
        button?.addEventListener('click', this.incrementCounter);
    }

};