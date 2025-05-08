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
        let height = -1.6;
        person = new Person(height, weight)
        expect(person.isExist()).toBe(false);
    })
})