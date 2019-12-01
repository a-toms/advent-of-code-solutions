def calculate_module_fuel(remaining_mass, total_fuel=0):
    fuel = (remaining_mass // 3) - 2
    return total_fuel if fuel <= 0 else calculate_module_fuel(fuel, total_fuel + fuel)


print(list(map(
    lambda x: calculate_module_fuel(int(x.replace('\n', ''))),
    open("masses.txt", "r").readlines()))
)
