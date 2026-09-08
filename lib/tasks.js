// Simple localStorage-based task storage.
// This is a temporary MVP data layer — swap these functions out
// once a real backend/database is connected. Nothing here is sent
// to any server; it only lives in the customer's own browser.

const TASKS_KEY = "kkd_tasks";
const PROFILE_KEY = "kkd_profile";

function generateTaskId() {
  const chars = "0123456789";
  let code = "";
  for (let i = 0; i < 4; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return `KMD-${code}`;
}

export function saveTask(taskData) {
  if (typeof window === "undefined") return null;

  const id = generateTaskId();
  const task = {
    id,
    ...taskData,
    status: "dhoonda_ja_raha_hai",
    createdAt: new Date().toISOString(),
  };

  const existing = getTasks();
  const updated = [task, ...existing];

  try {
    window.localStorage.setItem(TASKS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Task save nahi ho paya:", err);
    return null;
  }

  return task;
}

export function getTasks() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(TASKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Tasks load nahi ho paye:", err);
    return [];
  }
}

export function getTaskById(id) {
  return getTasks().find((t) => t.id === id) || null;
}

export function saveProfile(profile) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.error("Profile save nahi ho paya:", err);
  }
}

export function getProfile() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(PROFILE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error("Profile load nahi ho paya:", err);
    return null;
  }
}
