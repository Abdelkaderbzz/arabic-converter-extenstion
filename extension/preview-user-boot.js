(function () {
  const SCENARIOS = {
    colloquial: {
      label: "عامية → حروف عربية",
      mode: "tunisian",
      input: "3aslema, chneya 7alek?",
      output: "عسلامة، شنية حالك؟",
    },
    fusha: {
      label: "فصحى",
      mode: "fusha",
      input: "taw nemchi lel dar w n9oul l om mi chneya ntaya",
      output: "الآن أذهب إلى المنزل وأقول لأمّي ماذا أشتري.",
    },
    english: {
      label: "English",
      mode: "english",
      input: "3aslema, chneya 7alek?",
      output: "Hello, how are you?",
    },
    french: {
      label: "Français",
      mode: "french",
      input: "3aslema, chneya 7alek?",
      output: "Bonjour, comment vas-tu ?",
    },
    ready: {
      label: "جاهز للكتابة",
      mode: "tunisian",
      input: "",
      output: "",
    },
  };

  function $(id) {
    return document.getElementById(id);
  }

  function applyScenario(scenario) {
    $("settings-panel").hidden = true;

    if (scenario.mode !== getActiveMode()) {
      $(`mode-${scenario.mode}`).click();
    }

    const input = $("latin-input");
    input.value = scenario.input;
    input.dispatchEvent(new Event("input", { bubbles: true }));

    const output = $("output");
    const copyBtn = $("copy-btn");

    if (scenario.output) {
      output.textContent = scenario.output;
      output.classList.remove("empty");
      copyBtn.hidden = false;
      output.dir =
        scenario.mode === "english" || scenario.mode === "french" ? "ltr" : "rtl";
      output.scrollTop = 0;
    } else {
      output.textContent = $("output").dataset.emptyText || output.textContent;
      output.classList.add("empty");
      copyBtn.hidden = true;
    }
  }

  function getActiveMode() {
    return (
      document.querySelector(".segmented-modes .seg.active")?.id?.replace("mode-", "") ||
      "tunisian"
    );
  }

  function currentScenarioKey() {
    const hash = location.hash.replace("#", "");
    return SCENARIOS[hash] ? hash : "colloquial";
  }

  function renderScenarioNav() {
    const nav = $("preview-scenarios");
    if (!nav) return;

    const active = currentScenarioKey();
    nav.innerHTML = "";

    Object.entries(SCENARIOS).forEach(([key, scenario]) => {
      const link = document.createElement("a");
      link.href = `#${key}`;
      link.textContent = scenario.label;
      link.className = key === active ? "active" : "";
      link.addEventListener("click", (event) => {
        event.preventDefault();
        history.replaceState(null, "", `#${key}`);
        applyScenario(scenario);
        nav.querySelectorAll("a").forEach((el) => el.classList.remove("active"));
        link.classList.add("active");
      });
      nav.appendChild(link);
    });
  }

  window.addEventListener("load", () => {
    const emptyText = $("output").textContent.trim();
    $("output").dataset.emptyText = emptyText;

    renderScenarioNav();
    setTimeout(() => applyScenario(SCENARIOS[currentScenarioKey()]), 0);
  });

  window.addEventListener("hashchange", () => {
    applyScenario(SCENARIOS[currentScenarioKey()]);
    document.querySelectorAll("#preview-scenarios a").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === location.hash);
    });
  });
})();
