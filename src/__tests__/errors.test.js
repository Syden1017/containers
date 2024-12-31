import ErrorRepository from "../errors";

let errorRepo;

beforeEach(() => {
    errorRepo = new ErrorRepository();
});

test('should return correct error message for existing code', () => {
    expect(errorRepo.translate("405")).toBe("Не соответствие типов");
});

test('should return "Unknown error" for non-existing code', () => {
    expect(errorRepo.translate("404")).toBe("Unknown error");
});