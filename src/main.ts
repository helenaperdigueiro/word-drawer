(function () {

    const init = () => {
        const easyLevel = {
            enabled: true,
            nouns: ["casa", "carro", "pessoa", "animal", "fruta", "flor", "árvore", "rio", "montanha", "praia",
                "mãe", "pai", "irmão", "irmã", "amigo", "escola", "trabalho", "cidade", "país", "mundo",
                "bola", "quadra", "futebol", "basquete", "vôlei", "tenis", "ciclismo", "natação", "corrida",
                "comida", "restaurante", "hotel", "aeroporto", "estação", "trem", "ônibus", "metrô",
                "música", "dança", "teatro", "cinema", "livro", "jornal", "revista", "televisão"],
            adjectives: ["feliz", "triste", "grande", "pequeno", "bonito", "feio", "velho", "novo", "quente", "frio",
                "rápido", "lento", "alto", "baixo", "amplo", "estreito", "profundo", "superficial",
                "simples", "complexo", "fácil", "difícil", "interessante", "chato", "divertido"],
            verbs: ["correr", "pular", "dançar", "cantar", "falar", "comer", "beber", "dormir", "trabalhar",
                "estudar", "aprender", "ensinar", "criar", "inventar", "descobrir", "viajar", "nadar",
                "patinar", "andar", "conduzir", "pilotar", "voar", "escrever", "ler", "pintar", "desenhar",
                "construir", "destruir", "criar", "melhorar", "piorar", "aumentar", "diminuir"]
        }

        const mediumLevel = {
            enabled: true,
            nouns: ["edifício", "aeroporto", "hospital", "biblioteca", "museu", "parque", "jardim", "lago",
                "cachoeira", "penhasco", "montanha-russa", "estádio", "ginásio", "auditório",
                "laboratório", "fábrica", "escritório", "loja", "restaurante", "hotel", "resort",
                "aeroplano", "helicóptero", "navio", "submarino", "trem", "metrô", "ônibus", "bicicleta"],
            adjectives: ["interessante", "complexo", "simples", "rápido", "lento", "alto", "baixo", "amplo",
                "estreito", "profundo", "superficial", "dinâmico", "estático", "heterogêneo",
                "homogêneo", "abstrato", "concreto", "relativo", "absoluto", "subjetivo", "objetivo"],
            verbs: ["nadar", "patinar", "andar", "viajar", "conduzir", "pilotar", "voar", "escrever", "ler",
                "pintar", "desenhar", "construir", "destruir", "criar", "melhorar", "piorar", "aumentar",
                "diminuir", "analisar", "sintetizar", "argumentar", "deduzir", "induzir", "criar",
                "inovar", "transformar", "revolucionar", "evoluir", "simplificar", "complicar"]
        }

        const hardLevel = {
            enabled: true,
            nouns: ["arquitetura", "ecossistema", "galáxia", "fenômeno", "teoria", "experiência",
                "conceito", "estrutura", "processo", "sistema", "modelo", "método", "técnica",
                "tecnologia", "ciência", "filosofia", "história", "geografia", "economia", "política"],
            adjectives: ["abstrato", "concreto", "relativo", "absoluto", "subjetivo", "objetivo", "dinâmico",
                "estático", "heterogêneo", "homogêneo", "complexo", "simples", "rápido", "lento",
                "alto", "baixo", "amplo", "estreito", "profundo", "superficial", "interessante"],
            verbs: ["analizar", "sintetizar", "argumentar", "deduzir", "induzir", "criar", "inovar",
                "transformar", "revolucionar", "evoluir", "simplificar", "complicar", "generalizar",
                "inspecionar", "abstrair", "concretizar", "relacionar", "comparar", "contrastar"]
        }

        let words: string[] = [];

        const selectWords = () => {
            words = [];
            if (easyLevel.enabled) {
                words.push(...easyLevel.nouns, ...easyLevel.adjectives, ...easyLevel.verbs)
            }
            if (mediumLevel.enabled) {
                words.push(...mediumLevel.nouns, ...mediumLevel.adjectives, ...mediumLevel.verbs)
            }
            if (hardLevel.enabled) {
                words.push(...hardLevel.nouns, ...hardLevel.adjectives, ...hardLevel.verbs)
            }
        }

        selectWords();

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

        document.getElementById("cb-level-easy")?.addEventListener("change", () => {
            easyLevel.enabled = !easyLevel.enabled;
            selectWords();
        });

        document.getElementById("cb-level-medium")?.addEventListener("change", () => {
            mediumLevel.enabled = !mediumLevel.enabled;
            selectWords();
        });

        document.getElementById("cb-level-hard")?.addEventListener("change", () => {
            hardLevel.enabled = !hardLevel.enabled;
            selectWords();
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