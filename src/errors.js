export default class ErrorRepository {
    constructor() {
        this.repo = new Map(
            [
                ["405", "Не соответствие типов"],
                ["501", "Деление на ноль"]
            ]
        );
    }

    translate(code) {
        if (this.repo.has(code)) {
            return this.repo.get(code);
        }
        return "Unknown error";
    }
}