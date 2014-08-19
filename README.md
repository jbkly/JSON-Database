Simple JSON database
======================
Using express, create a simple JSON database with the following functionality:
  * when a POST request to /:some_name is received write a file to the hard drive called some_name.json with the json data received
  * when a GET request to /:some_name is received, send back the data read from the hard drive in file some_name.json 

*TIP* Don't store the JSON files in the root of your project and make sure to add a rule in .gitignore that will make sure no data is committed to github.
