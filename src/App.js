import { useState } from "react";
import StudentForm from "./Components/StudentForm";
import StudentList from "./Components/StudentList";
import "./App.css";

function App() {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Tran Bui Thanh Tung",
            score: 8.5,
            class: "CNTT1"
        },
        {
            id: 2,
            name: "Nguyen Tien Thanh",
            score: 4,
            class: "CNTT2"
        },
        {
            id: 3,
            name: "Le Nho Manh",
            score: 7,
            class: "CNTT1"
        }
    ]);

    const [filter, setFilter] = useState("all");

    // Xóa sinh viên
    const handleDelete = (id) => {
        const newStudents = students.filter(
            (student) => student.id !== id
        );

        setStudents(newStudents);
    };

 
    const handleAddStudent = (newStudent) => {
        const newId =
            students.length > 0
                ? Math.max(
                      ...students.map((student) => student.id)
                  ) + 1
                : 1;

        const studentWithId = {
            id: newId,
            ...newStudent
        };

        setStudents([...students, studentWithId]);
    };

  
    const filteredStudents = students.filter((student) => {
        if (filter === "good") {
            return student.score >= 8;
        }

        if (filter === "fail") {
            return student.score < 5;
        }

        return true;
    });

    // Thống kê
    const totalStudents = students.length;

    const totalScore = students.reduce(
        (total, student) => total + student.score,
        0
    );

    const averageScore =
        students.length > 0
            ? totalScore / students.length
            : 0;

    return (
        <div className="app">
            <h1>Quản lý điểm sinh viên</h1>

            <StudentForm
                onAddStudent={handleAddStudent}
            />

            <section className="student-section">
                <h2>Danh sách sinh viên</h2>

                <div className="filter-buttons">
                    <button
                        className={
                            filter === "all" ? "active" : ""
                        }
                        onClick={() => setFilter("all")}
                    >
                        Tất cả
                    </button>

                    <button
                        className={
                            filter === "good" ? "active" : ""
                        }
                        onClick={() => setFilter("good")}
                    >
                        Sinh viên giỏi
                    </button>

                    <button
                        className={
                            filter === "fail" ? "active" : ""
                        }
                        onClick={() => setFilter("fail")}
                    >
                        Trượt
                    </button>
                </div>

                <StudentList
                    students={filteredStudents}
                    onDelete={handleDelete}
                />
            </section>

            <section className="statistics">
                <h2>Thống kê</h2>

                <p>
                    Tổng số sinh viên:
                    <strong> {totalStudents}</strong>
                </p>

                <p>
                    Điểm trung bình:
                    <strong>
                        {" "}
                        {averageScore.toFixed(2)}
                    </strong>
                </p>
            </section>
        </div>
    );
}

export default App;