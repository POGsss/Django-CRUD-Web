from django.db import models

# Create your models here.
class User(models.Model):
    profile_picture = models.ImageField(upload_to='displayPhoto/', blank=True, null=True)
    name = models.TextField(max_length=100)
    gender = models.CharField(max_length=10, default="Male")
    age = models.CharField(max_length=10, default="0")
    hobby = models.TextField(max_length=100)
    profession = models.TextField(max_length=100)
    
    def __str__(self):
        return self.name