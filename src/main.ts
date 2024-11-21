(function () {

    const init = () => {
        const words: readonly string[] = ["banana", "uva", "chocolate"];

        let shuffledWords: string[] = [];

        const shuffleWords = () => {
            const wordsCopy: string[] = [...words];
            for (let i = 0; i < words.length; i++) {
                const index = Math.floor(Math.random() * wordsCopy.length);
                shuffledWords.push(wordsCopy[index]);
                wordsCopy.splice(index, 1);
            }
        }

        shuffleWords()

        document.getElementById("form")?.addEventListener("submit", (event) => {
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
        }

    };

    window.addEventListener('load', init);

})();