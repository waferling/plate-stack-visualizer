document.addEventListener('DOMContentLoaded', () => {
    
    class Stack {

        constructor() {
            this.items = [];
            this.load();
        }

        save() {
            localStorage.setItem('plateStack', JSON.stringify(this.items));
        }

        load() {
            const saved = localStorage.getItem('plateStack');
            if (saved) {
                this.items = JSON.parse(saved);
            }
        }

        isEmpty() {
            return this.items.length === 0;
        }

        push(value) {
            this.items.push(value);
            this.save();
        }

        pop() {
            // return this.items.pop() ?? null;
            // this.save();
            if (this.isEmpty()) {
                throw new Error('Stack underflow!');
            }
            const value = this.items.pop();
            this.save();
            return value; 
        }

        size() {
            return this.items.length;
        }

        clear() {
            this.items = [];
            this.save();
        }
    }

    const stack = new Stack();
    const stackDiv = document.getElementById('stack');
    const pushBtn = document.getElementById('pushBtn');
    const popBtn = document.getElementById('popBtn');
    const sizeBtn = document.getElementById('sizeBtn');
    const clearBtn = document.getElementById('clearBtn');
    const message = document.getElementById('message');

    function renderStack() {
        stackDiv.innerHTML = ''; // Clear current stack display

        // Render each plate in the stack:
        // The forEach loop runs for each item in the stack's internal array i.e stack.items.length times
        // Hence, we must clear the stackDiv first on the DOM side to remove all old plates,
        // to avoid multiple plates being rendered on a single push

        // NOTE: The DOM is cleared, but plate images still persist visually
        // due to CSS styling persisting on the empty .stack container.

        stack.items.forEach(() => {
            const plate = document.createElement('div');
            plate.className = 'plate-object';
            const img = document.createElement('img');
            img.src = './dish.png';
            img.alt = 'A blue dish facing up';
            plate.appendChild(img);
            stackDiv.appendChild(plate);
        });

        if (stack.size() > 0) {
            message.innerHTML = '';
        }
    }

    renderStack(); // Initial render on page load from localStorage

    pushBtn.addEventListener('click', () => {
        
        // allow up to 13 plates
        if (stack.size() < 13) {
            stack.push('plate'); // update internal array [] of stack
            renderStack(); // visually update the stack with a plate + image
        } else {
            message.innerHTML = 'Stack overflow! Maximum stack size reached.';
        }
    })

    popBtn.addEventListener('click', () => {

        if (stack.size() >= 13) {
            message.innerHTML = '';
        }

        if (stack.size() === 0) {
            message.innerHTML = 'Stack underflow! No plates to remove.';
            return;
        }

        stack.pop();
        renderStack();
    })

    sizeBtn.addEventListener('click', () => {
        message.innerHTML = `Stack size: ${stack.size()}`;
    });

    clearBtn.addEventListener('click', () => {
        stack.clear();
        renderStack();
        message.innerHTML = 'Stack cleared!';
    });
});