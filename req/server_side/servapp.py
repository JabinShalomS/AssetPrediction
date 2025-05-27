from datetime import datetime
from io import BytesIO
from flask import Flask, jsonify, request, send_file
import pandas as pd
import os
from flask_cors import CORS
import pandas as pd
from sqlalchemy import create_engine

app = Flask(__name__)

DB_USER = "root"
DB_PASSWORD = "asset"
DB_HOST = "localhost"  # Change if using a remote server
DB_NAME = "dev_srp_store"
TABLE_NAME = "poland"

# Create a database connection
engine = create_engine(f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}")



# Read data into a Pandas DataFrame
# df = pd.read_sql(query, con=engine)

# product_inventory_list = [
#     { "Product": "4X41A30364", "Inventory": [0, 0, 0, 0, 0, 4], "Avg_demand": [2, 2, 2.3, 3.5, 4, 4.3], "Predicted": [0, 0, 0, 0, 0, 10] },
#     { "Product": "4X41A30364", "Inventory": [0, 0, 0, 0, 0, 2], "Avg_demand": [2, 4, 3.6, 3.5, 4.2, 3.6], "Predicted": [0, 0, 0, 0, 0, 10] },
#     { "Product": "40AY0090EU", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [0, 0.5, 0.6, 0.75, 0.6, 0.5], "Predicted": [0, 0, 0, 0, 0, 1] },
#     { "Product": "40AY0090EU", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0, 0.25, 0.2, 0], "Predicted": [0, 0, 0, 0, 0, 1] },
#     { "Product": "4X30L79883", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [3, 2, 2.3, 2.75, 3.2, 2.83], "Predicted": [0, 0, 0, 0, 0, 8] },
#     { "Product": "4X30L79883", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [4, 2.5, 2, 2, 1.8, 1.6], "Predicted": [0, 0, 0, 0, 0, 5] },
#     { "Product": "4X30L79883", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 2.5, 2, 2.5, 2.6, 2.3], "Predicted": [0, 0, 0, 0, 0, 7] },
#     { "Product": "4Y51C21217", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [3, 3.5, 3.3, 3.75, 3.2, 4], "Predicted": [0, 0, 0, 0, 0, 7] },
#     { "Product": "4Y51C21217", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [6, 5, 5.3, 5, 4.4, 4.5], "Predicted": [0, 0, 0, 0, 0, 6] },
#     { "Product": "21EYS7CG1W", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [0, 0, 0, 0.5, 1.6, 1.5], "Predicted": [0, 0, 0, 0, 0, 4] },
#     { "Product": "21H2S7G11W", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [2, 0, 2.6, 4.25, 3.4, 2.8], "Predicted": [0, 0, 0, 0, 0, 7] },
#     { "Product": "21H2S7G11W", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0.3, 0.5, 0.4, 0.3], "Predicted": [0, 0, 0, 0, 0, 1] },
#     { "Product": "21H2S7G11W", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 1.5, 2.3, 2.25, 1.8, 1.6], "Predicted": [0, 0, 0, 0, 0, 5] },
#     { "Product": "63CFMARXKR", "Inventory": [0, 0, 0, 0, 0, 7], "Avg_demand": [1, 1, 3, 3.5, 3.6, 3.5], "Predicted": [0, 0, 0, 0, 0, 1] },
#     { "Product": "63CFMARXKR", "Inventory": [0, 0, 0, 0, 0, 1], "Avg_demand": [1, 1, 0.6, 1.25, 1.4, 1.6], "Predicted": [0, 0, 0, 0, 0, 3] },
#     { "Product": "63CFMARXKR", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0.3, 0.75, 0.6, 0.5], "Predicted": [0, 0, 0, 0, 0, 2] },
#     { "Product": "4XD0X88524", "Inventory": [0, 0, 0, 0, 0, 6], "Avg_demand": [0, 2.5, 3, 3.25, 4.2, 3.6], "Predicted": [0, 0, 0, 0, 0, 1] },
#     { "Product": "4XD0X88524", "Inventory": [0, 0, 0, 0, 0, 5], "Avg_demand": [3, 2.5, 2.6, 3, 2.8, 2.5], "Predicted": [0, 0, 0, 0, 0, 1] },
#     { "Product": "4XJ1M77973", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [1, 0.5, 0.6, 2, 0.4, 0.5], "Predicted": [0, 0, 0, 0, 0, 1] },
#     { "Product": "4XJ1K79629", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [1, 0.5, 0, 0, 0, 0], "Predicted": [0, 0, 0, 0, 0, 1] },
#     { "Product": "4XD1M45626", "Inventory": [0, 0, 0, 0, 0, 0], "Avg_demand": [0, 0, 0, 0, 0, 0], "Predicted": [0, 0, 0, 0, 0, 2] }
#   ];

CORS(app)
# Path to the Excel file (make sure it's in the same directory as the app.py)
# EXCEL_FILE_PATH = os.path.join(os.path.dirname(__file__), 'data.xlsx')
EXCEL_FILE_PATH = r'D:\GenAI\AssetPrediction_django\AssetPredictionLavanyaCode\asset_ver1\req\data\srp_new.xlsx'  

# Define paths for each country
EXCEL_FILE_PATHS = {
    'Poland': r'D:\GenAI\AssetPrediction_django\AssetPredictionLavanyaCode\asset_ver1\req\data\srp_new.xlsx',
    'USA': r'D:\GenAI\AssetPrediction_django\AssetPredictionLavanyaCode\asset_ver1\req\data\USABB_srp.xlsx',
    # Add more countries and their paths as needed
}

def get_excel_file_path(country):
    return EXCEL_FILE_PATHS.get(country, EXCEL_FILE_PATHS['Poland'])

@app.route('/update_excel', methods=['POST'])
def update_excel():
    country = request.args.get('country', 'Poland')
    excel_file_path = get_excel_file_path(country)

    if not os.path.exists(excel_file_path):
        return jsonify({"error": "Excel file not found."}), 404

    try:
        df = pd.read_excel(excel_file_path)
        if 'Final Total Qty' not in df.columns:
            df['Final Total Qty'] = 0

        data = request.json
        for item in data:
            part_number = item['Part_Number']
            location = item['City']
            df.loc[(df['Part_Number'] == part_number) & (df['Location'] == location), 'Wipro Team Suggestion'] = item['Wipro Team Suggestion']
            df.loc[(df['Part_Number'] == part_number) & (df['Location'] == location), 'Country Suggestion'] = item['Country Suggestion']
            df.loc[(df['Part_Number'] == part_number) & (df['Location'] == location), 'Final Total Qty'] = item['Final Total Qty']

        df.to_excel(excel_file_path, index=False)
        return jsonify({"message": "Excel file updated successfully."})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/download_excel', methods=['GET'])
def download_excel():
    country = request.args.get('country', 'Poland')
    excel_file_path = get_excel_file_path(country)

    if not os.path.exists(excel_file_path):
        return jsonify({"error": "Excel file not found."}), 404

    try:
        current_date = datetime.now().strftime("%d%m%Y")
        filename = f"PL–AISRP–{current_date}.xlsx"
        return send_file(excel_file_path, as_attachment=True, download_name=filename)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/convert', methods=['GET'])
def convert_excel():
    country = request.args.get('country', 'Poland')
    excel_file_path = get_excel_file_path(country)

    try:
        df = pd.read_excel(excel_file_path, sheet_name='Sheet1')
        df = df[['Location', 'Part_Number', 'Pending_Task', 'Instock', 'quantity_on_order', 'Final Total Qty', 'Proposal Id', 'ModelName', 'CC', 'Location_City', 'Order Calculation \nBased On']]
        df.rename(columns={
            'Pending_Task': 'Demand_Qty',
            'Instock': 'Qty_in_Stock',
            'quantity_on_order': 'Qty_in_Order',
            'Final Total Qty': 'Qty_to_Order',
            'ModelName': 'Model_Short_Name'
        }, inplace=True)
        df = df[(df['Order Calculation \nBased On'] != "Guaranteed Essential Accessories") & (df['Qty_to_Order'] != 0)]
        current_date = datetime.now().strftime("%Y-%m-%d")
        df['Request_Date'] = current_date
        expected_out_order = ['Request_Date', 'Location', 'Part_Number', 'Demand_Qty', 'Qty_in_Stock', 'Qty_in_Order', 'Qty_to_Order', 'Proposal Id', 'Model_Short_Name', 'CC', 'Location_City']
        available_columns = [col for col in expected_out_order if col in df.columns]
        df = df[available_columns]

        output = BytesIO()
        df.to_excel(output, index=False, engine='xlsxwriter')
        output.seek(0)

        filename = f"PL-AISRP-{datetime.now().strftime('%d%m%Y')}-DAAS.xlsx"
        return send_file(output, as_attachment=True, download_name=filename, mimetype='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/dashboardpq', methods=['GET'])
def get_excel_data():
    country = request.args.get('country', 'Poland')
    excel_file_path = get_excel_file_path(country)

    if not os.path.exists(excel_file_path):
        return jsonify({"error": "Excel file not found."}), 404

    try:
        df = pd.read_excel(excel_file_path)
        df = df[['Part_Number', 'Location', 'Location_City', 'ModelName', 'Trend_fit', 'Price', 'Amount',"quantity_to_order(calc)",'avg_demand_per_month','Pending_Task','Instock','quantity_on_order','Wipro Team Suggestion','Country Suggestion','Final Total Qty']]
        df["Difference"]=df["Trend_fit"]-df["quantity_to_order(calc)"]
        df["Amount"] = (df["Final Total Qty"] * df["Price"]).round(2)
        df["Difference"]= df['Difference'].apply(lambda x: f"{int(x):+d}" if pd.notnull(x) else "")
        df["avg_demand_per_month"] = df["avg_demand_per_month"].round(2)
        df = df.rename(columns={'Part_Number': 'Part_Number', 'Location': 'City', 'quantity_to_order(calc)' : 'Quantity', 'Price' : 'Unit_Cost', 'Amount' : 'Total_Cost'})
        df = df.sort_values(by='Quantity', ascending=False, inplace=False)
        data = df.to_dict(orient='records')
        return jsonify(data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    if not os.path.exists(EXCEL_FILE_PATH):
        return jsonify({"error": "Excel file not found."}), 404

    try:
        # Read the Excel file using pandas
        df = pd.read_excel(EXCEL_FILE_PATH)
        # SQL Query
        # DB_NAME = "dev_srp_store"
        # engine = create_engine(f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}")
        # query = f"SELECT * FROM {TABLE_NAME} WHERE Trend_fit <> 0 ;" # Modify query as needed
        # df = pd.read_sql(query, con=engine)
        # df = df[~df['Location'].str.endswith('REC')]
        df = df[['Part_Number', 'Location', 'Location_City', 'ModelName', 'Trend_fit', 'Price', 'Amount',"quantity_to_order(calc)",'avg_demand_per_month','Pending_Task','Instock','quantity_on_order','Wipro Team Suggestion','Country Suggestion','Final Total Qty']]
        df["Difference"]=df["Trend_fit"]-df["quantity_to_order(calc)"]
        df["Amount"] = (df["Final Total Qty"] * df["Price"]).round(2)
        df["Difference"]= df['Difference'].apply(lambda x: f"{int(x):+d}" if pd.notnull(x) else "")
        
        # Round avg_demand_per_month to two decimal places
        df["avg_demand_per_month"] = df["avg_demand_per_month"].round(2)
        
        df = df.rename(columns={'Part_Number': 'Part_Number', 'Location': 'City', 'quantity_to_order(calc)' : 'Quantity', 'Price' : 'Unit_Cost', 'Amount' : 'Total_Cost'})
        df = df.sort_values(by='Quantity', ascending=False, inplace=False)
        # Convert the dataframe to a dictionary (list of dictionaries) to send as JSON
        data = df.to_dict(orient='records')

        # Return the data as JSON response
        return jsonify(data)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
EXCEL_FILE_PATH1 = r'D:\GenAI\AssetPrediction_django\AssetPredictionLavanyaCode\asset_ver1\req\data\gea_new.xlsx'  
@app.route('/dashboardpqgea', methods=['GET'])
def get_excel_data6():
    if not os.path.exists(EXCEL_FILE_PATH1):
        return jsonify({"error": "Excel file not found."}), 404

    try:
        # Read the Excel file using pandas
        df = pd.read_excel(EXCEL_FILE_PATH1)
        df = df[['Part_Number', 'Location', 'ModelName', 'Trend_fit', 'Price', 'Amount',"quantity_to_order(calc)",'avg_demand_per_month','Pending_Task','Instock','quantity_on_order','Wipro Team Suggestion','Country Suggestion']]
        df["Difference"]=df["Trend_fit"]-df["quantity_to_order(calc)"]
        df["Amount"] = (df["quantity_to_order(calc)"] * df["Price"]).round(2)
        df["Difference"]= df['Difference'].apply(lambda x: f"{int(x):+d}" if pd.notnull(x) else "")
        # Round avg_demand_per_month to two decimal places
        df["avg_demand_per_month"] = df["avg_demand_per_month"].round(2)
        
        df = df.rename(columns={'Part_Number': 'Part_Number', 'Location': 'City', 'quantity_to_order(calc)' : 'Quantity', 'Price' : 'Unit_Cost', 'Amount' : 'Total_Cost'})
        # df = df[['Part_Number', 'Location', 'Location City', 'ModelName', 'Trend_fit', 'Price', 'total_price_calc']]
        # df = df.rename(columns={'Part_Number': 'Part Number', 'Location City': 'City', 'Model Desgination' : 'Model Name', 'Trend_fit' : 'Quantity', 'Price' : 'Unit Cost', 'total_price_calc' : 'Total Cost'})
        df = df.sort_values(by='Quantity', ascending=False, inplace=False)
        # Convert the dataframe to a dictionary (list of dictionaries) to send as JSON
        data = df.to_dict(orient='records')

        # Return the data as JSON response
        return jsonify(data)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500    

@app.route('/dashboardinv', methods=['GET'])
def get_inv_data():
    if not os.path.exists(EXCEL_FILE_PATH):
        return jsonify({"error": "Excel file not found."}), 404

    try:
        # DB_NAME = "dev_srp_inventory"
        # engine = create_engine(f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}")
        # query = f"SELECT Part_Number, Location_City, Month_1, Month_2, Month_3, Month_4, Month_5, Month_6, Month_7, Month_8, Month_9, Month_10, Month_11, Month_12 FROM {TABLE_NAME}"
        # df = pd.read_sql(query, con=engine)
        df = pd.read_excel(EXCEL_FILE_PATH)
        df = df[['Part_Number', 'Location', 'Location_City', 'ModelName', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6']]
        # df = df.sort_values(by='Quantity', ascending=False, inplace=False)
        # # Convert the dataframe to a dictionary (list of dictionaries) to send as JSON
        data = df.to_dict(orient='records')

        # # Return the data as JSON response
        return jsonify(data)

#         variable1 = []
#         for index, row in df.iterrows():
#             variable1.append({
#         "Part_Number": row["Part_Number"],
#         "Location_City": row["Location_City"],
#         "Inventory": [
#              row["Month_7"], row["Month_8"], row["Month_9"], row["Month_10"],
#             row["Month_11"], row["Month_12"]
#         ]
#         })
        
#         DB_NAME = "srp_past_demand"
#         engine = create_engine(f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}")
#         query = f"SELECT Part_Number, Location_City, Month_1, Month_2, Month_3, Month_4, Month_5, Month_6, Month_7, Month_8, Month_9, Month_10, Month_11, Month_12 FROM {TABLE_NAME}"
#         df = pd.read_sql(query, con=engine)
#         variable2 = []
#         for index, row in df.iterrows():
#             variable2.append({
#         "Part_Number": row["Part_Number"],
#         "Location_City": row["Location_City"],
#         "Avg_demand": [
#              row["Month_7"], row["Month_8"], row["Month_9"], row["Month_10"],
#             row["Month_11"], row["Month_12"]]
#     })  
#         # print(variable2)
#         DB_NAME = "past_srp_prediction"
#         engine = create_engine(f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}")
#         query = f"SELECT Part_Number, Location_City, Month_1, Month_2, Month_3, Month_4, Month_5, Month_6, Month_7, Month_8, Month_9, Month_10, Month_11, Month_12 FROM {TABLE_NAME}"
#         df = pd.read_sql(query, con=engine)

#         variable3 = []
#         for index, row in df.iterrows():
#             variable3.append({
#         "Part_Number": row["Part_Number"],
#         "Location_City": row["Location_City"],
#         "Predicted": [
#              row["Month_7"], row["Month_8"], row["Month_9"], row["Month_10"],
#             row["Month_11"], row["Month_12"]
#         ]
#     })
#         variable4 = []

# # Create a dictionary to hold combined data
#         combined_data = {}

# # Combine data from variable1
#         for item in variable1:
#             key = (item['Part_Number'], item['Location_City'])
#             if key not in combined_data:
#                 combined_data[key] = {}
#             combined_data[key].update(item)

# # Combine data from variable2
#         for item in variable2:
#             key = (item['Part_Number'], item['Location_City'])
#             if key not in combined_data:
#                 combined_data[key] = {}
#             combined_data[key].update(item)

# # Combine data from variable3
#         for item in variable3:
#             key = (item['Part_Number'], item['Location_City'])
#             if key not in combined_data:
#                 combined_data[key] = {}
#             combined_data[key].update(item)

# # Convert combined data to the desired format
#         for key, value in combined_data.items():
#             variable4.append(value)
        
    

        # Return the data as JSON response
        # return jsonify(variable4)
    
    except Exception as e: 
        return jsonify({"error": str(e)}), 500




@app.route('/srp', methods=['GET'])
def get_excel_data1():
    if not os.path.exists(EXCEL_FILE_PATH):
        return jsonify({"error": "Excel file not found."}), 404

    try:
        # Read the Excel file using pandas
        df = pd.read_excel(EXCEL_FILE_PATH)
        df = df[['Part_Number', 'Location', 'Location City', 'Model Desgination', 'Trend_fit', 'Price\n(KRW)_x']]
        df = df.rename(columns={'Part_Number': 'Part Number', 'Location City': 'City', 'Model Desgination' : 'Model Name', 'Trend_fit' : 'Quantity', 'Price\n(KRW)_x' : 'Unit Cost'})


        # Convert the dataframe to a dictionary (list of dictionaries) to send as JSON
        data = df.to_dict(orient='records')

        # Return the data as JSON response
        return jsonify(data)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/catalogue', methods=['GET'])
def get_excel_data2():
    if not os.path.exists(EXCEL_FILE_PATH):
        return jsonify({"error": "Excel file not found."}), 404

    try:
        # Read the Excel file using pandas
        df = pd.read_excel(EXCEL_FILE_PATH)
        df = df[['Part_Number', 'Location', 'Location City', 'Model Desgination', 'Price\n(KRW)_x']]
        df = df.drop_duplicates(subset=['Part_Number', 'Location'])
        df = df.rename(columns={'Part_Number': 'Part Number', 'Location City': 'City', 'Model Desgination' : 'Model Name', 'Trend_fit' : 'Quantity', 'Price\n(KRW)_x' : 'Unit Cost', 'total_price_calc' : 'Total Cost'})
            

        # Convert the dataframe to a dictionary (list of dictionaries) to send as JSON
        data = df.to_dict(orient='records')

        # Return the data as JSON response
        return jsonify(data)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
if __name__ == '__main__':
    app.run(debug=True)
