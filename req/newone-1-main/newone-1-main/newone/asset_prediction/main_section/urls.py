from django.urls import path
from . import views

urlpatterns= [
    path("",views.login,name='login'),
    path("src/html/",views.dashboard,name='dashboard'),
    path("srp/approve",views.srp_approval,name='srp_approval'),
    path("approved/srp",views.approved_srp,name='approved_srp'),
    path("gea/approve",views.gea_approval,name='gea_approval'),
    path("inventory",views.inventory,name='inventory'),
    path("srp/dashboard",views.srp_page,name='srp_page'),
    path("gea/dashboard",views.gea_page,name='gea_page'),
    path("catalogue",views.catalogue,name='catalogue'),
    path("catalogue/refresh",views.catalogue_refresh,name='catalogue_refresh'),
     path('download_excel', views.download_excel, name='download_excel'),
    
]