import { TestBed } from "@angular/core/testing";
import { Person } from "../model/person";

describe("Kiểm tra BMI", () => {
    let person: Person;

    
    it("Đầu vào hợp lệ", () => {
        let weight = 70;
        let height = 1.6;
        person = new Person(height, weight)
        expect(person.isExist()).toBe(true);
    })


    it("Đầu vào không hợp lệ", () => {
        let weight = 0;
        let height = 1.8;
        person = new Person(height, weight)
        expect(person.isExist()).toBe(false);
    })


    it("Đầu vào không hợp lệ", () => {
        let weight = 70;
        let height = -Infinity;
        person = new Person(height, weight)
        expect(person.isExist()).toBe(false);
    })


    it("Đầu vào không hợp lệ", () => {
        let weight = +Infinity;
        let height = 1.8;
        person = new Person(height, weight)
        expect(person.isExist()).toBe(false);
    })


    it("Đầu vào không hợp lệ", () => {
        let weight = 70;
        let height = -1.6;
        person = new Person(height, weight)
        expect(person.isExist()).toBe(false);
    })


    it("Đầu vào không hợp lệ", () => {
        let weight = NaN;
        let height = 1.8;
        person = new Person(height, weight)
        expect(person.isExist()).toBe(false);
    })


    it("Đầu vào không hợp lệ", () => {
        let weight = 70;
        let height = undefined as any;
        person = new Person(height, weight)
        expect(person.isExist()).toBe(false);
    })


    it("Tính toán BMI chính xác", () => {
        const weight = 70;
        const height = 1.75;
        person = new Person(height, weight);
        const expectedBMI = 70 / (1.75 ** 2);  // Expected BMI value
        expect(person.getBMI()).toBeCloseTo(expectedBMI, 2); // Kiểm tra gần đúng
    });


    it("Tính toán BMI chính xác", () => {
        const weight = 70;
        const height = 1.7;
        person = new Person(height, weight);
        const expectedBMI = weight / (height ** 2);  // Expected BMI value
        expect(person.getBMI()).toBeCloseTo(expectedBMI, 2); // Kiểm tra gần đúng
    });


    it("Phân loại cơ thể đúng với BMI bình thường", () => {
        const weight = 70;
        const height = 1.75;
        person = new Person(height, weight);
        expect(person.getType()).toBe("Bình thường");
    });


    it("Phân loại cơ thể khi BMI thấp", () => {
        const weight = 50;
        const height = 1.75;
        person = new Person(height, weight);
        expect(person.getType()).toBe("Gầy cấp độ II");
    });


    it("Phân loại cơ thể khi BMI quá thấp", () => {
        const weight = 45;
        const height = 1.75;
        person = new Person(height, weight);
        expect(person.getType()).toBe("Gầy cấp độ III");
    });


    it("Phân loại cơ thể khi BMI cao", () => {
        const weight = 95;
        const height = 1.75;
        person = new Person(height, weight);
        expect(person.getType()).toBe("Béo phì cấp độ II");
    });


    it("Phân loại cơ thể khi BMI rất cao", () => {
        const weight = 120;
        const height = 1.8;
        person = new Person(height, weight);
        expect(person.getType()).toBe("Béo phì cấp độ III");
    });
})