<div id="top"></div>


## About The Project

This API was developed to explore the world of Disney. It will allow you to know, create and modify characters and the movies in which they take part.


### Built With

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* MySql
	* Folow this [installation steps](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).
	* Create a database for the app.
* Send Grid
	* Create your account [from here](https://sendgrid.com/)
	* [Setup a Sender Authentication](https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-domain-authentication#setting-up-domain-authentication)
	* Get your API key [from here](https://app.sendgrid.com/settings/api_keys)
	* Build your [dynamic transactional template](https://sendgrid.com/dynamic_templates) and get its ID.
  

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/JuanAvalo/alkemy-node-challenge.git
   cd alkemy-node-challenge
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Configure in the root folder your `.env` file
   ```js
   
	    DATABASE= 'YOUR MYSQL DB NAME',
	    HOST= 'YOUR MYSQL DB HOSTNAME',
	    USER= 'YOUR MYSQL DB USERNAME',
	    PASSWORD= 'YOUR MYSQL DB PASSWORD'

	    MAIL_APIKEY= 'The API key you got from Send Grid',
		MAIL_FROM= 'The mail from where you want to send your welcome email',
		MAIL_TEMPLATE= 'The template you created on Dynamic Templates'
		
   ```  
4. Populate the DB (optional)
   ```sh
   node populate-db.js
   ``` 
5. Done! Now run the server.
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

For a detailed explanation on how to use the API please refer to the _[Documentation](https://documenter.getpostman.com/view/19426560/UVeGrmHj)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact
<center>
<a href="mailto:avalojuanma@gmail.com"> <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"> </a>
<a href="https://www.linkedin.com/in/avalojuan/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"> </a>
</center>

<p align="right">(<a href="#top">back to top</a>)</p>