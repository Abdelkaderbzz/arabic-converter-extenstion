// Mock Chrome APIs — returning user (API key saved, no demo history).
(function () {
  const store = {
    gemini_api_key: "preview-saved-key",
    language: "ar",
    output_mode: "tunisian",
    conversion_history: [],
  };

  globalThis.chrome = {
    storage: {
      local: {
        get(keys, callback) {
          const result = {};
          const list = Array.isArray(keys) ? keys : [keys];
          list.forEach((key) => {
            if (key in store) result[key] = store[key];
          });
          callback(result);
        },
        set(items, callback) {
          Object.assign(store, items);
          if (callback) callback();
        },
      },
    },
  };
})();
