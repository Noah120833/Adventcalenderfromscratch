document.addEventListener("DOMContentLoaded", () => {
   // Your existing JavaScript here.
   console.log("its running, code is working")
   
});
const calendar = document.getElementById("calender");

const images = [    'https://images.unsplash.com/photo-1577222960148-b1f883b66659?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://plus.unsplash.com/premium_vector-1720795876018-6fad667428f4?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1606922731315-8a9c372cc274?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dd',
   'https://images.unsplash.com/photo-1602672971913-e1506cb634f1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1671464400067-47b90cdd360d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1636582484154-97f801ae1cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://plus.unsplash.com/premium_photo-1697011172475-c0d0418d8436?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://media.istockphoto.com/id/2170789690/de/foto/ein-weihnachtsschmuck-aus-glaskugel-der-an-einem-weihnachtsbaum-h%C3%A4ngt.jpg?s=2048x2048&w=is&k=20&c=MycwjwFyggSvRhpV8t7ZsLZ5OYdWktK0rXt9M-P4Xeo=',
   'https://plus.unsplash.com/premium_vector-1723375174284-a57ca1193ea1?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1590080874088-eec64895b423?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://plus.unsplash.com/premium_vector-1715961962839-ef2fe4cdf35c?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://plus.unsplash.com/premium_vector-1720532759341-feb0cfea424d?q=80&w=2398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://plus.unsplash.com/premium_vector-1728590133221-ac319cd900d0?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1513427123250-82a01b806f1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://plus.unsplash.com/premium_vector-1728762833994-c7598433c7f5?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://plus.unsplash.com/premium_vector-1732460460832-870c3e60f8fe?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://plus.unsplash.com/premium_vector-1732478432015-8ccf8fda1987?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1481973946307-512988dde8b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://plus.unsplash.com/premium_vector-1726267370684-2642bdeb7f10?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1542109545-6cf5d8a3bcd7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1531853749260-4447dc77f7e8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://plus.unsplash.com/premium_photo-1661515695508-8d68fac83125?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1588195540875-63c2be0f60ae?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://plus.unsplash.com/premium_photo-1663100838315-411425e50d96?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      
       ];
       const meals = [
   {   
       name: "Protein " + "<br>" + " Yoghurt", 
       description: "This is a Protein Yoghurt with oats, curd, some berries, and one spoon of honey.",
       image: "https://plus.unsplash.com/premium_vector-1710933665606-ec18e548c7e8?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1710933665606-ec18e548c7e8?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🍶 1x onethird yoghurt" + "<br>" + "🍚 1x onethird curd" + "<br>" + "🥣 1x some muesli" + "<br>" + "🍓 5x berrys" + "<br>" + "🍌 1 whole banana" + "<br>" + " 🍯 ྀིྀི one spoon honey",
   },
   {  
       name: "Omlett", 
       description: "This is a Omlett with salt, pepper, potatoes and some onions.",
       image: "https://plus.unsplash.com/premium_vector-1731742692969-3d34c3168766?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1731742692969-3d34c3168766?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🥚 1x egg" + "<br>" + "🧂 1x praise of pepper" + "<br>" + "🧂 1x praise of salt" + "<br>" + "🍾 1x raps oil" + "<br>" + "🥔 3x small potatoes",
   }, 
   {   
       name: "Veggie" + "<br>" + " Soup", 
       description: "A hearty vegetable soup with carrots, potatoes, and celery.",
       image: "https://plus.unsplash.com/premium_vector-1731205147395-69ae17705217?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1731205147395-69ae17705217?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🥦 1x some vegetables" + "<br>" + "🍾 1x plash oil" + "<br>" + "♨️ 1x hot water" + "<br>" + "🧂 1x praise pepper"
   },
   {   
       name: "Fried " + "<br>" + " Egg", 
       description: "This is a Fried egg with some salt and pepper",
       image: "https://plus.unsplash.com/premium_vector-1728574629195-5e17f9350e73?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1728574629195-5e17f9350e73?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🥚 2x eggs" + "<br>" + "🧂 1 praise pepper" + "<br>" + "🧂 1x praise of salt" + "<br>" + "🍾 1 splash oil"
   },
   {   
       name: "Roasted " + "<br>" + " Spaghetti", 
       description: "These are roeasted Spaghettis with some pepper and eggs.",
       image: "https://plus.unsplash.com/premium_vector-1731205147679-84d806978ab5?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1731205147679-84d806978ab5?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🍜 1x 500g spaghetti" + "<br>" + "🥚 1x egg" + "<br>" + "🧂 1 praise pepper" + "<br>" + "🧂 1x praise of salt" + "<br>" + "🍾 1 splash oil" + "<br>" + "🧄 1x onion"
   },
   {   
       name: "Pancakes " + "<br>" + " healthy", 
       description: "This is a Pancake with some berrys.",
       image: "https://plus.unsplash.com/premium_vector-1720795876073-a8611585c0b9?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1720795876073-a8611585c0b9?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🥛 1x 250ml mild or water" + "<br>" + "🥓 1x bacon" + "<br>" + "🍓 5x berrys"  + "<br>" + "🥚 2x egg" + "<br>" + "🧂 1 praise pepper" + "<br>" + "🧂 1x praise of salt" + "<br>" + "🍾 1 splash oil"
   },
   {   
       name: "Potatoes & " + "<br>" + " Curk", 
       description: "These are potatoes with some curk.",
       image: "https://plus.unsplash.com/premium_vector-1733670902696-a5555560efd9?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1733670902696-a5555560efd9?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🥔 4-6x potatoes" + "<br>" + "🍚 1x curd" + "<br>" + "🧄 1x onion" + "<br>" + "🧂 1 praise pepper" + "<br>" + "🧂 1x praise of salt" + "<br>" + "🍾 1 splash oil",
   },
   {   
       name: "Cornflakes",
       description: "This is a basic cornflakes cup",
       image: "https://plus.unsplash.com/premium_vector-1711256380249-8e0c3945e154?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1711256380249-8e0c3945e154?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🥣 1x some muesli" + "<br>" + "🥛 1x milk until its full" + "<br>" + "1x cornlakes"
   },
   {   
       name: "Potatoe" + "<br>" + " Chips", 
       description: "These are potatoe chips with salt.",
       image: "https://plus.unsplash.com/premium_vector-1731452505255-5f20fb8041d8?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1731452505255-5f20fb8041d8?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🧂 1x praise of pepper" + "<br>" + "🧂 10x praise of salt" + "<br>" + "🍾 1x raps oil" + "<br>" + "🥔 5x small potatoes",
   },
   {   
       name: "Tomatoe " + "<br>" + " Salad", 
       description: "This is a Tomatoe salad with onions.",
       image: "https://plus.unsplash.com/premium_vector-1713940500809-305e57d5013c?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1713940500809-305e57d5013c?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🍅 5x tomatoe" + "<br>" + "🍃 2x salat leaves" + "<br>" + "🧂 1x praise of pepper" + "<br>" + "🧂 1x praise of salt" + "<br>" + "🍾 1x raps oil"
   },
   {   
       name: "Roasted " + "<br>" + " Potatoes", 
       description: "These are roasted potatoes with salt.",
       image: "https://plus.unsplash.com/premium_vector-1731576866439-265c58aa9ff7?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1731576866439-265c58aa9ff7?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🧂 1x praise of pepper" + "<br>" + "🧂 1x praise of salt" + "<br>" + "🍾 1x raps oil" + "<br>" + "🥔 3x potatoes",
   },
   {   
       name: "Salad ", 
       description: "This is a normal leaves Salad.",
       image: "https://plus.unsplash.com/premium_vector-1728555238258-7145ffa5e310?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1728555238258-7145ffa5e310?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🍅 5x tomatoe" + "<br>" + "🍃 2x salat leaves" + "<br>" + "🧂 1x praise of pepper" + "<br>" + "🧂 1x praise of salt" + "<br>" + "🍾 1x raps oil" + "<br>" + "🥗 some vegetables"
   },
   {   
       name: "Roasted " + "<br>" + " Fish", 
       description: "This is a Roasted Fish with vegetables.",
       image: "https://plus.unsplash.com/premium_vector-1733886660882-cb8a4229c1ed?q=80&w=2476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1733886660882-cb8a4229c1ed?q=80&w=2476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🍣 1x fish filet" + "<br>" + "🧂 1x praise of pepper" + "<br>" + "🧂 1x praise of salt" + "<br>" + "🍾 1x raps oil" + "🍅 5x vegetables",
   },
   {   
       name: "Chicken with " + "<br>" + " Rice", 
       description: "This a is Chicken with rice.",
       image: "https://plus.unsplash.com/premium_vector-1714218360972-26fd71dc18f2?q=80&w=2172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1714218360972-26fd71dc18f2?q=80&w=2172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🍗 2x chicken " + "<br>" + "🍚 1x cooked rice" + "<br>" + "🧂 1x praise of pepper" + "<br>" + "🧂 1x praise of salt" + "<br>" + "🍾 1x raps oil",
   },
   {   
       name: "Apple, Carrot " + "<br>" + " Salad", 
       description: "This is Salad with fruits.",
       image: "https://plus.unsplash.com/premium_vector-1721856644580-d195fcf5436d?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1721856644580-d195fcf5436d?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🍎 10x cutted apples" + "<br>" + "🥕 5 carrots" + "<br>" + "🧂1x praise of pepper" + "<br>" + "🍾 1x raps oil",
   },
   {   
       name: "Egg ", 
       description: "This is an egg with pepper and salt.",
       image: "https://plus.unsplash.com/premium_vector-1723108982013-5d5a09c3e885?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1723108982013-5d5a09c3e885?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🥚 1x eggs" + "<br>" + "🧂 1 praise pepper" + "<br>" + "🧂 1x praise of salt"
   },
   {   
       name: "Cookies ",
       description: "These are some cookies.",
       image: "https://plus.unsplash.com/premium_vector-1733297092393-9308f35ca135?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1733297092393-9308f35ca135?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🥛 1x 250ml mild or water" + "<br>" + "🍚 1x sugar"  + "<br>" + "🍚 1x 250ml flour" + "<br>" + "🧂 1 praise pepper" + "<br>" + "🧂 1x praise of salt" + "<br>" + "🍾 1 splash oil" + "<br>" + "🥚 1x egg"
   },
   {   
       name: "Sandwich ", 
       description: "This is a Sandwich with tomatoes.",
       image: "https://plus.unsplash.com/premium_vector-1733297092371-aaed49efb299?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1733297092371-aaed49efb299?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🍞 1x bread" + "<br>" + "🍅 2x slice tomatoe",
   },
   {   
       name: "Sushi ", 
       description: "This is a bowl of sushi.",
       image: "https://plus.unsplash.com/premium_vector-1730638027245-dc668f3ffdc1?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1730638027245-dc668f3ffdc1?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🍙🍣🍱🥢 sushi" + "<br>" + "🧉 souce"
   },
   {   
       name: "Best " + "<br>" + " Coffee", 
       description: "This is the best coffee.",
       image: "https://plus.unsplash.com/premium_vector-1720833276420-ba3fa1850ddd?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1720833276420-ba3fa1850ddd?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🥛 1x plash of milk" + "<br>" + "☕ coffe powder" + "<br>" + "♨️ hot water"
   },
   {   
       name: "Smoothie ", 
       description: "This is a Smoothie with different fruits.",
       image: "https://plus.unsplash.com/premium_vector-1721153711890-6e8c62bc192c?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1721153711890-6e8c62bc192c?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "🍍🍎🍓🍇 1x some fruits"
   },
   {   
       name: "Orange " + "<br>" + " Juice", 
       description: "This is a clean orange juice.",
       image: "https://plus.unsplash.com/premium_vector-1721153711815-b48744edb653?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1721153711815-b48744edb653?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "3x orange"
   },
       {   
       name: "Tea ", 
       description: "This is hot tea.",
       image: "https://plus.unsplash.com/premium_vector-1721918268415-261cbc61984c?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1721918268415-261cbc61984c?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "♨️ hot water" + "<br>" + "🫖 tea-powder"
   },
   {   
       name: "Domino " + "<br>" + " Stein", 
       description: "This is the best sweety in the world, buy it!.",
       image: "https://plus.unsplash.com/premium_vector-1711878181342-6500de6e5f67?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       btnimage: "https://plus.unsplash.com/premium_vector-1711878181342-6500de6e5f67?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       repice: "just buy it dude",
   },

];  
   



for (let day = 1; day <= 24; day++) {
   const door = document.createElement("div");
   door.classList.add("door");
   const numberpropertys = Math.floor(Math.random() * 24 + 1)
   door.innerText = numberpropertys;
   

  
       const imageUrl = images[(day - 1) % images.length]; 
   door.style.backgroundImage = `url(${imageUrl})`;
   door.style.backgroundSize = 'cover';
   door.style.color = 'white';
   

   const repicebtn = document.getElementById("repice")
   const background = document.querySelector(".background")
   const repicebtnhover = document.getElementById("repice:hover")
   const container = document.body;
   const repicetext = document.getElementById("repicetext")
   const span  = document.getElementById("newtext")
   const repiceContent = document.getElementById("repicecontent")
   const repiceimg = document.getElementById("repiceimg")
   const exitbtn = document.getElementById("exit-button")

   
  calender.appendChild(door);




   repicebtn.addEventListener("click", ()=> {

   
       background.classList.add('blurred');
       background.style.filter = "blur(5px)"
       repicebtn.style.height = "700px"
       repicebtn.style.opacity = "0.8"
       repicebtn.style.background = "#878787"
       repicebtn.style.position = "absolute"
       repicebtn.style.top = "-400px"
       repicebtn.style.left = "-150px"
       repicebtn.style.width = "400px"
       span.textContent = ""
       repicetext.style.display = "block"
       repiceContent.style.display = "block"
       repiceimg.style.display = "block"
       repiceimg.style.width = "200px"; // explicitly define width/height
       repiceimg.style.height = "200px";
       repiceimg.style.backgroundSize = "cover"
       exitbtn.style.display = "block"
       
       
   }); 
   repicebtn.addEventListener("mouseover", ()=> {
       repicebtn.style.opacity = "1"
   });
   repicebtn.addEventListener("mouseout", ()=> {
       repicebtn.style.opacity = "0.7"
    
       
   });
   
   exitbtn.addEventListener("click", () => {
   event.stopPropagation();
   repicebtn.style.height = "30px";
   repicebtn.style.width = "60px";
   repicebtn.style.top = "220px";
   repicebtn.style.left = "625px";
   repicetext.style.display = "none";
   repiceContent.style.display = "none";
   repiceimg.style.display = "none";
   repicebtn.style.opacity = "1"
   exitbtn.style.display = "none";
   span.textContent = "Repice",
   repicebtn.style.position = "absolute";
   repicebtn.style.background = "#000000";
   background.classList.remove('blurred');
   background.style.filter = "none";
   

   });

   door.onclick = function () {
       const meal = meals[day - 1]; // Get meal for this door
       if (meal) {
           alert(" You opened door " + day + " receive gift! ")
           const gifttext = document.getElementById("mealtext");
           const screen = document.getElementById("mealimage");
           const mealDescription = document.getElementById("mealdescription");
           const recipe = document.getElementById("repice");
           

           // Update mealbox content
           gifttext.innerHTML = meal.name;
           mealDescription.innerText = meal.description;
           screen.src = meal.image;


           // Show recipe button
           repicetext.innerHTML = "Ingredients for " + meal.name;
           repicetext.style.display = "none";
           repiceContent.innerHTML = meal.repice;
           repiceimg.style.background = `url(${meal.btnimage})`;
           recipe.style.display = "block";
           screen.style.marginTop = "15px";
       }
   };
}


 
let timeLeft = 320;
const countdown = setInterval(()  => {
   document.getElementById("countdown").innerText = "Countdown " + timeLeft + " hours left";
   let countdown = document.getElementById("countdown")

if (timeLeft <= 0) {
   clearInterval(countdown)
   document.getElementById("countdown").innerText = "It's Christmas"
}
if (timeLeft <= 200) {
   countdown.style.background = "#7A7A7A";
}
if (timeLeft <= 100) {
   countdown.style.background = "#959595";
}if (timeLeft <= 50) {
   countdown.style.background = "#B9B9B9";
}if (timeLeft <= 10) {
   countdown.style.background = "#D4D4D4";
}


timeLeft--;
}, 3600000)

