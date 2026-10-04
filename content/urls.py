from django.urls import path
from django.views.generic import TemplateView

app_name = 'content'

# Com minha arquitetura atual, esse arquivo foca apenas nos urls da pagina content
urlpatterns = [
    path('', TemplateView.as_view(template_name='content/index.html'), name='home'),
    
    path('postagens/', TemplateView.as_view(template_name='content/postagens.html'), name='postagens'),
    path('eventos/', TemplateView.as_view(template_name='content/eventos.html'), name='eventos'),
    path('noticias/', TemplateView.as_view(template_name='content/noticias.html'), name='noticias'),
    path('forum/', TemplateView.as_view(template_name='content/forum.html'), name='forum'),
    path('parceiros/', TemplateView.as_view(template_name='content/parceiros.html'), name='parceiros'),
    path('sobre/', TemplateView.as_view(template_name='content/sobre.html'), name='sobre'),
]