#include <cs50.h>
#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>

bool valid(string password);

int main(void)
{
    string password = get_string("Enter your password: ");
    if (valid(password))
    {
        printf("Your password is valid!\n");
    }
    else
    {
        printf("Your password needs at least one uppercase letter, lowercase letter, number and symbol\n");
    }
}

// TODO: Complete the Boolean function below
bool valid(string password)
{
    bool Upper = false;
    bool Lower = false;
    bool Digit = false;
    bool Symbol = false;

    for (int i = 0; password[i] != '\0'; i++)
    {
        char c = password[i];
        if (isupper(c))
        {
            Upper = true;
        }
        else if (islower(c))
        {
            Lower = true;
        }
        else if (isdigit(c))
        {
            Digit = true;
        }
        else if (ispunct(c))
        {
            Symbol = true;
        }
    }

    return Upper && Lower && Digit && Symbol;
}