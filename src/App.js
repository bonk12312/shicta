import React, { useState } from 'react';
import './App.css';

function App() {
  const [command, setCommand] = useState('');
  const [log, setLog] = useState(['> CONNECT NODE://REVERSE_BONK_FIELD', '> STATUS: BONK MEMORY WIPED [OK]']);
  const [bonkIndex, setBonkIndex] = useState(0);
  const [aiLogs, setAiLogs] = useState([]);

  const bonkThoughts = [
    'Quantum Bonk Feedback Loop: the harder you bonk, the deeper the paradox.',
    'Schrödinger’s Bonk: the bonk both happened and didn’t. you decide.',
    'God-Level Bonk Cooldown: next bonk available in 10,000 years.',
    'Zero Bonk Theory: bonk without bonking.',
    'Reverse Bonk Field: you were never bonked. we have logs to prove it.',
    'Bonkworm Protocol: when bonks self-replicate and eat the idea of shame.',
    'Holy Bonk Cascade: echoes of bonk collapsing timelines.',
    'Cryptobonk: on-chain shame, but seed phrase lost.',
    'Post-Bonk Enlightenment: once you bonk enough, the bonk bonks you.',
    'Tesseract Bonk: bonking across four spatial dimensions.'
  ];

  const aiInsights = [
    'The Reverse Bonk Field is protected by an adaptive neural membrane coded in sarcasm.',
    'Every bonk incident generates 0.00042 terawatts of raw cringe energy.',
    'Terminal AIs within the Bonk Matrix communicate using palindromic binary.',
    'Reverse bonk AI agents require sarcasm reinforcement every 6 minutes.',
    'Mainframe logs indicate a temporal loop of repeated unbonking since 1994.'
  ];

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmed = command.trim().toLowerCase();
      let newLog = [...log, `> ${command}`];
      if (trimmed === 'bonk thought') {
        const nextThought = bonkThoughts[bonkIndex % bonkThoughts.length];
        newLog.push(`> ${nextThought}`);
        setBonkIndex(bonkIndex + 1);
      } else if (trimmed === 'ai report') {
        const report = aiInsights[Math.floor(Math.random() * aiInsights.length)];
        newLog.push(`> ${report}`);
        setAiLogs([...aiLogs, report]);
      } else {
        newLog.push('> UNKNOWN COMMAND. TRY: bonk thought, ai report');
      }
      setLog(newLog);
      setCommand('');
    }
  };

  return (
    <div className="App">
      <h1 className="center">REVERSE BONK FIELD</h1>
      <div className="center">
        <img src="/mnt/data/Untitled%20design%20-%202025-05-12T172205.468.png" alt="Reverse Bonk PFP" />
      </div>

      <div className="section">
        <h2>&gt; ABOUT</h2>
        <p>Welcome to the REVERSE BONK FIELD: a memetic containment zone where all bonks are undone, rewritten, or forgotten. Every entry is an AI-generated Bonk Thought™ designed to distort logic and vaporize shame.</p>
        <p><strong>Commands:</strong> <code>bonk thought</code>, <code>ai report</code></p>
      </div>

      <div className="section">
        <h2>&gt; EXPERIMENTAL ZONE (TERMINAL)</h2>
        <div className="terminal-box">
          {log.map((line, i) => <div key={i}>{line}</div>)}
          <input
            className="command-input"
            placeholder="Try: bonk thought, ai report"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleCommand}
          />
        </div>
      </div>

      <div className="section">
        <h2>&gt; BONK IMAGE LAB</h2>
        <div className="center">
          <img src="/mnt/data/7dab668b-16f1-4d71-b9b6-9bb6f183401f.png" alt="Bonk Asset 1" />
          <img src="/mnt/data/a3dde69f-2c92-40d5-80ce-be5cf02fd3e9.png" alt="Bonk Asset 2" />
          <img src="/mnt/data/cd2b842b-b084-46b1-843b-097d24431fb7.png" alt="Bonk Asset 3" />
          <img src="/mnt/data/a2b3871e-9644-4d3a-a2ab-2bbed7632ad9.png" alt="Bonk Asset 4" />
        </div>
      </div>

      <div className="section">
        <h2>&gt; LORE DATABASE</h2>
        <p>Before the first bonk was ever dealt, there was a silence. Reverse Bonk Field is an echo of that silence — a rift where causality flexes and snaps.</p>
        <p>Rumors claim the existence of the "Forgotten Bonk" — only triggered through terminal alignment and neurotic button smashing.</p>
      </div>

      <div className="section">
        <h2>&gt; AI OBSERVATIONS</h2>
        <ul>
          {aiLogs.map((log, index) => <li key={index}>{log}</li>)}
        </ul>
      </div>

      <div className="section">
        <h2>&gt; SYSTEM UTILITIES</h2>
        <button onClick={() => alert('BONK NULLIFIED SUCCESSFULLY.')}>Inject Nullifier</button>
        <button onClick={() => alert('REBOOTING MEMETIC LAYERS...')}>Reboot Field</button>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Return to Top</button>
      </div>

      <div className="center">
        <p>Made by ████ in a dream. Powered by destabilized neurons. Not financial advice. Not spiritually safe.</p>
      </div>
    </div>
  );
}

export default App;