import React from "react";

function PlayersArray (){

const players = [
	{
		id: 1,
		firstName: "Steven",
		lastName: "Smith",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 34,
		gamePlayed: 15,
		average: 2.27,
		present: "",
	},
	{
		id: 2,
		firstName: "Jessica",
		lastName: "Davis",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 6,
		gamePlayed: 16,
		average: 0.38,
		present: "",
	},
	{
		id: 3,
		firstName: "Alex",
		lastName: "Miller",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 72,
		gamePlayed: 17,
		average: 4.24,
		present: "",
	},
	{
		id: 4,
		firstName: "Peter",
		lastName: "Garcia",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 48,
		gamePlayed: 12,
		average: 4.0,
		present: "",
	},
	{
		id: 5,
		firstName: "Ali",
		lastName: "Jones",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 22,
		gamePlayed: 13,
		average: 1.69,
		present: "",
	},
	{
		id: 6,
		firstName: "Jonathan",
		lastName: "Brown",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 64,
		gamePlayed: 11,
		average: 5.82,
		present: "",
	},
	{
		id: 7,
		firstName: "Patrick",
		lastName: "Brown",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 3,
		gamePlayed: 15,
		average: 0.2,
		present: "",
	},
	{
		id: 8,
		firstName: "Jordan",
		lastName: "Smith",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 44,
		gamePlayed: 16,
		average: 2.75,
		present: "",
	},
	{
		id: 9,
		firstName: "Taylor",
		lastName: "Davis",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 26,
		gamePlayed: 12,
		average: 2.17,
		present: "",
	},
	{
		id: 10,
		firstName: "Cynthia",
		lastName: "Brown",
		gender: "female",
		skillLevel: "advance",
		totalPoints: 47,
		gamePlayed: 12,
		average: 3.92,
		present: "",
	},
	{
		id: 11,
		firstName: "Christina",
		lastName: "Williams",
		gender: "female",
		skillLevel: "intermediate",
		totalPoints: 19,
		gamePlayed: 11,
		average: 1.73,
		present: "",
	},
	{
		id: 12,
		firstName: "Kimberly",
		lastName: "Johnson",
		gender: "female",
		skillLevel: "intermediate",
		totalPoints: 66,
		gamePlayed: 10,
		average: 6.6,
		present: "",
	},
	{
		id: 13,
		firstName: "Drew",
		lastName: "Smith",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 35,
		gamePlayed: 17,
		average: 2.06,
		present: "",
	},
	{
		id: 14,
		firstName: "Jesse",
		lastName: "Davis",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 34,
		gamePlayed: 13,
		average: 2.62,
		present: "",
	},
	{
		id: 15,
		firstName: "Samantha",
		lastName: "Davis",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 4,
		gamePlayed: 18,
		average: 0.22,
		present: "",
	},
	{
		id: 16,
		firstName: "Chris",
		lastName: "Williams",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 62,
		gamePlayed: 10,
		average: 6.2,
		present: "",
	},
	{
		id: 17,
		firstName: "Jamie",
		lastName: "Jones",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 68,
		gamePlayed: 20,
		average: 3.4,
		present: "",
	},
	{
		id: 18,
		firstName: "Kevin",
		lastName: "Davis",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 75,
		gamePlayed: 13,
		average: 5.77,
		present: "",
	},
	{
		id: 19,
		firstName: "Casey",
		lastName: "Davis",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 72,
		gamePlayed: 18,
		average: 4.0,
		present: "",
	},
	{
		id: 20,
		firstName: "Jesse",
		lastName: "Garcia",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 69,
		gamePlayed: 18,
		average: 3.83,
		present: "",
	},
	{
		id: 21,
		firstName: "Casey",
		lastName: "Torres",
		gender: "female",
		skillLevel: "intermediate",
		totalPoints: 15,
		gamePlayed: 20,
		average: 0.75,
		present: "",
	},
	{
		id: 22,
		firstName: "Maria",
		lastName: "Ramirez",
		gender: "female",
		skillLevel: "intermediate",
		totalPoints: 22,
		gamePlayed: 12,
		average: 1.83,
		present: "",
	},
	{
		id: 23,
		firstName: "Jesus",
		lastName: "Garcia",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 5,
		gamePlayed: 20,
		average: 0.25,
		present: "",
	},
	{
		id: 24,
		firstName: "Jessica",
		lastName: "Rodriguez",
		gender: "female",
		skillLevel: "intermediate",
		totalPoints: 39,
		gamePlayed: 20,
		average: 1.95,
		present: "",
	},
	{
		id: 25,
		firstName: "Juanita",
		lastName: "Perez",
		gender: "female",
		skillLevel: "intermediate",
		totalPoints: 71,
		gamePlayed: 17,
		average: 4.18,
		present: "",
	},
	{
		id: 26,
		firstName: "Jamie",
		lastName: "Torres",
		gender: "female",
		skillLevel: "intermediate",
		totalPoints: 55,
		gamePlayed: 11,
		average: 5.0,
		present: "",
	},
	{
		id: 27,
		firstName: "Samantha",
		lastName: "Martinez",
		gender: "female",
		skillLevel: "advance",
		totalPoints: 22,
		gamePlayed: 10,
		average: 2.2,
		present: "",
	},
	{
		id: 28,
		firstName: "Jesse",
		lastName: "Hernandez",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 55,
		gamePlayed: 10,
		average: 5.5,
		present: "",
	},
	{
		id: 29,
		firstName: "Juan",
		lastName: "Ramirez",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 36,
		gamePlayed: 17,
		average: 2.12,
		present: "",
	},
	{
		id: 30,
		firstName: "Mario",
		lastName: "Torres",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 51,
		gamePlayed: 13,
		average: 3.92,
		present: "",
	},
	{
		id: 31,
		firstName: "Patrick",
		lastName: "Yang",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 57,
		gamePlayed: 15,
		average: 3.8,
		present: "",
	},
	{
		id: 32,
		firstName: "Grace",
		lastName: "Liu",
		gender: "female",
		skillLevel: "intermediate",
		totalPoints: 21,
		gamePlayed: 15,
		average: 1.4,
		present: "",
	},
	{
		id: 33,
		firstName: "Kimberly",
		lastName: "Yang",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 1,
		gamePlayed: 17,
		average: 0.06,
		present: "",
	},
	{
		id: 34,
		firstName: "Chris",
		lastName: "Chow",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 55,
		gamePlayed: 16,
		average: 3.44,
		present: "",
	},
	{
		id: 35,
		firstName: "Samuel",
		lastName: "Liu",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 12,
		gamePlayed: 12,
		average: 1.0,
		present: "",
	},
	{
		id: 36,
		firstName: "Jessica",
		lastName: "Wang",
		gender: "female",
		skillLevel: "advance",
		totalPoints: 39,
		gamePlayed: 12,
		average: 3.25,
		present: "",
	},
	{
		id: 37,
		firstName: "Pat",
		lastName: "Lee",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 31,
		gamePlayed: 13,
		average: 2.38,
		present: "",
	},
	{
		id: 38,
		firstName: "Chris",
		lastName: "Liu",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 32,
		gamePlayed: 18,
		average: 1.78,
		present: "",
	},
	{
		id: 39,
		firstName: "Jesse",
		lastName: "Huang",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 35,
		gamePlayed: 17,
		average: 2.06,
		present: "",
	},
	{
		id: 40,
		firstName: "Pat",
		lastName: "Lim",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 45,
		gamePlayed: 10,
		average: 4.5,
		present: "",
	},
	{
		id: 41,
		firstName: "Leslie",
		lastName: "Wang",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 34,
		gamePlayed: 13,
		average: 2.62,
		present: "",
	},
	{
		id: 42,
		firstName: "Jung",
		lastName: "Huang",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 72,
		gamePlayed: 19,
		average: 3.79,
		present: "",
	},
	{
		id: 43,
		firstName: "Wei",
		lastName: "Lee",
		gender: "female",
		skillLevel: "intermediate",
		totalPoints: 58,
		gamePlayed: 16,
		average: 3.62,
		present: "",
	},
	{
		id: 44,
		firstName: "Yan",
		lastName: "Liu",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 24,
		gamePlayed: 14,
		average: 1.71,
		present: "",
	},
	{
		id: 45,
		firstName: "Grace",
		lastName: "Yang",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 15,
		gamePlayed: 18,
		average: 0.83,
		present: "",
	},
	{
		id: 46,
		firstName: "June",
		lastName: "Kim",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 61,
		gamePlayed: 15,
		average: 4.07,
		present: "",
	},
	{
		id: 47,
		firstName: "Liz",
		lastName: "Oh",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 38,
		gamePlayed: 19,
		average: 2.0,
		present: "",
	},
	{
		id: 48,
		firstName: "Jie",
		lastName: "Tan",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 26,
		gamePlayed: 16,
		average: 1.62,
		present: "",
	},
	{
		id: 49,
		firstName: "Kyle",
		lastName: "Ngyuen",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 13,
		gamePlayed: 16,
		average: 0.81,
		present: "",
	},
	{
		id: 50,
		firstName: "Wei",
		lastName: "Huang",
		gender: "female",
		skillLevel: "intermediate",
		totalPoints: 34,
		gamePlayed: 17,
		average: 2.0,
		present: "",
	},
	{
		id: 51,
		firstName: "Zainab",
		lastName: "Malik",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 55,
		gamePlayed: 16,
		average: 3.44,
		present: "",
	},
	{
		id: 52,
		firstName: "Omar",
		lastName: "Iqbal",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 16,
		gamePlayed: 16,
		average: 1.0,
		present: "",
	},
	{
		id: 53,
		firstName: "Hassan",
		lastName: "Malik",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 12,
		gamePlayed: 15,
		average: 0.8,
		present: "",
	},
	{
		id: 54,
		firstName: "Eman",
		lastName: "Ahmed",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 64,
		gamePlayed: 17,
		average: 3.76,
		present: "",
	},
	{
		id: 55,
		firstName: "Ahmed",
		lastName: "Malik",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 21,
		gamePlayed: 19,
		average: 1.11,
		present: "",
	},
	{
		id: 56,
		firstName: "Aisha",
		lastName: "Malik",
		gender: "female",
		skillLevel: "advance",
		totalPoints: 61,
		gamePlayed: 11,
		average: 5.55,
		present: "",
	},
	{
		id: 57,
		firstName: "Hassan",
		lastName: "Hussain",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 6,
		gamePlayed: 14,
		average: 0.43,
		present: "",
	},
	{
		id: 58,
		firstName: "Omar",
		lastName: "Rahman",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 34,
		gamePlayed: 10,
		average: 3.4,
		present: "",
	},
	{
		id: 59,
		firstName: "Omar",
		lastName: "Sheikh",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 56,
		gamePlayed: 13,
		average: 4.31,
		present: "",
	},
	{
		id: 60,
		firstName: "Zainab",
		lastName: "Rahman",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 2,
		gamePlayed: 17,
		average: 0.12,
		present: "",
	},
	{
		id: 61,
		firstName: "Keisha",
		lastName: "Smith",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 36,
		gamePlayed: 18,
		average: 2.0,
		present: "",
	},
	{
		id: 62,
		firstName: "Imani",
		lastName: "Jackson",
		gender: "female",
		skillLevel: "intermediate",
		totalPoints: 64,
		gamePlayed: 19,
		average: 3.37,
		present: "",
	},
	{
		id: 63,
		firstName: "Naomi",
		lastName: "Thomas",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 41,
		gamePlayed: 10,
		average: 4.1,
		present: "",
	},
	{
		id: 64,
		firstName: "Tyrone",
		lastName: "Brown",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 71,
		gamePlayed: 11,
		average: 6.45,
		present: "",
	},
	{
		id: 65,
		firstName: "Aaliyah",
		lastName: "Williams",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 35,
		gamePlayed: 15,
		average: 2.33,
		present: "",
	},
	{
		id: 66,
		firstName: "Isaiah",
		lastName: "Harris",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 1,
		gamePlayed: 18,
		average: 0.06,
		present: "",
	},
	{
		id: 67,
		firstName: "Makai",
		lastName: "Johnson",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 68,
		gamePlayed: 10,
		average: 6.8,
		present: "",
	},
	{
		id: 68,
		firstName: "Imani",
		lastName: "Brown",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 1,
		gamePlayed: 12,
		average: 0.08,
		present: "",
	},
	{
		id: 69,
		firstName: "Imani",
		lastName: "Davis",
		gender: "female",
		skillLevel: "advance",
		totalPoints: 60,
		gamePlayed: 17,
		average: 3.53,
		present: "",
	},
	{
		id: 70,
		firstName: "Jamal",
		lastName: "Robinson",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 20,
		gamePlayed: 13,
		average: 1.54,
		present: "",
	},
	{
		id: 71,
		firstName: "Mario",
		lastName: "Gonzalez",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 15,
		gamePlayed: 19,
		average: 0.79,
		present: "",
	},
	{
		id: 72,
		firstName: "Maria",
		lastName: "Garcia",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 50,
		gamePlayed: 11,
		average: 4.55,
		present: "",
	},
	{
		id: 73,
		firstName: "Carlos",
		lastName: "Hernandez",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 73,
		gamePlayed: 14,
		average: 5.21,
		present: "",
	},
	{
		id: 74,
		firstName: "Josie",
		lastName: "Torres",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 72,
		gamePlayed: 10,
		average: 7.2,
		present: "",
	},
	{
		id: 75,
		firstName: "Miguel",
		lastName: "Torres",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 2,
		gamePlayed: 16,
		average: 0.12,
		present: "",
	},
	{
		id: 76,
		firstName: "Carlos",
		lastName: "Ramirez",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 56,
		gamePlayed: 20,
		average: 2.8,
		present: "",
	},
	{
		id: 77,
		firstName: "Carmen",
		lastName: "Ramirez",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 65,
		gamePlayed: 10,
		average: 6.5,
		present: "",
	},
	{
		id: 78,
		firstName: "Carlos",
		lastName: "Lopez",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 34,
		gamePlayed: 18,
		average: 1.89,
		present: "",
	},
	{
		id: 79,
		firstName: "Rosa",
		lastName: "Hernandez",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 12,
		gamePlayed: 17,
		average: 0.71,
		present: "",
	},
	{
		id: 80,
		firstName: "Ana",
		lastName: "Perez",
		gender: "female",
		skillLevel: "intermediate",
		totalPoints: 60,
		gamePlayed: 17,
		average: 3.53,
		present: "",
	},
	{
		id: 81,
		firstName: "Jaclyn",
		lastName: "Smith",
		gender: "female",
		skillLevel: "advance",
		totalPoints: 62,
		gamePlayed: 12,
		average: 5.17,
		present: "",
	},
	{
		id: 82,
		firstName: "Oliver",
		lastName: "Smith",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 72,
		gamePlayed: 16,
		average: 4.5,
		present: "",
	},
	{
		id: 83,
		firstName: "Olivia",
		lastName: "Garcia",
		gender: "female",
		skillLevel: "advance",
		totalPoints: 72,
		gamePlayed: 19,
		average: 3.79,
		present: "",
	},
	{
		id: 84,
		firstName: "Ethan",
		lastName: "Smith",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 50,
		gamePlayed: 15,
		average: 3.33,
		present: "",
	},
	{
		id: 85,
		firstName: "Madison",
		lastName: "Williams",
		gender: "female",
		skillLevel: "intermediate",
		totalPoints: 8,
		gamePlayed: 14,
		average: 0.57,
		present: "",
	},
	{
		id: 86,
		firstName: "Jacob",
		lastName: "Miller",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 42,
		gamePlayed: 15,
		average: 2.8,
		present: "",
	},
	{
		id: 87,
		firstName: "Sophia",
		lastName: "Miller",
		gender: "female",
		skillLevel: "advance",
		totalPoints: 26,
		gamePlayed: 11,
		average: 2.36,
		present: "",
	},
	{
		id: 88,
		firstName: "Sophia",
		lastName: "Jones",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 34,
		gamePlayed: 19,
		average: 1.79,
		present: "",
	},
	{
		id: 89,
		firstName: "Joshua",
		lastName: "Jones",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 63,
		gamePlayed: 19,
		average: 3.32,
		present: "",
	},
	{
		id: 90,
		firstName: "Ethel",
		lastName: "Davis",
		gender: "female",
		skillLevel: "advance",
		totalPoints: 59,
		gamePlayed: 19,
		average: 3.11,
		present: "",
	},
	{
		id: 91,
		firstName: "Isabella",
		lastName: "Wilson",
		gender: "female",
		skillLevel: "advance",
		totalPoints: 34,
		gamePlayed: 17,
		average: 2.0,
		present: "",
	},
	{
		id: 92,
		firstName: "Michael",
		lastName: "Rodriguez",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 17,
		gamePlayed: 15,
		average: 1.13,
		present: "",
	},
	{
		id: 93,
		firstName: "Ethan",
		lastName: "Williams",
		gender: "male",
		skillLevel: "beginner",
		totalPoints: 32,
		gamePlayed: 20,
		average: 1.6,
		present: "",
	},
	{
		id: 94,
		firstName: "Daniel",
		lastName: "Johnson",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 31,
		gamePlayed: 11,
		average: 2.82,
		present: "",
	},
	{
		id: 95,
		firstName: "Isabella",
		lastName: "Miller",
		gender: "female",
		skillLevel: "advance",
		totalPoints: 75,
		gamePlayed: 17,
		average: 4.41,
		present: "",
	},
	{
		id: 96,
		firstName: "Madison",
		lastName: "Johnson",
		gender: "female",
		skillLevel: "intermediate",
		totalPoints: 41,
		gamePlayed: 18,
		average: 2.28,
		present: "",
	},
	{
		id: 97,
		firstName: "Joshua",
		lastName: "Brown",
		gender: "male",
		skillLevel: "intermediate",
		totalPoints: 59,
		gamePlayed: 17,
		average: 3.47,
		present: "",
	},
	{
		id: 98,
		firstName: "Emily",
		lastName: "Jones",
		gender: "female",
		skillLevel: "advance",
		totalPoints: 34,
		gamePlayed: 14,
		average: 2.43,
		present: "",
	},
	{
		id: 99,
		firstName: "Olivia",
		lastName: "Davis",
		gender: "female",
		skillLevel: "beginner",
		totalPoints: 38,
		gamePlayed: 17,
		average: 2.24,
		present: "",
	},
	{
		id: 100,
		firstName: "Daniel",
		lastName: "Smith",
		gender: "male",
		skillLevel: "advance",
		totalPoints: 62,
		gamePlayed: 14,
		average: 4.43,
		present: "",
	},

	// ... include other players in the same format
];

return (players);
}

export default PlayersArray;