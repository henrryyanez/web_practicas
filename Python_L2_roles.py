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
