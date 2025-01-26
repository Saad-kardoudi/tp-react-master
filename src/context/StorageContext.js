import { createContext } from "react";

const StorageContext = createContext();

export default StorageContext;

export const StorageProvider = ({ children }) => {
  function saveGameResult(score, time) {
    const history = JSON.parse(localStorage.getItem("gameHistory")) || [];
    history.push({ score, time, date: new Date() });
    localStorage.setItem("gameHistory", JSON.stringify(history));
  }

  function getGameHistory() {
    return JSON.parse(localStorage.getItem("gameHistory")) || [];
  }

  function clearGameHistory() {
    localStorage.removeItem("gameHistory");
  }

  return (
    <StorageContext.Provider
      value={{
        saveGameResult: saveGameResult,
        getGameHistory: getGameHistory,
        clearGameHistory: clearGameHistory,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
