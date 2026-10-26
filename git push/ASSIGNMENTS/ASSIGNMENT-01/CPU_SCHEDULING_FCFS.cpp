#include <iostream> //[cite: 1]
using namespace std; //[cite: 1]

int main() {
    int n; //[cite: 1]
    cout << "Enter the number of process "; //[cite: 1]
    cin >> n; //[cite: 1]

    int bt[20], wt[20], tat[20]; //[cite: 1]

    float avg_wt = 0; //[cite: 1]
    float avg_tat = 0; //[cite: 1]

    for (int i = 0; i < n; i++) { //[cite: 1]
        cout << "Enter burst time for process P" << i + 1 << ": "; //[cite: 1]
        cin >> bt[i]; //[cite: 1]
    } //[cite: 1]

    wt[0] = 0; //[cite: 1]

    for (int i = 1; i < n; i++) { //[cite: 1]
        wt[i] = wt[i - 1] + bt[i - 1]; //[cite: 1]
    } //[cite: 1]

    for (int i = 0; i < n; i++) { //[cite: 1]
        tat[i] = wt[i] + bt[i]; //[cite: 1]
        avg_wt = avg_wt + wt[i]; //[cite: 1]
        avg_tat = avg_tat + tat[i]; //[cite: 1]
    } //[cite: 1]

    avg_wt = avg_wt / n; //[cite: 2]
    avg_tat = avg_tat / n; //[cite: 2]

    cout << "\n Process \t Burst Time \t waiting time \t Turnaround Time\n"; //[cite: 2]

    for (int i = 0; i < n; i++) { //[cite: 2]
        cout << "P " << i + 1 << "\t\t" //[cite: 2]
             << bt[i] << "\t\t" //[cite: 2]
             << wt[i] << "\t\t" //[cite: 2]
             << tat[i] << endl; //[cite: 2]
    } //[cite: 2]

    cout << "\nAverage waiting Time : " << avg_wt << endl; //[cite: 2]
    cout << "Average Turnaround Time :" << avg_tat << endl; //[cite: 2]

    return 0; //[cite: 2]
} //[cite: 2]