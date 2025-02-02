import { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let playerNameHTML = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameHTML = (
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
    );
  }

  return (
    <>
      <span id="player">
        <li className={isActive ? "active" : ""}>
          {playerNameHTML}

          <span className="player-symbol">{symbol}</span>
        </li>
        <button
          onClick={() => {
            setIsEditing((state) => !state);
          }}
        >
          {/* button content */}
          {isEditing ? "save" : "edit"}
        </button>
      </span>
    </>
  );
}
