from django.db import models

# Create your models here.
class Universe(models.Model):

    name = models.CharField(max_length=31)
    description = models.TextField(max_length=4096)

class Solaris(models.Model):

    name = models.CharField(max_length=31)
    description = models.TextField(max_length=4096)

    show_in_navbar = models.BooleanField(default=True)

    def __str__(self):
        return self.label
