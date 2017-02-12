#coding:utf-8
from django.shortcuts import render

def home(request):
    string = u"我是好人"
    return render(request, 'home.html', {'string': string})
#Create your views here.
