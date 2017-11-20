from django.conf.urls import url
from django.contrib import admin

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^messages/$', views.messages, name='messages'),
    url(r'^admin/', admin.site.urls),
    url(r'^compute/$', views.compute, name='compute'),
]
