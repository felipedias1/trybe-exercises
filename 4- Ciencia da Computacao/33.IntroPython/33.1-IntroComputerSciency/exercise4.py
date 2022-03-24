names_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def bigger_name(names):
    greater_name = ""
    for name in names:
       if len(name) > len(greater_name):
           greater_name = name
    return greater_name


print(bigger_name(names_list))