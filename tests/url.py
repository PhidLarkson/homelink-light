import random

print("Start")

starter = 0

marker = ""

while True:
    starter = random.randint(0,10)
    marker += str(starter)
    print("set")
    print(marker)
    
    "ghana line"

    if len(marker) >4:
        marker = ""
        continue
        
    elif len(marker) == 4:
        print("end")
        break
    else:
        continue


print(marker)