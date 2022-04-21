import { DisplayFactory } from "./display/displayFactory";

const display = DisplayFactory.buildDisplay();
// Display supports 80 columns by 24 rows, 0-indexed.

display.setChar([0,0], 'H');
display.setChar([0,1], 'e');
display.setChar([0,2], 'l');
display.setChar([0,3], 'l');
display.setChar([0,4], 'o');
display.setChar([0,5], ',');
display.setChar([0,6], ' ');
display.setChar([0,7], 'W');
display.setChar([0,8], 'o');
display.setChar([0,9], 'r');
display.setChar([0,10], 'l');
display.setChar([0,11], 'd');
display.setChar([0,12], '!');

display.paint();