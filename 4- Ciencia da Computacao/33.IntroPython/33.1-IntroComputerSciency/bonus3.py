def sum_numbers(number):
    total = 0
    for index in range(int(number+1)):
        total += index
    return total

print(sum_numbers(5))
