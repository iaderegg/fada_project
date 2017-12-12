from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse

def index(request):
    context = {'context': 'Hello world!!!'}
    return render(request, 'organize_sports_delegations/index.html', context)

def server_processing(request):
    file_to_process = request.POST.get('file')
    response = {'status': 1}
    return JsonResponse(response, safe=False)