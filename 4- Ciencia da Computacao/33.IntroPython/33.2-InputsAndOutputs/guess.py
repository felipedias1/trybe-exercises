import random

random_number = random.randint(1,3)
guess = ""

while guess != random_number:
    guess = int(input("Qual o seu palpite ? "))

print("O numero sorteado era: ", guess)