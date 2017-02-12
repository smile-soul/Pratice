#coding:utf-8
from django.shortcuts import render

def index(request):
    string = u"我是好人"
    tour = ['html', 'css', 'js']
    return render(request, 'homes.html', {'string': string, 'tour': tour})
#Create your views here.
