export const task1 = () => {
    for (let i = 1; i < 6; i++) {
        let line = '';
        for (let k = 0; k < i; k++) {
            line += '*';
        }
        console.log(line);
    }
};

console.log('\n\n\n\n\n');


export const task2 = () => {
    for (let i = 5; i > 0; i--) {
        let line = '';
        for (let k = 0; k < i; k++) {
            line += '*';
        }
        console.log(line);
    }
};