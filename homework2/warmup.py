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
  return (re.sub ('["\']', '', text))


# Now you can call printme function
def scramble(word):
    word = list(word)
    random.shuffle(word)
    return ''.join(word)


def say(v = None):
  if v is None:
    return ''
  value = [v]
  def inner_adder(v = None):
    if v is None:
      return ' '.join(value)
    else:
      value.append(v)
      return inner_adder
  inner_adder.v = value # save value
  return inner_adder


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

class Cylinder:
    "A circle with a 2-D center point and a radius."
    def __init__(self, radius = 1, height = 1):
        if radius == False:
          self.radius = 1
        elif height == False:
          self.height = 1
        elif radius == None and height == None:
          self.radius = 1
          self.height = 1
        else:
          self.radius = radius
          self.height = height
    @property
    def surface_area(self):
        return 2 * math.pi * self.radius * (self.radius + self.height)
    @property
    def volume(self):
        return math.pi * self.radius ** 2 * self.height

    def stretch(self, factor):
        self.height *= factor
        return self

    def widen(self, factor):
        self.radius *= factor
        return self


def make_crypto_functions():
    pass

def random_name():
    pass






''' 

(a,*b):= first argument is a, second to last is lambda

cylinder
use @property

random name
use requests module
'''