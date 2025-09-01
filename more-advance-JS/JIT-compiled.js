/**
 * JavaScript is a JIT compiled language
 * 
 * modern JavaScript is JIT compiled.(Just In Time).Makes its performance better,efficient.
 * 
 * Just In Time = Real Time.--> Instant compiled code when read code.
 * 
 * Just In Time compiler converts the entire code into machine code and execute them immediately.
 */


/**                                          V8 Engine
 *         |                                
 *         |
 *     js  |               AST        JIT          machine code
 *         ----->parsing ---------> compilation --------------->Execution
 *    file |                            |                          |
 *         |                            |                          |
 *                                      |                          |
 *         |                            |                          |
 *         |                            |______ Optimization ______|
 *         |
 */

/**
 *    AST --> Splits code and convert into tree for its processing.Abstract Syntax tree
 */


/**
 * When JS gets a browser it did some task
 * 1.browser runs V8 enginee
 * 
 * to run javascript we need v8 enginee .and v8 enginee is written in c++
 * 
 */


/**
 * parse / parser
 * code er line k token e divide kore.
 * let x = 5+ 2;
 * let ,   x  ,  =  ,  5 , +  ,  2
 * erpor token define kore, eta ki variable, operator ,naki value erpor enginee e pathay
 */

/**
 * 
 *   .js file --> parse --->abstract sytax tree ---> interpreter ignition ---> Compiler TubroFan --> optimize machine code  ---> byte code(Machine code) --> goes to cpu to run code
 * 
 * 
 * chrome , node.js, js all run through v8 enginee
 */