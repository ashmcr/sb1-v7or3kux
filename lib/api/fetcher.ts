export const fetcher = async (url: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${baseUrl}${url}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return response.json();
}; 