from django.shortcuts import render
from django.http import HttpResponse
import io
import os
import pandas as pd
from django.http import FileResponse
from django.conf import settings
import requests
import json


def make_api_call():
    url = "http://127.0.0.1:5000/dashboardpq"
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            # print(data)
            return data
        else:
            print("Ërror:", response.status_code)
    except requests.exceptions.RequestException as e:
        print("Error:", e)




# Create your views here.
def login(request):
    return render(request,'authentication-login.html')

def dashboard(request):
    return render(request,'secondary_dashboard.html')

def srp_approval(request):
    return render(request,'srp_approval.html')

def approved_srp(request):
    return render(request, 'approved_srp.html')

def inventory(request):
    return render(request,'inventory.html')

def srp_page(request):
    table_data=make_api_call()
    return render(request,'srp.html',{'data':table_data})

def gea_page(request):
    table_data=make_api_call()
    return render(request,'gea.html',{'data':table_data})
    
def gea_approval(request):
    return render(request,'gea_approval.html')

def catalogue(request):
    return render(request, 'catalogue.html')

def catalogue_refresh(request):
    return render(request, 'catalogue_refresh.html')

# def download_excel(request):
#    # Example DataFrame
#    data = {'Column1': [1, 2, 3], 'Column2': [4, 5, 6]}
#    df = pd.DataFrame(data)
#    # Create an in-memory buffer
#    buffer = io.BytesIO()
#    # Write the DataFrame to an Excel file in the buffer
#    with pd.ExcelWriter(buffer, engine='xlsxwriter') as writer:
#        df.to_excel(writer, index=False)
#    # Set the buffer position to the beginning
#    buffer.seek(0)
#    # Create the HttpResponse object with appropriate Excel headers
#    response = HttpResponse(buffer, content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
#    response['Content-Disposition'] = 'attachment; filename=dataframe.xlsx'
#    return response

def download_excel(request):
   # Define the file path (assuming the Excel file is in the same folder as views.py)
   file_path = os.path.join(os.path.dirname(__file__), 'final_check.xlsx')
   # Open the file and serve it as a download
   return FileResponse(open(file_path, 'rb'), as_attachment=True, filename='final_check.xlsx')