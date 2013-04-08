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
  # Format the dates to trim time/timezone information
  habit['createdAt'] = Date.parse(habit['createdAt']).strftime('%F')
  habit['completed'].each_index do |date_completed|
    habit['completed'][date_completed] = Date.parse(habit['completed'][date_completed]).strftime('%F')
  end
  File.open "app/habits/#{habit['name'].downcase}.json", 'w' do |f|
    f.write JSON.pretty_generate(habit)
  end
end

# Overwrite the habits.json file with formatted habits
File.open "app/habits/habits.json", 'w' do |f|
  f.write JSON.pretty_generate(habits)
end

puts "--- Finished writing json files"
