function StudentItem({ student, onDelete }) {
    return (
        <tr>
            <td>{student.id}</td>

            <td>{student.name}</td>

            <td>{student.score}</td>

            <td>{student.class}</td>

            <td>
                <button
                    className="delete-button"
                    onClick={() => onDelete(student.id)}
                >
                    Xóa
                </button>
            </td>
        </tr>
    );
}

export default StudentItem;