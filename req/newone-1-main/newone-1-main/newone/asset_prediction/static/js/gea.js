// Sample data

   
   
var productjs = [
    { "Part_Number": "4Y51C21217","Location_City":"9AAE103835REC", "Inventory": [0, 0, 0, 0, 0, 106], "Avg_demand": [36, 54, 59, 57, 50, 50], "Predicted": [0, 0, 0, 0, 0, 29] },
    { "Part_Number": "4X41A30364","Location_City":"9AAE103835REC", "Inventory": [0, 0, 0, 0, 0, 53], "Avg_demand": [22, 44, 35, 48, 36, 37], "Predicted": [0, 0, 0, 0, 0, 26] },
    { "Part_Number": "25599-999-999","Location_City":"9AAE103835REC", "Inventory": [0, 0, 0, 0, 0, 34], "Avg_demand": [37, 32, 35, 41, 20, 24], "Predicted": [0, 0, 0, 0, 0, 20] },
    { "Part_Number": "4X41A30364","Location_City":"9AAE101530ABB", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [5, 8, 11, 6, 9, 7], "Predicted": [0, 0, 0, 0, 0, 17] },
    { "Part_Number": "25599-999-999","Location_City":"9AAE101530ABB", "Inventory": [0, 0, 0, 0, 0, 7], "Avg_demand": [4, 7, 15, 9, 3, 7], "Predicted": [0, 0, 0, 0, 0, 14] },
    { "Part_Number": "4999-823-309", "Location_City":"9AAE103835REC","Inventory": [0, 0, 0, 0, 0, 85], "Avg_demand": [16, 38, 41, 33, 44, 43], "Predicted": [0, 0, 0, 0, 0, 11] },
    { "Part_Number": "4X41A30364","Location_City":"9AAE103835ABB", "Inventory": [0, 0, 0, 0, 0, 2], "Avg_demand": [3, 11, 4, 8, 5, 12], "Predicted": [0, 0, 0, 0, 0, 9] },
    { "Part_Number": "4Y51C21217","Location_City":"9AAE103835REC", "Inventory": [0, 0, 0, 0, 0, 106], "Avg_demand": [50, 50, 57, 59, 54, 36], "Predicted": [0, 0, 0, 0, 0, 29] },
    { "Part_Number": "4Y51C21217","Location_City":"Not Given", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [6, 5, 5.3, 5, 4.4, 4.5], "Predicted": [0, 0, 0, 0, 0, 6] },
    { "Part_Number": "21EYS7CG1W","Location_City":"Not Given", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [0, 0, 0, 0.5, 1.6, 1.5], "Predicted": [0, 0, 0, 0, 0, 4] },
    { "Part_Number": "21H2S7G11W","Location_City":"Not Given", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [2, 0, 2.6, 4.25, 3.4, 2.8], "Predicted": [0, 0, 0, 0, 0, 7] },
    { "Part_Number": "21H2S7G11W","Location_City":"Not Given", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0.3, 0.5, 0.4, 0.3], "Predicted": [0, 0, 0, 0, 0, 1] },
    { "Part_Number": "21H2S7G11W","Location_City":"Not Given", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 1.5, 2.3, 2.25, 1.8, 1.6], "Predicted": [0, 0, 0, 0, 0, 5] },
    { "Part_Number": "63CFMARXKR","Location_City":"Not Given", "Inventory": [0, 0, 0, 0, 0, 7], "Avg_demand": [1, 1, 3, 3.5, 3.6, 3.5], "Predicted": [0, 0, 0, 0, 0, 1] },
    { "Part_Number": "63CFMARXKR","Location_City":"Not Given", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [1, 1, 0.6, 1.25, 1.4, 1.6], "Predicted": [0, 0, 0, 0, 0, 3] },
    { "Part_Number": "63CFMARXKR","Location_City":"Not Given", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0.3, 0.75, 0.6, 0.5], "Predicted": [0, 0, 0, 0, 0, 2] },
    { "Part_Number": "4XD0X88524","Location_City":"Not Given", "Inventory": [0, 0, 0, 0, 0, 6], "Avg_demand": [0, 2.5, 3, 3.25, 4.2, 3.6], "Predicted": [0, 0, 0, 0, 0, 1] },
    { "Part_Number": "4XD0X88524","Location_City":"Not Given", "Inventory": [0, 0, 0, 0, 0, 5], "Avg_demand": [3, 2.5, 2.6, 3, 2.8, 2.5], "Predicted": [0, 0, 0, 0, 0, 1] },
    { "Part_Number": "4XJ1M77973","Location_City":"Not Given", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [1, 0.5, 0.6, 2, 0.4, 0.5], "Predicted": [0, 0, 0, 0, 0, 1] },
    { "Part_Number": "4XJ1K79629", "Location_City":"Not Given","Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [1, 0.5, 0, 0, 0, 0], "Predicted": [0, 0, 0, 0, 0, 1] },
    { "Part_Number": "4XD1M45626", "Location_City":"Not Given","Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0, 0, 0, 0], "Predicted": [0, 0, 0, 0, 0, 2] }
  ];

  // Default data for chart rendering
  // alert("HI12");
  const dummyinventory = [100, 100, 100, 100, 100, 100];
  const dummyIntransit = [50, 50, 50, 50, 50, 50];
  const dummypredicted = [75, 75, 75, 75, 75, 75];
   
  // Current chart instance for bar chart destruction
  var currentBarChart = null;
function getdata(get_url) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: get_url,
      type: 'GET',  // GET is the default, but you can specify it here
      headers: {
        'ngrok-skip-browser-warning': '1'  // Custom header to skip browser warning for ngrok
      },
      success: function (data) {
        resolve(data);  // Resolve the promise with the API data
      },
      error: function (jqXHR, textStatus, errorThrown) {
        reject(new Error('Request failed: ' + textStatus));  // Reject the promise in case of error
      }
    });
  });
}
var productjs;

// async function fetchData123() {
    function fetchData123() {   
    // productjs = await getdata('https://piranha-robust-polliwog.ngrok-free.app/dashboardinv');

    // The next line will only be executed once productjs has been retrieved
    console.log(productjs);

    // Populate the table with data after fetching productjs
    populateTable();
}

fetchData123();

// Populate the table with data
async function populateTable() {
    var Url_path = "http://127.0.0.1:5000/dashboardpqgea";
    var jsonData = await getdata('http://127.0.0.1:5000/dashboardpqgea');
    // var jsonData = await getdata('https://piranha-robust-polliwog.ngrok-free.app/dashboardpqgea');
    // console.log(jsonData);
    const tableBody = document.querySelector('#predQuantityTable tbody');
    const tableBody1 = document.querySelector('#EOLTable');

    jsonData.forEach((item, index) => {
        // Skip rows where ModelName is zero
        if (item.ModelName === 0 && item.Quantity === 0) {
            return;  // Skip to the next iteration
        }
        // 
        if (item.ModelName === 0 && item.Quantity !== 0) {
            const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border-bottom-0"><h6 class="fw-semibold mb-1">${item.Part_Number}</h6></td>
            <td class="border-bottom-0"> <input type="text" class="form-control" value=${item.ModelName} ></td>
            <td class="border-bottom-0"><div class="d-flex align-items-center gap-2"><p class="mb-0 fw-normal">${item.City}</p></div></td>
            
            <td class="border-bottom-0"><h6 class="fw-semibold mb-0 fs-4">${item.Quantity}</h6></td>
            <td class="border-bottom-0"> <input type="text" class="form-control" value=${item.Unit_Cost} ></td>
            

            
            <td class="border-bottom-0"><p class="fw-semibold mb-0 fs-4">PLN</p></td>
        `;
        tableBody1.appendChild(row);
        return;  // Skip to the next iteration
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border-bottom-0"><h6 class="fw-semibold mb-1">${item.Part_Number}</h6></td>
            <td class="border-bottom-0"><p class="fw-normal mb-0 fs-3">${item.ModelName}</p></td>
            <td class="border-bottom-0"><div class="d-flex align-items-center gap-2"><p class="mb-0 fw-normal">${item.City}</p></div></td>
            <td class="border-bottom-0"><h6 class="fw-semibold mb-0 fs-4">${item.Quantity}</h6></td>
            <td class="border-bottom-0"><p class="fw-semibold mb-0 fs-4">${item.Difference}</p></td>
            <td class="border-bottom-0"><p class="fw-semibold mb-0 fs-4">${item.avg_demand_per_month}</p></td>
            <td class="border-bottom-0"><p class="fw-semibold mb-0 fs-4">${item.Pending_Task}</p></td>
            <td class="border-bottom-0"><p class="fw-semibold mb-0 fs-4">${item.Instock}</p></td>
            <td class="border-bottom-0"><p class="fw-semibold mb-0 fs-4">${item.quantity_on_order}</p></td>
        `;

        // Event listener for row clicks
        row.addEventListener('click', function () {
            document.querySelectorAll('tr').forEach(r => r.classList.remove('clicked-row'));
            row.classList.add('clicked-row');

            const selectedProduct = item["Part_Number"];
            const selectedLocation = item.City;
            const selectedProductData = productjs.find(prodItem => prodItem.Part_Number === selectedProduct && prodItem.Location_City === selectedLocation);
            if (selectedProductData) {
                updateBarChart(selectedProductData.Inventory, selectedProductData.Avg_demand, selectedProductData.Predicted);
            }
        });

        tableBody.appendChild(row);
    });

    // Select the first row by default and update the bar graph
    const firstRow = tableBody.querySelector('tr');
    if (firstRow) {
        firstRow.classList.add('clicked-row');
        const firstItem = jsonData[0];
        const selectedProduct = firstItem["Part_Number"];
        const selectedLocation = firstItem.City;
        const selectedProductData = productjs.find(prodItem => prodItem.Part_Number === selectedProduct && prodItem.Location_City === selectedLocation);
        if (selectedProductData) {
            updateBarChart(selectedProductData.Inventory, selectedProductData.Avg_demand, selectedProductData.Predicted);
        }
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
            categories: ["Sep", "Oct", "Nov", "Dec","Jan","Feb"],
            labels: { style: { cssClass: "grey--text lighten-2--text fill-color" } }
        },
        yaxis: {
            show: true,
            min: 0,
            max: 110,
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
        series: [444522, 417850],  // Static data for years 2020, 2021, 2022
        labels: ["Dec", "Nov"],
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
                data: [35, 30, 27, 22, 18 , 15, 9]  // Static data
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

// Initialize the constant charts
renderYearlyCostBreakup();
renderMonthlyOpenTasks();