from django.urls import path
from django.views.generic import TemplateView

app_name = 'curso'

urlpatterns = [
    path('', TemplateView.as_view(template_name='curso/index.html'), name='home'),
    
    path('motos/', TemplateView.as_view(template_name='curso/ementa_base.html'), name='motos'),
    path('motos/aula/', TemplateView.as_view(template_name='curso/aulas/aula_base.html'), name='aulas'),
]