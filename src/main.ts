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
    [shuffledParticipants[i], shuffledParticipants[j]] = [
      shuffledParticipants[j],
      shuffledParticipants[i],
    ];
  }

  const draftOrderList = document.getElementById("draftOrderList") as HTMLDivElement;
  draftOrderList.innerHTML = ""; // Clear previous content

  // Add the names to the list in the shuffled order
  shuffledParticipants.forEach((participant, index) => {
    const listItem = document.createElement("li");

    // Create a span for the number
    const numberSpan = document.createElement("span");
    numberSpan.textContent = `${index + 1}. `;
    listItem.appendChild(numberSpan);

    // Create a span for the participant name
    const nameSpan = document.createElement("span");
    nameSpan.textContent = participant;
    listItem.appendChild(nameSpan);

    listItem.style.display = "none"; // Hide the list items initially
    draftOrderList.appendChild(listItem);
  })

  const draftOrderContainer = document.getElementById("draftOrderContainer") as HTMLDivElement;
  draftOrderContainer.classList.remove("hidden");

  // Reveal the names from the last pick to the first with a 1-second delay
  const listItems = draftOrderList.getElementsByTagName("li");
  let index = listItems.length - 1;
  const delay = 1000; // Delay in milliseconds (1 second)

  function revealName() {
    setTimeout(() => {
      listItems[index].style.display = "block";
      index--;

      if (index >= 0) {
        revealName();
      }
    }, delay);
  }

  revealName();
}

document.getElementById("addNameBtn")!.addEventListener("click", addParticipant);
nameInput.addEventListener("keydown", addParticipant);
document.getElementById("generateBtn")!.addEventListener("click", generateDraftOrder);



