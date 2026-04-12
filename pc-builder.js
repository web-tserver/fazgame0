// pc-builder.js
// FAZGAME Custom PC Builder - Malaysian Favorites Edition (Shopee Popular Items)
// All components start unselected (RM0 total), WhatsApp marks unselected items.
// Removed "- RM0" suffix for zero-price options.

(function() {
  const componentData = {
    cpu: {
      label: "💻 CPU / Processor",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "Intel Core i3-10100 (New)", price: 380 },
        { name: "Intel Core i3-10100 (Used)", price: 280 },
        { name: "Intel Core i3-12100 (New)", price: 450 },
        { name: "Intel Core i3-12100 (Used)", price: 350 },
        { name: "Intel Core i5-12400F (New)", price: 650 },
        { name: "Intel Core i5-12400F (Used)", price: 500 },
        { name: "Intel Core i5-13400 (New)", price: 850 },
        { name: "Intel Core i5-13400 (Used)", price: 650 },
        { name: "Intel Core i5-14400F (New)", price: 950 },
        { name: "Intel Core i7-13700K (New)", price: 1450 },
        { name: "Intel Core i7-13700K (Used)", price: 1100 },
        { name: "Intel Core i7-14700K (New)", price: 1850 },
        { name: "Intel Core i9-14900K (New)", price: 2450 },
        { name: "Intel Core i5-7400 (Used)", price: 180 },
        { name: "Intel Core i5-8400 (Used)", price: 250 },
        { name: "Intel Core i5-9400F (Used)", price: 320 },
        { name: "Intel Core i7-7700 (Used)", price: 350 },
        { name: "Intel Core i7-8700 (Used)", price: 450 },
        { name: "Intel Core i7-9700K (Used)", price: 550 },
        { name: "Intel Core i9-9900K (Used)", price: 750 },
        { name: "AMD Ryzen 5 3600 (New)", price: 450 },
        { name: "AMD Ryzen 5 3600 (Used)", price: 350 },
        { name: "AMD Ryzen 5 5600 (New)", price: 650 },
        { name: "AMD Ryzen 5 5600X (New)", price: 750 },
        { name: "AMD Ryzen 5 5600X (Used)", price: 550 },
        { name: "AMD Ryzen 5 7500F (New)", price: 950 },
        { name: "AMD Ryzen 7 5700X (New)", price: 950 },
        { name: "AMD Ryzen 7 5700X (Used)", price: 750 },
        { name: "AMD Ryzen 7 7700 (New)", price: 1350 },
        { name: "AMD Ryzen 7 7700X (New)", price: 1450 },
        { name: "AMD Ryzen 7 7700X (Used)", price: 1100 },
        { name: "AMD Ryzen 7 7800X3D (New)", price: 1850 },
        { name: "AMD Ryzen 9 7900X (New)", price: 2150 },
        { name: "AMD Ryzen 9 7900X (Used)", price: 1600 },
        { name: "AMD Ryzen 9 7950X (New)", price: 2850 },
        { name: "AMD Ryzen 3 2200G (Used)", price: 200 },
        { name: "AMD Ryzen 5 2600 (Used)", price: 280 },
        { name: "AMD Ryzen 7 2700X (Used)", price: 380 },
        { name: "AMD Ryzen 5 3500X (Used)", price: 300 },
        { name: "AMD Ryzen 5 1600 (Used)", price: 220 }
      ]
    },
    cooler: {
      label: "❄️ CPU Cooler",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "Stock Cooler (included)", price: 0, hidePrice: true },
        { name: "Air Cooler (Budget - e.g. ID-Cooling SE-214)", price: 120 },
        { name: "Air Cooler (New - Generic)", price: 150 },
        { name: "Air Cooler (Used)", price: 100 },
        { name: "Deepcool AK400 (New)", price: 150 },
        { name: "Cooler Master Hyper 212 Spectrum (New)", price: 180 },
        { name: "Thermalright Peerless Assassin 120 (New)", price: 220 },
        { name: "240mm AIO Liquid Cooler (New)", price: 350 },
        { name: "240mm AIO Liquid Cooler (Used)", price: 250 },
        { name: "360mm AIO Liquid Cooler (New)", price: 550 },
        { name: "360mm AIO Liquid Cooler (Used)", price: 400 }
      ]
    },
    motherboard: {
      label: "🔧 Motherboard",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "H610 / A520 (Budget) (New)", price: 320 },
        { name: "H610 / A520 (Budget) (Used)", price: 220 },
        { name: "B660 / B550 (Mid-range) (New)", price: 550 },
        { name: "B660 / B550 (Mid-range) (Used)", price: 400 },
        { name: "B760M (DDR5) (New)", price: 650 },
        { name: "Z690 / X570 (High-end) (New)", price: 850 },
        { name: "Z690 / X570 (High-end) (Used)", price: 600 },
        { name: "Z790 / X670E (Premium) (New)", price: 1200 },
        { name: "Z790 / X670E (Premium) (Used)", price: 850 }
      ]
    },
    ram: {
      label: "🧠 RAM",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "8GB DDR4 2666MHz (New)", price: 120 },
        { name: "8GB DDR4 2666MHz (Used)", price: 80 },
        { name: "8GB DDR4 3200MHz (New)", price: 150 },
        { name: "8GB DDR4 3200MHz (Used)", price: 100 },
        { name: "16GB DDR4 3200MHz (New)", price: 250 },
        { name: "16GB DDR4 3200MHz (Used)", price: 180 },
        { name: "32GB DDR4 3200MHz (New)", price: 450 },
        { name: "32GB DDR4 3200MHz (Used)", price: 320 },
        { name: "16GB DDR5 5200MHz (New)", price: 350 },
        { name: "16GB DDR5 5200MHz (Used)", price: 250 },
        { name: "16GB DDR5 6000MHz (New - Kingston/Corsair)", price: 420 },
        { name: "32GB DDR5 5600MHz (New)", price: 650 },
        { name: "32GB DDR5 5600MHz (Used)", price: 450 },
        { name: "32GB DDR5 6000MHz (New)", price: 750 }
      ]
    },
    gpu: {
      label: "🎮 Graphics Card (GPU)",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "Integrated Graphics", price: 0, hidePrice: true },
        { name: "GT 1030 2GB (New)", price: 350 },
        { name: "GT 1030 2GB (Used)", price: 250 },
        { name: "GTX 1050 Ti 4GB (Used)", price: 350 },
        { name: "GTX 1060 3GB (Used)", price: 400 },
        { name: "GTX 1060 6GB (Used)", price: 480 },
        { name: "GTX 1070 8GB (Used)", price: 550 },
        { name: "GTX 1070 Ti 8GB (Used)", price: 650 },
        { name: "GTX 1080 8GB (Used)", price: 750 },
        { name: "GTX 1080 Ti 11GB (Used)", price: 950 },
        { name: "GTX 1650 4GB (New)", price: 550 },
        { name: "GTX 1650 4GB (Used)", price: 400 },
        { name: "GTX 1660 Super 6GB (New)", price: 750 },
        { name: "GTX 1660 Super 6GB (Used)", price: 550 },
        { name: "RTX 2060 6GB (Used)", price: 650 },
        { name: "RTX 2070 8GB (Used)", price: 800 },
        { name: "RTX 2080 8GB (Used)", price: 1000 },
        { name: "RTX 2080 Ti 11GB (Used)", price: 1300 },
        { name: "RTX 3050 8GB (New)", price: 950 },
        { name: "RTX 3050 8GB (Used)", price: 700 },
        { name: "RTX 3060 12GB (New)", price: 850 },
        { name: "RTX 3060 12GB (Used)", price: 650 },
        { name: "RTX 3060 Ti 8GB (New)", price: 1150 },
        { name: "RTX 3060 Ti 8GB (Used)", price: 850 },
        { name: "RTX 4060 8GB (New)", price: 1250 },
        { name: "RTX 4060 8GB (Used)", price: 950 },
        { name: "RTX 4060 Ti 8GB (New)", price: 1450 },
        { name: "RTX 4060 Ti 8GB (Used)", price: 1100 },
        { name: "RTX 4070 12GB (New)", price: 1950 },
        { name: "RTX 4070 12GB (Used)", price: 1450 },
        { name: "RTX 4070 Super 12GB (New)", price: 2450 },
        { name: "RTX 4070 Ti Super 16GB (New)", price: 3450 },
        { name: "RTX 4080 Super 16GB (New)", price: 4850 },
        { name: "AMD RX 580 8GB (Used)", price: 380 },
        { name: "AMD RX 590 8GB (Used)", price: 450 },
        { name: "AMD RX 5600 XT 6GB (Used)", price: 550 },
        { name: "AMD RX 5700 XT 8GB (Used)", price: 700 },
        { name: "AMD RX 6600 8GB (New)", price: 750 },
        { name: "AMD RX 6600 8GB (Used)", price: 550 },
        { name: "AMD RX 6600 XT 8GB (New)", price: 950 },
        { name: "AMD RX 6600 XT 8GB (Used)", price: 700 },
        { name: "AMD RX 6700 XT 12GB (New)", price: 1250 },
        { name: "AMD RX 6700 XT 12GB (Used)", price: 900 },
        { name: "AMD RX 7700 XT 12GB (New)", price: 1650 },
        { name: "AMD RX 7700 XT 12GB (Used)", price: 1200 },
        { name: "AMD RX 7800 XT 16GB (New)", price: 2100 },
        { name: "AMD RX 7800 XT 16GB (Used)", price: 1600 },
        { name: "AMD RX 7900 GRE 16GB (New)", price: 2650 },
        { name: "AMD RX 7900 XT 20GB (New)", price: 3650 }
      ]
    },
    storage: {
      label: "💾 Storage",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "240GB SSD (New)", price: 80 },
        { name: "240GB SSD (Used)", price: 50 },
        { name: "480GB SSD (New)", price: 120 },
        { name: "480GB SSD (Used)", price: 80 },
        { name: "512GB NVMe SSD (New)", price: 200 },
        { name: "512GB NVMe SSD (Used)", price: 140 },
        { name: "1TB HDD (New)", price: 150 },
        { name: "1TB HDD (Used)", price: 100 },
        { name: "1TB NVMe SSD (New - Lexar/Kingston)", price: 280 },
        { name: "1TB NVMe SSD (New - Samsung 980)", price: 350 },
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
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "450W 80+ White (New)", price: 150 },
        { name: "450W 80+ White (Used)", price: 100 },
        { name: "500W 80+ Bronze (New)", price: 200 },
        { name: "500W 80+ Bronze (Used)", price: 140 },
        { name: "550W 80+ Bronze (New - Cooler Master)", price: 250 },
        { name: "550W 80+ Bronze (Used)", price: 180 },
        { name: "650W 80+ Bronze (New)", price: 280 },
        { name: "650W 80+ Bronze (Used)", price: 200 },
        { name: "650W 80+ Gold (New - Corsair)", price: 380 },
        { name: "650W 80+ Gold (Used)", price: 280 },
        { name: "750W 80+ Gold (New - Corsair RM750e)", price: 480 },
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
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "Budget ATX (Tecware Flatline) (New)", price: 150 },
        { name: "Budget ATX (Tecware Flatline) (Used)", price: 100 },
        { name: "Mid Tower with Tempered Glass (New)", price: 250 },
        { name: "Mid Tower with Tempered Glass (Used)", price: 180 },
        { name: "Armaggeddon Mid Tower (New)", price: 220 },
        { name: "Armaggeddon Mid Tower (Used)", price: 160 },
        { name: "Tecware Nexus Air (New)", price: 200 },
        { name: "Cooler Master TD500 (New)", price: 350 },
        { name: "Cooler Master TD500 (Used)", price: 250 },
        { name: "Lian Li Lancool 216 (New)", price: 450 },
        { name: "Lian Li O11 Dynamic (New)", price: 550 },
        { name: "Premium RGB Case (Lian Li) (New)", price: 450 },
        { name: "Premium RGB Case (Lian Li) (Used)", price: 320 },
        { name: "Small Form Factor (ITX) (New)", price: 300 },
        { name: "Small Form Factor (ITX) (Used)", price: 220 }
      ]
    },
    monitor: {
      label: "🖥️ Monitor",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: '20" 60Hz TN (New)', price: 250 },
        { name: '20" 60Hz TN (Used)', price: 150 },
        { name: '22" 75Hz IPS (New)', price: 350 },
        { name: '22" 75Hz IPS (Used)', price: 250 },
        { name: '24" 144Hz Gaming (New - PRISM+)', price: 550 },
        { name: '24" 144Hz Gaming (Used)', price: 400 },
        { name: '24" 165Hz Curved (New)', price: 650 },
        { name: '24" 165Hz Curved (Used)', price: 480 },
        { name: '27" 144Hz Curved (New - ViewSonic)', price: 750 },
        { name: '27" 144Hz Curved (Used)', price: 550 },
        { name: '27" 165Hz IPS (New)', price: 850 },
        { name: '27" 165Hz IPS (Used)', price: 650 },
        { name: '27" 240Hz IPS (New)', price: 1250 },
        { name: '32" 4K UHD (New)', price: 1350 },
        { name: '32" 4K UHD (Used)', price: 950 }
      ]
    },
    accessories: {
      label: "🎧 Accessories (Keyboard + Mouse)",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "Basic Combo (New)", price: 100 },
        { name: "Basic Combo (Used)", price: 70 },
        { name: "Mechanical Keyboard + Gaming Mouse (New)", price: 250 },
        { name: "Mechanical Keyboard + Gaming Mouse (Used)", price: 180 },
        { name: "RGB Mechanical + Wireless Mouse (New)", price: 400 },
        { name: "RGB Mechanical + Wireless Mouse (Used)", price: 280 },
        { name: "Logitech G102 + Keyboard (New)", price: 200 },
        { name: "Logitech G102 + Keyboard (Used)", price: 140 },
        { name: "Razer Cynosa + Viper Mini (New)", price: 350 }
      ]
    },
    wifiAdapter: {
      label: "📡 WiFi / Bluetooth Adapter",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
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
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "Windows 11 Home (License + Installation)", price: 150 },
        { name: "Windows 11 Pro (License + Installation)", price: 250 },
        { name: "Windows 10 Home (License + Installation)", price: 120 },
        { name: "Windows 10 Pro (License + Installation)", price: 200 }
      ]
    },
    assembly: {
      label: "🔧 Assembly & Testing",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "Free Assembly & Testing", price: 0, hidePrice: true },
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
        let displayText = item.name;
        if (item.price !== 0 && !item.hidePrice) {
          displayText += ` - RM${item.price}`;
        }
        html += `<option value="${item.price}" ${selectedAttr}>${displayText}</option>`;
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
        const optionText = selectedOption.text;
        if (optionText.includes("None (Not selected)") || optionText.includes("Free Assembly")) {
          message += `- ${category.label}: Unselected\n`;
        } else {
          message += `- ${category.label}: ${optionText}\n`;
        }
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