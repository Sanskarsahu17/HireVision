export async function fetchQuestion(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching question:", error);
    return { title: "Error loading question" };
  }
}

export function simulateTranscription(onTranscriptionUpdate) {
  const demoResponses = [
    "As a software engineer, I believe my strongest skill is problem-solving...",
    "My experience includes leading a team of five developers...",
    "I handle challenging situations by breaking down the problem...",
  ];

  let transcriptionIndex = 0;
  const interval = setInterval(() => {
    if (transcriptionIndex < demoResponses.length) {
      onTranscriptionUpdate(demoResponses[transcriptionIndex]);
      transcriptionIndex++;
    } else {
      clearInterval(interval);
    }
  }, 2000);

  return () => clearInterval(interval);
}
