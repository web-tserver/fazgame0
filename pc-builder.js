// pc-builder.js
// FAZGAME Custom PC Builder - Updated with new component list from price.xlsx
// RAM, Storage, and Accessories follow Shopee popular prices.
// All components start unselected (RM0 total), WhatsApp marks unselected items.

(function() {
  const componentData = {
    cpu: {
      label: "💻 CPU / Processor",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "INTEL CORE i5-14400F LGA1700 PROCESSOR (3Y)", price: 719 },
        { name: "INTEL CORE ULTRA 5 225F LGA1851 PROCESSOR MPK (3Y)", price: 699 },
        { name: "INTEL CORE ULTRA 5 225 LGA1851 PROCESSOR (3Y)", price: 789 },
        { name: "INTEL CORE ULTRA 5 245K LGA1851 PROCESSOR (3Y)", price: 1249 },
        { name: "INTEL CORE ULTRA 7 265K LGA1851 PROCESSOR (3Y)", price: 1599 },
        { name: "INTEL CORE I5-14600KF LGA1700 PROCESSOR MPK (3Y)", price: 1079 },
        { name: "INTEL CORE I5-12400F LGA1700 PROCESSOR MPK (3Y)", price: 659 },
        { name: "INTEL CORE I5-13600KF LGA1700 PROCESSOR MPK (3Y)", price: 959 },
        { name: "AMD RYZEN 5 5500 AM4 PROCESSOR MPK (3Y)", price: 429 },
        { name: "AMD RYZEN 5 5600 AM4 PROCESSOR MPK (3Y)", price: 569 },
        { name: "AMD RYZEN 5 5600X AM4 PROCESSOR MPK (3Y)", price: 669 },
        { name: "AMD RYZEN 7 5700X AM4 PROCESSOR MPK (3Y)", price: 829 },
        { name: "AMD RYZEN 5 7500F AM5 PROCESSOR MPK (3Y)", price: 699 },
        { name: "AMD RYZEN 7 7800X3D AM5 PROCESSOR MPK (3Y)", price: 1599 },
        { name: "AMD RYZEN 5 8400F AM5 PROCESSOR MPK (3Y)", price: 699 },
        { name: "AMD RYZEN 5 7600X AM5 PROCESSOR MPK (3Y)", price: 899 },
        { name: "AMD RYZEN 5 9600X AM5 PROCESSOR MPK (3Y)", price: 1059 },
        { name: "AMD RYZEN 7 8700F AM5 PROCESSOR MPK (3Y)", price: 999 },
        { name: "AMD RYZEN 7 8700G AM5 PROCESSOR MPK (3Y)", price: 1299 },
        { name: "AMD RYZEN 7 9700X AM5 PROCESSOR MPK (3Y)", price: 1399 }
      ]
    },
    cooler: {
      label: "❄️ CPU Cooler",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "CPS DA360 PRO DIGITAL ARGB 360MM LIQUID AIO COOLER - BLACK", price: 359 },
        { name: "DEEPCOOL LE360 V2 ARGB AIO WATER COOLING - WHITE (3Y)", price: 399 },
        { name: "DARKFLASH WAVE DV 240S ARGB LIQUID CPU COOLER WITH IPS LED SCREEN - BLACK", price: 439 },
        { name: "DEEPCOOL LM240 ARGB AIO WATER COOLING (3Y)", price: 369 },
        { name: "DEEPCOOL LM240 ARGB AIO WATER COOLING - WHITE (3Y)", price: 369 },
        { name: "DEEPCOOL LM360 ARGB AIO WATER COOLING (3Y)", price: 439 },
        { name: "DEEPCOOL LM360 ARGB AIO WATER COOLING - WHITE (3Y)", price: 439 },
        { name: "DEEPCOOL LE520 240MM AIO CPU COOLER - WHITE (3Y)", price: 209 },
        { name: "DEEPCOOL LE720 360MM AIO CPU COOLER - WHITE (3Y)", price: 269 },
        { name: "DEEPCOOL LQ240 ARGB AIO LIQUID COOLER - BLK", price: 529 },
        { name: "DEEPCOOL LT360 ARGB AIO WATER COOLING - WHITE (5Y)", price: 499 },
        { name: "ID COOLING FX240 LCD ARGB AIO LIQUID COOLER - BLACK", price: 249 },
        { name: "ID COOLING FX360 LCD ARGB AIO LIQUID COOLER - BLACK", price: 329 },
        { name: "MSI MAG CORELIQUID A15 360MM AIO CPU COOLER (3Y)", price: 449 },
        { name: "MSI MAG CORELIQUID i360 AIO CPU COOLER BULK - WHITE (3Y)", price: 399 },
        { name: "MSI MEG CORELIQUID S280 280MM AIO CPU COOLER WITH 2.4\" IPS DISPLAY BULK (3Y)", price: 499 },
        { name: "OCYPUS SIGMA L24 PRO 240MM AIO LIQUID COOLER WITH 3.5 INCH IPS DISPLAY - BLACK (3Y)", price: 459 },
        { name: "OCYPUS SIGMA L24 PRO 240MM AIO LIQUID COOLER WITH 3.5 INCH IPS DISPLAY - WHITE (3Y)", price: 459 },
        { name: "OCYPUS SIGMA L36 PRO 360MM AIO LIQUID COOLER WITH 3.5 INCH IPS DISPLAY - BLACK (3Y)", price: 559 },
        { name: "OCYPUS SIGMA L36 PRO 360MM AIO LIQUID COOLER WITH 3.5 INCH IPS DISPLAY - WHITE (3Y)", price: 559 },
        { name: "PHANTEKS GLACIER ONE 360D30 DRGB AIO LIQUID COOLER - WHITE (3Y)", price: 699 },
        { name: "THERMALRIGHT WONDER VISION 360 UB ARGB 360MM AIO LIQUID COOLER WITH LCD SCREEN - BLACK (5Y)", price: 999 },
        { name: "CPS PALADIN EX400 ARGB TOWER CPU AIR COOLER (130x75x157mm) TDP 220W - BLACK", price: 99 },
        { name: "CPS RC400-53 LOW PROFILE (93x93x53.5mm) TDP 160W CPU AIR COOLER - SILVER", price: 159 },
        { name: "CPS RT400 DIGITAL TOWER CPU AIR COOLER - BLACK", price: 129 },
        { name: "CPS RT500 DIGITAL ARGB TOWER CPU AIR COOLER - BLACK", price: 149 },
        { name: "CPS RT500 TC ARGB TOWER CPU AIR COOLER - BLACK", price: 129 },
        { name: "CPS RT500 TC ARGB TOWER CPU AIR COOLER - WHITE", price: 129 },
        { name: "CPS RT620 Digital DUAL TOWER CPU AIR COOLER (125x138x157mm) TDP 265W - BLACK", price: 199 },
        { name: "CPS RZ400 V2 TOWER CPU AIR COOLER (130x80x155mm) TDP 245W - BLACK", price: 149 },
        { name: "CPS RZ400 V2 TOWER CPU AIR COOLER (130x80x155mm) TDP 245W - WHITE", price: 159 },
        { name: "CPS RZ820 DUAL TOWER CPU AIR COOLER (161x150x165mm) TDP 290W - BLACK", price: 599 },
        { name: "ID-COOLING FROZN A620 PRO SE AIR COOLER - BLACK (2Y)", price: 139 },
        { name: "ID-COOLING SE-214-XT ARGB LGA1700", price: 99 },
        { name: "OCYPUS GAMMA A40 ARGB DIGITAL AIR COOLER - BLACK", price: 109 },
        { name: "OCYPUS GAMMA A40 ARGB DIGITAL AIR COOLER - WHITE", price: 109 },
        { name: "OCYPUS GAMMA A40 ARGB AIR COOLER - BLACK", price: 89 },
        { name: "OCYPUS GAMMA A40 ARGB AIR COOLER - WHITE", price: 89 },
        { name: "OCYPUS DELTA A40 EX ARGB CPU AIR COOLER - BLACK (3Y)", price: 119 },
        { name: "OCYPUS DELTA A40 SE ARGB CPU AIR COOLER - BLACK (3Y)", price: 109 },
        { name: "DEEPCOOL AG400 V5 RGB AIR COOLER - BLACK (1Y)", price: 109 },
        { name: "DEEPCOOL AG400 ARGB AIR COOLER - WHITE (1Y)", price: 109 },
        { name: "INVASION SC-400 TWIN FAN ARGB TOWER COOLER - BLACK", price: 60 },
        { name: "ZALMAN CNPS9X PERFORMA PLUS CPU COOLER - BLACK", price: 119 }
      ]
    },
    motherboard: {
      label: "🔧 Motherboard",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "ASUS PRIME A620M-K MATX AM5 MAINBOARD BULK (3Y)", price: 369 },
        { name: "ASUS PRIME B650M-A II WIFI MATX AM5 MAINBOARD (3Y)", price: 649 },
        { name: "ASUS PRIME B650M-R AM5 MATX MAINBOARD BULK (3Y)", price: 459 },
        { name: "ASUS PRIME B760M-A WIFI DDR5 MATX LGA1700 MAINBOARD BULK (3Y)", price: 699 },
        { name: "ASUS TUF GAMING B650M-PLUS WIFI MATX AM5 MAINBOARD (3Y)", price: 769 },
        { name: "ASUS TUF GAMING X870-PLUS WIFI AM5 ATX MAINBOARD (3Y)", price: 1799 },
        { name: "ASUS ROG STRIX B760-A GAMING WIFI ATX DDR5 LGA1700 MAINBOARD (3Y)", price: 789 },
        { name: "ASROCK H610M-HDV/M.2 R2.0 MATX DDR4 LGA1700 MAINBOARD (3Y)", price: 299 },
        { name: "ASROCK B860 PRO-A WIFI LGA1851 ATX MAINBOARD (3Y)", price: 899 },
        { name: "ASROCK Z890 PRO RS WIFI LGA1851 ATX MAINBOARD (3Y)", price: 1399 },
        { name: "ASROCK Z890 STEEL LEGEND WIFI LGA1851 ATX MAINBOARD (3Y)", price: 1459 },
        { name: "GIGABYTE B650E AORUS ELITE X AX ICE ATX AM5 MAINBOARD (3Y)", price: 1099 },
        { name: "GIGABYTE B850M EAGLE WIFI6E ICE AM5 MATX MAINBOARD (3Y)", price: 869 },
        { name: "GIGABYTE B550M DS3H AC R2 MATX AM4 MAINBOARD (3Y)", price: 469 },
        { name: "GIGABYTE A520M-K V2 AM4 DDR4 MAINBOARD (3Y)", price: 289 },
        { name: "COLORFUL BATTLE AX H810M-A WIFI V20 LGA1851 MATX MAINBOARD (3Y)", price: 399 }
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
        { name: "ASROCK AMD RADEON RX 9070 STEEL LEGEND OC 16GB GDDR6 VGA CARD (3Y)", price: 3499 },
        { name: "ASUS DUAL GEFORCE RTX 4060 TI EVO OC EDITION 8GB GDDR6 VGA CARD (3Y)", price: 2299 },
        { name: "ASUS RADEON RX 6750 GRE 10GB ATLAS SHARK GDDR6 VGA CARD (2Y)", price: 1599 },
        { name: "ASUS PRIME GEFORCE RTX 5060 8GB GDDR7 OC VGA GRAPHIC CARD - (3Y)", price: 1599 },
        { name: "COLORFUL GEFORCE RTX 5070 GAMING 12GB-V GRAPHIC CARD (3Y)", price: 3399 },
        { name: "INNO3D GEFORCE RTX 5060 TI TWIN X2 8GB GDDR7 128BIT VGA CARD (3Y)", price: 1999 },
        { name: "POWERCOLOR FIGHTER RADEON RX 6750 GRE 10GB GDDR6 VGA CARD (2Y)", price: 1599 },
        { name: "PELADN AMD RADEON RX 580 DUAL FAN GDDR5 8GB 256BIT VGA CARD (2Y)", price: 499 },
        { name: "PALIT GEFORCE RTX 5060 INFINITY 2 OC 8GB GDDR7 128BITS VGA GRAPHIC CARD - (3Y)", price: 1699 },
        { name: "PALIT GEFORCE RTX 5070 OC 12GB GDDR7 VGA GRAPHIC CARD (3Y) - WHITE", price: 2999 },
        { name: "PNY GEFORCE RTX 5080 ARGB EPIC-X RGB OC TRIPLE FAN 16GB GDRR7 GRAPHICS VGA CARD (3Y)", price: 6899 },
        { name: "SAPPHIRE NITRO+ AMD RADEON RX 9060 XT  GAMING OC 16GB GDDR6 VGA CARD (3Y)", price: 2399 },
        { name: "SAPPHIRE PULSE AMD RADEON RX 9060 XT  GAMING OC 16GB GDDR6 VGA CARD (3Y)", price: 2199 },
        { name: "XFX SWIFT AMD RADEON RX 9060 XT OC TRIPLE FAN GAMING EDITION 16GB GDDR6 VGA GRAPHIC CARD (3Y) - BLACK", price: 2399 },
        { name: "PNY GEFORCE RTX 4070 12GB XLR8 GAMING VERTO EPIC-X RGB TRIPLE FAN VGA CARD (3Y)", price: 2899 }
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
        { name: "COUGAR GEM 1200W 80+ GOLD FULL MODULAR POWER SUPPLY UNIT (5Y)", price: 899 },
        { name: "MSI MAG A750GLS PCIE5 ATX 3.1 PCIe 5.1 750W 80+ GOLD FULL MODULAR POWER SUPPLY UNIT (5Y)", price: 449 },
        { name: "MSI MAG A850GLS PCIE5 ATX 3.1 PCIe 5.1 850W 80+ GOLD FULL MODULAR POWER SUPPLY UNIT (5Y)", price: 529 },
        { name: "MSI PAG D600N 600W 80 PLUS NON MODULAR POWER SUPPLY UNIT (3Y)", price: 169 },
        { name: "SEGOTEP GM1250W FULL MODULAR ATX3.0 1250 WATT 80PLUS GOLD POWER SUPPLY PSU (5Y) - BLACK", price: 629 },
        { name: "SLEVNERGY INSPIRE 1000 80PLUS GOLD 1000W ATX 3.1 FULL MODULAR POWER SUPPLY (5Y)", price: 569 },
        { name: "SILVERSTONE DA1000R CYBENETICS GOLD 1000W / 12+4PIN 12VHPWR CONNECTOR, GEN5 PCI- E/ATX 12V V3.0 STANDARD POWER SUPPLY UNIT (5Y)", price: 699 },
        { name: "VOLTEZA ELECTRA P700F 700W 80 PLUS POWER SUPPLY UNIT (3Y)", price: 189 }
      ]
    },
    pcCase: {
      label: "🖥️ PC Case",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "DEEPCOOL CH160 PLUS MATX CASE - BLACK", price: 249 },
        { name: "DEEPCOOL CH160 PLUS MATX CASE - WHITE", price: 259 },
        { name: "DEEPCOOL CH170 DIGITAL ITX CASING - WHITE", price: 289 },
        { name: "DEEPCOOL CH370 BLACK MATX CASING", price: 239 },
        { name: "FRACTAL DESIGN TERRA ITX CASING - GRAPHITE", price: 959 },
        { name: "FRACTAL DESIGN TERRA ITX CASING - JADE", price: 959 },
        { name: "OCYPUS GAMMA C52 MATX ARGB CASE - BLACK", price: 189 },
        { name: "OCYPUS GAMMA C52 MATX ARGB CASE - WHITE", price: 189 },
        { name: "OKINOS AQUA 9 ATX CASING WITH 5 ARGB FANS - BLACK", price: 359 },
        { name: "OKINOS AQUA 93 ATX CASING WITH 2 ARGB FANS - BLACK", price: 349 },
        { name: "OKINOS CYPRESS 3 WOOD MATX CASING WITH 4 FANS - BLACK", price: 189 },
        { name: "OKINOS CYPRESS 5 AIR ATX CASING WITH 4 FANS - BLACK", price: 199 },
        { name: "OKINOS MIRAGE 4 MATX CASING WITH 3 ARGB FANS - BLACK", price: 189 },
        { name: "OKINOS MIRAGE 4 MATX CASING WITH 3 ARGB FANS - WHITE", price: 199 },
        { name: "PHANTEKS EVOLV SERIES S2 TG DRGB ATX CASE WITH 4 FANS - SILVER BLACK", price: 499 },
        { name: "HAVN HS 420 VGPU MID TOWER CASE - BLACK", price: 969 },
        { name: "MONTECH KING 95 ATX CASE - BLACK", price: 479 },
        { name: "MONTECH KING 95 ATX CASE - WHITE", price: 499 },
        { name: "MONTECH KING 95 PRO ATX CASE - WHITE", price: 659 },
        { name: "NZXT H3 FLOW MATX CASE - BLACK", price: 289 },
        { name: "SLEVCASE HORIZON MICRO ATX CASE - BLACK (WITH 3 SLEVFLOW ASQ VORTEX MAX PWM ARGB 12CM FAN AND FAN HUB)", price: 179 },
        { name: "SLEVCASE ALLURE MICRO ATX CASING WITH 3 SLEVFLOW ASQ VORTEX FANS - BLACK/BRITISH GREEN", price: 299 },
        { name: "SLEVCASE ENVISION PREMIUM MICRO ATX CASING - WHITE", price: 199 },
        { name: "SLEVCASE SPOTLESS MICRO ATX CASING WITH SE380 PSU - WHITE", price: 129 },
        { name: "SLEVCASE VANTAGE DUAL CHAMBER ATX CASING - BLACK WITH 3 ARGB FANS", price: 189 },
        { name: "SILVERSTONE RAVEN RVZ03 ARGB ITX CASE - BLACK", price: 279 },
        { name: "SSUPD XHUTTLE DUAL CHAMBER ATX CASE - BLACK", price: 629 },
        { name: "SILVERSTONE ALTA G1M MATX CASE - BLACK", price: 229 },
        { name: "TECWARE VXN GLOW M TG MATX CASE WITH 3 ARGB FANS - WHITE", price: 249 },
        { name: "TECWARE ARC ARGB CURVED TG ATX CASE - BLACK", price: 289 },
        { name: "TECWARE TIMBER TG ATX CASE - BLACK", price: 249 },
        { name: "TECWARE TIMBER TG ATX CASE - WHITE", price: 259 },
        { name: "ZALMAN P10 MATX CASING - BLACK", price: 189 },
        { name: "ZALMAN P30 V2 MATX CASING - BLACK", price: 349 },
        { name: "ZALMAN P30 BW MATX CASING - BLACK & WHITE", price: 349 }
      ]
    },
    monitor: {
      label: "🖥️ Monitor",
      items: [
        { name: "None (Not selected)", price: 0, selected: true, hidePrice: true },
        { name: "BENQ GW2491 24\" 1080P 100HZ FHD EYE CARE HOME MONITOR (3Y)", price: 339 },
        { name: "BENQ GW2791 27\" 1080P 100HZ FHD EYE CARE HOME MONITOR (3Y)", price: 429 },
        { name: "MSI PRO MP251L E2 24.5\" 120HZ BUSINESS PRODUCTIVITY MONITOR (3Y)", price: 339 },
        { name: "TITAN ARMY P2510G 25\" FAST IPS 180HZ 1MS HDR GAMING MONITOR (3Y)", price: 429 },
        { name: "TITAN ARMY P2710G2 27\" FAST IPS 200HZ 1MS HDR GAMING MONITOR (3Y)", price: 529 },
        { name: "TITAN ARMY P43UGD 43.8\" FLAT 120HZ 1MS 32:9 IPS ULTRAWIDE GAMING MONITOR", price: 1999 }
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
        const selectedOption = select.options[selectedIndex];
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
