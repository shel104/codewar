def count_sheeps(sheep):
  # TODO May the force be with you
  return (sheep).count(True)

# print("count_sheeps")

array1 = [True,  True,  True,  False,
          True,  True,  True,  True ,
          True,  False, True,  False,
          True,  False, False, True ,
          True,  True,  True,  True ,
          False, False, True,  True ];
              
print(result := count_sheeps(array1), 17, "There are 17 sheeps in total, not %s" % result)
