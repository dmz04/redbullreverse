const items = document.querySelectorAll(".carousel-3d .can-name");
let currentIndex = 0;

const canettesData = [
  {
    nom: "Original",
    quand: "Morning or anytime for an energy boost",
    occasion: "Work, sports, study sessions",
    pays: "Worldwide",
    funFact: "The classic Red Bull that started it all!",
  },
  {
    nom: "Sugarfree",
    quand: "Anytime you want energy without sugar",
    occasion: "Health-conscious, workouts",
    pays: "Europe, USA, Canada, Australia",
    funFact: "Zero sugar but full Red Bull taste!",
  },
  {
    nom: "Tropical Edition",
    quand: "Afternoon or summer days",
    occasion: "Beach parties, relaxation",
    pays: "Europe, Canada, USA, Australia",
    funFact: "Tropical flavor with passion fruit & mango.",
  },
  {
    nom: "Coconut Edition",
    quand: "Hot days or after workout",
    occasion: "Refreshing tropical break",
    pays: "Selected Europe, Australia",
    funFact: "A tropical coconut getaway in a can.",
  },
  {
    nom: "Watermelon Edition",
    quand: "Summer afternoons",
    occasion: "Outdoor events, picnics",
    pays: "Europe, USA, Canada",
    funFact: "Sweet & juicy watermelon flavor.",
  },
  {
    nom: "Peach Edition",
    quand: "Afternoon snack on hot days",
    occasion: "Casual summer vibes",
    pays: "Europe, USA",
    funFact: "A juicy peach twist on classic energy.",
  },
  {
    nom: "Blue Edition",
    quand: "Anytime for a blueberry boost",
    occasion: "Sport, work, or study",
    pays: "Europe, Canada",
    funFact: "Blueberry flavored for a fresh taste.",
  },
  {
    nom: "Winter Edition",
    quand: "Cold weather or cozy nights",
    occasion: "Holiday seasons",
    pays: "Europe",
    funFact: "Cinnamon & winter spices in a special can.",
  },
  {
    nom: "Green Edition",
    quand: "Afternoon or pre‑workout",
    occasion: "Energy with kiwi‑apple kick",
    pays: "Europe, USA",
    funFact: "Kiwi apple flavor energizes your day.",
  },
];

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove("active", "prev", "next");
    if (index === currentIndex) item.classList.add("active");
    else if (index === currentIndex - 1) item.classList.add("prev");
    else if (index === currentIndex + 1) item.classList.add("next");
  });
}

function prev() {
  if (currentIndex > 0) currentIndex--, updateCarousel();
}

function next() {
  if (currentIndex < items.length - 1) currentIndex++, updateCarousel();
}

updateCarousel();

// Set up hover/focus color changes & click handlers
items.forEach(item => {
  const bgColor = item.dataset.color;
  const txtColor = item.dataset.textcolor;

  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = bgColor;
    item.style.color = txtColor;
  });
  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = "";
    item.style.color = "";
  });
  item.addEventListener("focus", () => {
    item.style.backgroundColor = bgColor;
    item.style.color = txtColor;
  });
  item.addEventListener("blur", () => {
    item.style.backgroundColor = "";
    item.style.color = "";
  });

  item.addEventListener("click", () => openFiche(parseInt(item.dataset.index)));
  item.addEventListener("keypress", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openFiche(parseInt(item.dataset.index));
    }
  });
});

const fiche = document.getElementById("fiche");
const closeBtn = document.getElementById("closeFiche");
const [ficheNom, ficheQuand, ficheOccasion, fichePays, ficheFunFact] = [
  document.getElementById("ficheNom"),
  document.getElementById("ficheQuand"),
  document.getElementById("ficheOccasion"),
  document.getElementById("fichePays"),
  document.getElementById("ficheFunFact")
];

function openFiche(i) {
  const data = canettesData[i];
  ficheNom.textContent = data.nom;
  ficheQuand.textContent = data.quand;
  ficheOccasion.textContent = data.occasion;
  fichePays.textContent = data.pays;
  ficheFunFact.textContent = data.funFact;

  const el = items[i];
  fiche.style.backgroundColor = el.dataset.color;
  fiche.style.color = el.dataset.textcolor;

  fiche.classList.add("visible");
  fiche.classList.remove("hidden");
  closeBtn.focus();
}

function closeFiche() {
  fiche.classList.remove("visible");
  fiche.classList.add("hidden");
}

closeBtn.addEventListener("click", closeFiche);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && fiche.classList.contains("visible")) closeFiche();
});
