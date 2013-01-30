Habit-Graph - An AngularJS app for displaying Habit List data
=============================================================

*Currently a work-in-progress*

This project will aim to display interesting graphs and metrics about completion rates and productivity. 
Data is provided via JSON export from [Habit List](http://habitlistapp.com/) iOS app.

I'm building this application because I have been using the Habit List app for approximately 7 months, and I'd love to be able to visualize the data and find out more about my productivity. I think Habit List is a great app for people looking to build or stay on top of new habits. If you're interested, [check it out](http://habitlistapp.com/)

This was created using the [angular-seed](https://github.com/angular/angular-seed). 
Find out more about AngularJS from [http://angularjs.org/](http://angularjs.org/)

How to use:
-----------
* Export your Habit List data via the iOS app by going to Settings->Export Data
* Save the JSON data to a file called habits.json, in the app/habits directory
* Run the ruby script habits.rb `ruby habits.rb`

* Install node.js and run `scripts/web-server.js`
* Navigate to [http://localhost:8000/app/index.html](http://localhost:8000/app/index.html)