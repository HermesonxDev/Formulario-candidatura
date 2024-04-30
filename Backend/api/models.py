from django.db import models
from uuid import uuid4

def upload_pdf(instance, filename):
    return f'{instance.id}-{filename}'

class Candidate(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField("Nome", max_length=255, null=False, blank=False)
    email = models.CharField("Email", max_length=255, null=False, blank=False, default='')
    telephone = models.CharField("Telefone", max_length=13, null=False, blank=False)
    office = models.CharField("Cargo desejado", max_length=255, null=False, blank=False)
    education = models.CharField("Escolaridade", max_length=255, null=False, blank=False)
    observation = models.TextField("Observações", null=False, blank=False)
    resume_file = models.FileField("Curriculo", upload_to=upload_pdf, null=False, blank=False)
    created_at = models.DateTimeField("Data e Hora da inscrição", auto_now_add=True, null=False, blank=False)

    class Meta:
        verbose_name = 'Candidato'
        verbose_name_plural = 'Candidatos'

    def __str__(self) -> str:
        return self.name