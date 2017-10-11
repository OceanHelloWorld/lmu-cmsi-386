import math
import re
import random

def change(amount):
    if amount < 0:
        raise ValueError('amount cannot be negative')
    else:
        coin_change = []
        coin = [25, 10, 5, 1]
        for i in range(4):
            coin_change.extend([math.floor(amount / coin[i])])
            amount = amount % coin[i]
        return tuple(coin_change)


def strip_quotes(text):
  return (re.sub ('[",\']', '', text))


# Now you can call printme function
def scramble(word):
    word = list(word)
    random.shuffle(word)
    return ''.join(word)


def say(firstWord):
    words = []
    def sayMore(word):
        if (word == none):
            return words.join('');
        words.push(word)
        return sayMore()
    return sayMore(firstWord)

def powers(base, limit):
  power = 0;
  if (limit <= 0):
    return None
  else:
    while (base**power <= limit):
      product = base**power
      yield product
      power += 1;


def triples(limit):
  output = []
  # 29^2*2 is the first value > 40^2, so the smaller square has to be less than 29
  for leg_small in range(1,29):
    for leg_long in range(1, limit + 1):
      leg_big_square = (leg_long**2 - leg_small**2)
      if not( isinstance (leg_big_square**0.5, complex)) and (leg_big_square**0.5%1 == 0) and (leg_big_square > 0) and (leg_small < int(leg_big_square**0.5)):
        output.append((leg_small,int(leg_big_square**0.5),leg_long))
  return(output)


def interleave(first, *therest):
    total_num = max(len(first),len(therest))
    output = []
    for i in range (total_num):
      if (i < len(first)):
        output.append(first[i])
      if (i < len(therest)):
        output.append(therest[i])
    return output

def Cylinder():
    pass

def make_crypto_functions():
    pass

def random_name():
    pass






''' change
use div mod

strip quotes
re.sub

scramble
random.sample

powers
use yield


say
function in function (word = none)


(a,*b):= first argument is a, second to last is lambda

cylinder
use @property

random name
use requests module
'''