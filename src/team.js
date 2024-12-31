export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(name) {
        if (this.members.has(name)) {
            throw new Error("Этот персонаж уже в команде!");
        }

        this.members.add(name);
    }

    addAll(...name) {
        name.forEach((item) => {
            this.add(item);
        })
    }

    toArray() {
        return Array.from(this.members);
    }
}