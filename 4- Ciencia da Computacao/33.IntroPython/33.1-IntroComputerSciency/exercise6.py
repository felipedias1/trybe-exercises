def triangle(a, b, c):
    if a + b > c or a + c > b or b + c > a:
        if a == b == c:
            return "Triangulo Equilatero!"
        elif a == b  or a == c or b == c:
            return "Triangulo Isósceles!"
        else:
            return "Triangulo Escaleno!"
    else:
        return "Não é um Triangulo!"

print(triangle(0,0,0))