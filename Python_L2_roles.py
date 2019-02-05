#Conceptop de Roles

x = 25

def my_func():
    x = 50
    return x

print (x)
print (my_func())

#################### Ahora otro ejemplo ##################

name = 'This is a global name!'

def greet():
    name = "sammy"

    def hello():
        print("hello "+name)

    hello()

greet()
print(name)

#################Llamamos variables gloabales dentro de locales ###################################

x = 50

def func():
    # global x
    x = 1000
    return x

print("before function call, x is: ",x)
x = func()
print("after function call, x is: ",x)
