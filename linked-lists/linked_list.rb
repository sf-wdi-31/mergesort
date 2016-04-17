# a Node object type (class)
class Node
	# data and next
	attr_accessor :data, :next_node
	def initialize(data, next_node=nil)
		@data = data
		@next_node = next_node
	end
end

# a Linked List object type (class)
class LinkedList
  # The linked list should store its `head` and `tail`.
  # The `head` and `tail` will both be Nodes.
	attr_accessor :head, :tail

  # The linked list object type should also have methods to:
  # given starter data, create a new list
	def initialize(data)
		newNode = Node.new(data, nil)
		@head = newNode
		@tail = newNode
	end

  # `append` a data node to the end of the list,
	def append(data)
		# create a new node
		newNode = Node.new(data, nil)
		# make old tail point to new node
		@tail.next_node = newNode
		# update tail
		@tail = newNode
	end

  # `prepend` a data node to the start of the list,

  # find the `size` of the list,

  # given one node, `insert` another node into the list after it,

  # given one node, `delete` the node after it from the list

  # stretch: Write a method to detect whether a linked list has a cycle in it.
end
