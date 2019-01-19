#####################################
#### PART 6: EXERCISE REVIEW  #######
#####################################

# Time to review all the basic data types we learned! This should be a
# relatively straight-forward and quick assignment.

###############
## Problem 1 ##
###############

# Given the string:
s = 'django'

# Use indexing to print out the following:
# 'd'
print(s[0])
# 'o'
print(s[5])
# 'djan'
print(s[0:4])
# 'jan'
print(s[1:4])
# 'go'
print(s[4:6])
# Bonus: Use indexing to reverse the string
s[::-1]

###############
## Problem 2 ##
###############

# Given this nested list:
l = [3,7,[1,4,'hello']]
print(l)
# Reassign "hello" to be "goodbye"
l[2][2] = 'goodbye'
print(l)

###############
## Problem 3 ##
###############

# Using keys and indexing, grab the 'hello' from the following dictionaries:

d1 = {'simple_key':'hello'}

d1['simple_key']
print(d1)
d2 = {'k1':{'k2':'hello'}}

d2['k1']['k2']

d3 = {'k1':[{'nest_key':['this is deep',['hello']]}]}
d3['k1'][0]['nest_key'][1][0]

###############
## Problem 4 ##
###############

# Use a set to find the unique values of the list below:
mylist = [1,1,1,1,1,2,2,2,2,3,3,3,3]
x1 = set(mylist)
print(x1)


###############
## Problem 5 ##
###############

# You are given two variables:
age = 4
name = "Sammy"

# Use print formatting to print the following string:
# "Hello my dog's name is Sammy and he is 4 years old"
print("Hello my dog's name is {a} and he is {b} years old.".format(a=age,b=name))
