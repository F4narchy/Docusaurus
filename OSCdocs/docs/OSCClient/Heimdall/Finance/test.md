---
sidebar_label: 'test'
sidebar_position: 2
---

# :show-content:
---
# Expenses

Odoo **Expenses** streamlines the management of expenses. After an employee submits their expenses
in Odoo, the expenses are reviewed by management and accounting teams. Once approved, payments can
then be processed and disbursed back to the employee for reimbursement(s).

![(expenses/expense.png)](https://www.odoo.com/app/expenses)

## Set expense categories

The first step to track expenses is to configure the different types of expenses for the company
(managed as *expense categories* in Odoo). Each category can be as specific or generalized as
needed. Go to **Expenses app --> Configuration --> Expense Categories** to view the
current expensable categories in a default list view.

<!--![Set expense categories](expenses/categories.png)-->

To create a new expense category, click **New**. A product form will appear, with the
description field labeled **Product Name**.

:::note Note 

Expense categories are managed like products in Odoo. The expense category form follows the standard product form in Odoo, and the information entered is similar. Expense products will be referred to as expense categories throughout this document since the main menu refers to these as **Expense Categories**.

:::

Only two fields are required, the **Product Name** and the **Unit of Measure**. Enter the **Product Name** in the field, and select the **Unit of Measure** from the drop-down menu (most products will be set to **Units**).

:::tip Astuce

The *Sales* app is where specification on the units of measure are created and edited (e.g. units, miles, nights, etc.). Go to **Sales app --> Configuration --> Settings** and ensure **Units of Measure** is enabled in the **Product Catalog** section. Click on the **Units of Measure** internal link to view, create, and edit the units of measure. Refer to [this document](/applications/inventory_and_mrp/inventory/management/products/uom) to learn more about units of measure and how to configure them.

:::

The **Cost** field on the product form is populated with a value of `0.00` by default. When a specific expense should always be reimbursed for a particular price, enter that amount in the **Cost** field. Otherwise, leave the **Cost** set to `0.00`, and employees will report the actual cost when submitting an expense report.

:::note Note 

The **Cost** field is always visible on the expense category form, but the **Sales Price** field is *only* visible if the **Sales Price** is selected under the **Re-Invoice Expenses** section. Otherwise, the **Sales Price** field is hidden.

:::

:::info Example

### Voici quelques exemples de cas où il convient de fixer un Coût spécifique sur un produit plutôt que le laisser le Coût sur `0,00` :

- **Meals** : Set the **Cost** to `0.00`. When an employee logs an expense for a meal,
  they enter the actual amount of the bill and will be reimbursed for that amount.
- **Mileage** : Set the **Cost** to `0.30`. When an employee logs an expense for "mileage",
  they enter the number of miles driven in the **Quantity** field, and are reimbursed 0.30 per mile they entered.
- **Monthly Parking** : Set the **Cost** to `75.00`. When an employee logs an expense for "monthly parking",
  the reimbursement would be for $75.00.
- **Expenses** : Set the **Cost** to `0.00`. When an employee logs an expense that is not
  a meal, mileage, or monthly parking, they use the generic **Expenses** product. An
  expense for a laptop costing $350.00 would be logged as an **Expenses** product, and
  the reimbursement would be for $350.00.

:::

Select an **Expense Account** if using the Odoo *Accounting* app. It is recommended to check
with the accounting department to determine the correct account to reference in this field as it
will affect reports.

Set a tax on each product in the **Vendor Taxes** and **Customer Taxes** fields, if
applicable. It is considered good practice to use a tax that is configured with **Tax Included
in Price**. Taxes will be automatically configured if this is set.

## Record expenses

### Manually create a new expense

To record a new expense, begin in the main **Expenses** app dashboard, which presents
the default **My Expenses** view. This view can also be accessed from
**Expenses app --> My Expenses --> My Expenses**.

First, click **New**, and then fill out the various fields on the form.

- **Description**: Enter a short description for the expense in the **Description**
  field.
- **Category**: Select the expense category from the drop-down menu.
- **Total**: Enter the total amount paid for the expense.
- **Employee**: Select the employee this expense is for.
- **Paid By**: Indicate who paid for the expense and should be reimbursed.
- **Bill Reference**: If there is any reference text that should be included for the expense, enter it in this field.
- **Expense Date**: Enter the date the expense was incurred.
- **Account**: Select the expense account that this expense should be logged on.
- **Customer to Reinvoice**: If the expense is something that should be paid for by a
  customer, select the sales order and customer that will be invoiced for this expense from the drop-down menu.
- **Analytic Distribution**: Select the account(s) the expense should be written against from the drop-down menu.
- **Company**: Select the company this expense should be filed for from the drop-down menu.
- **Notes**: Enter any additional notes for the expense.

<!--![A filled in expense form for a client lunch](expenses/expense-filled-in.png)-->
