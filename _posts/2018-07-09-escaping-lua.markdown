---
layout: post
title:  "Escaping Lua"
date:   2018-07-09 00:00:00 -0800
categories: whimsical
---

I love Lua as a programming language. It really has mostly everything I would ever want from a programming language. It is speedy (using LuaJIT) and it is easy to pick up. Using Lua and LÖVE for projects is a joy.

However, I have never been a very big fan of Lua syntax. It seems a really shallow thing to be upset with considering how good everything else seems to be, but I just can't escape how strange it can be. Using "then" and "end" to define code blocks is awkward and so _different_ from the other languages I regularly use. Swapping from Javascript and C# is usually syntactically painless, but swapping from C# or Javascript to Lua always takes a little bit of adjustment.

Another thing that has frustrated me and wasted hours of my time is that Lua arrays are initialized at 1! This causes so many bugs after coming back from other languages and it always takes an adjustmant period to remember this idiosyncrasy of Lua.

All of this has led me to explore languages that can transpile to Lua. I have tried and failed to use castl, a Javascript to Lua transpiler, and I have also encountered issues with another popular transpiled ;language called moonscript. Moonscript was a frustrating experience in much the same vein that Lua is a frustrating experience. Some changes to the syntax sumply make no sense, why do I use "\" to access an objects methods instead of ":"

So far my hopes rest with Haxe which is a very interesting cross-platform language that transpiles into many different languages. I could use Haxe, but I would have to write my own LÖVE externs to fully utilize that framework.

Maybe the solution is to just stick with Lua or make my own transpiled language. Unfortunately, I am a bit too lazy to take it that far.