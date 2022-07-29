#include <vector>
#include <numeric>
#include <iostream>
#include <string>
#include <algorithm>
#include <cmath>
#include <cstdlib>
#include <ctime>
#include <cstdio>
#include <cstring>
#include <cctype>


int sum(std::vector<int> nums) {
     return std::accumulate(nums.begin(), nums.end(),0);

}

