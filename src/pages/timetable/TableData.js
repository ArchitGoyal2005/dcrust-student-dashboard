function TableData({ data }) {
  return (
    <tbody>
      {data.map((sub, i) => (
        <tr key={i}>
          <td>{sub.time}</td>
          <td>{sub.roomNumber}</td>
          <td>{sub.subject}</td>
          <td>{sub.type}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableData;
