'''
Homework 2 for CMSI 386

Ocean Zhang
'''

import math
import re
import random
import requests
from Crypto.Cipher import AES

def change(amount):
    '''the minimum amount coins required to represent the amount,'''
    # and it shows how much coins needed for each coin value.
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
    '''print out the string but without apostrophes and double quotes'''
    return re.sub('["\']', '', text)


def scramble(word):
    '''output a random string that shuffled the words given from input'''
    word = list(word)
    random.shuffle(word)
    return ''.join(word)

def say(input_v=None):
    '''chain the string function together and output as one string'''
    if input_v is None:
        return ''
    value = [input_v]
    def inner_adder(input_v=None):
        '''add all the values '''
        if input_v is None:
            return ' '.join(value)
        else:
            value.append(input_v)
            return inner_adder
    inner_adder.input_v = value # save value
    return inner_adder

def powers(base, limit):
    '''generate a function that outputs the power of the base until the product reaches limit'''
    power = 0
    if limit <= 0:
        return None
    else:
        while base**power <= limit:
            product = base**power
            yield product
            power += 1


def triples(limit):
    '''generate Pythagorean triples until the value reaches the limit'''
    output = []
    # 29^2*2 is the first value > 40^2, so the smaller square has to be less than 29
    for leg_small in range(1, 29):
        for leg_long in range(1, limit + 1):
            leg_big_square = (leg_long**2 - leg_small**2)
            if not(isinstance(leg_big_square**0.5, complex))and(leg_big_square**0.5%1 == 0)\
                    and(leg_big_square > 0)and(leg_small < int(leg_big_square**0.5)):
                output.append((leg_small, int(leg_big_square**0.5), leg_long))
    return output

def interleave(first, *therest):
    '''interleaves the input between the terms within first argument'''
    #  and the terms from the rest of the arguments
    total_num = max(len(first), len(therest))
    output = []
    for i in range(total_num):
        if i < len(first):
            output.append(first[i])
        if i < len(therest):
            output.append(therest[i])
    return output

class Cylinder:
    '''A Cylinder class with surface area and volume as properties'''
    def __init__(self, radius=1, height=1):
        '''A circle with a 2-D center point and a radius.'''
        if not radius:
            self.radius = 1
        elif not height:
            self.height = 1
        elif radius is None and height is None:
            self.radius = 1
            self.height = 1
        else:
            self.radius = radius
            self.height = height
    @property
    def surface_area(self):
        '''calculate the surface area'''
        return 2 * math.pi * self.radius * (self.radius + self.height)
    @property
    def volume(self):
        '''calculate the volume'''
        return math.pi * self.radius ** 2 * self.height

    def stretch(self, factor):
        '''stretch the object vertically'''
        self.height *= factor
        return self

    def widen(self, factor):
        '''widen the object '''
        self.radius *= factor
        return self

def make_crypto_functions(key, in_vector):
    '''build a parent function that returns the encryption and decrption function separately'''
    # AES Mode is used with pycrypto using IV and key given to encrypt the message
    mode = AES.MODE_CBC
    encryptor = AES.new(key, mode, IV=in_vector)
    decryptor = AES.new(key, mode, IV=in_vector)
    def encryption(encode_message):
        '''encrypted knowledge'''
        encode_output = encryptor.encrypt(encode_message)
        return encode_output
    def decryption(decode_message):
        '''decrypted knowledge'''
        decode_output = decryptor.decrypt(decode_message)
        return decode_output
    return encryption, decryption


def random_name(gender, region):
    '''Request API for random name and output it synchronously'''
    if gender != 'male' or gender != 'female':
        raise ValueError("error Invalid gender")
    else:
        url = 'https://uinames.com/api/?region=' + (region)+ '&?gender=' + (gender) + '&amount=1'
        output = requests.get(url)
        output = '{}, {}'.format(output.json()['surname'], output.json()['name'])
        return output


