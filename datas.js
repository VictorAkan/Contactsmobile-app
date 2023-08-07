const firstNames = [
    "Aaliyah", "Brianna", "Chelsea", "Dorothy", "Elizabeth", "Francesca", "Grace", "Hannah", "Isabella", "Jessica",
    "Karen", "Lisa", "Maggie", "Nancy", "Olivia", "Peter", "Quinn", "Rachel", "Stephanie", "Tina",
    "Ursula", "Victoria", "Wendy", "Xavier", "Yvonne", "Zoe", "Abigail", "Bridget", "Charles", "Diane",
    "Emily", "Fiona", "Georgia", "Henry", "Isabelle", "Jennifer", "Kate", "Linda", "Margaret", "Natalie",
    "Olivia", "Pauline", "Quincy", "Rose", "Sophia", "Tamara", "Uma", "Vivian", "William", "Ximena",
    "Yolanda", "Zachary", "Amanda", "Barbara", "Cheryl", "Danielle", "Eva", "Frances", "Gabriella", "Hannah",
    "Isabel", "Jacqueline", "Katherine", "Lena", "Lucas", "Mia", "Natalia", "Oliver", "Patricia", "Quinn",
    "Rachel", "Stephanie", "Tara", "Ursula", "Victoria", "Wendy", "Xavier", "Yvonne", "Zoe"
];

const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Wilson", "Moore", "Taylor",
    "Anderson", "Thomas", "Walker", "Olivia", "Peter", "Quinn", "Rachel", "Stephanie", "Tina",
    "Ursula", "Victoria", "Wendy", "Xavier", "Yvonne", "Zoe", "Abigail", "Bridget", "Charles", "Diane",
    "Emily", "Fiona", "Georgia", "Henry", "Isabelle", "Jennifer", "Kate", "Linda", "Margaret", "Natalie",
    "Olivia", "Pauline", "Quincy", "Rose", "Sophia", "Tamara", "Uma", "Vivian", "William", "Ximena",
    "Yolanda", "Zachary", "Amanda", "Barbara", "Cheryl", "Danielle", "Eva", "Frances", "Gabriella", "Hannah",
    "Isabel", "Jacqueline", "Katherine", "Lena", "Lucas", "Mia", "Natalia", "Oliver", "Patricia", "Quinn",
    "Rachel", "Stephanie", "Tara", "Ursula", "Victoria", "Wendy", "Xavier", "Yvonne", "Zoe"
]

const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min
// generate a name
const generateName = () => `${firstNames[rand(firstNames.length - 1)]}  ${lastNames[rand(lastNames.length - 1)]}`
// generate phone number
const generatePhoneNumber = () => `${rand(999, 100)} - ${rand(999, 100)} - ${rand(9999, 1000)}`
// generate contact
const createContact = () => ({name: generateName(), phone: generatePhoneNumber()})
// sort according to alphabetical order
export const compareNames = (contact1, contact2) => contact1.name > contact2.name
// add key to contact
const addKeyToContact = (contact, key) => ({
    key: key,
    ...contact,
})
// add keys based on index
const addKeys = (val, key) => ({key: key, ...val})
// create an array of length num_contacts and alphabetize the name
NUM_CONTACTS = 79
export default Array.from({length: NUM_CONTACTS}, createContact).map(addKeys)