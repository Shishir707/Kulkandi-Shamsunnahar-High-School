const DATA_URL = "https://script.google.com/macros/s/AKfycbwzP--QDZLQOk6bym7o3gKeUB88kYyOl18viZzxgH1W7YGGDg6K00rBAUx6tBNuS-f3ow/exec";

// Map IDs to spreadsheet headers (including exact spellings with typos)
const mapping = {
  sixBoys: "Six Boys",
  sixGirls: "Six Girls",

  sevenBoys: "Seven Boys",
  sevenGirls: "Seven Girls",

  eightBoys: "Eight Boys",
  eightGirls: "Eight Girls",

  nineBoys: "Nine G. Boys",
  nineGirls: "Nine G.Girls",       // typo preserved as in sheet
  nineBoyVoc: "Nine Voc. Boys",
  nineGirlsVoc: "Nine Voc. Girls",

  tenBoys: "Ten G. Boys",
  tenGirls: "Ten G.Girls",         // typo preserved as in sheet
  tenBoysVoc: "Ten Voc. Boys",
  tenGirlsVoc: "Ten Voc. Girls",

  exTenGen: "Ex G Total",
  exTenVoc: "Ex Voc. Total"
};

async function fetchAndFillData() {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    const dataMap = {};
    data.forEach(item => {
      dataMap[item.category.trim()] = Number(item.count) || 0;
    });

    // Fill Class 6 to 8
    document.getElementById('sixBoys').textContent = dataMap[mapping.sixBoys] || 0;
    document.getElementById('sixGirls').textContent = dataMap[mapping.sixGirls] || 0;
    document.getElementById('sixTotal').textContent = (dataMap[mapping.sixBoys] || 0) + (dataMap[mapping.sixGirls] || 0);

    document.getElementById('sevenBoys').textContent = dataMap[mapping.sevenBoys] || 0;
    document.getElementById('sevenGirls').textContent = dataMap[mapping.sevenGirls] || 0;
    document.getElementById('sevenTotal').textContent = (dataMap[mapping.sevenBoys] || 0) + (dataMap[mapping.sevenGirls] || 0);

    document.getElementById('eightBoys').textContent = dataMap[mapping.eightBoys] || 0;
    document.getElementById('eightGirls').textContent = dataMap[mapping.eightGirls] || 0;
    document.getElementById('eightTotal').textContent = (dataMap[mapping.eightBoys] || 0) + (dataMap[mapping.eightGirls] || 0);

    // Class 9 General
    document.getElementById('nineBoys').textContent = dataMap[mapping.nineBoys] || 0;
    document.getElementById('nineGirls').textContent = dataMap[mapping.nineGirls] || 0;
    document.getElementById('nineTotal').textContent = (dataMap[mapping.nineBoys] || 0) + (dataMap[mapping.nineGirls] || 0);

    // Class 9 Vocational
    document.getElementById('nineBoyVoc').textContent = dataMap[mapping.nineBoyVoc] || 0;
    document.getElementById('nineGirlsVoc').textContent = dataMap[mapping.nineGirlsVoc] || 0;
    document.getElementById('nineTotalVoc').textContent = (dataMap[mapping.nineBoyVoc] || 0) + (dataMap[mapping.nineGirlsVoc] || 0);

    // Class 10 General
    document.getElementById('tenBoys').textContent = dataMap[mapping.tenBoys] || 0;
    document.getElementById('tenGirls').textContent = dataMap[mapping.tenGirls] || 0;
    document.getElementById('tenTotal').textContent = (dataMap[mapping.tenBoys] || 0) + (dataMap[mapping.tenGirls] || 0);

    // Class 10 Vocational
    document.getElementById('tenBoysVoc').textContent = dataMap[mapping.tenBoysVoc] || 0;
    document.getElementById('tenGirlsVoc').textContent = dataMap[mapping.tenGirlsVoc] || 0;
    document.getElementById('tenTotalVoc').textContent = (dataMap[mapping.tenBoysVoc] || 0) + (dataMap[mapping.tenGirlsVoc] || 0);

    // SSC Examine totals
    document.getElementById('exTenGen').textContent = dataMap[mapping.exTenGen] || 0;
    document.getElementById('exTenVoc').textContent = dataMap[mapping.exTenVoc] || 0;

  } catch (error) {
    console.error("Error fetching or processing data:", error);
    // Show error in all relevant spans
    const allIds = ['sixBoys','sixGirls','sixTotal',
      'sevenBoys','sevenGirls','sevenTotal',
      'eightBoys','eightGirls','eightTotal',
      'nineBoys','nineGirls','nineTotal',
      'nineBoyVoc','nineGirlsVoc','nineTotalVoc',
      'tenBoys','tenGirls','tenTotal',
      'tenBoysVoc','tenGirlsVoc','tenTotalVoc',
      'exTenGen','exTenVoc'
    ];
    allIds.forEach(id => {
      const el = document.getElementById(id);
      if(el) el.textContent = "Error";
    });
  }
}

window.addEventListener('DOMContentLoaded', fetchAndFillData);


///Toggle bar

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

const date = new Date().toLocaleDateString('bn-BD', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
document.getElementById('dateSection').innerText = date;

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
}

document.getElementById('closeBtn').addEventListener('click', function () {
  document.getElementById('sidebar').classList.remove('active');
});
