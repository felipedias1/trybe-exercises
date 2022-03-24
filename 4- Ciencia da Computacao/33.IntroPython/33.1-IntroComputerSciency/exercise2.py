numbers_list = [1,2,3,4,5,6,7,8,9,10,11,12]


def calc_average(numbers):
    total = 0
    for number in numbers:
          total += number
    return total/len(numbers)


print(calc_average(numbers_list))