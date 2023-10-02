import Button from "./Button";
const Header = ({ onAdd, showAdd }) => {
  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </div>
  );
};

export default Header;
