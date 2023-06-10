const mike = document.querySelector(".mike");
    
function readPrompt() {
    const prompt = document.querySelector(".prompt");
  
    const text = new SpeechSynthesisUtterance(prompt.value || "You haven't given any prompt");
    speechSynthesis.speak(text || "");
}
mike.addEventListener("click", readPrompt);