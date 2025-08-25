from django.db import models

# Create your models here.

class Usuario(models.Model):
    id = models.AutoField(primary_key=True)
    nomeUsuario = models.CharField(null=False)
    emailUsuario = models.EmailField(null=False)

    def __str__(self):
        return self.nomeUsuario

class Tarefa(models.Model):

    PRIORIDADE_CHOICES = (
        ("B","Baixa"),
        ("M","Media"),
        ("A","Alta")
    )

    STATUS_CHOICES = (
        ("Fazer","Fazer"),
        ("Fazendo","fazendo"),
        ("pronto","pronto")
    )

    idTarefa = models.AutoField(primary_key=True)
    descricao = models.CharField(null=False)
    prioridade = models.CharField(choices=PRIORIDADE_CHOICES,null=False)
    dataCadastro = models.DateField()
    status = models.CharField(choices=STATUS_CHOICES,null=False)
    idUser = models.ForeignKey(Usuario,on_delete=models.CASCADE,null=False)

    def __str__(self):
        return self.descricao

