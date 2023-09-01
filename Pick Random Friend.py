import random

class fri:
  def __init__(self):
    self.friends={'dad':'woodstock',
                  'john':'new york',
                  'cassidy':'royal oak',
                  'joy':'chicago'}

  def rand(self):
    friend_city=random.choice(list(self.friends.items()))
    print( friend_city)

  def switch(self):
    city_friend={city:friend for friend,city in self.friends.items()}
    print(city_friend)

an=fri()
an.rand()
an.switch()
