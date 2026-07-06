const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");

textInput.addEventListener("input", () => {

    const text = textInput.value;

    charCount.textContent = text.length;

    const words = text.trim();

    if(words === ""){
        wordCount.textContent = 0;
    }else{
        wordCount.textContent = words.split(/\s+/).length;
    }

});