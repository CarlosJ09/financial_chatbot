export const workflow = (() => {
  const keywordActionMap = new Map<string, (message: string, from: string) => Promise<string>>();

  /**
   * Registers a keyword with an associated action.
   * @param keyWord The keyword to listen for.
   * @param action The action to execute when the keyword is detected.
   */
  const addKeyWord = (
    keyWord: string,
    action: (message: string, from: string) => Promise<string>
  ) => {
    keywordActionMap.set(keyWord.toLowerCase(), action);
  };

  /**
   * Processes an incoming message.
   * @param message The incoming message text.
   * @param from The sender's phone number.
   * @returns The response from the matched action or a default response.
   */
  const handleMessage = async (message: string, from: string): Promise<string> => {
    const keyWord = message.toLowerCase();
    const action = keywordActionMap.get(keyWord);

    if (action) {
      return await action(message, from);
    }

    return "Sorry, I didn't understand that. Type 'help' for available commands.";
  };

  return { addKeyWord, handleMessage };
})();
