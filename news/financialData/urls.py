from django.urls import path
from . import views
from .views import search

urlpatterns = [
    path("korserach/", views.koreaSearch),
    path("koreahigh/", views.koreahigh),
    path("korearise/", views.korearise),
    path("usahigh/", views.usahigh),
    path("usastock/", views.usastock),
    path("usatop/", views.usatop),
    path("cointop/", views.cointop),
    path("kospi/", views.kospi),
    path('search/', search, name='search'),
    path("kosdaq/", views.kosdaq),
    path("exchange_rate/", views.exchange_rate),
    path("kospi200/", views.kospi200),
    path("nasdaq/", views.nasdaq),
    path("dowjones/", views.dowjones),
    path("sp500/", views.sp500),
    path("vix/", views.vix),
    path("krx/", views.krx),
    path("crypto/", views.crypto_volume),
    path("fearindex/", views.fear_index),
    path("crypto-market-cap/", views.bitcoin),
    path("financial-statements/<str:company_stock_code>/", views.get_financial_statements, name='get_financial_statements'),
    path("company-revenue/<str:company_stock_code>/", views.company_revenue, name='company_revenue'),
    path("company-net-income/<str:company_stock_code>/", views.company_net_income, name='company_net_income'),
    path("indicators-score/<str:company_stock_code>/", views.get_company_indicators_score, name='get_company_indicators_score'),
]