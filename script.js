const locations = [
    { name: "Jaipur", onTime: true },
    { name: "Chennai", onTime: false },
    { name: "Ahmedabad", onTime: true },
    { name: "Vishakapatnam", onTime: true },
    { name: "Kolkata", onTime: true }
  ];
  
  function updateDetails() {
    const details = document.getElementById("details");
    details.innerHTML = "";
  
    locations.slice(0, 5).forEach(location => {
      const block = document.createElement("div");
      block.className = "location-block";
      const indicator = document.createElement("div");
      indicator.className = `location ${location.onTime ? "on-time" : "delayed"}`;
      block.appendChild(indicator);
      const infoContainer = document.createElement("div");
      infoContainer.className = "location-info";
      const name = document.createElement("div");
      name.className = "location-name";
      name.textContent = location.name;
      const status = document.createElement("div");
      status.className = "details-text";
      status.textContent = location.onTime ? "Product is on time" : "Product is delayed";
      infoContainer.appendChild(name);
      infoContainer.appendChild(status);
      block.appendChild(infoContainer);
      details.appendChild(block);
    });
  }
  
  function updateStatus() {
    const status = document.getElementById("status");
    const currentLocation = locations.slice(0, 5).find(location => !location.onTime);
  
    if (currentLocation) {
      status.textContent = `Product is delayed at ${currentLocation.name}`;
    } else {
      status.textContent = "Product is on time";
    }
  }
  
  function simulateTracking() {
    setInterval(() => {
      const delayedLocation = locations.find(location => !location.onTime);
  
      if (delayedLocation) {
        const index = locations.indexOf(delayedLocation);
        delayedLocation.onTime = true;
        locations[index] = delayedLocation;
      } else {
        const randomIndex = Math.floor(Math.random() * locations.length);
        const randomLocation = locations[randomIndex];
        randomLocation.onTime = false;
        locations[randomIndex] = randomLocation;
      }
  
      updateDetails();
      updateStatus();
    }, 3000); // Adjust the delay here (in milliseconds) to control the simulation speed
  }
  
  simulateTracking();
  