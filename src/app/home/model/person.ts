/**
 * @const {Array<{min: number, max: number, type: string}>}
 * @description Danh sách các loại cơ thể dựa trên chỉ số BMI.
 * Mỗi đối tượng trong mảng chứa các phạm vi BMI và loại cơ thể tương ứng.
 */
const BMIType = [
    {
        min : -Infinity,
        max : 16,
        type : "Gầy cấp độ III"
    },
    {
        min : 16,
        max : 17,
        type : "Gầy cấp độ II"
    },
    {
        min : 17,
        max : 18.5,
        type : "Gầy cấp độ I"
    },
    {
        min : 18.5,
        max : 25,
        type : "Bình thường"
    },
    {
        min : 25,
        max : 30,
        type : "Béo phì cấp độ I"
    },
    {
        min : 30,
        max : 35,
        type : "Béo phì cấp độ II"
    },
    {
        min: 35,
        max : +Infinity,
        type : "Béo phì cấp độ III"
    }
]


/**
 * @class Person: Lưu lại thông tin về chiều cao và cân nặng của người
 */
export class Person
{
    private weight: number;
    private height: number;

    /**
     * @constructor
     * @param height : Chiều cao (Tính theo m)
     * @param weight : Cân nặng (Tính theo kg)
     */
    constructor(height : number, weight : number)
    {
        this.height = height;
        this.weight = weight;
    }


    /**
     * Kiểm tra xem các chỉ số có hợp lệ không
     * @returns {boolean} - Tính hợp lệ
     */
    isExist() : boolean
    {
        return (isFinite(this.height) && this.height > 0 && 
                isFinite(this.weight) && this.weight > 0);
    }



    /**
     * Kiểm tra các chỉ số có phù hợp với người thường không.
     * Chiều cao hợp lệ từ 0.3m đến 2.5m và cân nặng hợp lệ từ 1kg đến 300kg.
     * @returns {boolean} - Tính khả thi
     */
    isValid(): boolean
    {
        return this.isExist() &&
                0.5 <= this.height && this.height <= 2.5 &&
                2 <= this.weight && this.weight <= 250;
    }



    /**
     * Chỉ số BMI
     * 
     * @returns {number} - Chỉ số BMI của một người
     */
    getBMI() : number
    {
        return this.weight / (this.height**2);
    }


    /**
     * Phân loại cơ thể
     * 
     * @returns {string} - Loại cơ thể ốm, bình thường hoặc mập
     */
    getType() : string
    {
        let bmi = this.getBMI();
        for (let range of BMIType)
        {
            if (range.min <= bmi && bmi < range.max)
            {
                return range.type;
            }
        }
        return "Không xác định";
    }
}