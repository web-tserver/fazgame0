// pc-builder.js

// 1. YOUR COMPONENT DATABASE
// Add, remove, or edit your items here!
const pcData = {
  cpu: {
    label: "Processor (CPU)",
    items: [
      { name: "Select Processor", price: 0, condition: "" },
      { name: "Intel Core i3-12100F", condition: "New", price: 400 },
      { name: "Intel Core i3-12100F", condition: "Used", price: 250 },
      { name: "Intel Core i5-12400F", condition: "New", price: 650 },
      { name: "Intel Core i5-12400F", condition: "Used", price: 450 },
      { name: "AMD Ryzen 5 5600", condition: "New", price: 550 },
      { name: "AMD Ryzen 5 5600", condition: "Used", price: 380 }
    ]
  },
  motherboard: {
    label: "Motherboard",
    items: [
      { name: "Select Motherboard", price: 0, condition: "" },
      { name: "H610M Motherboard", condition: "New", price: 350 },
      { name: "H610M Motherboard", condition: "Used", price: 250 },
      { name: "B550M Motherboard (AMD)", condition: "New", price: 450 }
    ]
  },
  gpu: {
    label: "Graphics Card (GPU)",
    items: [
      { name: "Select GPU", price: 0, condition: "" },
      { name: "GTX 1660 Super 6GB", condition: "Used", price: 500 },
      { name: "RTX 3060 12GB", condition: "New", price: 1350 },
      { name: "RTX 3060 12GB", condition: "Used", price: 850 },
      { name: "RTX 4060 8GB", condition: "New", price: 1500 }
    ]
  },
  ram: {
    label: "Memory (RAM)",
    items: [
      { name: "Select RAM", price: 0, condition: "" },
      { name: "8GB (8x1) DDR4 3200MHz", condition: "New", price: 100 },
      { name: "16GB (8x2) DDR4 3200MHz", condition: "New", price: 190 },
      { name: "16GB (8x2) DDR4 3200MHz", condition: "Used", price: 120 }
    ]
  },
  storage: {
    label: "Storage (SSD/HDD)",
    items: [
      { name: "Select Storage", price: 0, condition: "" },
      { name: "512GB NVMe SSD", condition: "New", price: 180 },
      { name: "1TB NVMe SSD", condition: "New", price: 280 },
      { name: "1TB HDD", condition: "Used", price: 80 }
    ]
  },
  psu: {
    label: "Power Supply (PSU)",
    items: [
      { name: "Select PSU", price: 0, condition: "" },
      { name: "500W 80+ Standard", condition: "New", price: 150 },
      { name: "650W 80+ Bronze", condition: "New", price: 250 },
      { name: "750W 80+ Gold", condition: "New", price: 400 }
    ]
  },
  casing: {
    label: "Casing",
    items: [
      { name: "Select Casing", price: 0, condition: "" },
      { name: "Standard mATX Case + 4 Fans", condition: "New", price: 150 },
      { name: "ATX Gaming Case + ARGB Fans", condition: "New", price: 250 }
    ]
  }
};

// 2. GENERATE THE UI
function renderPCBuilder() {
  const container = document.getElementById('pc-builder-container');
  if (!container) return;

  // We removed the condition toggle buttons. Just generating the lists now.
  let html = '<div class="builder-group-list">';
  
  // Loop through each category to build the dropdowns
  for (const [key, category] of Object.entries(pcData)) {
    html += `
      <div class="builder-group">
        <label>${category.label}</label>
        <select class="pc-builder-select" id="select-${key}" data-category="${key}">
    `;
    
    // Build options for this category
    category.items.forEach((item, index) => {
      if (index === 0) {
        // First item is the "Select..." placeholder
        html += `<option value="0">${item.name}</option>`;
      } else {
        // Formats as: ItemName (Condition) - RMPrice
        html += `<option value="${item.price}" data-name="${item.name}" data-cond="${item.condition}">
          ${item.name} (${item.condition}) - RM${item.price}
        </option>`;
      }
    });
    
    html += `</select></div>`;
  }
  
  html += '</div>'; // End list grid

  // Add the Total Price display and the WhatsApp button
  html += `
    <div class="total-price">Estimated Total: <span>RM<span id="pc-total">0</span></span></div>
    <button id="pc-quote-btn" class="quote-btn">Get WhatsApp Quote</button>
  `;

  container.innerHTML = html;

  // Add event listeners to calculate price on change
  const selects = document.querySelectorAll('.pc-builder-select');
  selects.forEach(select => {
    select.addEventListener('change', calculatePCTotal);
  });

  // Add event listener to the quote button
  document.getElementById('pc-quote-btn').addEventListener('click', generatePCQuote);
}

// 3. CALCULATE PRICE FUNCTION
function calculatePCTotal() {
  let total = 0;
  document.querySelectorAll('.pc-builder-select').forEach(select => {
    total += parseInt(select.value) || 0;
  });
  document.getElementById('pc-total').innerText = total;
}

// 4. WHATSAPP QUOTE FUNCTION
function generatePCQuote() {
  let total = 0;
  let buildDetails = "Hi FAZGAME 👋 I would like to get a quote for this Custom PC build:%0A%0A";
  
  document.querySelectorAll('.pc-builder-select').forEach(select => {
    const option = select.options[select.selectedIndex];
    const price = parseInt(select.value) || 0;
    
    // Only include items they actually selected
    if (price > 0) {
      const name = option.getAttribute('data-name');
      const cond = option.getAttribute('data-cond');
      buildDetails += `• ${name} (${cond}) - RM${price}%0A`;
      total += price;
    }
  });
  
  if (total === 0) {
    alert("Please select at least one component.");
    return;
  }
  
  buildDetails += `%0A*Estimated Total: RM${total}*`;
  
  // Send to your WhatsApp
  window.open(`https://api.whatsapp.com/send?phone=60163691936&text=${buildDetails}`, '_blank');
}

// 5. RUN SCRIPT WHEN PAGE LOADS
document.addEventListener('DOMContentLoaded', renderPCBuilder);
