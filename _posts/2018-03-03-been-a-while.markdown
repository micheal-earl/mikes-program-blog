---
layout: post
title:  "It's been a while"
date:   2018-03-03 00:00:00 -0800
categories: personal
---
Well this blog didn't really take off. I just can't spin up the effort to write something every day. I've recently gotten into Lua and the LOVE 2d game library. Playing around with that has been pretty fun.

I'm using a library in lua to help me implement OOP functionality. The library is called classical.lua and you can find it here: https://github.com/rxi/classic

You can see the notes I have on classical in this small repo https://github.com/Zenrix/oop_notes


Main.lua:
```lua
-- We must require our "classic" library to implement this
-- version of OOP. We then require our two object Classes
-- so that we can make Point and Vehicle objects + their children
Object = require 'lib/classic/classic'
require 'objects/Point'
require 'objects/Vehicle'

-- Just a main function for flavor
function main()
  -- Make 3 point objects and assign them values for x and y
  local point = Point(5, 4)
  local point2 = Point(10, 3)
  local point3 = Point(15, 4)
  
  -- Print the point values of our 3 point objects
  point:printPoint()
  point2:printPoint()
  point3:printPoint()
  
  -- Make a Rect object which is a child of point
  local rect = Rect(10, 10, 500, 500)
  rect:printPoint() -- Print our Rect objects coordinates using our
                    -- parents function Point:printPoint()
  
  -- Make a Car object which is a child of Vehicle
  local toyota = Car("Toyota Car", 75, "White", 4, 4)
  toyota:printName()  -- Print our Car objects name using our parent
                      -- function Vehicle:printName()
  
  -- Begin checking what our toyota object belongs to
  -- it is an Object, Vehicle, and finally a Car
  print(toyota:is(Object))
  print(toyota:is(Vehicle))
  print(toyota:is(Car))
  print(toyota:is(Rect))
  
  -- Perform similar function on our Rect object and
  -- Print the results
  print(rect:is(Point))
  print(rect:is(Rect))
  
end

-- Run our main function
main()
```

and my two class files are below

Vehicle.lua:
```lua
Object = require '../lib/classic/classic'

-- Start of the Vehicle class. Creates Vehicle objects.
Vehicle = Object:extend()

function Vehicle:new(name, speed, color)
  self.name = name or "Vehicle"
  self.speed = speed or 60
  self.color = color or "Green"
end

function Vehicle:printSpeed()
  io.write(self.speed.."\n")
end

function Vehicle:printName()
  io.write(self.name.."\n")
end

function Vehicle:printColor()
  io.write(self.color.."\n")
end

-- Start of the Car class. Creates Car objects. Extends the Vehicle class.
Car = Vehicle:extend()

function Car:new(name, speed, color, numOfWheels, numOfDoors)
  Car.super.new(self, name, speed, color)
  self.numOfWheels = numOfWheels or 4
  self.numOfDoors = numOfDoors or 0
end

-- Overload the printName function from the parent object
function Car:printName()
  io.write(self.name .. " overloaded \n")
end


function Car:printNumOfWheels()
  io.write(self.numOfWheels.."\n")
end

function Car:printNumOfDoors()
  io.write(self.numOfDoors.."\n")
end
```

Point.lua
```lua
Object = require '../lib/classic/classic'

-- Make a Point object
Point = Object:extend()

function Point:new(x, y)
  -- Creating properties for our future object
  self.x = x or 0
  self.y = y or 0
end

function Point:printPoint()
  io.write(self.x .. ", " .. self.y .. "\n")
end

-- Make a Rect object inheriting from point
Rect = Point:extend()

function Rect:new(x, y, width, height)
  -- Access our parent object and run its constructer
  -- store those parent properties in our new Rect object
  Rect.super.new(self, x, y)
  self.width = width or 0
  self.height = height or 0
end
```

I just implemented some random stuff and commented it so I can take a look at it in the future.