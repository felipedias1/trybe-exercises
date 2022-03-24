def calc_paint(meters):
    METERS_EACH_PAINT_CAN = 54
    PRICE_PAINT_CAN = 18
    qty_cans = (meters // METERS_EACH_PAINT_CAN) + 1
    price = qty_cans * 18
    return (qty_cans, price)

print(calc_paint(100))