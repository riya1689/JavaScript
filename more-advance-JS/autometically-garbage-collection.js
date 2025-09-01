/**
 * collects unused data automatically.(looping continuous from a time interval)
 * free the memory with the help of algorithm Mark and sweep
 * the garbage collector goes through the roots, marking(remembering) them on its way.
 * 
 * It then moves on to the references and marks them as well
 * 
 * the cycle continues untill the garbage collector visits all the roots and references
 * 
 * the garbage collector removes all the objects, swept the marked once.
 */