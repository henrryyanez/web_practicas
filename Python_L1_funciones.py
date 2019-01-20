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
