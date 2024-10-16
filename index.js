function roll() {
    const textbox = Number(document.getElementById("textbox").value);
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    let result = [];
    let image = [];

    for (let i = 0; i < textbox; i++) {
        let value = Math.floor(Math.random() * 6) + 1;
        result.push(value);
        image.push(`<img src="diceimages/${value}.png" alt="dice ${value}" width="80px" height="80px">`);
    }
    diceresult.textContent = `dice: ${result.join(", ")}`;
    diceimages.innerHTML = image.join(" ");
}