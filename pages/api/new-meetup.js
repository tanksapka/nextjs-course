async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const response = await fetch("http://localhost:3001/meetups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // const json = await response.json();
    // res.status(201).json(JSON.stringify(json));
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
