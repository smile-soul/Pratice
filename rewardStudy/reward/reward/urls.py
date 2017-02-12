"""reward URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from learn import views as learn_views
from learn1 import views as learn1_views
from learn2 import views as learn2_views
from learn3 import views as learn3_views
from learn4 import views as learn4_views

urlpatterns = [
    url(r'^$', learn_views.index),
    url(r'a/$', learn4_views.index, name = 'home2'),
    url(r'home/$', learn3_views.index, name = 'home'),
    url(r'add/$', learn1_views.add, name = 'add'),
    url(r'add/(\d+)/(\d+)/$', learn2_views.add2, name = 'add2'),
    url(r'^admin/', admin.site.urls),
]
