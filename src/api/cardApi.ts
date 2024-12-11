// Mock API service
export async function fetchUsername(cardNumber: string): Promise<string> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Simple mock logic to generate usernames based on card numbers
  const mockUsernames = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Wilson'];
  const index = parseInt(cardNumber.slice(-2)) % mockUsernames.length;
  return mockUsernames[index];
}