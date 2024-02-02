var students = ['Etsewa', 'Christian', 'Ify', 'Isaac', 'Benjamin', 'Nathaniel', 'Samson'];

// CLASS WORK: Print the above names on the console using any of the loops.

var i = 0;

// console.log(students.length);

/*
while (i < students.length) {
    console.log(students[i]);
    i++;
}
*/

for (var i = 0; i < students.length; i++) {

    if (students[i] == 'Isaac') {
        continue; // Skip Isaac
    }
    console.log(students[i]);
}