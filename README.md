# Video-Paypal-Commerce

<screenshot here>


## Description:

A mysql database-based e-commerce website that allows the user to buy fishing tutorial videos to be purchased via Paypal's Sandbox digital transaction application. Upon selecting the video, the user will be able to input their information(e.g., name,email, credit-card information) and submit their payment and see that their video was purchase.

Installation:
Deployed website on Heroku
<website link>
  

## Developers:
* Ali Nguyen    https://github.com/nguyenali
* Shawna Gohel  https://github.com/shawnagohel


## Usage

Upon landing on the login page, the user must input
```
Username: Fishing    , Password: thebigone
```
 in order to be granted access to the website.

 After logging in, the user will be directed to homepage where they to 
add the fishing tutorial videos that they would like to purchase to the cart. After making their selection,
the user can click the 
```
<checkout> button 
```
which directs them to the checkout page and are able to see 
the videos in their cart. 

The user can then choose their method of payment either through Paypal
sandbox or by inputting a debit/credit card. Once the. User inputs their payment 
information and submits, a confirmation will be generated notifying them that the
 purchase was successful.


## Technology and Applications used:
cookie-parser: "^1.4.5",
dotenv: "^8.2.0",
express: "^4.17.1",
express-handlebars: "^5.2.0",
express-session: "^1.17.1",
mysql2: "^2.2.5",
nodemon: "^2.0.6",
sequelize: "^6.3.5",
Paypal Sandbox API: "7.33.1",
Heroku: "12.16.3"
HTML
CSS
Javascript



## Future Developments and plans:

* Added mobile-friendly functionality 
* Ability for user to pay with other online payment systems(e.g., Venmo, Zelle, Afterpay)
* Ability to save a video item as a product link to be sent via email/ text to other users

