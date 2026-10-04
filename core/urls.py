# core/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Rota raiz, o site principal está aqui
    path('', include('content.urls')), 
    
    # Rota de cursos, isso puxa não só a pagina, mas o app cursos, isto é, suas subpaginas
    path('cursos/', include('curso.urls')),
    
    # Futuramente:
    # path('loja/', include('loja.urls')),
    # path('motoclubes/', include('motoclubes.urls')),
]