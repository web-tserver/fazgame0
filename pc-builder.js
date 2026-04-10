// ===== PC BUILDER DATA – EDIT HERE TO CHANGE COMPONENTS =====
// Each item now has newPrice and usedPrice
const componentData = {
  cpu: {
    label: "💻 CPU / Processor",
    items: [
      { name: "Intel Core i3-12100", newPrice: 450, usedPrice: 350, selected: true },
      { name: "Intel Core i5-12400F", newPrice: 650, usedPrice: 500 },
      { name: "Intel Core i5-13400", newPrice: 850, usedPrice: 650 },
      { name: "Intel Core i7-13700K", newPrice: 1450, usedPrice: 1100 },
      { name: "Intel Core i9-13900K", newPrice: 2250, usedPrice: 1700 },
      { name: "AMD Ryzen 5 5600X", newPrice: 750, usedPrice: 550 },
      { name: "AMD Ryzen 7 7700X", newPrice: 1450, usedPrice: 1100 },
      { name: "AMD Ryzen 9 7900X", newPrice: 2150, usedPrice: 1600 }
    ]
  },
  cooler: {
    label: "❄️ CPU Cooler",
    items: [
      { name: "Stock Cooler (included)", newPrice: 0, usedPrice: 0, selected: true },
      { name: "Air Cooler (e.g. Cooler Master Hyper 212)", newPrice: 150, usedPrice: 100 },
      { name: "240mm AIO Liquid Cooler", newPrice: 350, usedPrice: 250 },
      { name: "360mm AIO Liquid Cooler", newPrice: 550, usedPrice: 400 }
    ]
  },
  motherboard: {
    label: "🔧 Motherboard",
    items: [
      { name: "H610 / A620 (Budget)", newPrice: 350, usedPrice: 250, selected: true },
      { name: "B660 / B650 (Mid-range)", newPrice: 550, usedPrice: 400 },
      { name: "Z690 / X670 (High-end)", newPrice: 850, usedPrice: 600 },
      { name: "Z790 / X670E (Premium)", newPrice: 1200, usedPrice: 850 }
    ]
  },
  ram: {
    label: "🧠 RAM",
    items: [
      { name: "8GB DDR4 3200MHz", newPrice: 150, usedPrice: 100 },
      { name: "16GB DDR4 3200MHz", newPrice: 250, usedPrice: 180, selected: true },
      { name: "32GB DDR4 3200MHz", newPrice: 450, usedPrice: 320 },
      { name: "16GB DDR5 5200MHz", newPrice: 350, usedPrice: 250 },
      { name: "32GB DDR5 5600MHz", newPrice: 650, usedPrice: 450 }
    ]
  },
  gpu: {
    label: "🎮 Graphics Card (GPU)",
    items: [
      { name: "Integrated Graphics", newPrice: 0, usedPrice: 0 },
      { name: "GTX 1650 4GB", newPrice: 550, usedPrice: 400 },
      { name: "RTX 3060 12GB", newPrice: 850, usedPrice: 650, selected: true },
      { name: "RTX 4060 Ti 8GB", newPrice: 1350, usedPrice: 1000 },
      { name: "RTX 4070 12GB", newPrice: 1950, usedPrice: 1450 },
      { name: "RTX 4080 16GB", newPrice: 3200, usedPrice: 2400 },
      { name: "AMD RX 6600 8GB", newPrice: 750, usedPrice: 550 },
      { name: "AMD RX 7700 XT 12GB", newPrice: 1650, usedPrice: 1200 }
    ]
  },
  storage: {
    label: "💾 Storage",
    items: [
      { name: "256GB NVMe SSD", newPrice: 120, usedPrice: 80 },
      { name: "512GB NVMe SSD", newPrice: 200, usedPrice: 140, selected: true },
      { name: "1TB NVMe SSD", newPrice: 350, usedPrice: 250 },
      { name: "2TB NVMe SSD", newPrice: 550, usedPrice: 400 },
      { name: "1TB HDD + 256GB SSD", newPrice: 250, usedPrice: 180 }
    ]
  },
  psu: {
    label: "⚡ Power Supply (PSU)",
    items: [
      { name: "500W 80+ Bronze", newPrice: 200, usedPrice: 140, selected: true },
      { name: "650W 80+ Bronze", newPrice: 280, usedPrice: 200 },
      { name: "750W 80+ Gold", newPrice: 450, usedPrice: 320 },
      { name: "850W 80+ Gold", newPrice: 550, usedPrice: 400 },
      { name: "1000W 80+ Gold", newPrice: 750, usedPrice: 550 }
    ]
  },
  case: {
    label: "🖥️ PC Case",
    items: [
      { name: "Budget ATX (e.g. Tecware)", newPrice: 150, usedPrice: 100, selected: true },
      { name: "Mid Tower with Tempered Glass", newPrice: 250, usedPrice: 180 },
      { name: "Premium RGB Case (e.g. Lian Li)", newPrice: 450, usedPrice: 320 },
      { name: "Small Form Factor (ITX)", newPrice: 300, usedPrice: 220 }
    ]
  },
  monitor: {
    label: "🖥️ Monitor",
    items: [
      { name: "None", newPrice: 0, usedPrice: 0 },
      { name: '22" 75Hz IPS', newPrice: 350, usedPrice: 250 },
      { name: '24" 144Hz Gaming', newPrice: 550, usedPrice: 400, selected: true },
      { name: '27" 165Hz Curved', newPrice: 850, usedPrice: 600 },
      { name: '32" 4K UHD', newPrice: 1350, usedPrice: 950 }
    ]
  },
  accessories: {
    label: "🎧 Accessories (Keyboard + Mouse)",
    items: [
      { name: "None", newPrice: 0, usedPrice: 0 },
      { name: "Basic Combo", newPrice: 100, usedPrice: 70, selected: true },
      { name: "Mechanical + Gaming Mouse", newPrice: 250, usedPrice: 180 },
      { name: "RGB Mechanical + Wireless Mouse", newPrice: 400, usedPrice: 280 }
    ]
  }
};

// ===== DO NOT EDIT BELOW THIS LINE =====
let currentCondition = "new"; // 'new' or 'used'

function buildPCBuilder() {
  const container = document.getElementById('pc-builder-container');
  if (!container) return;

  // Add condition toggle
  let html = `
    <div class="condition-toggle">
      <span class="condition-label">Condition:</span>
      <button class="condition-btn ${currentCondition === 'new' ? 'active' : ''}" data-condition="new">🆕 New</button>
      <button class="condition-btn ${currentCondition === 'used' ? 'active' : ''}" data-condition="used">♻️ Used</button>
    </div>
    <div class="builder-group-list">
  `;

  for (const [key, category] of Object.entries(componentData)) {
    html += `
      <div class="builder-group">
        <label>${category.label}</label>
        <select id="${key}Select" class="pc-builder-select">
    `;
    category.items.forEach((item, idx) => {
      const price = currentCondition === 'new' ? item.newPrice : item.usedPrice;
      const selectedAttr = item.selected ? 'selected' : '';
      html += `<option value="${price}" data-new-price="${item.newPrice}" data-used-price="${item.usedPrice}" ${selectedAttr}>${item.name} - RM${price}</option>`;
    });
    html += `</select></div>`;
  }
  html += '</div>';

  html += `
    <div class="total-price">
      Estimated Total (<span id="conditionLabel">New</span>): <span id="totalPrice">RM0</span>
    </div>
    <button id="quoteBtn" class="quote-btn">Request Quote via WhatsApp</button>
  `;
  container.innerHTML = html;

  // Attach event listeners to condition buttons
  document.querySelectorAll('.condition-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentCondition = btn.dataset.condition;
      document.querySelectorAll('.condition-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('conditionLabel').textContent = currentCondition === 'new' ? 'New' : 'Used';
      updateAllPrices();
      updateTotal();
    });
  });

  // Attach change listeners to selects
  document.querySelectorAll('.pc-builder-select').forEach(select => {
    select.addEventListener('change', updateTotal);
  });
  updateTotal();

  document.getElementById('quoteBtn').addEventListener('click', requestQuote);
}

function updateAllPrices() {
  // Update each select's displayed price based on current condition
  document.querySelectorAll('.pc-builder-select').forEach(select => {
    const options = select.options;
    for (let i = 0; i < options.length; i++) {
      const opt = options[i];
      const newPrice = parseInt(opt.dataset.newPrice);
      const usedPrice = parseInt(opt.dataset.usedPrice);
      const price = currentCondition === 'new' ? newPrice : usedPrice;
      opt.value = price;
      // Update displayed text
      const originalText = opt.text.split(' - RM')[0];
      opt.text = `${originalText} - RM${price}`;
    }
  });
}

function updateTotal() {
  let total = 0;
  document.querySelectorAll('.pc-builder-select').forEach(select => {
    total += parseInt(select.value) || 0;
  });
  const totalSpan = document.getElementById('totalPrice');
  if (totalSpan) totalSpan.textContent = `RM${total.toLocaleString()}`;
}

function requestQuote() {
  let message = `Hi FAZGAME 👋 I'd like to request a quote for a ${currentCondition === 'new' ? 'NEW' : 'USED'} custom PC with these components:\n\n`;
  for (const [key, category] of Object.entries(componentData)) {
    const select = document.getElementById(`${key}Select`);
    if (select) {
      const selectedOption = select.options[select.selectedIndex];
      message += `- ${category.label}: ${selectedOption.text}\n`;
    }
  }
  const totalSpan = document.getElementById('totalPrice');
  const total = totalSpan ? totalSpan.textContent : "RM0";
  message += `\nCondition: ${currentCondition === 'new' ? 'New' : 'Used'}\nEstimated Total: ${total}\n\nCan you provide a final price and availability?`;
  window.open(`https://api.whatsapp.com/send?phone=60163691936&text=${encodeURIComponent(message)}`, '_blank');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', buildPCBuilder);
} else {
  buildPCBuilder();
}