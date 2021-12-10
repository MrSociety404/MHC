# The Hiking Project
### Powered by BeCode Liège

-----------

## Technologies we used:
- PHP
- React
- MySQL
- Docker


## Structure:
Wireframe avaiable on [Figma](https://www.figma.com/file/73MrvlLSwMWCzhoYfmODM5/hiking?node-id=0%3A1).


We used JWT, which is  is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.

For example, a server could generate a token that has the claim "logged in as administrator" and provide that to a client. The client could then use that token to prove that it is logged in as admin. The tokens can be signed by one party's private key (usually the server's) so that party can subsequently verify the token is legitimate. If the other party, by some suitable and trustworthy means, is in possession of the corresponding public key, they too are able to verify the token's legitimacy. The tokens are designed to be compact,[2] URL-safe,[3] and usable especially in a web-browser single-sign-on (SSO) context. JWT claims can typically be used to pass identity of authenticated users between an identity provider and a service provider, or any other type of claims as required by business processes.



PART 1
Creation of the database

To start working, it's easier to already have data. Create a database named hiking followed by a table called "hikes" and fill it with the following fields:

    ID (that will be assigned automaticly)
    name
    difficulty (very easy, easy, etc.)
    distance
    duration
    elevation_gain

Once done, you will retrieve some data from an existing website like visandro or wikiloc. You have to collect at least 5 hikes and insert them the database. Each hike must fill in the fields.
Display the list of hikes

Create a file named read.php, get the hikes directly from the database and display them in a table.

You must use PHP of course, but also PDO.
Add a hike

You must now add a hike, but not by a db manager like Workbench, rather directly by a page provided for this purpose.

Create a page named create.php. In here you will create a form with the 5 fields,that will post the input to the database.

TIPS: You can take a look at the exec() or prepare() or execute in the PDO.
Improvements

When you have managed to add a hike, it is good to notify it by message. If you have not already done so, display the message "The hike has been added successfully." when the hike was added successfully.
Edit a hike

Imagine that we were mistaken when returning the information of the hike, it should be able to change afterwards.

Create the file update.php for that.

First, in the hike table of the file read.php, add a link to the name of each hike. This link will return to the update.php page.

On this page we will be able to make the modifications for the chosen hike. Create a form, the fields on this page must be pre-populated from information of the chosen hike!

TIPS: In order to differentiate the hikes it will be necessary to be based on the id and perhaps to see how to pass variables between web pages.
Delete a hike

We will now see the last action, the deletion.

Create a delete.php file.

Add a delete button in the table on each line of hikes. Clicking the button will send the id of the hike to the delete.php page.

When you have deleted it will return automatically (without the user does anything) the page read.php.

TIPS: For redirection to the page read.php you should probably take a look at the function header ()
PART 2

Through this exercise we did CRUD (Create Read Update Delete). These are the basic actions that can be performed on the database data.
Add a new column in your DB

With time, some trails could be impassable for many reasons (the path changed, the references are outdated ect...). So, when we add a trail, we should display the date of the publication : created_at ({tstamp}[timestamp] of the created entry)

If a user updates the trail, we should see the new date and the message updated at ...
Check the form data

There are smart guys who will not hesitate to try to hack your application including through the form.

Protect your back by checking that each information sent by the form is valid before entering the database.

Check that the distance, elevation_gain and duration fields are digits only.
Refactor the code

If you put in each file, the connection to the database know that there is a way to factor it all by using include(). Now that you know it, you just have to put it in place.
Login

Create a login system around the Hiking application. Create a new table that will handle the user data.

    Users must be connected in order to interact & display the hiking application. You will need to implement the creation of users (sign up) and the connection of users (sign in). Users will use an unique email and a password for authorization.

    You must hash the password. Becrypt is a nice solution.

    Users will also have a nickname (must be unique).

    Users will be able to modify their information (except email) on a profile page.

Bonus

    Make it so that when a user creates a hike, his name gets displayed in a new field created by in our hiking application.
    Only the admin or people that created the hike, can delete it.
    send an email to the user when he subscribes to the website for the first time.
