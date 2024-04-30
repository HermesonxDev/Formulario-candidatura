from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

@api_view(['POST'])
def candidatures(request):
    if request.method == "GET":
        return Response(status=status.HTTP_400_BAD_REQUEST)
    else:
        print(request.data)
        # name = request.data.get('name')
        # email = request.data.get('email')
        # telephone = request.data.get('telephone')
        # office = request.data.get('office')
        # education = request.data.get('education')
        # observation = request.data.get('observation')
        # resume_file = request.data.get('resume_file')

        # register_candidature = Candidate.objects.create(
        #     name=name,
        #     email=email,
        #     telephone=telephone,
        #     office=office,
        #     education=education,
        #     observation=observation,
        #     resume_file=resume_file
        # )

        # register_candidature.save()
        
        return Response('Candidatura realizada com sucesso!', status=status.HTTP_201_CREATED)