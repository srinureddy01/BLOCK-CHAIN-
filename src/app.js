const contractAddress = "0xa652c4f716385D447E4ab8EA71cc6524F4a58838"; // Replace with your contract address
const abi = [
    {
        "inputs": [{"internalType": "string", "name": "_greeting", "type": "string"}],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "greeting",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "string", "name": "_newGreeting", "type": "string"}],
        "name": "setGreeting",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

window.onload = async () => {
    if (typeof window.ethereum !== "undefined") {
        const web3 = new Web3(window.ethereum); // Initialize web3
        const contract = new web3.eth.Contract(abi, contractAddress); // Connect to the contract

        // Fetch and display the current greeting
        try {
            const currentGreeting = await contract.methods.greeting().call();
            document.getElementById("current-greeting").innerText = currentGreeting;
        } catch (error) {
            console.error("Error fetching greeting:", error);
        }

        // Update greeting
        document.getElementById("update-greeting").onclick = async () => {
            const newGreeting = document.getElementById("new-greeting").value;
            if (!newGreeting) {
                alert("Please enter a new greeting!");
                return;
            }
            try {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                await contract.methods.setGreeting(newGreeting).send({ from: accounts[0] });
                const updatedGreeting = await contract.methods.greeting().call();
                document.getElementById("current-greeting").innerText = updatedGreeting;
            } catch (error) {
                console.error("Error updating greeting:", error);
            }
        };
    } else {
        alert("MetaMask is not installed. Please install MetaMask to use this DApp.");
    }
};