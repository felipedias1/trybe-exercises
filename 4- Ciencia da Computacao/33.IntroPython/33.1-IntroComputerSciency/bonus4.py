def calc_total_gas(liters, type_gas): 
    total = 0
    GAS_PRICE = 2.50
    ALCOHOL_PRICE = 1.90
    if liters <= 20:
        if type_gas == "G":
            total = liters * GAS_PRICE * 0.97
        else:
            total = liters * ALCOHOL_PRICE * 0.96
    else:
        if type_gas == "G":
            total = liters * GAS_PRICE * 0.95
        else: 
            total = liters * ALCOHOL_PRICE * 0.94
    return round(total, 2)

print(calc_total_gas(19, "G"))