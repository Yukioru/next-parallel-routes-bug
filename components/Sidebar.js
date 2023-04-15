function Sidebar({ extension }) {
  return (
    <div style={{ border: '1px solid red', height: 400, minWidth: 100 }}>
      <h3>Sidebar</h3>
      <div style={{ border: '1px solid blue' }}>{extension}</div>
    </div>
  );
}

export default Sidebar;
