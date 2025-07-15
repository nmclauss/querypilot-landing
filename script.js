async function generateSQL() {
  const promptText = document.getElementById("userInput").value;
  const output = document.getElementById("output");
  output.innerText = "Generating SQL...";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a SQL expert writing optimized T-SQL for business users." },
          { role: "user", content: promptText }
        ],
        temperature: 0.3
      })
    });

    const data = await response.json();
    output.innerText = data.choices[0].message.content;
  } catch (err) {
    output.innerText = "An error occurred. Check your API key or network.";
  }
}
