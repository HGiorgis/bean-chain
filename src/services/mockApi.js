const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_PROJECTS = [
    {
        id: 1,
        title: "Ethiopia Yirgacheffe",
        origin: "Sidama, Ethiopia",
        description:
            "A washed Grade 1 coffee with notes of jasmine, bergamot, and stone fruits. Single farm lot from the Gedeo zone.",
        image:
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Grade 1", "Washed", "Organic", "Floral"],
        bid: 2.5,
        price: 2.5,
        currentBid: 2.5,
        volume: 124.5,
        rating: 5,
        reviews: 234,
        auction: false,
        featured: true,
        isNew: false,
        progress: 78,
        farmer: {
            name: "Tesfaye Gemechu",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tesfaye",
            beans: 156,
        },
        category: "africa",
        isFavorite: false,
    },
    {
        id: 2,
        title: "Colombia Geisha",
        origin: "Huila, Colombia",
        description:
            "Rare Geisha variety grown at high altitude. Natural processed with intense floral and tropical fruit notes.",
        image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Geisha", "Natural", "Limited", "Competition"],
        bid: 3.8,
        price: 3.8,
        currentBid: 4.2,
        volume: 89.2,
        rating: 5,
        reviews: 189,
        auction: true,
        featured: true,
        isNew: true,
        timeLeft: "2h 34m",
        timeProgress: 65,
        progress: 92,
        farmer: {
            name: "Maria Valencia",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
            beans: 89,
        },
        category: "south-america",
        isFavorite: false,
    },
    {
        id: 3,
        title: "Guatemala Antigua",
        origin: "Antigua, Guatemala",
        description:
            "Volcanic soil grown Bourbon and Caturra varieties. Rich chocolate body with bright citrus acidity.",
        image:
            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Volcanic", "SHB", "Estate", "Chocolate"],
        bid: 1.9,
        price: 1.9,
        currentBid: 1.9,
        volume: 67.3,
        rating: 4,
        reviews: 156,
        auction: false,
        featured: false,
        isNew: false,
        progress: 45,
        farmer: {
            name: "Diego Gonzalez",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diego",
            beans: 203,
        },
        category: "central-america",
        isFavorite: true,
    },
    {
        id: 4,
        title: "Kenya AA",
        origin: "Nyeri, Kenya",
        description:
            "Classic Kenya AA with complex blackcurrant, tomato, and winey characteristics. Twice-washed process.",
        image:
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["AA Grade", "Washed", "SL28", "SL34"],
        bid: 3.2,
        price: 3.2,
        currentBid: 3.5,
        volume: 234.1,
        rating: 5,
        reviews: 312,
        auction: true,
        featured: true,
        isNew: false,
        timeLeft: "5h 12m",
        timeProgress: 45,
        progress: 67,
        farmer: {
            name: "Njeri Wanjiku",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Njeri",
            beans: 167,
        },
        category: "africa",
        isFavorite: false,
    },
    {
        id: 5,
        title: "Costa Rica Tarrazú",
        origin: "Tarrazú, Costa Rica",
        description:
            "Honey-processed coffee from the famous Tarrazú region. Sweet, clean cup with honey and stone fruit notes.",
        image:
            "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Honey", "SHB", "Caturra", "Catuai"],
        bid: 2.1,
        price: 2.1,
        currentBid: 2.1,
        volume: 145.8,
        rating: 4,
        reviews: 178,
        auction: false,
        featured: false,
        isNew: true,
        progress: 34,
        farmer: {
            name: "Carlos Mendez",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
            beans: 92,
        },
        category: "central-america",
        isFavorite: false,
    },
    {
        id: 6,
        title: "Sumatra Mandheling",
        origin: "Aceh, Sumatra",
        description:
            "Traditional wet-hulled Sumatra with heavy body, low acidity, and earthy, herbal complexity.",
        image:
            "https://images.unsplash.com/photo-1559525839-b184a4e6982a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Wet-Hulled", "Organic", "Fair Trade", "Heirloom"],
        bid: 1.6,
        price: 1.6,
        currentBid: 1.6,
        volume: 56.4,
        rating: 4,
        reviews: 145,
        auction: false,
        featured: false,
        isNew: false,
        progress: 23,
        farmer: {
            name: "Budi Santoso",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi",
            beans: 124,
        },
        category: "asia",
        isFavorite: false,
    },
];

const MOCK_USERS = [
    {
        id: "user-1",
        email: "demo@sadonia.com",
        password: "password123",
        name: "Demo User",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Demo",
        balance: "12.5 ETH",
    },
];

export const mockApi = {
    // Auth
    async login(email, password) {
        await sleep(1000);
        const user = MOCK_USERS.find(
            (u) => u.email === email && u.password === password,
        );
        if (user) {
            const { password: _, ...userWithoutPassword } = user;
            return { success: true, user: userWithoutPassword, token: "mock-jwt-token" };
        }
        throw new Error("Invalid email or password");
    },

    async register(userData) {
        await sleep(1000);
        const newUser = {
            id: `user-${MOCK_USERS.length + 1}`,
            ...userData,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.name}`,
            balance: "0 ETH",
        };
        MOCK_USERS.push(newUser);
        const { password: _, ...userWithoutPassword } = newUser;
        return { success: true, user: userWithoutPassword, token: "mock-jwt-token" };
    },

    // Projects
    async getProjects() {
        await sleep(800);
        return JSON.parse(JSON.stringify(MOCK_PROJECTS));
    },

    async getProjectById(id) {
        await sleep(500);
        return MOCK_PROJECTS.find((p) => p.id === parseInt(id));
    },

    // Contact
    async sendMessage(messageData) {
        await sleep(1000);
        console.log("Message received:", messageData);
        return { success: true };
    },
};
