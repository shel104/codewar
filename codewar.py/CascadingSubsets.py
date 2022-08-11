def each_cons(lst, n):
    return [lst[i:i+n] for i in range(len(lst) - n + 1)]

def test_group():
    
    lst = [3, 5, 8, 13]
    (each_cons(lst, 1), [[3], [5], [8], [13]])
    
# import codewars_test as test
# from solution import each_cons

# def test_group():
#     @test.it('Should return cascading lists of 1 element')
#     def test_case1():
#         lst = [3, 5, 8, 13]
#         test.assert_equals(each_cons(lst, 1), [[3], [5], [8], [13]])
        
#     # @test.it('Should return cascading lists of 2 elements')
#     # def test_case2():
#         lst = [3, 5, 8, 13]
#         print(each_cons(lst, 2), [[3,5], [5,8], [8,13]])
        
#     # @test.it('Should return cascading lists of 3 elements')
#     # def test_case3():
#         lst = [3, 5, 8, 13]
#         # test.assert_equals(each_cons(lst, 3), [[3,5,8], [5,8,13]])
        
#     # @test.it('empty list should return an empty list')
#     # def test_case4():
#         lst = [3, 5, 8, 13]
#         # test.assert_equals(each_cons([], 3), [])
