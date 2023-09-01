def meal_ideas(ingr):
  ingr=input('What ingredient do you have: ')
  di={'fried_rice':['eggs','rice'],'noodle_soup':['soup','noodles']}
  di['spaghetti']=['noodles','sauce']
  di['burger']=['bun','meat']
  for key, value in di.items():
    if ingr in value:
      print('You can make: ',key)

meal_ideas('')
