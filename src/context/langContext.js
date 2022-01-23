const { createContext } = require("react");

const langContext = createContext();
const LangProvider = langContext.Provider

export {
    langContext, LangProvider
}