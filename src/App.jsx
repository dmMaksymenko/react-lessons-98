import MailBox from "./components/MailBox";

const meestExpressUsers = [
  { id: "1", userEmail: "max@example.com" },
  { id: "2", userEmail: "alla@example.com" },
  { id: "3", userEmail: "matviy@example.com" },
];

const novaPoshtaUsers = [
  { id: "11", userEmail: "oleg@example.com" },
  { id: "22", userEmail: "vanya@example.com" },
  { id: "33", userEmail: "lola@example.com" },
];

const ukrPoshtaUsers = [
  { id: "111", userEmail: "vasya@example.com" },
  { id: "222", userEmail: "vika@example.com" },
  { id: "333", userEmail: "katya@example.com" },
];

function App() {
  return (
    <div className="app-container">
      <MailBox
        boxUsers={meestExpressUsers}
        boxTitle="Meast Express"
        mailBoxCount={3}
      />
      <MailBox
        boxUsers={novaPoshtaUsers}
        boxTitle="Nova Poshta"
        mailBoxCount={5}
      />
      <MailBox boxUsers={ukrPoshtaUsers} boxTitle="UKR Poshta" />
    </div>
  );
}

export default App;
