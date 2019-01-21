def hello():
    return("Henrry")

result = hello()

print(result)



def addNum(num1,num2):
    if type(num1)==type(num2)==type(10):
        return num1+num2
    else:
        return "Sorry, I need integers!"

result = addNum("2",'3')
print(result)



# Lambda Explression

# Filter
mylist = [1,2,3,4,5,6,7,8]

def even_bool(num):
    return num%2 == 0

evens = filter(even_bool,mylist)
print(list(evens))




# Lambda Explression

# Filter
mylist = [1,2,3,4,5,6,7,8]

evens = filter(lambda num:num%2 == 0,mylist)
print(list(evens))
