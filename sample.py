a=[]
for i in range(int(input())):
    a.append(int(input()))
ans=a
d=[a[0]]
for i in range(1,len(a)):
    c=0
    d.append(a[i])
    #print(d)
    for j in range(len(d)-1,-1,-1):
        if d[j]>d[j-1]:
            print(j,j-1)
            break
        else:
            c+=1


