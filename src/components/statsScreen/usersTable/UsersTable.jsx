import './UsersTable.css'

const UsersTable = ({ users }) => {
  return (
    <table className='table'>
      <thead>
        <tr className='tr'>
          <th className='pad'>Username</th>
          <th className='pad'>Total Matches</th>
          <th className='pad'>Wins</th>
          <th className='pad'>Losses</th>
          <th className='pad'>ELO</th>
          <th className='pad'>W/L %</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr className='tr' key={user.id}>
            <td className='pad'>{user.username}</td>
            <td className='pad'>{Number(user.wins) + Number(user.losses)}</td>
            <td className='pad'>{user.wins}</td>
            <td className='pad'>{user.losses}</td>
            <td className='pad'>{user?.ELO ?? 1000}</td>
            <td className="pad">
              {user.losses > 0
                ? `${((Number(user.wins) / Number(user.losses)) * 100).toFixed(2)}%`
                : "0%"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;