#include <algorithm>
#include <string>

std::string reverseString(const std::string& str) {
    return std::string(str.rbegin(), str.rend());
}

std::cout(reverseString("codewars"));

std::cout(reverseString("football"));

std::cout(reverseString("translation"));
