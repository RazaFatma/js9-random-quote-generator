let quote = document.getElementById('quote');
let btn = document.getElementById('btn');

let array = [
    "I'd tell you a joke about NAT but I would have to translate.",
    "Two fish in a tank. One turns to the other and says, \"Do you know how to drive this thing?\"",
    "Doctor: \"I have some news about your baby.\"\nParents: \"Don't tell us the gender, we want to keep it a surprise.\"\nDoctor: \"Oh I get it, you're those type of people. Okay, well IT is not breathing.\"",
    "My parents raised me as an only child, which really annoyed my younger brother.",
    "My grandfather says I'm too reliant on technology.\nI called him a hypocrite and unplugged his life support.",
    "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
    "Judge: \"I sentence you to the maximum punishment...\"\nMe (thinking): \"Please be death, please be death...\"\nJudge: \"Learn Java!\"\nMe: \"Damn.\"",
    "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
    "Algorithm: A word used by programmers when they don't want to explain how their code works.",
    "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\""
]

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random()*(array.length));
    quote.innerHTML = array[random]
})