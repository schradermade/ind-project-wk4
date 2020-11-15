# _Pizza Shop_

#### _Web form to process pizza orders for pizza shop, 11.6.2020_

#### By _**Nathan Schrader**_

## Description

_Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost._

*   Allow the user to choose toppings and size for the pizza they'd like to order.
*   Create a pizza object constructor with properties for toppings and size.
*   Create a prototype method for the cost of a pizza depending on the selections chosen.

## Setup/Installation Requirements

* Clone this repository
* Open a simple HTTP server in the top level of the cloned directory. For a mac, run the following commanad in your terminal:
    `python -m SimpleHTTPServer`
* Then open your web browser of choice to localhost:8800

## Specs

| Test | Input | Output |
| :-- | :--| :-- |
| will correctly create an instance of Pizza | "let pizzaOrder = new Pizza("Nate", "cheese", "Medium") | "Pizza {guestName: "Nate", toppings: Array(2), size: "Medium"}" |
| will correctly create an instance of Pizza with pepperoni | "let pizzaOrder = new Pizza("Nate", "pepperoni", "Medium") | "Pizza {guestName: "Nate", toppings: Array(2), size: "Medium"}" |
| will correctly create an instance of Pizza with cheese | "let pizzaOrder = new Pizza("Nate", "cheese", "Large") | "Pizza {guestName: "Nate", toppings: Array(2), size: "Large"}" |
| will correctly create an instance of Pizza for Large pizza with correct pricing | pizzaOrder.calcPrice(); | "15" |
| will correctly create an instance of Pizza for Medium pizza with correct pricing | pizzaOrder.calcPrice(); | "10" |

## Known Bugs

No known bugs at this time.

## Support and contact details

_If you run into any issues or have concerns, please reach out at **nathanschrader@icloud.com**_

## Technologies Used

HTML
* CSS
* Bootstrap
* JavaScript
* jQuery
* Visual Studio Code
* Github

## Legal

Copyright (c) 2020 **_Nathan Schrader_**

This software is licensed under the MIT license.