#include <iostream>
#include <queue>

using namespace std;

int main() {
	queue<int> myQ;
	for(int i = 0; i < 10; i++) {
		cout << "enqueuin " << i << endl;
		myQ.push(i);
	}

	cout << "size of myQ: " << myQ.size() << endl;
	cout << "The back of myQ: " << myQ.back() << endl;
	while(!myQ.empty()) {
		cout << "dequeuing " << myQ.front() << endl;
		myQ.pop();
	}
}



