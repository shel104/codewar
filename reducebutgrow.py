import math
def grow(arr):
    return math.prod(arr)

from functools import reduce

def grow(arr):
     return reduce(lambda x, y: x * y, arr)

  
# def grow(arr):
#    product = 1
#    for i in arr():
#        product *= i
#    return product


print(grow( [1, 2, 3]), 6),
print(grow( [1, 2, 3, 4]), 24),
print(grow([2,2,2,2,2,2,2,2,2,2,2]),2048),   

