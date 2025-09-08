from rest_framework import serializers
from .models import (Usuario,Tarefa)

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ["id","nomeUsuario","emailUsuario"]
        read_only_fields = ['id'] 

        



class TarefaSrializer(serializers.ModelSerializer):
    class Meta:
        model = Tarefa
        fields = "__all__"
