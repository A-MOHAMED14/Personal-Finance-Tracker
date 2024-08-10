# Project 2: Personal Finance Tracker

## Overview

This application helps users manage their finances by tracking income, expenses, and budgets. It provides visual insights through charts and graphs to simplify financial planning and budgeting.

## User Story

```
AS A user,
I WANT to track my income, expenses, set budget goals, and view detailed reports on my spending and savings,
SO THAT I can manage my finances effectively and make informed financial decisions.
```

## Acceptance Criteria

```
GIVEN a personal finance tracking application
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes a landing message, navigation links for the homepage and login.

WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other button on the page or links in the navigation
THEN I am prompted to either sign up or sign in.

WHEN I choose to sign up
THEN I am prompted to enter my name, email and password.
WHEN I click on the sign up button
THEN my user credentials are saved, and I am logged into the site.

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my email and password.
WHEN I am signed in to the site
THEN I see navigation links for the homepage, budget, financial overview, and the option to log out.

WHEN I am logged in and click on the homepage option in the navigation
THEN I am taken to the homepage and presented with my financial summary

WHEN I click on the Budget option in the navigation,
THEN I am taken to the Budget page where I see:

A form to enter the name and amount for a new budget category
A table displaying all existing budgets

WHEN I click on one of my existing budgets in the budget section
THEN I am able to view the details of the budget, and I have the option to edit or delete the budget.
WHEN I click on the edit option
THEN I am prompted to modify the details of the budget.
WHEN I click on the update button
THEN the updated budget details are saved, and I am taken back to an updated budget list reflecting the changes.
WHEN I click on the delete option
THEN the budget is removed from the database, and I am taken back to an updated budget list without the deleted budget.

WHEN I click on the overview option in the navigation
THEN I am taken to the overview and presented with the following:
A list of my recent transactions (income and expenses).
The option to add a new income entry or expense entry.
A graphical representation of my financial data (e.g., bar chart for income vs. expenses, pie chart for expense categories).

WHEN I click on the button to add a new income entry
THEN I am prompted to enter details such as the amount, source, and date of the income.
WHEN I click on the button to create a new income entry
THEN the income details are saved, and I am taken back to an updated overview showing the new income entry in my recent transactions.

WHEN I click on the button to add a new expense entry
THEN I am prompted to enter details such as the amount, category, and date of the expense.
WHEN I click on the button to create a new expense entry
THEN the expense details are saved, and I am taken back to an updated overview showing the new expense entry in my recent transactions.

WHEN I click on one of my existing transactions (income or expense) in the overview
THEN I am able to view the details of the transaction, and I have the option to edit or delete the transaction.
WHEN I click on the edit option
THEN I am prompted to modify the details of the transaction.
WHEN I click on the update button
THEN the updated transaction details are saved, and I am taken back to an updated overview reflecting the changes.
WHEN I click on the delete option
THEN the transaction is removed from the database, and I am taken back to an updated overview without the deleted transaction.

WHEN I click on the logout option in the navigation
THEN I am signed out of the site.
WHEN I am idle on the site for more than a set time
THEN I am able to view my financial summary and recent transactions, but I am prompted to log in again before I can add, edit, or delete transactions.

WHEN I access the site from a mobile device
THEN the site is fully responsive and usable, with a layout adapted for smaller screens and touch interactions.
```
