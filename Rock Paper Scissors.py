import random

def rock_paper_scissors():
  player_one_score=0
  player_two_score=0

  game_over=False
  #1 is Rock
  #2 is Paper
  #3 is Scissors
  while not game_over:
    player_one=user_input()
    player_two=random.randint(1,3)
    if player_one==1:
      if player_two==1:
        print('TIE')
      elif player_two==2:
        player_two_score+=1
        print('Paper beats Rock')
      else:
        player_one_score+=1
        print('Rock beats Scissors')
    elif player_one==2:
      if player_two==1:
        player_one_score+=1
        print('Paper beats Rock')
      elif player_two==2:
        print('TIE')
      else:
        player_two_score+=1
        print('Scissors beats Paper')
    else:
      if player_two==1:
        player_two_score+=1
        print('Rock beats Scissors')
      elif player_two==2:
        player_one_score+=1
        print('Scissors beats Paper')
      else:
        print('TIE')
    if player_one_score>=3 or player_two_score>=3:
      game_over=True
    print('Player One Score: ',player_one_score)
    print('Player Two Score: ',player_two_score)

def user_input():
  valid_play=False
  while not valid_play:
    user_choice=input('Rock, Paper, or Scissors: ')
    if user_choice.upper()=='ROCK':
      return 1
    elif user_choice.upper()=='PAPER':
      return 2
    elif user_choice.upper()=='SCISSORS':
      return 3
    else:
      print('Not a valid play')


rock_paper_scissors()
