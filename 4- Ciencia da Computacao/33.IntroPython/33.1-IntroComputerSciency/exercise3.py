input_number = input("Digite um número: ")


def asterisk_line(number):
    for index in range(int(number)):
        line = ""
        for index in range(int(number)):
            line += '*'
        print(line)


asterisk_line(input_number)