const participants: string[] = [];
let draftOrderShown = false;

function updateParticipantsDisplay() {
  const draftOrderList = document.getElementById("draftOrderList") as HTMLUListElement;
  draftOrderList.innerHTML = ""; 

  participants.forEach((participant, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${participant}`;
    draftOrderList.appendChild(listItem);
  });
}

function addParticipant() {
  const nameInput = document.getElementById("nameInput") as HTMLInputElement;
  const participantName = nameInput.value.trim();
  if (participantName !== "") {
    participants.push(participantName);
    updateParticipantsDisplay();
    nameInput.value = "";
  }
}

function generateDraftOrder() {
  if (participants.length === 0) {
    alert("Please add participants before generating draft order.");
    return;
  }

  const shuffledParticipants = participants.slice();
  for (let i = shuffledParticipants.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledParticipants[i], shuffledParticipants[j]] = [shuffledParticipants[j], shuffledParticipants[i]];
  }

  participants.length = 0;
  participants.push(...shuffledParticipants);

  const draftOrderContainer = document.getElementById("draftOrderContainer") as HTMLDivElement;
  draftOrderContainer.classList.remove("hidden");
  updateParticipantsDisplay();
}

document.getElementById("addNameBtn")!.addEventListener("click", addParticipant);
document.getElementById("generateBtn")!.addEventListener("click", generateDraftOrder);