#include <vector>
int square_sum(const std::vector<int>& numbers)
{
    int ret=0;
    for (auto x:numbers) ret+=(x*x);
    return ret;
}

  
    
        Assert::That(square_sum({1, 2}), Equals(5));
        Assert::That(square_sum({0, 3, 4, 5}), Equals(50));
        Assert::That(square_sum({}), Equals(0));
        Assert::That(square_sum({-3, -4}), Equals(25));

