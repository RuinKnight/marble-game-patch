BALL GAME — AI LAB v4.0
========================

This is an experimental browser-based reinforcement-learning build of the original
Ball Game. It preserves the existing game, artwork, level format, and p5-based
engine while replacing the v3 training implementation.

WHAT IS NEW IN v4.0
-------------------
- Double DQN targets: the online network selects the next action; the target network
  evaluates that action. This reduces the usual max-Q overestimation tendency.
- Huber loss for less-sensitive TD-error updates.
- Adam optimizer with global gradient-norm clipping.
- Selectable independent networks (one per character) or a shared network.
- Separate replay buffers for each character in independent mode; one shared replay
  buffer in shared mode. Replay is intentionally kept in memory, not localStorage.
- Explicit hazard-collision notification from the game's physics instead of relying
  only on a guessed teleport-distance threshold.
- Potential-style distance reward shaping and a small reward for a new platform
  landing. Goal completion and hazard failures are terminal events.
- A separate greedy evaluation mode. Evaluation runs with exploration disabled and
  does not add experiences or update weights. This helps distinguish learning from
  random exploration.
- Export/import of the selected network as JSON.
- v3 model migration: if a v3 save is found, its weights seed all four independent
  v4 models and the shared v4 model. Optimizer and replay states start fresh.
- Fixed the original malformed near-zero velocity condition from
  Math.abs(n).velocityX to Math.abs(n.velocityX) < 0.01. A threshold of 1 would
  have repeatedly erased the AI’s 0.85 acceleration before it could build speed.

RUNNING
-------
1. Extract this ZIP into a folder.
2. Open index.html in a modern desktop browser. Keep all files and the assets folder
   together; do not move code.js or the assets folder separately.
3. Load a level using the game's normal level loader (L in edit mode), if needed.
4. Press Space to enter play mode if the game is not already running.
5. Choose a character and network architecture in the AI dashboard.
6. Press Train to learn, or Evaluate 20 to measure the current greedy policy.

NETWORK ARCHITECTURES
---------------------
Independent: each character has its own network, target network, optimizer state,
and replay buffer. This prevents direct weight interference between characters.

Shared: all characters update one common network and target network, with a shared
replay buffer. This allows experience from one character to influence the others.
Character identity is included in the observation vector.

EVALUATION
----------
Evaluation is a separate mode: it uses greedy action selection (epsilon = 0 for
that evaluation run), does not train, and records evaluation results separately
from training statistics. Evaluation success rate is still only meaningful for the
loaded level and current game physics. Run several evaluations to compare model
configurations; do not treat one short evaluation as proof of general ability.

PERSISTENCE AND MODEL FILES
---------------------------
Network weights, exploration rates, and statistics are saved in browser localStorage
under ballGameDQN_v4. Replay buffers and Adam optimizer moments are not persisted.
Use Export model to save the currently selected character/network weights as JSON.
Use Import model to load a compatible v4 JSON export into the currently selected
network. Keep backups before resetting or switching devices/browser profiles.

LIMITATIONS / IMPORTANT NOTES
-----------------------------
- This is an educational, hand-built DQN implementation, not a production ML library.
- The observation remains a fixed-size snapshot of the nearest four objects in each
  of nine categories. It cannot understand arbitrary level semantics or infer
  invisible future geometry.
- Reward shaping is still approximate. The small landing reward can encourage
  platform contact, but it does not prove that a platform transition is useful.
  Complex levels may require explicit checkpoints or curriculum learning.
- The game's original physics and collision behavior remain authoritative. The one
  velocity-condition correction is documented above; all other physics is retained.
- A model that performs well on one level may fail on another. Evaluation results
  are level-specific unless tested across a deliberate benchmark set.
- Training runs in the browser's main thread. Older computers may run slowly. Keep
  the tab open while training.
- localStorage may be blocked, cleared, or quota-limited. Export JSON backups.
- Static syntax checks and archive checks are not substitutes for browser execution.
  This v4 archive has not yet been verified through a complete live training run.
- The package does not bypass school or browser security policies. Use only a device
  and hosting environment you are authorized to use.

SUGGESTED EXPERIMENT
--------------------
1. Load the same level and select Ruin.
2. Train the Independent network for a fixed number of episodes.
3. Stop training and run Evaluate 20. Record its success rate.
4. Reset only if you intentionally want a fresh model; otherwise preserve the save.
5. Repeat with Shared architecture from a clean model and compare the evaluation
   results under the same level and approximate training budget.
6. Repeat evaluation a few times because short runs are noisy.

If the game does not start, use the red startup diagnostic panel. It reports script
errors without requiring browser Developer Tools.
