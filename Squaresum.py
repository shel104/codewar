def square_sum(numbers):
    return sum(x ** 2 for x in numbers)
    
    


print(square_sum([1,2]), 5)
print(square_sum([0, 3, 4, 5]), 50)
print(square_sum([-1,-2]), 5)
print(square_sum([-1,0,1]), 2)
print(square_sum([]),0)

def basic_tests():
        (square_sum([1,2]), 5)
        (square_sum([0, 3, 4, 5]), 50)
        (square_sum([]), 0)
        (square_sum([-1,-2]), 5)
        (square_sum([-1,0,1]), 2)

basic_tests(print())
