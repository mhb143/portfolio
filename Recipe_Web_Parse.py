from urllib.request import urlopen
from bs4 import BeautifulSoup
import re

def get_ingredients(url):
  #take from html

  page = urlopen(url)
  html = page.read().decode("utf-8")
  soup = BeautifulSoup(html, "html.parser")

  #print(soup.title.get_text())

  starting=soup.find_all('script',string=True)
  starting=str(starting)
  word1=starting.find('recipeIngredient')+len('recipeIngredient')
  word2=starting.find('recipeInstructions')
  ingr=starting[word1:word2]

  #make into list

  ingr=ingr.split('"')

  ingredients=[]
  for each in ingr:
    if (',') in ingr:
      ingr.remove(',')
    if (':[') in ingr:
      ingr.remove(':[')
    if each=='':
      continue
    if ('],') in ingr:
      ingr.remove('],')
    ingredients.append(each)
  return ingredients

def yield_multiplier(yi):
  _ingr=get_ingredients('https://minimalistbaker.com/the-ultimate-vegan-burrito-crunchwrap-inspired/')

  for each in _ingr:
    amount=re.search(r'^\d+[/]*\d*',each)
    if amount:
      if '/' in amount.group():
        numerator, denominator = map(int, amount.group().split('/'))
        am = numerator / denominator
      else:
        am=int(amount.group())
    rev_yi=am*yi
    rev_yi=str(rev_yi)
    each=each.replace(amount.group(),rev_yi)
    print(each)

get_ingredients('https://minimalistbaker.com/the-ultimate-vegan-burrito-crunchwrap-inspired/')
#get_ingredients('https://minimalistbaker.com/vegan-vanilla-soft-serve-no-churn/')
#get_ingredients('https://minimalistbaker.com/creamy-italian-white-bean-skillet-meal/')

yield_multiplier(3)
