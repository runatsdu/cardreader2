const STORAGE_KEY = 'cardUsernames';

export function getStoredUsernames(): string[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveUsernames(usernames: string[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usernames));
}

export function clearUsernames(): void {
  localStorage.removeItem(STORAGE_KEY);
}