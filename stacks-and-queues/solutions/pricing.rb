# First Solution
puts "Welcome Please Enter Your Items"

continue = true
queue = []

while continue
  item = {}

  print "Item Name: "
  item[:name] = gets.chomp
  print "Item Price: "
  item[:price] = Float(gets.chomp)
   queue.push item


  puts "Any More Items (y/n)?"
  res = gets.chomp

  continue = res == "y" ? true : false

end


count = 0
sum = 0

until queue.empty?
  item = queue.shift
  count += 1

  discount = 0

  if count % 15 == 0
    discount += -(0.3)
  elsif count % 5 == 0
    discount += -(0.2)
  elsif count % 3 == 0
    discount += -(0.1)
  end

  item[:price] += item[:price]*discount
  
  puts "#{item[:name]}.... #{item[:price]}"
  
  sum += item[:price]
end

puts "\n\nTotal.... #{sum}"



# Refactor With Functions
puts "Welcome Please Enter Your Items"

def collect_items()

  continue = true
  queue = []

  while continue
    item = {}

    print "Item Name: "
    item[:name] = gets.chomp
    print "Item Price: "
    item[:price] = Float(gets.chomp)
     queue.push item


    puts "Any More Items (y/n)?"
    res = gets.chomp

    continue = res == "y" ? true : false

  end

  queue
end

def calc_total(item_queue)
  total = 0
  count = 0
  until item_queue.empty?
    count += 1
    total = yield(item_queue.shift, total, count)
  end

end


def fiz_discount(count)

  discount = 0

  if count % 15 == 0
    discount += -(0.3)
  elsif count % 5 == 0
    discount += -(0.2)
  elsif count % 3 == 0
    discount += -(0.1)
  end

  discount
end

total = calc_total(collect_items) do |item, total, count|

  discount = fiz_discount(count)

  item[:price] += item[:price]*discount

  puts "#{item[:name]}.... #{item[:price]}"

  total += item[:price]
end

puts "\n\nTotal.... #{total}"
