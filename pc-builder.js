// pc-builder.js
// FAZGAME Custom PC Builder - Malaysian Favorites Edition

(function() {
  const componentData = {
    cpu: {
      label: "💻 CPU / Processor",
      items: [
        { name: "Intel Core i3-10100 (New)", price: 380 },
        { name: "Intel Core i3-10100 (Used)", price: 280 },
        { name: "Intel Core i3-12100 (New)", price: 450, selected: true },
        { name: "Intel Core i3-12100 (Used)", price: 350 },
        { name: "Intel Core i5-12400F (New)", price: 650 },
        { name: "Intel Core i5-12400F (Used)", price: 500 },
        { name: "Intel Core i5-13400 (New)", price: 850 },
        { name: "Intel Core i5-13400 (Used)", price: 650 },
        { name: "Intel Core i7-13700K (New)", price: 1450 },
        { name: "Intel Core i7-13700K (Used)", price: 1100 },
        { name: "AMD Ryzen 5 3600 (New)", price: 450 },
        { name: "AMD Ryzen 5 3600 (Used)", price: 350 },
        { name: "AMD Ryzen 5 5600X (New)", price: 750 },
        { name: "AMD Ryzen 5 5600X (Used)", price: 550 },
        { name: "AMD Ryzen 7 5700X (New)", price: 950 },
        { name: "AMD Ryzen 7 5700X (Used)", price: 750 },
        { name: "AMD Ryzen 7 7700X (New)", price: 1450 },
        { name: "AMD Ryzen 7 7700X (Used)", price: 1100 },
        { name: "AMD Ryzen 9 7900X (New)", price: 2150 },
        { name: "AMD Ryzen 9 7900X (Used)", price: 1600 }
      ]
    },
    cooler: {
      label: "❄️ CPU Cooler",
      items: [
        { name: "Stock Cooler (included)", price: 0, selected: true },
        { name: "Air Cooler (Budget - e.g. ID-Cooling)", price: 120, selected: false },
        { name: "Air Cooler (New - Generic)", price: 150 },
        { name: "Air Cooler (Used)", price: 100 },
        { name: "240mm AIO Liquid Cooler (New)", price: 350 },
        { name: "240mm AIO Liquid Cooler (Used)", price: 250 },
        { name: "360mm AIO Liquid Cooler (New)", price: 550 },
        { name: "360mm AIO Liquid Cooler (Used)", price: 400 },
        { name: "Cooler Master Hyper 212 (New)", price: 180 },
        { name: "Cooler Master Hyper 212 (Used)", price: 120 }
      ]
    },
    motherboard: {
      label: "🔧 Motherboard",
      items: [
        { name: "H610 / A520 (Budget) (New)", price: 320, selected: true },
        { name: "H610 / A520 (Budget) (Used)", price: 220 },
        { name: "B660 / B550 (Mid-range) (New)", price: 550 },
        { name: "B660 / B550 (Mid-range) (Used)", price: 400 },
        { name: "Z690 / X570 (High-end) (New)", price: 850 },
        { name: "Z690 / X570 (High-end) (Used)", price: 600 },
        { name: "Z790 / X670E (Premium) (New)", price: 1200 },
        { name: "Z790 / X670E (Premium) (Used)", price: 850 }
      ]
    },
    ram: {
      label: "🧠 RAM",
      items: [
        { name: "8GB DDR4 2666MHz (New)", price: 120 },
        { name: "8GB DDR4 2666MHz (Used)", price: 80 },
        { name: "8GB DDR4 3200MHz (New)", price: 150 },
        { name: "8GB DDR4 3200MHz (Used)", price: 100 },
        { name: "16GB DDR4 3200MHz (New)", price: 250, selected: true },
        { name: "16GB DDR4 3200MHz (Used)", price: 180 },
        { name: "32GB DDR4 3200MHz (New)", price: 450 },
        { name: "32GB DDR4 3200MHz (Used)", price: 320 },
        { name: "16GB DDR5 5200MHz (New)", price: 350 },
        { name: "16GB DDR5 5200MHz (Used)", price: 250 },
        { name: "32GB DDR5 5600MHz (New)", price: 650 },
        { name: "32GB DDR5 5600MHz (Used)", price: 450 }
      ]
    },
    gpu: {
      label: "🎮 Graphics Card (GPU)",
      items: [
        { name: "Integrated Graphics", price: 0 },
        { name: "GT 1030 2GB (New)", price: 350 },
        { name: "GT 1030 2GB (Used)", price: 250 },
        { name: "GTX 1650 4GB (New)", price: 550 },
        { name: "GTX 1650 4GB (Used)", price: 400 },
        { name: "GTX 1660 Super 6GB (New)", price: 750 },
        { name: "GTX 1660 Super 6GB (Used)", price: 550 },
        { name: "RTX 3060 12GB (New)", price: 850, selected: true },
        { name: "RTX 3060 12GB (Used)", price: 650 },
        { name: "RTX 3060 Ti 8GB (New)", price: 1150 },
        { name: "RTX 3060 Ti 8GB (Used)", price: 850 },
        { name: "RTX 4060 8GB (New)", price: 1250 },
        { name: "RTX 4060 8GB (Used)", price: 950 },
        { name: "RTX 4060 Ti 8GB (New)", price: 1450 },
        { name: "RTX 4060 Ti 8GB (Used)", price: 1100 },
        { name: "RTX 4070 12GB (New)", price: 1950 },
        { name: "RTX 4070 12GB (Used)", price: 1450 },
        { name: "AMD RX 6600 8GB (New)", price: 750 },
        { name: "AMD RX 6600 8GB (Used)", price: 550 },
        { name: "AMD RX 6600 XT 8GB (New)", price: 950 },
        { name: "AMD RX 6600 XT 8GB (Used)", price: 700 },
        { name: "AMD RX 6700 XT 12GB (New)", price: 1250 },
        { name: "AMD RX 6700 XT 12GB (Used)", price: 900 },
        { name: "AMD RX 7700 XT 12GB (New)", price: 1650 },
        { name: "AMD RX 7700 XT 12GB (Used)", price: 1200 },
        { name: "AMD RX 7800 XT 16GB (New)", price: 2100 },
        { name: "AMD RX 7800 XT 16GB (Used)", price: 1600 }
      ]
    },
    storage: {
      label: "💾 Storage",
      items: [
        { name: "240GB SSD (New)", price: 80 },
        { name: "240GB SSD (Used)", price: 50 },
        { name: "480GB SSD (New)", price: 120 },
        { name: "480GB SSD (Used)", price: 80 },
        { name: "512GB NVMe SSD (New)", price: 200, selected: true },
        { name: "512GB NVMe SSD (Used)", price: 140 },
        { name: "1TB HDD (New)", price: 150 },
        { name: "1TB HDD (Used)", price: 100 },
        { name: "1TB NVMe SSD (New)", price: 350 },
        { name: "1TB NVMe SSD (Used)", price: 250 },
        { name: "2TB NVMe SSD (New)", price: 550 },
        { name: "2TB NVMe SSD (Used)", price: 400 },
        { name: "1TB HDD + 256GB SSD (New)", price: 250 },
        { name: "1TB HDD + 256GB SSD (Used)", price: 180 },
        { name: "2TB HDD + 512GB SSD (New)", price: 380 },
        { name: "2TB HDD + 512GB SSD (Used)", price: 280 }
      ]
    },
    psu: {
      label: "⚡ Power Supply (PSU)",
      items: [
        { name: "450W 80+ White (New)", price: 150 },
        { name: "450W 80+ White (Used)", price: 100 },
        { name: "500W 80+ Bronze (New)", price: 200, selected: true },
        { name: "500W 80+ Bronze (Used)", price: 140 },
        { name: "550W 80+ Bronze (New - Cooler Master)", price: 250 },
        { name: "550W 80+ Bronze (Used)", price: 180 },
        { name: "650W 80+ Bronze (New)", price: 280 },
        { name: "650W 80+ Bronze (Used)", price: 200 },
        { name: "650W 80+ Gold (New - Corsair)", price: 380 },
        { name: "650W 80+ Gold (Used)", price: 280 },
        { name: "750W 80+ Gold (New)", price: 450 },
        { name: "750W 80+ Gold (Used)", price: 320 },
        { name: "850W 80+ Gold (New)", price: 550 },
        { name: "850W 80+ Gold (Used)", price: 400 },
        { name: "1000W 80+ Gold (New)", price: 750 },
        { name: "1000W 80+ Gold (Used)", price: 550 }
      ]
    },
    pcCase: {
      label: "🖥️ PC Case",
      items: [
        { name: "Budget ATX (Tecware Flatline) (New)", price: 150, selected: true },
        { name: "Budget ATX (Tecware Flatline) (Used)", price: 100 },
        { name: "Mid Tower with Tempered Glass (New)", price: 250 },
        { name: "Mid Tower with Tempered Glass (Used)", price: 180 },
        { name: "Armaggeddon Mid Tower (New)", price: 220 },
        { name: "Armaggeddon Mid Tower (Used)", price: 160 },
        { name: "Premium RGB Case (Lian Li) (New)", price: 450 },
        { name: "Premium RGB Case (Lian Li) (Used)", price: 320 },
        { name: "Small Form Factor (ITX) (New)", price: 300 },
        { name: "Small Form Factor (ITX) (Used)", price: 220 },
        { name: "Cooler Master TD500 (New)", price: 350 },
        { name: "Cooler Master TD500 (Used)", price: 250 }
      ]
    },
    monitor: {
      label: "🖥️ Monitor",
      items: [
        { name: "None", price: 0 },
        { name: '20" 60Hz TN (New)', price: 250 },
        { name: '20" 60Hz TN (Used)', price: 150 },
        { name: '22" 75Hz IPS (New)', price: 350 },
        { name: '22" 75Hz IPS (Used)', price: 250 },
        { name: '24" 144Hz Gaming (New - PRISM+)', price: 550, selected: true },
        { name: '24" 144Hz Gaming (Used)', price: 400 },
        { name: '24" 165Hz Curved (New)', price: 650 },
        { name: '24" 165Hz Curved (Used)', price: 480 },
        { name: '27" 144Hz Curved (New - ViewSonic)', price: 750 },
        { name: '27" 144Hz Curved (Used)', price: 550 },
        { name: '27" 165Hz IPS (New)', price: 850 },
        { name: '27" 165Hz IPS (Used)', price: 650 },
        { name: '32" 4K UHD (New)', price: 1350 },
        { name: '32" 4K UHD (Used)', price: 950 }
      ]
    },
    accessories: {
      label: "🎧 Accessories (Keyboard + Mouse)",
      items: [
        { name: "None", price: 0 },
        { name: "Basic Combo (New)", price: 100, selected: true },
        { name: "Basic Combo (Used)", price: 70 },
        { name: "Mechanical Keyboard + Gaming Mouse (New)", price: 250 },
        { name: "Mechanical Keyboard + Gaming Mouse (Used)", price: 180 },
        { name: "RGB Mechanical + Wireless Mouse (New)", price: 400 },
        { name: "RGB Mechanical + Wireless Mouse (Used)", price: 280 },
        { name: "Logitech G102 + Keyboard (New)", price: 200 },
        { name: "Logitech G102 + Keyboard (Used)", price: 140 }
      ]
    },
    wifiAdapter: {
      label: "📡 WiFi / Bluetooth Adapter",
      items: [
        { name: "None", price: 0, selected: true },
        { name: "USB WiFi Dongle (New)", price: 30 },
        { name: "USB WiFi Dongle (Used)", price: 15 },
        { name: "PCIe WiFi 6 + BT 5.0 (New)", price: 120 },
        { name: "PCIe WiFi 6 + BT 5.0 (Used)", price: 80 },
        { name: "TP-Link Archer T4U (New)", price: 90 },
        { name: "TP-Link Archer T4U (Used)", price: 60 }
      ]
    },
    os: {
      label: "🪟 Operating System",
      items: [
        { name: "None (I'll install myself)", price: 0, selected: true },
        { name: "Windows 11 Home (License + Installation)", price: 150 },
        { name: "Windows 11 Pro (License + Installation)", price: 250 },
        { name: "Windows 10 Home (License + Installation)", price: 120 },
        { name: "Windows 10 Pro (License + Installation)", price: 200 }
      ]
    },
    assembly: {
      label: "🔧 Assembly & Testing",
      items: [
        { name: "Free Assembly & Testing", price: 0, selected: true },
        { name: "Express Assembly (24h) + Cable Management", price: 50 },
        { name: "Custom Watercooling Loop Setup", price: 300 }
      ]
    }
  };

  function buildPCBuilder() {
    const container = document.getElementById('pc-builder-container');
    if (!container) return;

    let html = '<div class="builder-group-list">';
    for (const [key, category] of Object.entries(componentData)) {
      html += `
        <div class="builder-group">
          <label>${category.label}</label>
          <select id="${key}Select" class="pc-builder-select">
      `;
      category.items.forEach(item => {
        const selectedAttr = item.selected ? 'selected' : '';
        html += `<option value="${item.price}" ${selectedAttr}>${item.name} - RM${item.price}</option>`;
      });
      html += `</select></div>`;
    }
    html += '</div>';

    html += `
      <div class="total-price">
        Estimated Total: <span id="totalPrice">RM0</span>
      </div>
      <button id="quoteBtn" class="quote-btn">Request Quote via WhatsApp</button>
    `;
    container.innerHTML = html;

    document.querySelectorAll('.pc-builder-select').forEach(select => {
      select.addEventListener('change', updateTotal);
    });
    updateTotal();

    const quoteBtn = document.getElementById('quoteBtn');
    if (quoteBtn) quoteBtn.addEventListener('click', requestQuote);
  }

  function updateTotal() {
    let total = 0;
    for (const key of Object.keys(componentData)) {
      const select = document.getElementById(`${key}Select`);
      if (select) {
        total += parseInt(select.value) || 0;
      }
    }
    const totalSpan = document.getElementById('totalPrice');
    if (totalSpan) totalSpan.textContent = `RM${total.toLocaleString()}`;
  }

  function requestQuote() {
    let message = "Hi FAZGAME 👋 I'd like to request a quote for a custom PC with these components:\n\n";
    for (const [key, category] of Object.entries(componentData)) {
      const select = document.getElementById(`${key}Select`);
      if (select) {
        const selectedOption = select.options[select.selectedIndex];
        message += `- ${category.label}: ${selectedOption.text}\n`;
      }
    }
    const totalSpan = document.getElementById('totalPrice');
    const total = totalSpan ? totalSpan.textContent : "RM0";
    message += `\nEstimated Total: ${total}\n\nCan you provide a final price and availability?`;
    window.open(`https://api.whatsapp.com/send?phone=60163691936&text=${encodeURIComponent(message)}`, '_blank');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildPCBuilder);
  } else {
    buildPCBuilder();
  }
})();
