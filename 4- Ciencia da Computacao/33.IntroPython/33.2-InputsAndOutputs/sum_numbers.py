from curses.ascii import isdigit


number = input("Type numbers and spread with single space: ")
   
list_numbers = number.split()

def sum_numbers(numbers):
    total = 0
    for number in numbers:
        if number.isdigit() == False:
            return (f"Erro ao somar valores,{number} é um valor invalido", f"A soma é {total}")
        total += int(number)
    return f"A soma é {total}"; 


print(sum_numbers(list_numbers))

