#include <vector>
#include <numeric>
#include <functional>
#include <iostream>

int grow(const std::vector<int>& nums) {
  return std::accumulate(nums.cbegin(), nums.cend(), 1, std::multiplies<int>());
}

int grow(std::vector<int> nums) {
  int result = 1;
  for(auto x: nums)  result = result * x;
  return result;
}



