"use strict";
(function () {
    const init = () => {
        var _a;
        const words = ["banana", "uva", "chocolate"];
        let shuffledWords = [];
        const shuffleWords = () => {
            const wordsCopy = [...words];
            for (let i = 0; i < words.length; i++) {
                const index = Math.floor(Math.random() * wordsCopy.length);
                shuffledWords.push(wordsCopy[index]);
                wordsCopy.splice(index, 1);
            }
        };
        shuffleWords();
        (_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (event) => {
            event.preventDefault();
            drawWord();
        });
        const drawWord = () => {
            let wordContainer = document.getElementById("selected-word");
            if (wordContainer != null) {
                if (shuffleWords.length == 0) {
                    shuffleWords();
                }
                wordContainer.innerHTML = shuffledWords[0];
                shuffledWords.splice(0, 1);
            }
        };
    };
    window.addEventListener('load', init);
})();
