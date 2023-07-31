const express = require("express");
const router = express.Router();
const Client = require("./models/Client");

router.get("/", async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    console.error("Error getting clients:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newClient = new Client(req.body);
    await newClient.save();
    res.json(newClient);
  } catch (error) {
    console.error("Error creating client:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const clientId = req.params.id;
    const updatedClient = await Client.findByIdAndUpdate(clientId, req.body, {
      new: true,
    });
    if (updatedClient) {
      res.json(updatedClient);
    } else {
      res.status(404).json({ message: "Klientas nerastas" });
    }
  } catch (error) {
    console.error("Klaida atnaujinant klientą:", error);
    res.status(500).json({ message: "Serverio klaida" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const clientId = req.params.id;
    const deletedClient = await Client.findByIdAndDelete(clientId);
    if (deletedClient) {
      res.json({ message: "Klientas ištrintas" });
    } else {
      res.status(404).json({ message: "Klientas nerastas" });
    }
  } catch (error) {
    console.error("Klaida trinant klientą:", error);
    res.status(500).json({ message: "Serverio klaida" });
  }
});

module.exports = router;
