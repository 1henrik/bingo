const texts = [
    "Ellen utbringar skål", "Shotgun med Ellen", "Spelar rygg mot rygg", "Ellen-selfie",
    "Ska avsluta det med Jonathan...", "Chark", "Disneydansen", "Ellen bjuder på shot",
    "Snusdosan (lek)  ", "Uttalar något fel", "Ska söka jobb i Stockholm...", "Shotvideo",
    "Spelare läcker bingon", "Ska ge Jonathan en chans till...", "Ellen har kavaj", "Vatten på innergården...",
  ];
  
  // Funktion för att skapa bingobrickan
  function createBingoBoard() {
    const board = document.getElementById("bingo-board");
  
    texts.forEach((text, index) => {
      const square = document.createElement("div");
      square.classList.add("bingo-square");
  
      // Lägg till texten i rutan
      const span = document.createElement("span");
      span.textContent = text;
      square.appendChild(span);
  
      // Lägg till en bild (t.ex. en kryssbild) som ska visas när rutan är kryssad
      const img = document.createElement("img");
      img.src = "kryss.png"; // Exempelbild
      square.appendChild(img);
  
      // Kolla om denna ruta är kryssad (lagrad i localStorage)
      if (localStorage.getItem(`checked-${index}`) === 'true') {
        square.classList.add("checked");
        img.style.visibility = 'visible'; // Gör bilden synlig om kryssad
      }
  
      // Lägg till en eventlistener för att växla kryss-status
      square.addEventListener("click", function() {
        if (square.classList.contains("checked")) {
          square.classList.remove("checked");
          img.style.visibility = 'hidden'; // Döljer bilden om den inte är kryssad
          localStorage.setItem(`checked-${index}`, 'false'); // Spara till localStorage
        } else {
          square.classList.add("checked");
          img.style.visibility = 'visible'; // Visar bilden när rutan är kryssad
          localStorage.setItem(`checked-${index}`, 'true'); // Spara till localStorage
        }
      });
  
      // Lägg till rutan på brädet
      board.appendChild(square);
    });
  }
  
  // Kör funktionen för att skapa bingobrickan när sidan laddas
  window.onload = createBingoBoard;