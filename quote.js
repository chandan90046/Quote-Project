const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Happiness depends upon ourselves. – Aristotle",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Opportunities don’t happen. You create them. – Chris Grosser",
  "Dream big and dare to fail. – Norman Vaughan",
  "Act as if what you do makes a difference. It does. – William James",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "Everything you’ve ever wanted is on the other side of fear. – George Addair",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "Great things never come from comfort zones. – Anonymous",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "Little by little, one travels far. – J.R.R. Tolkien",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "Failure is simply the opportunity to begin again, this time more intelligently. – Henry Ford",
  "In the middle of every difficulty lies opportunity. – Albert Einstein",
  "Push yourself, because no one else is going to do it for you. – Anonymous",
  "The best way to predict the future is to create it. – Peter Drucker"
];


const colors = [
  "rgba(248, 126, 105, 0.8)",    // Tomato
  "rgba(135, 206, 235, 0.8)",  // SkyBlue
  "rgba(60, 179, 113, 0.8)",   // MediumSeaGreen
  "rgba(123, 104, 238, 0.8)",  // MediumSlateBlue
  "rgba(255, 215, 0, 0.8)",    // Gold
  "rgba(255, 105, 180, 0.8)",  // HotPink
  "rgba(72, 209, 204, 0.8)",   // MediumTurquoise
  "rgba(0, 191, 255, 0.8)",    // DeepSkyBlue
  "rgba(255, 69, 0, 0.8)",     // OrangeRed
  "rgba(154, 205, 50, 0.8)",   // YellowGreen
  "rgba(255, 140, 0, 0.8)",    // DarkOrange
  "rgba(70, 130, 180, 0.8)",   // SteelBlue
  "rgba(199, 21, 133, 0.8)",   // MediumVioletRed
  "rgba(106, 90, 205, 0.8)",   // SlateBlue
  "rgba(0, 128, 128, 0.8)",    // Teal
  "rgba(220, 20, 60, 0.8)",    // Crimson
  "rgba(255, 20, 147, 0.8)",   // DeepPink
  "rgba(34, 139, 34, 0.8)",    // ForestGreen
  "rgba(218, 112, 214, 0.8)",  // Orchid
  "rgba(47, 79, 79, 0.8)"      // DarkSlateGray
];

const button = document.querySelector("button");
button.addEventListener("click",()=>{
  const element = document.getElementById("quote");
const text =  Math.floor(Math.random()*quotes.length);
element.textContent = quotes[text]

})


//background change time  see


function changecolor(){
const element1 = document.getElementsByTagName("body")
const text =  Math.floor(Math.random()*colors.length);
document.body.style.backgroundColor = colors[text];


}

setInterval(changecolor,5000);