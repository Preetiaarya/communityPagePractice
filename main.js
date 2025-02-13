const profiles = [
    {
      img: "Pierre Lipton.jpeg",
      name: "Pierre Lipton",
      title: "Chief Creative Officer",
      description: "Pierre led creative teams at AKQA’s San Francisco office...",
    },
    {
      img: "Sarah Hofstetter.jpeg",
      name: "Sarah Hofstetter",
      title: "CEO",
      description: "Sarah is an industry leader known for creative leadership...",
    },
    {
      img: "Jared Belsky.webp",
      name: "Jared Belsky",
      title: "President",
      description: "Jared specializes in business strategy and leadership...",
    },
  ];
  
  // Populate team grid dynamically
  const teamGrid = document.getElementById("teamGrid");
  
  profiles.forEach((profile, index) => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("team-member");
    memberDiv.innerHTML = `
      <img src="${profile.img}" alt="${profile.name}">
      <h3>${profile.name}</h3>
      <p>${profile.title}</p>
    `;
  
    // Open modal on click
    memberDiv.addEventListener("click", () => openModal(profile));
  
    teamGrid.appendChild(memberDiv);
  });
  
  // Modal handling
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalName = document.getElementById("modalName");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeModalBtn = document.querySelector(".close");
  
  function openModal(profile) {
    modalImg.src = profile.img;
    modalName.innerText = profile.name;
    modalTitle.innerText = profile.title;
    modalDescription.innerText = profile.description;
  
    modal.classList.remove("hidden");
  }
  
  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  
  // Close modal when clicking outside content
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
  