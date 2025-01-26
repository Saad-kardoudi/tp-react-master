function SettingsPage({ mode, setMode, background, setBackground }) {
  return (
    <div className="settings-page">
      <h2>Paramètres</h2>
      <div className="settings-group">
        <label>
          Mode de jeu :
          <select
            value={mode}
            onChange={(e) => setMode(parseInt(e.target.value))}
          >
            <option value={4}>4 cartes</option>
            <option value={16}>16 cartes</option>
            <option value={32}>32 cartes</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default SettingsPage;
