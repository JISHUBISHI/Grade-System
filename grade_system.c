#include <stdio.h>

void calculateGrades(int marks[], int n) {
    printf("\nSubject-wise Grades:\n");
    for (int i = 0; i < n; i++) {
        printf("Subject %d: ", i + 1);
        if (marks[i] >= 90) {
            printf("A+\n");
        } else if (marks[i] >= 80) {
            printf("A\n");
        } else if (marks[i] >= 70) {
            printf("B\n");
        } else if (marks[i] >= 60) {
            printf("C\n");
        } else if (marks[i] >= 50) {
            printf("D\n");
        } else {
            printf("F (Fail)\n");
        }
    }
}

int main() {
    int n;

    printf("Enter the number of subjects: ");
    scanf("%d", &n);

    int marks[n];

    printf("Enter marks for each subject:\n");
    for (int i = 0; i < n; i++) {
        printf("Subject %d: ", i + 1);
        scanf("%d", &marks[i]);
    }

    calculateGrades(marks, n);

    return 0;
}
