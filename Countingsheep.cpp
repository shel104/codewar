#include <algorithm>
#include <vector>

int count_sheep(std::vector<bool> v) {
  return std::count(v.cbegin(), v.cend(), true);
}

using namespace std;

// Describe(count_sheep_method)


