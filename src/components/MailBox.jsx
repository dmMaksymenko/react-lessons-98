//rafce => snippet

const MailBox = ({ boxUsers, boxTitle, mailBoxCount = 0 }) => {
  return (
    <div>
      <h2>{boxTitle}</h2>
      {mailBoxCount === 0 ? (
        <p>
          <b>No available mailboxes</b>
        </p>
      ) : (
        <p>Quantity of active mail boxes: {mailBoxCount}</p>
      )}
      <ul>
        {boxUsers.map((user) => {
          return <li key={user.id}>{user.userEmail}</li>;
        })}
      </ul>
    </div>
  );
};

export default MailBox;
