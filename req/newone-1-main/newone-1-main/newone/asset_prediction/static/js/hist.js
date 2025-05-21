const jsonData = [
    {
      "S.No": 1,
      "Location": "9AAE100499",
      "City": "Cheonan-si",
      "Product": "21EYS7CG1W",
      "Model_Name": "ThinkPad X13 Intel G4 (Win11)",
      "Quantity": 4,
      "Cost_per_unit": 1237435.92,
      "Total_cost": 4949743.68
    },
    {
      "S.No": 2,
      "Location": "9AAE100499",
      "City": "Cheonan-si",
      "Product": "4X41A30364",
      "Model_Name": "BO Essential Plus 15.6 BackPack (Eco)",
      "Quantity": 7,
      "Cost_per_unit": 49941.36,
      "Total_cost": 349589.52
    },
    {
      "S.No": 3,
      "Location": "9AAE105104",
      "City": "Seoul",
      "Product": "4X41A30364",
      "Model_Name": "BO Essential Plus 15.6 BackPack (Eco)",
      "Quantity": 6,
      "Cost_per_unit": 49941.36,
      "Total_cost": 299648.16
    },
    {
      "S.No": 4,
      "Location": "9AAE100499",
      "City": "Cheonan-si",
      "Product": "4XD0X88524",
      "Model_Name": "Audio_BO 100 Stereo USB Headset",
      "Quantity": 1,
      "Cost_per_unit": 27745.2,
      "Total_cost": 27745.2
    },
    {
      "S.No": 5,
      "Location": "9AAE105104",
      "City": "Seoul",
      "Product": "4XD0X88524",
      "Model_Name": "Audio_BO 100 Stereo USB Headset",
      "Quantity": 1,
      "Cost_per_unit": 27745.2,
      "Total_cost": 27745.2
    },
    {
      "S.No": 6,
      "Location": "9AAE100499",
      "City": "Cheonan-si",
      "Product": "4Y51C21217",
      "Model_Name": "Go Wireless Multi-Device Mouse",
      "Quantity": 7,
      "Cost_per_unit": 55490.4,
      "Total_cost": 388432.8
    },
    {
      "S.No": 7,
      "Location": "9AAE105104",
      "City": "Seoul",
      "Product": "4Y51C21217",
      "Model_Name": "Go Wireless Multi-Device Mouse",
      "Quantity": 5,
      "Cost_per_unit": 55490.4,
      "Total_cost": 277452.0
    },
    {
      "S.No": 8,
      "Location": "9AAE100499",
      "City": "Cheonan-si",
      "Product": "21H2S7G11W",
      "Model_Name": "ThinkPad L14 Gen 4 (Win11)",
      "Quantity": 6,
      "Cost_per_unit": 1015474.32,
      "Total_cost": 6092845.92
    },
    {
      "S.No": 9,
      "Location": "9AAE105104",
      "City": "Seoul",
      "Product": "21H2S7G11W",
      "Model_Name": "ThinkPad L14 Gen 4 (Win11)",
      "Quantity": 5,
      "Cost_per_unit": 1015474.32,
      "Total_cost": 5077371.6
    },
    {
      "S.No": 10,
      "Location": "9AAE101713",
      "City": "Busan",
      "Product": "21H2S7G11W",
      "Model_Name": "ThinkPad L14 Gen 4 (Win11)",
      "Quantity": 1,
      "Cost_per_unit": 1015474.32,
      "Total_cost": 1015474.32
    },
    {
      "S.No": 11,
      "Location": "9AAE100499",
      "City": "Cheonan-si",
      "Product": "4X30L79883",
      "Model_Name": "KB MICE_BO Essential Wired Combo",
      "Quantity": 8,
      "Cost_per_unit": 27745.2,
      "Total_cost": 221961.6
    },
    {
      "S.No": 12,
      "Location": "9AAE105104",
      "City": "Seoul",
      "Product": "4X30L79883",
      "Model_Name": "KB MICE_BO Essential Wired Combo",
      "Quantity": 7,
      "Cost_per_unit": 27745.2,
      "Total_cost": 194216.4
    },
    {
      "S.No": 13,
      "Location": "9AAE101713",
      "City": "Busan",
      "Product": "4X30L79883",
      "Model_Name": "KB MICE_BO Essential Wired Combo",
      "Quantity": 5,
      "Cost_per_unit": 27745.2,
      "Total_cost": 138726.0
    },
    {
      "S.No": 14,
      "Location": "9AAE100499",
      "City": "Cheonan-si",
      "Product": "40AY0090EU",
      "Model_Name": "Universal USB-C Dock",
      "Quantity": 1,
      "Cost_per_unit": 173407.5,
      "Total_cost": 173407.5
    },
    {
      "S.No": 15,
      "Location": "9AAE105104",
      "City": "Seoul",
      "Product": "40AY0090EU",
      "Model_Name": "Universal USB-C Dock",
      "Quantity": 1,
      "Cost_per_unit": 173407.5,
      "Total_cost": 173407.5
    },
    {
      "S.No": 16,
      "Location": "9AAE100499",
      "City": "Cheonan-si",
      "Product": "63CFMARXKR",
      "Model_Name": "ThinkVision T24i-30 23.8 inch",
      "Quantity": 1,
      "Cost_per_unit": 192829.14,
      "Total_cost": 192829.14
    },
    {
      "S.No": 17,
      "Location": "9AAE105104",
      "City": "Seoul",
      "Product": "63CFMARXKR",
      "Model_Name": "ThinkVision T24i-30 23.8 inch",
      "Quantity": 2,
      "Cost_per_unit": 192829.14,
      "Total_cost": 385658.28
    },
    {
      "S.No": 18,
      "Location": "9AAE101713",
      "City": "Busan",
      "Product": "63CFMARXKR",
      "Model_Name": "ThinkVision T24i-30 23.8 inch",
      "Quantity": 3,
      "Cost_per_unit": 192829.14,
      "Total_cost": 578487.42
    },
    {
      "S.No": 19,
      "Location": "9AAE105104",
      "City": "Seoul",
      "Product": "4XJ1M77973",
      "Model_Name": "14-inch Bright Screen Privacy Filter",
      "Quantity": 1,
      "Cost_per_unit": 47166.84,
      "Total_cost": 47166.84
    },
    {
      "S.No": 20,
      "Location": "9AAE105104",
      "City": "Seoul",
      "Product": "4XJ1K79629",
      "Model_Name": "13.3-inch Bright Screen Privacy Filter",
      "Quantity": 1,
      "Cost_per_unit": 54103.14,
      "Total_cost": 54103.14
    }
  ];

  // = [
  //   { "Product": "4X41A30364", "Inventory": [0, 0, 0, 0, 0, 4], "Avg_demand": [2, 2, 2.3, 3.5, 4, 4.3], "Predicted": [0, 0, 0, 0, 0, 7] },
  //   { "Product": "4X41A30364", "Inventory": [0, 0, 0, 0, 0, 2], "Avg_demand": [2, 4, 3.6, 3.5, 4.2, 3.6], "Predicted": [0, 0, 0, 0, 0, 7] },
  //   { "Product": "40AY0090EU", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [0, 0.5, 0.6, 0.75, 0.6, 0.5], "Predicted": [0, 0, 0, 0, 0, 1] },
  //   { "Product": "40AY0090EU", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0, 0.25, 0.2, 0], "Predicted": [0, 0, 0, 0, 0, 1] },
  //   { "Product": "4X30L79883", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [3, 2, 2.3, 2.75, 3.2, 2.83], "Predicted": [0, 0, 0, 0, 0, 8] },
  //   { "Product": "4X30L79883", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [4, 2.5, 2, 2, 1.8, 1.6], "Predicted": [0, 0, 0, 0, 0, 5] },
  //   { "Product": "4X30L79883", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 2.5, 2, 2.5, 2.6, 2.3], "Predicted": [0, 0, 0, 0, 0, 7] },
  //   { "Product": "4Y51C21217", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [3, 3.5, 3.3, 3.75, 3.2, 4], "Predicted": [0, 0, 0, 0, 0, 7] },
  //   { "Product": "4Y51C21217", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [6, 5, 5.3, 5, 4.4, 4.5], "Predicted": [0, 0, 0, 0, 0, 6] },
  //   { "Product": "21EYS7CG1W", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [0, 0, 0, 0.5, 1.6, 1.5], "Predicted": [0, 0, 0, 0, 0, 4] },
  //   { "Product": "21H2S7G11W", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [2, 0, 2.6, 4.25, 3.4, 2.8], "Predicted": [0, 0, 0, 0, 0, 7] },
  //   { "Product": "21H2S7G11W", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0.3, 0.5, 0.4, 0.3], "Predicted": [0, 0, 0, 0, 0, 1] },
  //   { "Product": "21H2S7G11W", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 1.5, 2.3, 2.25, 1.8, 1.6], "Predicted": [0, 0, 0, 0, 0, 5] },
  //   { "Product": "63CFMARXKR", "Inventory": [0, 0, 0, 0, 0, 7], "Avg_demand": [1, 1, 3, 3.5, 3.6, 3.5], "Predicted": [0, 0, 0, 0, 0, 1] },
  //   { "Product": "63CFMARXKR", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [1, 1, 0.6, 1.25, 1.4, 1.6], "Predicted": [0, 0, 0, 0, 0, 3] },
  //   { "Product": "63CFMARXKR", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0.3, 0.75, 0.6, 0.5], "Predicted": [0, 0, 0, 0, 0, 2] },
  //   { "Product": "4XD0X88524", "Inventory": [0, 0, 0, 0, 0, 6], "Avg_demand": [0, 2.5, 3, 3.25, 4.2, 3.6], "Predicted": [0, 0, 0, 0, 0, 1] },
  //   { "Product": "4XD0X88524", "Inventory": [0, 0, 0, 0, 0, 5], "Avg_demand": [3, 2.5, 2.6, 3, 2.8, 2.5], "Predicted": [0, 0, 0, 0, 0, 1] },
  //   { "Product": "4XJ1M77973", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [1, 0.5, 0.6, 2, 0.4, 0.5], "Predicted": [0, 0, 0, 0, 0, 1] },
  //   { "Product": "4XJ1K79629", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [1, 0.5, 0, 0, 0, 0], "Predicted": [0, 0, 0, 0, 0, 1] },
  //   { "Product": "4XD1M45626", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0, 0, 0, 0], "Predicted": [0, 0, 0, 0, 0, 2] }
  // ];
   

  <div class="col-lg-4">
  <div class="row">
    <div class="col-lg-12">
      <!-- Yearly Breakup -->
      <div class="card overflow-hidden">
        <div class="card-body p-4">
          <h5 class="card-title mb-9 fw-semibold">Monthly Cost Breakup</h5>
          <div class="row align-items-center">
            <div class="col-8">
              <h4 class="fw-semibold mb-3">444522 PLN</h4>
              <div class="d-flex align-items-center mb-3">
                <span
                  class="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                  <i class="ti ti-arrow-up-left text-success"></i>
                </span>
                <p class="text-dark me-1 fs-3 mb-0">+6%</p>
                <p class="fs-3 mb-0">last month</p>
              </div>
              <div class="d-flex align-items-center">
                <div class="me-4">
                  <span class="round-8 bg-primary rounded-circle me-2 d-inline-block"></span>
                  <span class="fs-2">Dec</span>
                </div>
                <div>
                  <span class="round-8 bg-light-primary rounded-circle me-2 d-inline-block"></span>
                  <span class="fs-2">Nov</span>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="d-flex justify-content-center">
                <div id="breakup"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <!-- Monthly Earnings -->
      <div class="card">
        <div class="card-body">
          <div class="row alig n-items-start">
            <div class="col-8">
              <h5 class="card-title mb-9 fw-semibold"> Monthly Open Tasks (6 months) </h5>
              <h4 class="fw-semibold mb-3">9</h4>
              <div class="d-flex align-items-center pb-1">
                <span
                  class="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                  <i class="ti ti-arrow-down-right text-danger"></i>
                </span>
                <p class="text-dark me-1 fs-3 mb-0">+12.5%</p>
                <p class="fs-3 mb-0">last month</p>
              </div>
            </div>
            <!-- <div class="col-4">
              <div class="d-flex justify-content-end">
                <div
                  class="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                  <i class="ti ti-currency-dollar fs-6"></i>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <div id="earning"></div>
      </div>
    </div>
  </div>
</div>