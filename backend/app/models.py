from django.db import models

class React(models.Model):
    invitee = models.CharField(max_length=50)
    invite_type = models.CharField(max_length=12)