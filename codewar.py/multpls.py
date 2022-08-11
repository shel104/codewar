def solution(number):
    return sum (x for x in range(1, number) if x % 3 == 0 or x % 5 == 0)
    return sum (x for x in range(1, number) if x % 3 == 0 or x % 5 == 0)

    
if __name__ == '__main__': 
   print(solution(10))
   print(solution(20))
   print(solution(30))
   print(solution(40))
