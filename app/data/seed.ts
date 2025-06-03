// app/data/seed.ts
import { CreateContactInput, JobType } from '~/types/contact';
import { sql } from './db.server';

const seedData: CreateContactInput[] = [
    {
        "id": "shruti-kapoor",
        "avatar": "https://sessionize.com/image/124e-400o400o2-wHVdAuNaxi8KJrgtN3ZKci.jpg",
        "first_name": "Shruti",
        "last_name": "Kapoor",
        "twitter": "@shrutikapoor08",
        "phone": "+1234567890",
        "job": JobType.WRITER,
        "active": true,
        "email": "shruti.kapoor@example.com",
        "favorite": false
    },
    {
        "id": "glenn-reyes",
        "avatar": "https://sessionize.com/image/1940-400o400o2-Enh9dnYmrLYhJSTTPSw3MH.jpg",
        "first_name": "Glenn",
        "last_name": "Reyes",
        "twitter": "@glnnrys",
        "phone": "+1234567891",
        "job": JobType.SINGER,
        "active": true,
        "email": "glenn.reyes@example.com",
        "favorite": false
    },
    {
        "id": "ryan-florence",
        "avatar": "https://sessionize.com/image/9273-400o400o2-3tyrUE3HjsCHJLU5aUJCja.jpg",
        "first_name": "Ryan",
        "last_name": "Florence",
        "twitter": "@ryan-florence",
        "phone": "+1234567892",
        "job": JobType.ACTOR,
        "active": true,
        "email": "ryan.florence@example.com",
        "favorite": false
    },
    {
        "id": "oscar-newman",
        "avatar": "https://sessionize.com/image/d14d-400o400o2-pyB229HyFPCnUcZhHf3kWS.png",
        "first_name": "Oscar",
        "last_name": "Newman",
        "twitter": "@__oscarnewman",
        "phone": "+1234567893",
        "job": JobType.PAINTER,
        "active": true,
        "email": "oscar.newman@example.com",
        "favorite": false
    },
    {
        "id": "michael-jackson",
        "avatar": "https://sessionize.com/image/fd45-400o400o2-fw91uCdGU9hFP334dnyVCr.jpg",
        "first_name": "Michael",
        "last_name": "Jackson",
        "twitter": "@moonwalker",
        "phone": "+1234567894",
        "job": JobType.SINGER,
        "active": true,
        "email": "michael.jackson@example.com",
        "favorite": false
    },
    {
        "id": "christopher-chedeau",
        "avatar": "https://sessionize.com/image/b07e-400o400o2-KgNRF3S9sD5ZR4UsG7hG4g.jpg",
        "first_name": "Christopher",
        "last_name": "Chedeau",
        "twitter": "@Vjeux",
        "phone": "+1234567895",
        "job": JobType.PAINTER,
        "active": true,
        "email": "christopher.chedeau@example.com",
        "favorite": false
    },
    {
        "id": "cameron-matheson",
        "avatar": "https://sessionize.com/image/262f-400o400o2-UBPQueK3fayaCmsyUc1Ljf.jpg",
        "first_name": "Cameron",
        "last_name": "Matheson",
        "twitter": "@cmatheson",
        "phone": "+1234567896",
        "job": JobType.ACTOR,
        "active": true,
        "email": "cameron.matheson@example.com",
        "favorite": false
    },
    {
        "id": "brooks-lybrand",
        "avatar": "https://sessionize.com/image/820b-400o400o2-Ja1KDrBAu5NzYTPLSC3GW8.jpg",
        "first_name": "Brooks",
        "last_name": "Lybrand",
        "twitter": "@BrooksLybrand",
        "phone": "+1234567897",
        "job": JobType.WRITER,
        "active": true,
        "email": "brooks.lybrand@example.com",
        "favorite": false
    },
    {
        "id": "alex-anderson",
        "avatar": "https://sessionize.com/image/df38-400o400o2-JwbChVUj6V7DwZMc9vJEHc.jpg",
        "first_name": "Alex",
        "last_name": "Anderson",
        "twitter": "@ralex1993",
        "phone": "+1234567898",
        "job": JobType.ACTOR,
        "active": true,
        "email": "alex.anderson@example.com",
        "favorite": false
    },
    {
        "id": "kent-c-dodds",
        "avatar": "https://sessionize.com/image/5578-400o400o2-BMT43t5kd2U1XstaNnM6Ax.jpg",
        "first_name": "Kent C.",
        "last_name": "Dodds",
        "twitter": "@kentcdodds",
        "phone": "+1234567899",
        "job": JobType.WRITER,
        "active": true,
        "email": "kentc.dodds@example.com",
        "favorite": false
    },
    {
        "id": "nevi-shah",
        "avatar": "https://sessionize.com/image/c9d5-400o400o2-Sri5qnQmscaJXVB8m3VBgf.jpg",
        "first_name": "Nevi",
        "last_name": "Shah",
        "twitter": "@nevikashah",
        "phone": "+1234567800",
        "job": JobType.PAINTER,
        "active": true,
        "email": "nevi.shah@example.com",
        "favorite": false
    },
    {
        "id": "andrew-petersen",
        "avatar": "https://sessionize.com/image/2694-400o400o2-MYYTsnszbLKTzyqJV17w2q.png",
        "first_name": "Andrew",
        "last_name": "Petersen",
        "twitter": "@moonwalker2",
        "phone": "+1234567801",
        "job": JobType.ACTOR,
        "active": true,
        "email": "andrew.petersen@example.com",
        "favorite": false
    },
    {
        "id": "scott-smerchek",
        "avatar": "https://sessionize.com/image/907a-400o400o2-9TM2CCmvrw6ttmJiTw4Lz8.jpg",
        "first_name": "Scott",
        "last_name": "Smerchek",
        "twitter": "@smerchek",
        "phone": "+1234567802",
        "job": JobType.WRITER,
        "active": true,
        "email": "scott.smerchek@example.com",
        "favorite": false
    },
    {
        "id": "giovanni-benussi",
        "avatar": "https://sessionize.com/image/08be-400o400o2-WtYGFFR1ZUJHL9tKyVBNPV.jpg",
        "first_name": "Giovanni",
        "last_name": "Benussi",
        "twitter": "@giovannibenussi",
        "phone": "+1234567803",
        "job": JobType.ACTOR,
        "active": true,
        "email": "giovanni.benussi@example.com",
        "favorite": false
    },
    {
        "id": "igor-minar",
        "avatar": "https://sessionize.com/image/f814-400o400o2-n2ua5nM9qwZA2hiGdr1T7N.jpg",
        "first_name": "Igor",
        "last_name": "Minar",
        "twitter": "@IgorMinar",
        "phone": "+1234567804",
        "job": JobType.PAINTER,
        "active": true,
        "email": "igor.minar@example.com",
        "favorite": false
    },
    {
        "id": "brandon-kish",
        "avatar": "https://sessionize.com/image/fb82-400o400o2-LbvwhTVMrYLDdN3z4iEFMp.jpeg",
        "first_name": "Brandon",
        "last_name": "Kish",
        "twitter": "@moonwalker32",
        "phone": "+1234567805",
        "job": JobType.ACTOR,
        "active": true,
        "email": "brandon.kish@example.com",
        "favorite": false
    },
    {
        "id": "arisa-fukuzaki",
        "avatar": "https://sessionize.com/image/fcda-400o400o2-XiYRtKK5Dvng5AeyC8PiUA.png",
        "first_name": "Arisa",
        "last_name": "Fukuzaki",
        "twitter": "@arisa_dev",
        "phone": "+1234567806",
        "job": JobType.WRITER,
        "active": true,
        "email": "arisa.fukuzaki@example.com",
        "favorite": false
    },
    {
        "id": "alexandra-spalato",
        "avatar": "https://sessionize.com/image/c8c3-400o400o2-PR5UsgApAVEADZRixV4H8e.jpeg",
        "first_name": "Alexandra",
        "last_name": "Spalato",
        "twitter": "@alexadark",
        "phone": "+1234567807",
        "job": JobType.PAINTER,
        "active": true,
        "email": "alexandra.spalato@example.com",
        "favorite": false
    },
    {
        "id": "cat-johnson",
        "avatar": "https://sessionize.com/image/7594-400o400o2-hWtdCjbdFdLgE2vEXBJtyo.jpg",
        "first_name": "Cat",
        "last_name": "Johnson",
        "twitter": "@moonwalkeree",
        "phone": "+1234567808",
        "job": JobType.ACTOR,
        "active": true,
        "email": "cat.johnson@example.com",
        "favorite": false
    },
    {
        "id": "ashley-narcisse",
        "avatar": "https://sessionize.com/image/5636-400o400o2-TWgi8vELMFoB3hB9uPw62d.jpg",
        "first_name": "Ashley",
        "last_name": "Narcisse",
        "twitter": "@_darkfadr",
        "phone": "+1234567809",
        "job": JobType.SINGER,
        "active": true,
        "email": "ashley.narcisse@example.com",
        "favorite": false
    },
    {
        "id": "edmund-hung",
        "avatar": "https://sessionize.com/image/6aeb-400o400o2-Q5tAiuzKGgzSje9ZsK3Yu5.JPG",
        "first_name": "Edmund",
        "last_name": "Hung",
        "twitter": "@_edmundhung",
        "phone": "+1234567810",
        "job": JobType.WRITER,
        "active": true,
        "email": "edmund.hung@example.com",
        "favorite": false
    },
    {
        "id": "clifford-fajardo",
        "avatar": "https://sessionize.com/image/30f1-400o400o2-wJBdJ6sFayjKmJycYKoHSe.jpg",
        "first_name": "Clifford",
        "last_name": "Fajardo",
        "twitter": "@cliffordfajard0",
        "phone": "+1234567811",
        "job": JobType.ACTOR,
        "active": true,
        "email": "clifford.fajardo@example.com",
        "favorite": false
    },
    {
        "id": "erick-tamayo",
        "avatar": "https://sessionize.com/image/6faa-400o400o2-amseBRDkdg7wSK5tjsFDiG.jpg",
        "first_name": "Erick",
        "last_name": "Tamayo",
        "twitter": "@ericktamayo",
        "phone": "+1234567812",
        "job": JobType.PAINTER,
        "active": true,
        "email": "erick.tamayo@example.com",
        "favorite": false
    },
    {
        "id": "paul-bratslavsky",
        "avatar": "https://sessionize.com/image/feba-400o400o2-R4GE7eqegJNFf3cQ567obs.jpg",
        "first_name": "Paul",
        "last_name": "Bratslavsky",
        "twitter": "@codingthirty",
        "phone": "+1234567813",
        "job": JobType.WRITER,
        "active": true,
        "email": "paul.bratslavsky@example.com",
        "favorite": false
    },
    {
        "id": "pedro-cattori",
        "avatar": "https://sessionize.com/image/c315-400o400o2-spjM5A6VVfVNnQsuwvX3DY.jpg",
        "first_name": "Pedro",
        "last_name": "Cattori",
        "twitter": "@pcattori",
        "phone": "+1234567814",
        "job": JobType.ACTOR,
        "active": true,
        "email": "pedro.cattori@example.com",
        "favorite": false
    },
    {
        "id": "andre-landgraf",
        "avatar": "https://sessionize.com/image/eec1-400o400o2-HkvWKLFqecmFxLwqR9KMRw.jpg",
        "first_name": "Andre",
        "last_name": "Landgraf",
        "twitter": "@AndreLandgraf94",
        "phone": "+1234567815",
        "job": JobType.PAINTER,
        "active": true,
        "email": "andre.landgraf@example.com",
        "favorite": false
    },
    {
        "id": "monica-powell",
        "avatar": "https://sessionize.com/image/c73a-400o400o2-4MTaTq6ftC15hqwtqUJmTC.jpg",
        "first_name": "Monica",
        "last_name": "Powell",
        "twitter": "@indigitalcolor",
        "phone": "+1234567816",
        "job": JobType.WRITER,
        "active": true,
        "email": "monica.powell@example.com",
        "favorite": false
    },
    {
        "id": "brian-lee",
        "avatar": "https://sessionize.com/image/cef7-400o400o2-KBZUydbjfkfGACQmjbHEvX.jpeg",
        "first_name": "Brian",
        "last_name": "Lee",
        "twitter": "@brian_dlee",
        "phone": "+1234567817",
        "job": JobType.ACTOR,
        "active": true,
        "email": "brian.lee@example.com",
        "favorite": false
    },
    {
        "id": "sean-mcquaid",
        "avatar": "https://sessionize.com/image/f83b-400o400o2-Pyw3chmeHMxGsNoj3nQmWU.jpg",
        "first_name": "Sean",
        "last_name": "McQuaid",
        "twitter": "@SeanMcQuaidCode",
        "phone": "+1234567818",
        "job": JobType.PAINTER,
        "active": true,
        "email": "sean.mcquaid@example.com",
        "favorite": false
    },
    {
        "id": "shane-walker",
        "avatar": "https://sessionize.com/image/a9fc-400o400o2-JHBnWZRoxp7QX74Hdac7AZ.jpg",
        "first_name": "Shane",
        "last_name": "Walker",
        "twitter": "@swalker326",
        "phone": "+1234567819",
        "job": JobType.WRITER,
        "active": true,
        "email": "shane.walker@example.com",
        "favorite": false
    },
    {
        "id": "jon-jensen",
        "avatar": "https://sessionize.com/image/6644-400o400o2-aHnGHb5Pdu3D32MbfrnQbj.jpg",
        "first_name": "Jon",
        "last_name": "Jensen",
        "twitter": "@jenseng",
        "phone": "+1234567820",
        "job": JobType.ACTOR,
        "active": true,
        "email": "jon.jensen@example.com",
        "favorite": false
    }
];

export async function seedDatabase(): Promise<void> {
    try {
        console.log('Starting database seed...');

        // Clear existing data (optional - remove if you want to keep existing data)
        await sql`DELETE FROM contacts`;

        // Insert seed data
        for (const contact of seedData) {
            await sql`
        INSERT INTO contacts (
          id, first_name, last_name, avatar, twitter, notes, 
          favorite, email, phone, job, active
        ) VALUES (
          ${contact.id}, 
          ${contact.first_name}, 
          ${contact.last_name}, 
          ${contact.avatar || null}, 
          ${contact.twitter || null}, 
          ${contact.notes || null}, 
          ${contact.favorite || false}, 
          ${contact.email || null}, 
          ${contact.phone || null}, 
          ${contact.job || null}, 
          ${contact.active ?? true}
        )
        ON CONFLICT (id) DO NOTHING
      `;
        }

        console.log(`Seeded ${seedData.length} contacts successfully!`);
    } catch (error) {
        console.error('Error seeding database:', error);
        throw error;
    }
}

// ESM equivalent of require.main === module
seedDatabase()
    .then(() => {
        console.log('Seeding completed!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Seeding failed:', error);
        process.exit(1);
    });