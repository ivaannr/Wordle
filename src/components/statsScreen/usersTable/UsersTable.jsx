import './UsersTable.css'

const UsersTable = ( { users } ) => {
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
            <td className='pad'>{user.totalMatches}</td>
            <td className='pad'>{user.wins}</td>
            <td className='pad'>{user.losses}</td>
            <td className='pad'>{user?.ELO ?? 1000}</td>
            <td className='pad'>{user?.winLosePercentage ?? '55.32%'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;