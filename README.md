# :pig: [Pig Latin Translator](http://karenfreemansmith.github.io/piglatin)
![project screenshot](/img/screenshot.jpg)

__Version 1: April 26, 2016__
## by [Karen Freeman-Smith](http://karenfreemansmith.github.io)

### Description
__*A webpage that translates your words into pig latin.*__

* Removes first letter of each word and adds it to the end, along with "ay".
(Passes test for "Hey World" | "eyHay orldWay")
* For words that start with a vowel, add "ay" to the end.
(Passes test for "oranges and apples" | orangesay anday applesay)
* Words that start with more than one consonant: move all consonants and add "ay". For words that start with "y", treat the "y" as a consonant.
(Passes test for "starry night" | "arrystay ightnay")
* Display results as upper case
  (Test: "Hey World" | "EYHAY ORLDWAY")

Still needed:
  *  If the first consonants include "qu", move the "u" along with the "q".
    (Test: "even quiet pigs squeal" | "evenay itequay igspay ealsquay")
  * remove/replace punctuation as needed.
    (Test: "Hey, World!" | "Eyhay, orldway!")

*(The .slice() method for strings may come in handy.)*

#### Uses:
* [Fresh Start](http://karenfreemansmith.github.io/freshstart)

### Setup/Installation
*None required. Clone or download and extract to use*

### Support & Contact
For questions or comments, please __email [Karen](karenfreemansmith@gmail.com)__

### Known Issues
* Still Under Constructin

### Technologies Used
###### HTML, CSS, Bootstrap, JavaScript, jQuery

### Legal
*Licensed under the GNU General Public License v3.0*

Copyright (c) 2016 **_Karen Freeman-Smith_**
