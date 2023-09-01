from json import dumps, loads
from typing import List

def decrypt(s1: str, s2: str) -> str:
    li=[]
    x=0
    for i in s1:
      li.append(i)
      for j in s2:
        li.append(s2[x])
        x+=1
        break
    word=''.join(li)
    print(word)
    return word

decrypt('NWO','ETN')
