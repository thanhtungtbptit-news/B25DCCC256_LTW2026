import StudentItem from "./StudentItem";

function StudentList({ students, onDelete }) {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ tên</th>
                        <th>Điểm</th>
                        <th>Lớp</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <StudentItem
                            key={student.id}
                            student={student}
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>

            {students.length === 0 && (
                <p className="empty-message">
                    Không có sinh viên phù hợp.
                </p>
            )}
        </div>
    );
}

export default StudentList;