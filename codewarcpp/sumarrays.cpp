#include <vector>
#include <numeric>
namespace std {
    template <typename T>
    T sum(const T& a, const T& b) {
        return a + b;
    }
}

int sum(std::vector<int> nums) {
     return std::accumulate(nums.begin(), nums.end(),0);
     
}

// Compare this snippet from codewar/codewarcpp/ReversedString.cpp:
