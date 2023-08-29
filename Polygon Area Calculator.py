class Rectangle:

    def __init__(self, width, height):
        self.width= width
        self.height=height

    def set_width(self, width):
        self.width=width

    def set_height(self, height):
        self.height=height

    def get_area(self):
        area=self.width * self.height
        return area

    def get_perimeter(self):
        perimeter= (2*self.width + 2*self.height)
        return perimeter

    def get_diagonal(self):
        diagonal= ((self.width**2+self.height**2)**0.5)
        return diagonal

    def get_picture(self):
        if self.width>50 or self.height>50:
            return "Too big for picture."
        horizontal=((self.width*'*')+'\n')
        for line in range(self.height):
            line= horizontal * self.height
        return line

    def get_amount_inside(self, new):
        amount= int(self.get_area()/new.get_area())
        return amount

    def __repr__(self):
        rect= f'Rectangle(width={self.width}, height={self.height})'
        return rect

class Square(Rectangle):

    def __init__(self, side):
        self.width=side
        self.height=side

    def set_side(self, side):
        self.width=side
        self.height=side

    def set_width(self, side):
        self.width=side

    def set_height(self, side):
        self.height=side

    def __repr__(self):
        sq= f'Square(side={self.width})'
        return sq



rect = Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())

rect.set_height(3)
rect.set_width(7)
print(rect.get_amount_inside(sq))



rect.set_width(7)
rect.set_height(3)
rect.get_picture()
