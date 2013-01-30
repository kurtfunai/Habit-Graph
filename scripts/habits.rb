# Ruby Script to create individual habit.json files for each of the users habits
# To be ran from project root directory with command: ruby scripts/habits.rb
require 'json'

if !File.exists? 'app/habits/habits.json'
  throw 'Please place your habits JSON data into a file called habits.json in the app/habits/ directory'
end

habits_source = File.open 'app/habits/habits.json'
habits = JSON.load habits_source
habits_source.close

habits.each do |habit|
  File.open "app/habits/#{habit['name'].downcase}.json", 'w' do |f|
    f.write JSON.pretty_generate(habit)
  end
end

