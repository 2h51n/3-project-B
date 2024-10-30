window.addEventListener("load", () => {
  const descriptionTab = document.getElementById("description-tab");
  const brandTab = document.getElementById("brand-tab");
  const descriptionContent = document.getElementById("detail-description");
  const brandContent = document.getElementById("detail-brand");
  const tabContainer = document.getElementById("detail-tab-container");

  // Add event listeners for tab clicks
  descriptionTab.addEventListener("click", () => {
    descriptionContent.style.display = "block";
    brandContent.style.display = "none";
    descriptionTab.classList.add("active");
    brandTab.classList.remove("active");
  });

  brandTab.addEventListener("click", () => {
    descriptionContent.style.display = "none";
    brandContent.style.display = "block";
    brandTab.classList.add("active");
    descriptionTab.classList.remove("active");
  });
  tabContainer.addEventListener("click", () => {
    descriptionContent.style.display = "none";
    brandContent.style.display = "block";
    brandTab.classList.add("active");
    descriptionTab.classList.remove("active");
  });
});
