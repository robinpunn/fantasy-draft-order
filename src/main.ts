const participants: string[] = [];

const nameInput = document.getElementById("nameInput") as HTMLInputElement;


function updateParticipantsDisplay() {
  const originalList = document.getElementById("originalList") as HTMLDivElement;
  originalList.innerHTML = ""; // Clear previous content

  participants.forEach(participant => {
    const listItem = document.createElement("li");
    listItem.textContent = participant;
    originalList.appendChild(listItem);
  });
}

function addParticipant(event: MouseEvent | KeyboardEvent) {
  const nameInput = document.getElementById("nameInput") as HTMLInputElement;

  if (event.type === "click" || (event instanceof KeyboardEvent && event.key === "Enter")) {
    const participantName = nameInput.value.trim();
    if (participantName !== "") {
      participants.push(participantName);
      updateParticipantsDisplay();
      nameInput.value = "";
    }
  }
}


function generateDraftOrder() {
  if (participants.length === 0) {
    alert("Please add participants before generating the draft order.");
    return;
  }

  const shuffledParticipants = participants.slice();
  for (let i = shuffledParticipants.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledParticipants[i], shuffledParticipants[j]] = [shuffledParticipants[j], shuffledParticipants[i]];
  }

  const draftOrderList = document.getElementById("draftOrderList") as HTMLDivElement;
  draftOrderList.innerHTML = ""; // Clear previous content

  shuffledParticipants.forEach((participant, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${participant}`;
    draftOrderList.appendChild(listItem);
  });

  const draftOrderContainer = document.getElementById("draftOrderContainer") as HTMLDivElement;
  draftOrderContainer.classList.remove("hidden");
}

document.getElementById("addNameBtn")!.addEventListener("click", addParticipant);
document.getElementById("generateBtn")!.addEventListener("click", generateDraftOrder);
nameInput.addEventListener("keydown", addParticipant);
