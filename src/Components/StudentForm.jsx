import { useState } from "react";

function StudentForm({ onAddStudent }) {
    const [name, setName] = useState("");
    const [score, setScore] = useState("");
    const [studentClass, setStudentClass] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            name.trim() === "" ||
            score === "" ||
            studentClass.trim() === ""
        ) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        const numericScore = Number(score);

        if (numericScore < 0 || numericScore > 10) {
            alert("Điểm phải nằm trong khoảng từ 0 đến 10!");
            return;
        }

        const newStudent = {
            name: name.trim(),
            score: numericScore,
            class: studentClass.trim()
        };

        onAddStudent(newStudent);

        setName("");
        setScore("");
        setStudentClass("");
    };

    return (
        <section className="form-section">
            <h2>Thêm sinh viên</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Họ tên:</label>

                    <input
                        type="text"
                        value={name}
                        onChange={(event) =>
                            setName(event.target.value)
                        }
                        placeholder="Nhập họ tên"
                    />
                </div>

                <div className="form-group">
                    <label>Điểm:</label>

                    <input
                        type="number"
                        min="0"
                        max="10"
                        step="0.1"
                        value={score}
                        onChange={(event) =>
                            setScore(event.target.value)
                        }
                        placeholder="0 - 10"
                    />
                </div>

                <div className="form-group">
                    <label>Lớp:</label>

                    <input
                        type="text"
                        value={studentClass}
                        onChange={(event) =>
                            setStudentClass(event.target.value)
                        }
                        placeholder="Ví dụ: CNTT1"
                    />
                </div>

                <button
                    className="submit-button"
                    type="submit"
                >
                    Thêm sinh viên
                </button>
            </form>
        </section>
    );
}

export default StudentForm;