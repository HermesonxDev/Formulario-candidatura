# Generated by Django 3.2.23 on 2024-04-30 01:44

import api.models
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Candidate',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255, verbose_name='Nome')),
                ('telephone', models.CharField(max_length=11, verbose_name='Telefone')),
                ('office', models.CharField(max_length=255, verbose_name='Cargo desejado')),
                ('education', models.CharField(max_length=255, verbose_name='Escolaridade')),
                ('observation', models.TextField(verbose_name='Observações')),
                ('resume_file', models.FileField(upload_to=api.models.upload_pdf, verbose_name='Curriculo')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Data e Hora da inscrição')),
            ],
            options={
                'verbose_name': 'Candidato',
                'verbose_name_plural': 'Candidatos',
            },
        ),
    ]
