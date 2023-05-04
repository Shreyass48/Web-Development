// Module : 
// - if you want to use anything of another file you have to import it


import { name } from './Module/user.js';
import { code } from './Module/user.js';

import { deposit as dp, withdraw } from './Module/account.js';   // dp rename

//user.js
console.log(name);
code();

//account.js
dp();
withdraw();

// if you have 50-60 things to import then use these
// it import all stuff that export from that file
import * as usr from './Module/user.js';

usr.code();
