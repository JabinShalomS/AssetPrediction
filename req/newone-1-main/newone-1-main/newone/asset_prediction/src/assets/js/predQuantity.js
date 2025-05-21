// Sample data
const jsonData = [
    { "S.No": 1, "City": "Cheonan-si","Part_number": "4X41A30364", "Quantity": 7,  "Total Amount": "349589.52",},
    { "S.NO": 2, "City": "Seoul","Part_number": "4X41A30364", "Quantity": 7,  "Total Amount": "349589.52" },
    { "S.NO": 3, "City": "Cheonan-si","Part_number": "40AY0090EU", "Quantity": 1,  "Total Amount": "520222.50" },
    { "S.NO": 4, "City": "Seoul","Part_number": "40AY0090EU", "Quantity": 1,  "Total Amount": "173407.50" },
    { "S.NO": 5, "City": "Cheonan-si","Part_number": "4X30L79883", "Quantity": 8,  "Total Amount": "221961.60" },
    { "S.NO": 6, "City": "Busan", "Part_number": "4X30L79883", "Quantity": 5,  "Total Amount": "138726.00" },
    { "S.NO": 7, "City": "Seoul", "Part_number": "4X30L79883", "Quantity": 7,  "Total Amount": "194216.40" },
    { "S.NO": 8, "City": "Cheonan-si","Part_number": "4Y51C21217", "Quantity": 7,  "Total Amount": "499413.60" },
    { "S.NO": 9, "City": "Seoul","Part_number": "4Y51C21217", "Quantity": 6,  "Total Amount": "332942.40" },
    { "S.NO": 10, "City": "Cheonan-si","Part_number": "21EYS7CG1W", "Quantity": 4, "Total Amount": "4949743.68" },
    { "S.NO": 11, "City": "Cheonan-si","Part_number": "21H2S7G11W", "Quantity": 7, "Total Amount": "7108320.24" },
    { "S.NO": 12, "City": "Busan","Part_number": "21H2S7G11W", "Quantity": 1,  "Total Amount": "1015474.32" },
    { "S.NO": 13, "City": "Seoul","Part_number": "21H2S7G11W", "Quantity": 5,  "Total Amount": "5077371.60" },
    { "S.NO": 14, "City": "Cheonan-si","Part_number": "63CFMARXKR", "Quantity": 1,  "Total Amount": "192829.14" },
    { "S.NO": 15, "City": "Busan","Part_number": "63CFMARXKR", "Quantity": 3, "Total Amount": "964145.70" },
    { "S.NO": 16, "City": "Seoul", "Part_number": "63CFMARXKR", "Quantity": 2,  "Total Amount": "385658.28" },
    { "S.NO": 17, "City": "Cheonan-si","Part_number": "4XD0X88524", "Quantity": 1,  "Total Amount": "27745.20" },
    { "S.NO": 18, "City": "Seoul","Part_number": "4XD0X88524", "Quantity": 1,  "Total Amount": "27745.20" },
    { "S.NO": 19, "City": "Seoul","Part_number": "4XJ1M77973", "Quantity": 1, "Total Amount": "94333.68" },
    { "S.NO": 20, "City": "Seoul", "Part_number": "4XJ1K79629", "Quantity": 1, "Total Amount": "54103.14" },
    { "S.NO": 21, "City": "Seoul","Part_number": "4XD1M45626", "Quantity": 2, "Total Amount": "116529.84" }
  ];

alert("hi");

var productjs = [
  { "Product": "4X41A30364", "Inventory": [0, 0, 0, 0, 0, 4], "Avg_demand": [2, 2, 2.3, 3.5, 4, 4.3], "Predicted": [0, 0, 0, 0, 0, 7] },
  { "Product": "4X41A30364", "Inventory": [0, 0, 0, 0, 0, 2], "Avg_demand": [2, 4, 3.6, 3.5, 4.2, 3.6], "Predicted": [0, 0, 0, 0, 0, 7] },
  { "Product": "40AY0090EU", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [0, 0.5, 0.6, 0.75, 0.6, 0.5], "Predicted": [0, 0, 0, 0, 0, 1] },
  { "Product": "40AY0090EU", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0, 0.25, 0.2, 0], "Predicted": [0, 0, 0, 0, 0, 1] },
  { "Product": "4X30L79883", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [3, 2, 2.3, 2.75, 3.2, 2.83], "Predicted": [0, 0, 0, 0, 0, 8] },
  { "Product": "4X30L79883", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [4, 2.5, 2, 2, 1.8, 1.6], "Predicted": [0, 0, 0, 0, 0, 5] },
  { "Product": "4X30L79883", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 2.5, 2, 2.5, 2.6, 2.3], "Predicted": [0, 0, 0, 0, 0, 7] },
  { "Product": "4Y51C21217", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [3, 3.5, 3.3, 3.75, 3.2, 4], "Predicted": [0, 0, 0, 0, 0, 7] },
  { "Product": "4Y51C21217", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [6, 5, 5.3, 5, 4.4, 4.5], "Predicted": [0, 0, 0, 0, 0, 6] },
  { "Product": "21EYS7CG1W", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [0, 0, 0, 0.5, 1.6, 1.5], "Predicted": [0, 0, 0, 0, 0, 4] },
  { "Product": "21H2S7G11W", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [2, 0, 2.6, 4.25, 3.4, 2.8], "Predicted": [0, 0, 0, 0, 0, 7] },
  { "Product": "21H2S7G11W", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0.3, 0.5, 0.4, 0.3], "Predicted": [0, 0, 0, 0, 0, 1] },
  { "Product": "21H2S7G11W", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 1.5, 2.3, 2.25, 1.8, 1.6], "Predicted": [0, 0, 0, 0, 0, 5] },
  { "Product": "63CFMARXKR", "Inventory": [0, 0, 0, 0, 0, 7], "Avg_demand": [1, 1, 3, 3.5, 3.6, 3.5], "Predicted": [0, 0, 0, 0, 0, 1] },
  { "Product": "63CFMARXKR", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [1, 1, 0.6, 1.25, 1.4, 1.6], "Predicted": [0, 0, 0, 0, 0, 3] },
  { "Product": "63CFMARXKR", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0.3, 0.75, 0.6, 0.5], "Predicted": [0, 0, 0, 0, 0, 2] },
  { "Product": "4XD0X88524", "Inventory": [0, 0, 0, 0, 0, 6], "Avg_demand": [0, 2.5, 3, 3.25, 4.2, 3.6], "Predicted": [0, 0, 0, 0, 0, 1] },
  { "Product": "4XD0X88524", "Inventory": [0, 0, 0, 0, 0, 5], "Avg_demand": [3, 2.5, 2.6, 3, 2.8, 2.5], "Predicted": [0, 0, 0, 0, 0, 1] },
  { "Product": "4XJ1M77973", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [1, 0.5, 0.6, 2, 0.4, 0.5], "Predicted": [0, 0, 0, 0, 0, 1] },
  { "Product": "4XJ1K79629", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [1, 0.5, 0, 0, 0, 0], "Predicted": [0, 0, 0, 0, 0, 1] },
  { "Product": "4XD1M45626", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0, 0, 0, 0], "Predicted": [0, 0, 0, 0, 0, 2] }
];

// Default data for chart rendering
const dummyinventory = [100, 100, 100, 100, 100, 100];
const dummyIntransit = [50, 50, 50, 50, 50, 50];
const dummypredicted = [75, 75, 75, 75, 75, 75];

// Current chart instance for bar chart destruction
var currentBarChart = null;

// Populate the table with data
function populateTable() {
  const tableBody = document.querySelector('#predQuantityTable tbody');
  jsonData.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
  <td class="border-bottom-0"><h6 class="fw-semibold mb-1">${item.Part_Number}</h6></td>
  <td class="border-bottom-0"><p class="mb-0 fw-normal">${item.Location}</p></td>
  <td class="border-bottom-0"><div class="d-flex align-items-center gap-2"><p class="mb-0 fw-normal">${item.City}</p></div></td>
  <td class="border-bottom-0"><p class="fw-normal mb-0 fs-3">${item.ModelName}</p></td>
  <td class="border-bottom-0"><h6 class="fw-semibold mb-0 fs-4">${item.Quantity}</h6></td>
  <td class="border-bottom-0"><p class="fw-semibold mb-0 fs-4">${item.Unit_Cost}</p></td>
  <td class="border-bottom-0"><p class="fw-semibold mb-0 fs-4">${item.Total_Cost}</p></td>
      `;

      // Automatically select the first row
      if (index === 0) {
          row.classList.add('clicked-row');
      }

      // Event listener for row clicks
      row.addEventListener('click', function () {
          document.querySelectorAll('tr').forEach(r => r.classList.remove('clicked-row'));
          row.classList.add('clicked-row');

          const selectedProduct = item.Product;
          const selectedProductData = productjs.find(prodItem => prodItem.Product === selectedProduct);

          if (selectedProductData) {
              updateBarChart(selectedProductData.Inventory, selectedProductData.Avg_demand, selectedProductData.Predicted);
          }
      });

      tableBody.appendChild(row);
  });

  // Automatically call the function for the first product after table load
  if (productjs.length > 0) {
      updateBarChart(productjs[0].Inventory, productjs[0].Avg_demand, productjs[0].Predicted);
  }
}

// Function to update the bar chart dynamically
function updateBarChart(inventory1 = dummyinventory, Intransit1 = dummyIntransit, Predicted1 = dummypredicted) {
  if (currentBarChart) {
      currentBarChart.destroy();  // Destroy previous chart instance
  }

  var barChartOptions = {
      series: [
          { name: "In Inventory:", data: inventory1 },
          { name: "Avg_demand:", data: Intransit1 },
          { name: "Predicted required quantity:", data: Predicted1 }
      ],
      chart: {
          type: "bar",
          height: 345,
          offsetX: -15,
          toolbar: { show: true },
          foreColor: "#adb0bb",
          fontFamily: 'inherit',
          sparkline: { enabled: false },
      },
      colors: ["#5D87FF", "#49BEFF"],
      plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: "35%",
              borderRadius: [5],
              borderRadiusApplication: 'end',
              borderRadiusWhenStacked: 'all'
          },
      },
      dataLabels: { enabled: false },
      legend: { show: true },
      grid: {
          borderColor: "rgba(0,0,0,0.1)",
          strokeDashArray: 3,
          xaxis: { lines: { show: true } },
      },
      xaxis: {
          type: "category",
          categories: ["Apr", "May", "Jun", "July", "Aug", "Sep"],
          labels: { style: { cssClass: "grey--text lighten-2--text fill-color" } }
      },
      yaxis: {
          show: true,
          min: 0,
          max: 10,
          tickAmount: 4,
          labels: { style: { cssClass: "grey--text lighten-2--text fill-color" } }
      },
      stroke: { show: true, width: 3, lineCap: "butt", colors: ["transparent"] },
      tooltip: { theme: "light" },
      responsive: [
          {
              breakpoint: 600,
              options: {
                  plotOptions: { bar: { borderRadius: 3 } }
              }
          }
      ]
  };

  // Create the bar chart
  currentBarChart = new ApexCharts(document.querySelector("#chart"), barChartOptions);
  currentBarChart.render();
}

// Function to render constant yearly cost breakup chart
function renderYearlyCostBreakup() {
  var breakupOptions = {
      color: "#adb5bd",
      series: [38, 40, 25],  // Static data for years 2020, 2021, 2022
      labels: ["2020", "2021", "2022"],
      chart: {
          width: 180,
          type: "donut",
          fontFamily: "Plus Jakarta Sans', sans-serif",
          foreColor: "#adb0bb",
      },
      plotOptions: {
          pie: {
              startAngle: 0,
              endAngle: 360,
              donut: { size: '75%' }
          }
      },
      stroke: { show: false },
      dataLabels: { enabled: false },
      legend: { show: false },
      colors: ["#5D87FF", "#ecf2ff", "#F9F9FD"],
      responsive: [
          { breakpoint: 991, options: { chart: { width: 150 } } }
      ],
      tooltip: { theme: "dark", fillSeriesColor: false }
  };

  // Create the breakup chart
  new ApexCharts(document.querySelector("#breakup"), breakupOptions).render();
}

// Function to render constant monthly open tasks chart
function renderMonthlyOpenTasks() {
  var earningOptions = {
      chart: {
          id: "sparkline3",
          type: "area",
          height: 60,
          sparkline: { enabled: true },
          group: "sparklines",
          fontFamily: "Plus Jakarta Sans', sans-serif",
          foreColor: "#adb0bb",
      },
      series: [
          {
              name: "Open Tasks",
              color: "#49BEFF",
              data: [25, 66, 20, 40, 12, 58, 20]  // Static data
          }
      ],
      stroke: { curve: "smooth", width: 2 },
      fill: { colors: ["#f3feff"], type: "solid", opacity: 0.05 },
      markers: { size: 0 },
      tooltip: {
          theme: "dark",
          fixed: { enabled: true, position: "right" },
          x: { show: false }
      }
  };

  // Create the earning (open tasks) chart
  new ApexCharts(document.querySelector("#earning"), earningOptions).render();
}

// Initialize the table and constant charts
populateTable();
renderYearlyCostBreakup();
renderMonthlyOpenTasks();