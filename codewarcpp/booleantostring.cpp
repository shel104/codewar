#include <string>
#include <iostream>

std::string boolean_to_string(bool b){
  return b ? "true" : "false";
}
using namespace std;

int main() {
// cout << true;
cout << (boolean_to_string(true));
cout <<(boolean_to_string(false));
cout <<(boolean_to_string(false));
cout <<(boolean_to_string(true));
//  cout << false;
return 0;
}
