# Ruby Script to create individual habit.json files for each of the users habits
# To be ran from project root directory with command: ruby scripts/habits.rb
require 'json'
require 'date'

if !File.exists? 'app/habits/habits.json'
  throw 'Please place your habits JSON data into a file called habits.json in the app/habits/ directory'
end

habits_source = File.open 'app/habits/habits.json'
habits = JSON.load habits_source
habits_source.close

# Write each habit into an individual json file
habits.each do |habit|

  # Init our productive days/months hashes
  habit['productiveDays'] = {
    'Monday' => 0,
    'Tuesday' => 0,
    'Wednesday' => 0,
    'Thursday' => 0,
    'Friday' => 0,
    'Saturday' => 0,
    'Sunday' => 0
  }
  habit['productiveMonths'] = {
    'January' => 0,
    'February' => 0,
    'March' => 0,
    'April' => 0,
    'May' => 0,
    'June' => 0,
    'July' => 0,
    'August' => 0,
    'September' => 0,
    'October' => 0,
    'November' => 0,
    'December' => 0
  }

  # Get times completed for each weekday & month
  habit['completed'].each do |date_completed|
    date = Date.parse(date_completed)
    habit['productiveDays'][date.strftime('%A')] += 1 # %A => Full day name, ie. "Tuesday"

    # Only calculate productive months for the last year, to prevent skewed results
    habit['productiveMonths'][date.strftime('%B')] += 1 if date > Date.today.prev_year #B => Full month name, ie. "April"
  end

  # Save habit details in a json file
  File.open 'app/habits/#{habit["name"].downcase}.json', 'w' do |f|
    f.write JSON.pretty_generate(habit)
  end
end

puts '--- Completed writing habit files'