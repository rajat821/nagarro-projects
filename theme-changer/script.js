function removeThemeClass() {
    document.querySelector(".theme-container").classList.remove("black");
    document.querySelector(".theme-container").classList.remove("green");
    document.querySelector(".theme-container").classList.remove("yellow");
    document.querySelector(".theme-container").classList.remove("blue");
  }

  function addThemeClass(theme) {
    removeThemeClass();
    document.querySelector(".theme-container").classList.add(theme);
  }